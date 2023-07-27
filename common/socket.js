import * as common from './common.js'
//引入参数操作
import {
	pingInterval,
	timeout
} from './config.js'

import {
	webSocket
	} from '@/siteinfo.js'


var test = 'ok'
var state = 'fail'
var time = 0;

function connect() {
	let newTime = new Date().getTime() - time;
	// 时间超过30秒未沟通允许重启
	if (state != 'connect') {
		uni.connectSocket({
			url: webSocket,
			success: (res) => {			
				if (uni.getStorageSync('user_id'))
				{	
					setTimeout(() => {
					bind()	
					}, 1000);
				}
			
			},
			fail: (res) => {
				console.log('连接失败', res)
			},
		});
		uni.onSocketOpen(res => {
			state = 'connect';
			console.log('监听连接', res);
			if (pingInterval) {
				ping();
			}
			time = new Date().getTime();
			uni.$emit('socketOpen')
		});
		uni.onSocketError(res => {
			state = 'fail'
			uni.$emit('socketError')
			console.log('WebSocket连接打开失败！', res);

		});
		uni.onSocketMessage(res => {
		//	console.log('收到服务器内容：' + res.data);
			let data = JSON.parse(res.data)
			uni.$emit('listMessage',data)
			uni.$emit('talkMessage',data)	
					
			if (data.toid==uni.getStorageSync('user_id')){
				uni.$emit('index',data)	
			}		
			if (data.id==uni.getStorageSync('user_id')){
				uni.$emit('index',data)	
			}			
					
		});
	} else {
		console.log('WebSocket正常状态无需重连')
	}

}


function bind() {
	let msg = {
		'type': 'bind',
		'fromid': uni.getStorageSync('user_id')
	};
	uni.sendSocketMessage({
		data: JSON.stringify(msg),
		success: (res) => {
			console.log('会员绑定聊天服务器成功，id为' + uni.getStorageSync('user_id'), res)
		},
		fail: (res) => {
			//console.log('绑定会员id失败'+uni.getStorageSync('user_id'), res)
		}
	});

}

function loginout() {
	let msg = {
		'type': 'bind',
		'fromid':0
	};
	uni.sendSocketMessage({
		data: JSON.stringify(msg),
		success: (res) => {
			console.log('退出登陆，解除绑定会员', res)
		},
		fail: (res) => {
			
		}
	});

}






function ping() {
	uni.sendSocketMessage({
		data: JSON.stringify({
			type: 'ping'
		}),
		fail: (res) => {
			connect()
			console.log('心跳失败，重新连接')
		}
		
	});
	setTimeout(() => {
		if (state == 'connect') {
			ping();
		}
	}, pingInterval * 1000);
}


function send(body) {
	uni.sendSocketMessage({
				data: body,
				success: (res) => {					
			console.log('发送send成功'+body)				
				},
			});
}




export {
	connect,send,bind,loginout
}
