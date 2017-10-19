var BASE_URL = 'http://c.zhiboyun.com';
var service_code = null;
var api_key = null;
var drawing = false;
var rectSelf = null;
var oRect = null;
var draw_btn = null;
var start_audio_btn = null;
var stop_audio_btn = null;
var rtmpPusher=null;
/**
 * 默认放大的倍数
 */
var step = 3;

var id_hide_timeout = null;

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

function Rect() {
	this.doc = $('#video_parent_div');
	if(!this.doc) return;
	this.startX = '';
	this.startY = '';
	this.width = '';
	this.height = '';
	rectSelf = this;
}
/**
 * 鼠标按下
 * @param {Object} e
 */
Rect.prototype.down = function(e) {
	var e = e ? e : window.event;
	console.info(e)
	rectSelf.startX = e.pageX ? e.pageX : e.clientX + document.documentElement.scrollLeft || document.body.scrollLeft;
	rectSelf.startY = e.pageY ? e.pageY : e.clientY + document.documentElement.scrollTop + document.body.scrollTop;
	rectSelf.showRect(true);
	drawing = true
}
/**
 * 鼠标放起
 * @param {Object} e
 */
Rect.prototype.up = function(e) {
	drawing = false;
	rectSelf.showRect(true);
	let width = v_width;
	let height = v_height;
	let pos = $("#video_parent_div").offset();
	let pos2 = $("#remote_video").offset();
	let p_left = (rectSelf.startX - pos.left) / width;
	let p_top = (rectSelf.startY - pos.top) / height;
	let p_width = rectSelf.width / width;
	let p_height = rectSelf.height / height;
	var msg = '{"cmd": "draw_rect", "params": [' + p_left + ',' + p_top + ',' + p_width + ',' + p_height + ']}'
	send_msg(msg)
	if(id_hide_timeout) {
		clearTimeout(id_hide_timeout);
	}
	id_hide_timeout = setTimeout(function() {
		rectSelf.showRect(false);
	}, 5000);
}

Rect.prototype.move = function(e) {
	if(!drawing) return;
	if(rectSelf.rectBox) {
		var currentX = e.pageX ? e.pageX : e.clientX + document.documentElement.scrollLeft || document.body.scrollLeft;
		var currentY = e.pageY ? e.pageY : e.clientY + document.documentElement.scrollTop + document.body.scrollTop;
		rectSelf.width = Math.abs(currentX - rectSelf.startX);
		rectSelf.rectBox.style.width = rectSelf.width + 'px';
		rectSelf.height = Math.abs(currentY - rectSelf.startY);
		rectSelf.rectBox.style.height = rectSelf.height + 'px';
		if(currentX - rectSelf.startX < 0) {
			rectSelf.rectBox.style.left = currentX + 'px';
		}
		if(currentY - rectSelf.startY < 0) {
			rectSelf.rectBox.style.top = currentY + 'px';
		}
	}
}

Rect.prototype.showRect = function(bool) {
	if(bool) {
		if(!this.rectBox) {
			this.rectBox = document.createElement("div");
			this.rectBox.id = "rectBox";
			document.body.appendChild(this.rectBox);
		}
		this.rectBox.style.display = "block";
		this.rectBox.style.left = this.startX + 'px';
		this.rectBox.style.top = this.startY + 'px';
		this.addEventListener(this.doc, 'mousemove', this.move);
		console.info(this)
	} else {
		if(this.rectBox) {
			this.rectBox.style.display = "none";
		}
		this.removeEventListener(this.doc, 'mousemove', this.move);
	}
}

Rect.prototype.addEventListener = function(o, e, l) {
	if(o.addEventListener) {
		o.addEventListener(e, l, false);
	} else if(o.attachEvent) {
		o.attachEvent('on' + e, function() {
			l(window.event);
		});
	}
}

Rect.prototype.removeEventListener = function(o, e, l) {
	if(o.removeEventListener) {
		o.removeEventListener(e, l, false);
	} else if(o.detachEvent) {
		o.detachEvent('on' + e, function() {
			l(window.event);
		});
	}
}

