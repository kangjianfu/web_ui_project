 function onSwfInited() {
        var rtmp = document.getElementById("rtmp_publisher");  
        if (rtmp.isDisableVideo()) {
          $("#disable_video").attr("checked", true);
        } else {
          $("#disable_video").attr("checked", false);
        }
        if (rtmp.isDisableAudio()) {
          $("#disable_audio").attr("checked", true);
        } else {
          $("#disable_audio").attr("checked", false);
        }
      }

      var flashVars = {
        width: 640,
        height: 480,
        fps: 20,
        file:'1',
        /*
         以下两行为初始化是否禁用音频或视频，如果这里不设置，
         后面可以通过disableVideo(true/false)来动态设置
        */
        disable_video: 'false', /*只有'true'才禁用，其他任何值都是false, 此行省略就是false*/
        disable_audio: 'false', /*只有'true'才禁用，其他任何值都是false, 此行省略就是false*/
        on_inited: onSwfInited
      };

      function onSwfLoaded() {
      };

      document.addEventListener("DOMContentLoaded", function(event) { 
        swfobject.embedSWF("RtmpPublisher.swf", "rtmp_publisher", "640", "480", "9.0.0", null, flashVars, null, null, onSwfLoaded);
      });

      $(document).ready(function() {
        $("#disable_video").change(function() {
          var rtmp = document.getElementById("rtmp_publisher");  
          rtmp.disableVideo($(this).prop("checked"));
        });

        $("#disable_audio").change(function() {
          var rtmp = document.getElementById("rtmp_publisher");  
          rtmp.disableAudio($(this).prop("checked"));
        });

      });

      function connect(call_start) {
        var rtmp = document.getElementById("rtmp_publisher");  
        console.info(call_start)
        if (rtmp.isPublishing()) {
        	console.info("is pushing")
          rtmp.disconnect();
          $('#btn').text('开始');
        } else {
        	console.info("no pushing")
          var streamer = $('#streamer').val();
          if ('' == streamer) {
            alert('请输入推流地址');
            return;
          }
          var user_name = $('#user_name').val();
          if ('' == user_name) {
            alert('请输入用户名');
            return;
          }
          var password = $('#password').val();
          if ('' == user_name) {
            alert('请输入密码');
            return;
          }
          var service_code = $('#service_code').val();
          if ('' == service_code) {
            alert('请输入服务码');
            return;
          }
          var output_tags = $('#output_tags').val();
          var opaque = $('#opaque').val();
          
          console.info(output_tags)
          if (call_start) {
          	
            rtmp.start(streamer, user_name, password, service_code, output_tags, opaque);
          } else {
            rtmp.connect(streamer, user_name, password, service_code, output_tags, opaque);
          }
        }
      }

      function startPublish() {
        var rtmp = document.getElementById("rtmp_publisher");  
        rtmp.startPublish();
      }

      function stopPublish() {
        var rtmp = document.getElementById("rtmp_publisher");  
        rtmp.stopPublish();
      }

      function closeRtmp() {
        var rtmp = document.getElementById("rtmp_publisher");  
        rtmp.disconnect();
      }

      function rtmpOnConnected() {
        console.log("rtmp connect ok");
        document.getElementById("btn_connect_start").disabled = true;
        document.getElementById("btn_connect").disabled = true;
        document.getElementById("btn_start").disabled = false;
        document.getElementById("btn_stop").disabled = true;
        document.getElementById("btn_close").disabled = false;
      }

      function loseConnection() {
        document.getElementById("btn_connect_start").disabled = false;
        document.getElementById("btn_connect").disabled = false;
        document.getElementById("btn_start").disabled = true;
        document.getElementById("btn_stop").disabled = true;
        document.getElementById("btn_close").disabled = true;
      }

      function rtmpOnStartPublish() {
        console.log("rtmp start publish");
        document.getElementById("btn_start").disabled = true;
        document.getElementById("btn_stop").disabled = false;
      }

      function rtmpOnStopPublish() {
        console.log("rtmp stop publish");
        document.getElementById("btn_start").disabled = false;
        document.getElementById("btn_stop").disabled = true;
      }

      function rtmpOnConnectFail() {
        console.log("rtmp connect fail");
        loseConnection();
      }

      function rtmpOnConnectClosed() {
        console.log("rtmp connect close");
        loseConnection();
      }

      function rtmpOnConnectRejected() {
        console.log("rtmp connect rejected");
        loseConnection();
      }
