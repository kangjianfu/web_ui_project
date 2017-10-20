/**
 * author kangjf
 * time:2017-09-29
 * 
 */

//基本参数
var parameters = {
	    src: "",
	    autoPlay: "false",
	    verbose: true,
	    controlBarAutoHide: "true",
	    controlBarPosition: "bottom",
	    poster: "js/player/img/poster.png",
	    plugin_hls: "js/player/swf/wmp_plugin_hls.swf"
	}

var BASE_URL = 'http://c.zhiboyun.com';
var dst_user_name = null;
var dst_service_code = '';
var vs_id = '';
//当前在线直播id
var current_online_task_ids=[];
//之前在线 直播id
var old_online_task_ids=[];
/**
* 时间对象的格式化;
*/
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
		// millisecond
	}

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4
		- RegExp.$1.length));
	}

	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1
				? o[k]
				: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}

/**
 * 获取task_list
 */




 function call_api(api, param_str, on_success) {
	var uri = '/api/20140928/' + api;
	var now = new Date().getTime();
	var signature = make_signature(uri, param_str, now, API_KEY);
	uri = BASE_URL + uri;
	$.ajax({
		type: "GET",
		url: uri + (param_str? "?" : "") + param_str,
		headers: {"xvs-timestamp" : now, "xvs-signature": signature},
		dataType: "json",
		crossDomain: true,
		success: function(data){
			console.info(data)
		},
		error: function(err, exception) {
				alert('调用API失败, 错误信息: ' + JSON.stringify(err));
			console.info("调用api 失败。错误信息： 。。"+JSON.stringify(err))
			
		}
	});
  }
//获取直播列表
function task_list(){
	var param_str = 'service_code='+service_code;
	var uri = '/api/20140928/task_list';
	var now = new Date().getTime();
	var signature = make_signature(uri, param_str, now, api_key);
	uri = BASE_URL + uri;
	$.ajax({
		type: "GET",
		url: uri + (param_str? "?" : "") + param_str,
		headers: {"xvs-timestamp" : now, "xvs-signature": signature},
		dataType: "json",
		crossDomain: true,
		success: function(data){
			let videos = data.task_list;
			let current_online_task_ids=[];
			if(videos.length > 0) {
				$("#no_videos_tip").remove();
				for(let i = 0; i < videos.length; i++) {
					current_online_task_ids.push(videos[i].id);
					//判断当前任务是否已经存在
					let isExist=old_online_task_ids.indexOf(videos[i].id);
					//如果不存在
					if(isExist<0){
						old_online_task_ids.push(videos[i].id);
						let vidoInfo = getVideoInfo(videos[i])
						vidoInfo.user_name = videos[i].inputs[0].user_name
						init_player_div(vidoInfo)
					}
				}
				if(old_online_task_ids.length==0 && current_online_task_ids.length!=0){
					old_online_task_ids=current_online_task_ids.slice();
				}else{
					//获取两个数组的差集合
					let diff=current_online_task_ids.concat(old_online_task_ids).filter(function(v){
						return current_online_task_ids.indexOf(v)===-1 || old_online_task_ids.indexOf(v)===-1
					})
					diff.forEach(function(item){
						$("#"+item+"_parent").parent().remove()		
					})
				}
				
			} else {
				$("#live_video_container").empty();
				old_online_task_ids=[];
				
				$("#live_video_container").append('<div  id="no_videos_tip"> 暂无直播</div>')
			}
			
		},
		error: function(err, exception) {
			alert('调用API失败, 错误信息: ' + JSON.stringify(err));
			console.info("调用api 失败。错误信息： 。。"+JSON.stringify(err))
			
		}
	});
}
/*认证服务码和前面没密钥*/
function check_login(service_code,api_key,login_dialog){
	var param_str = 'service_code='+service_code;
	var uri = '/api/20140928/task_list';
	var now = new Date().getTime();
	var signature = make_signature(uri, param_str, now, api_key);
	uri = BASE_URL + uri;
	$.ajax({
		type: "GET",
		url: uri + (param_str? "?" : "") + param_str,
		headers: {"xvs-timestamp" : now, "xvs-signature": signature},
		dataType: "json",
		crossDomain: true,
		success: function(data){
			if(data.ret==0){
				login_dialog.dialog('destroy')
				$.messager.show({
					title: '系统提示',
					msg: '认证成功',
					timeout: 2000,
					showType: 'slide'
				});
				task_list();
				setInterval(task_list,2000);
				return true;
			}else{
				//重新打开登录框
				//login_div.dialog('open')
				sessionStorage.clear()
				$("#login_msg").text("服务码或者签名密钥不正确");
				return false;
			}
			
		},
		error: function(err, exception) {
			alert('调用API失败, 错误信息: ' + JSON.stringify(err));
			console.info("调用api 失败。错误信息： 。。"+JSON.stringify(err))
			
		}
	});
}

function make_signature(uri, query_string, now, key) {
	var data = uri + query_string + now;
	return CryptoJS.HmacSHA256(data, key);
}