/******************************远程协助主要的参数******************************/

//基本参数 播放器
var parameters = {
	src: "",
	autoPlay: "true",
	verbose: true,
	controlBarAutoHide: "true",
	controlBarPosition: "bottom",
	poster: "js/player/img/poster.png",
	plugin_hls: "js/player/swf/wmp_plugin_hls.swf"
}
//加载页面

function initPage() {
	parameters.src = remote_url;
	swfobject.embedSWF(
		"js/player/swf/woan_wmp.swf",
		'remote_video',
		v_width,
		v_height,
		"10.1.0",
		"js/player/swf/expressInstall.swf",
		parameters, {
			allowFullScreen: "true",
			wmode: "opaque"
		}, {
			name: 'remote_video'
		}
	);

	service_code = sessionStorage.getItem("service_code");
	api_key = sessionStorage.getItem("api_key")
}

/**
 * 发文字
 */
function send_txt_msg() {
	let msg = $("#msg_text").textbox('getValue')
	if(msg) {
		msg = '{"cmd":"show_msg", "params": ["' + msg + '"]}';
		send_msg(msg)
	} else {
		$.messager.alert('<span class="easyui-alert-title"><i class="iconfont">&#xe61c</i> 系统提示<span>', '<div class="msg_alert_ok">请输入文字内容</div>', 'warning');
		return;
	}
}
//发送消息
function send_msg(msg) {
	let uri = "/api/20140928/send_txt_msg";
	let query_str = 'service_code=' + service_code + "&dst_username=" + dist_name;
	query_str += "&message=" + msg;
	query_str += "&from_username=" + 'admin';
	query_str += "&dst_service_code=" + dst_service_code;
	let now = new Date().getTime().toString();
	let signature = make_signature(uri, query_str, now, api_key).toString();
	$.ajax({
		type: "GET",
		url: BASE_URL + uri + '?' + query_str,
		headers: {
			"xvs-timestamp": now,
			"xvs-signature": signature
		},
		dataType: "json",
		crossDomain: true,
		success: function(data) {
			if(data.ret == 0) {
				$.messager.show({
					title: '系统提示',
					msg: '操作成功。',
					timeout: 2000,
					showType: 'slide'
				});
			} else {
				alert('send message fail, ret: ' + JSON.stringify(data));
			}
		}
	});
};

/**
 * 打开闪光灯
 */
function open_flash() {
	var msg = "{'cmd': 'open_flash'}";
	send_msg(msg);
	$("#btn_close_flash_div").show();
	$("#btn_open_flash_div").hide()

}
/**
 * 关闭闪光灯
 */
function close_flash() {
	var msg = "{'cmd': 'close_flash'}";
	send_msg(msg);
	$("#btn_close_flash_div").hide();
	$("#btn_open_flash_div").show()
}

/**
 * 放大
 */
function zoom_in() {
	let msg = '{"cmd": "zoom_in", "params": [' + step + ']}';
	send_msg(msg);
}

/**
 * 缩小
 */
function zoom_out() {
	let msg = '{"cmd": "zoom_out", "params": [' + step + ']}';
	send_msg(msg);
}

/**
 * 拍照
 */
function take_picture() {
	let msg = "{'cmd': 'take_picture', 'params': [1280, 720]}";
	send_msg(msg);
}
/**
 * 画线
 * @param {Object} obj
 */
function draw_line(obj) {
	draw_btn = $(obj).linkbutton({
		text: '<font style="color:red">正在画线</font>'
	});
	draw_btn.linkbutton('disable');
	drawing = true;
	var mouse_wheel_delta_y = 0;
	var mouse_whell_time_out = null;
	$('#video_parent_div').mousewheel(function(event) {
		mouse_wheel_delta_y += event.deltaY;
		if(mouse_whell_time_out) {
			clearTimeout(mouse_whell_time_out);
		}
		mouse_whell_time_out = setTimeout(function() {
			console.log("zoom:" + mouse_wheel_delta_y);
			var msg;
			if(mouse_wheel_delta_y > 0) {
				var msg = '{"cmd": "zoom_in", "params": [' + mouse_wheel_delta_y + ']}';
			} else {
				var msg = '{"cmd": "zoom_out", "params": [' + Math.abs(mouse_wheel_delta_y) + ']}';
			}
			send_txt_msg(msg);
			mouse_wheel_delta_y = 0;
		}, 1000);
		event.preventDefault();
	});
	oRect = new Rect();
	oRect.addEventListener(oRect.doc[0], 'mousedown', oRect.down);
	oRect.addEventListener(oRect.doc[0], 'mouseup', oRect.up)
	oRect.addEventListener(oRect.doc[0], 'mousemove', oRect.move)
	//insert_stop_btn()
	$(obj).parent().hide();
	$("#stop_draw_line_btn_div").show()
}

/**
 * 停止画线
 * 
 */
function stop_draw_line(obj) {
	drawing = false;
	$(obj).parent().hide();
	$("#draw_line_btn_div").show();
	draw_btn.linkbutton({
		text: '远程画线'
	});
	draw_btn.linkbutton('enable');
	rectSelf.showRect(false);
	if(oRect) {
		oRect.removeEventListener(oRect.doc[0], 'mousedown', oRect.down);
		oRect.removeEventListener(oRect.doc[0], 'mouseup', oRect.up)
		oRect.removeEventListener(oRect.doc[0], 'mousemove', oRect.move)
	}
	oRect = null;
}
/******************************************************************************/

//获取直播列表 判断当前视频是否结束。如果结束。则清空 播放页 
function check_video_status() {
	var param_str = 'service_code=' + service_code;
	var uri = '/api/20140928/task_list';
	var now = new Date().getTime();
	var signature = make_signature(uri, param_str, now, api_key);
	uri = BASE_URL + uri;
	let taskIds = [];
	$.ajax({
		type: "GET",
		url: uri + (param_str ? "?" : "") + param_str,
		headers: {
			"xvs-timestamp": now,
			"xvs-signature": signature
		},
		dataType: "json",
		crossDomain: true,
		success: function(data) {
			console.info(data)
			var videos = data.task_list;
			if(videos.length > 0) {
				for(let i = 0; i < videos.length; i++) {
					taskIds.push(videos[i].id)
				}
				if(taskIds.indexOf(remote_task_id) == -1) {
					setTimeout(closeCurrentPage, 1000)
					$.messager.alert('<span class="easyui-alert-title"><i class="iconfont">&#xe61c</i> 系统提示<span>', '<div class="msg_alert_ok">该视频已结束</div>', 'info');
				}
			} else {
				setTimeout(closeCurrentPage, 1000)
				$.messager.alert('<span class="easyui-alert-title"><i class="iconfont">&#xe61c</i> 系统提示<span>', '<div class="msg_alert_ok">该视频已结束</div>', 'info');
			}
		},
		error: function(err, exception) {
			setTimeout(closeCurrentPage, 1000)
			$.messager.alert('<span class="easyui-alert-title"><i class="iconfont">&#xe61c</i> 系统提示<span>', '<div class="msg_alert_ok">调用api 失败</div>', 'info');
			console.info("调用api 失败。错误信息： 。。" + JSON.stringify(err))

		}
	});
}

/**************************以下是语音通话***********************************************************/
//初始化语音采集
function init_audio() {
	start_audio_btn = $("#start_audio").linkbutton({
		'iconCls': 'icon-albb-yuyin',
		'disabled':false,
		'text': '发起语音通话'
	});
	//$("#stop_audio").hide();
	stop_audio_btn = $("#stop_audio").linkbutton({
		'iconCls': 'icon-albb-stop',
		'disabled':true,
		'text': '停止语音通话'
	});
	swfobject.embedSWF(
		"js/player/swf/RtmpPublisher.swf",
		"rtmp_publisher",
		"200",
		"70",
		"9.0.0",
		null,
		flashVars,
		null,
		null,
		onSwfInited
	);
}