//处理所有视频
function getVideoInfo(info){
	let video = {};
	//输入流量
	video.input_bytes = info.input_bytes;
	video.id=info.id;
	video.output_count=info.outputs.length;
	let outputs = info.outputs;
	for(let t = 0; t < outputs.length;t++) {
		let format=outputs[t].format;
		if(format.indexOf('rtmp')>-1){
			let file_name=outputs[t].file_name;
			let width=outputs[t].width;
			let height=outputs[t].height;
			let live_url=outputs[t].live_url;
			video.url=live_url;
			video.height=height;
			video.width=width;
			video.file_name=file_name;
			video.format=format;
		}else{
			continue;
		}
		
	}
	return video;
}



//序列化播放页
var init_player_div=function(data){
		if(data.width==0){
			return;
		}
		var panel_width=parseInt(data.width)+10
		var panel_height=parseInt(data.height)+35
		var v_width=data.width || 320;
		var v_height=data.height || 240;
		var player_div_id=data.id+"_parent"
		var player_div="<div id='"+player_div_id+"' style='width:"+panel_width+"px;height:"+panel_height+"px;background-color:black;padding:2px 3px 2px 3px;'><div class='video' data-url='"+data.url+"' id='"+data.id+"' data-width='"+v_width+"' data-height='"+v_height+"'></div></div>"
		var player_div_footer="<div id='"+data.id+"_footer' class='video_footer'><div class='user'><i class='iconfont'>&#xe63e</i> "+data.user_name+"</div><div class='stop'><span onclick='stop(this)' data-id='"+data.id+"' ><i class='iconfont'>&#xe661</i> 强制停止</span></div><div class='more' onclick='remote(this)' data-name='"+data.user_name+"' data-id='"+data.id+"' data-url='"+data.url+"' data-width='"+v_width+"' data-height='"+v_height+"'><i class='iconfont'>&#xe635</i> 更多操作</div></div>"
		$("#live_video_container").append(player_div);
		$("#live_video_container").append(player_div_footer);
		//序列化panel
		$("#"+data.id).parent().panel({    
			  title: data.author, 
			  noheader:true,
			  footer:'#'+data.id+"_footer",
			  onOpen:function(){
				  parameters.src=$("#"+data.id).attr("data-url")
					var div_id=$("#"+data.id).attr("id");
					swfobject.embedSWF(
							"js/player/swf/woan_wmp.swf",
					        div_id,
					        v_width,
					        v_height,
					        "10.1.0",
					        "js/player/swf/expressInstall.swf",
					        parameters,
					        {
						        allowFullScreen: "true",
						        wmode: "opaque"
					        },
					        { name:  div_id}
					    );
			  }
			});  
	
}

function stop(obj){
	let task_id=$(obj).attr('data-id');
	$.messager.confirm('<span class="easyui-confirm-title"><i class="iconfont">&#xe6fe</i> 系统确认<span>', '<div class="easyui_confim">您确认强制停止直播吗？</div>', function(r) {
		if(r) {
			cancel_task(task_id)
			//$.messager.alert('<span class="easyui-alert-title"><i class="iconfont">&#xe61c</i> 系统提示<span>', '<div class="msg_alert_ok">ccc</div>', 'warning');
		}
	});
}


//取消视频
function cancel_task(task_id) {
	var param_str = 'service_code=' + service_code + '&task_id=' + task_id;
	var uri = '/api/20140928/cancel_task';
	var now = new Date().getTime();
	var signature = make_signature(uri, param_str, now, api_key);
	uri = BASE_URL + uri;
	$.ajax({
		type: "GET",
		url: uri + (param_str? "?" : "") + param_str,
		headers: {"xvs-timestamp" : now, "xvs-signature": signature},
		dataType: "json",
		crossDomain: true,
		success: function(data){
			if(data.ret==0){
				$.messager.alert('<span class="easyui-alert-title"><i class="iconfont">&#xe61c</i> 系统提示<span>','<div class="msg_alert_ok">任务取消成功</div>','info');
			}else{
				$.messager.alert('<span class="easyui-alert-title"><i class="iconfont">&#xe61c</i> 系统提示<span>','<div class="msg_alert_ok">任务取消失败</div>','info');
			}
			
		},
		error: function(err, exception) {
				//alert('调用API失败, 错误信息: ' + JSON.stringify(err));
			console.info("调用api 失败。错误信息： 。。"+JSON.stringify(err))
			
		}
	});
}

/**
 * 远程操作
 */
function remote(obj){
	let user_name=$(obj).attr('data-name');
	let live_url=$(obj).attr('data-url');
	let task_id=$(obj).attr('data-id');
	let v_height=$(obj).attr('data-height');
	let v_width=$(obj).attr('data-width');
	sessionStorage.setItem("remote_url",live_url);
	sessionStorage.setItem("remote_task_id",task_id);
	sessionStorage.setItem("dist_name",user_name);
	sessionStorage.setItem("v_height",v_height);
	sessionStorage.setItem("v_width",v_width);
	window.open('remote.html')
}