var flashVars = {
	width: 200,
	height: 70,
	fps: 20,
	file: '1',
	/*
	 以下两行为初始化是否禁用音频或视频，如果这里不设置，
	 后面可以通过disableVideo(true/false)来动态设置
	*/
	disable_video: true,
	/*只有'true'才禁用，其他任何值都是false, 此行省略就是false*/
	disable_audio: false,
	/*只有'true'才禁用，其他任何值都是false, 此行省略就是false*/
	on_inited: onSwfInited
};

function onSwfInited() {
	console.info("语音插件加载成功。。。。")

}

function onSwfLoaded() {
	console.info("loaded...")
};







function start_audio(){
	rtmpPusher = document.getElementById("rtmp_publisher")
	console.info(rtmpPusher);
	var opaque={"player_user":dist_name}
	rtmpPusher.start("rtmp://xvs-tcp-input.zhiboyun.com/live", "admin", "admin", service_code, "", JSON.stringify(opaque));
	/*if(rtmpPusher.isPublishing()) {
		start_audio_btn.linkbutton({
			'iconCls': 'icon-albb-yuyin',
			'text': '发起语音通话'
		});
		rtmpPusher.stopPublish();
		console.info("正在通话")
		
	} else {
		
		//rtmp.startPublish();
	}*/
}



function rtmpOnConnected() {
	console.log("rtmp connect ok");
	
}

function loseConnection() {}

function rtmpOnStartPublish() {
	console.log("rtmp start publish");
	start_audio_btn.linkbutton({
		'iconCls': 'icon-albb-yuyin-ing',
		'disabled':true,
		'text': '正在语音通话中'
	});
	stop_audio_btn.linkbutton({
		'disabled':false
	})
}

function rtmpOnStopPublish() {
	console.log("rtmp stop publish");
	stop_audio_btn.linkbutton({
		'disabled':true
	})
}

function rtmpOnConnectFail() {
	console.log("rtmp connect fail");
}

function rtmpOnConnectClosed() {
	console.log("rtmp stop close");
	start_audio_btn.linkbutton({
		'iconCls': 'icon-albb-yuyin',
		'disabled':false,
		'text': '发起语音通话中'
	});
	stop_audio_btn.linkbutton({
		'disabled':true
	})
 	rtmpPusher.stopPublish();
	rtmpPusher.disconnect();
}

function rtmpOnConnectRejected() {
	console.log("rtmp connect rejected");
	//loseConnection();
}

/*
function loseConnection() {
	console.log("rtmp loseConnection ");
	//document.getElementById("btn_live_audio").disabled = true;
	//document.getElementById("btn_live_audio").value = "开始语音通话";
	//connectRtmp();
}

function rtmpOnStartPublish() {
	console.info("已开始。。。推送")
	audio_btn.linkbutton({
			'iconCls':'icon-albb-yuyin-ing',
			'text':'停止语音通话'
	});
	//document.getElementById("btn_live_audio").value = "停止语音通话";
	//$("#btn_live_audio").attr('class', 'btn btn-small btn-inverse');
}

function rtmpOnStopPublish() {
	console.log("rtmp stop publish");
	//document.getElementById("btn_live_audio").value = "开始语音通话";
	audio_btn.linkbutton({
			'iconCls':'icon-albb-yuyin',
			'text':'发起语音通话'
	});
}

function rtmpOnConnectFail() {
	console.log("rtmp connect fail");
	audio_btn.linkbutton({
			'iconCls':'icon-albb-yuyin',
			'text':'发起语音通话'
	});
}

function rtmpOnConnectClosed() {
	console.log("rtmp connect close");
	audio_btn.linkbutton({
			'iconCls':'icon-albb-yuyin',
			'text':'发起语音通话'
	});
}

function rtmpOnConnectRejected() {
	console.log("rtmp connect rejected");
	
}
*/

/*关闭当前页面*/

function closeCurrentPage() {
	window.close()
}