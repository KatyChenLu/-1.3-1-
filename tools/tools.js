import {
	host
	} from '@/siteinfo.js'

// 检测类型
function checkTypeFn(item) {
	return Object.prototype.toString.call(item).slice(8, -1);
}


// 数据转数字
function transNumFn(item) {
	if (item) {
		let type = checkTypeFn(item);
		if (type == 'Number' || type == 'BigInt') {
			return item;
		} else if (type == 'String') {
			return transNumFn(item - 0);
		} else {
			return 1;
		}
	} else {
		return 0;
	}
}

// 断言 必须是对象
function assertObject(item) {
	if (checkTypeFn(item) == 'Object' && Object.keys(item).length > 0) {
		return item;
	}
	return {};
}
// 断言 必须是数组
function assertArray(item) {
	if (checkTypeFn(item) == 'Array' && item.length > 0) {
		return item;
	}
	return [];
}
// 断言 必须是字符串
function assertString(item) {
	if (checkTypeFn(item) == 'String' && item.length > 0) {
		return item;
	}
	return '';
}
// 断言 必须是数字
function assertNumber(item) {
	if (checkTypeFn(item) == 'Number' && item > 0) {
		return item;
	}
	return 0;
}




function bigPlus(a, b) { //a+b
	return Number(new bigJs(a).plus(b).toFixed(9))
}

function bigMinus(a, b) { //a-b
	return Number(new bigJs(a).minus(b).toFixed(9))
}

function bigTimes(a, b) { //a*b
	return Number(new bigJs(a).times(b).toFixed(9))
}

function bigDiv(a, b) { //a/b
	return Number(new bigJs(a).div(b).toFixed(9))
}


/*
	@description 获取保留两位小数的字符串数字
	@return <String> 带小数点的字符串数字
*/
function toDoubleNumFn(item, n = 2) {
	let pow = Math.pow(10, n),
		num = bigTimes(transNumFn(item), pow),
		flag = num < 0 ? '-' : '+',
		abs = Math.abs(num),
		floor = Math.floor(abs) / pow,
		result = `${flag}${floor}` - 0;
	return result.toFixed(n)
}

// 深度克隆一份对象
function cloneFn(item) {
	return JSON.parse(JSON.stringify(item))
}

// 补零
function num2zeroStr(item, n = 2) {
	let str = '';
	for (let i = 0; i < n + 1; i++) {
		str += 0;
	}
	return `${str}${transNumFn(item)}`.slice(-n)
}


// 把对象转查询字符串格式
function Object2QueryString(object) {
	object = assertObject(object)
	let queryStr = '';
	for (let k in object) {
		queryStr += `${k}=${object[k]}&`;
	}
	return queryStr.substring(0, queryStr.length - 1);
}

/* 
	版本字符串转纯数字
	传入必须是字符串 返回数字
*/
function getVersionFn(str) {
	str = `${str}`;
	let version = str.toLocaleUpperCase().replace(/V/ig, '').replace(/\./ig, '')
	let rr = version.split('');
	let nd = rr.findIndex(i => i > 0)
	return `0000${version}`.slice(-(rr.length - nd)) - 0
}


// 防抖
function debounce(fn, wait) {
	var timer;
	return function(...arg) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...arg)
		}, wait);
	}
}


// ↑↑↑↑↑↑↑↑ 通用工具方法






// 生成小时数据
function createHoursArr(to, off, runLen) {
	let toHoursBefore = transNumFn(to.split(':')[0]);
	let toHoursAfter = transNumFn(to.split(':')[1]);

	let offHoursBefore = transNumFn(off.split(':')[0]);
	let offHoursAfter = transNumFn(off.split(':')[1]);
	let arr = [];
	for (let i = toHoursBefore; i < offHoursBefore; i += runLen) {
		let lastOffHoursBefore = i + runLen >= offHoursBefore ? offHoursBefore : i + runLen;

		let lastOffHoursAfter = i + runLen >= offHoursBefore ? offHoursAfter : toHoursAfter;
		let textStr =
			`${num2zeroStr(i)}:${num2zeroStr(toHoursAfter)}~${num2zeroStr(lastOffHoursBefore)}:${num2zeroStr(
			lastOffHoursAfter
		)}`;
		arr.push({
			textStr,
			toHoursBefore: i,
			offHoursBefore: lastOffHoursBefore
		});
	}
	return arr;
}

// 固定的字符串常量
const toDayStr = '今天';
const tomorrowStr = '明天';


// 电话号码正则(手机号正则)
let checkTelReg = /^[0-9]{11}$/;

// 普通路径转换成navigateToFn 函数可以调用的 (在路径前加 / )

function url2navigateToUrlFn(url) {
	return url[0] == '/' ? url : `/${url}`;
}

// 给规格项添加默认选中的 属性
function addSpecFilterItemActAttrFn(specFilterItem) {
	let cloneSpecFilterItem = cloneFn(specFilterItem);
	cloneSpecFilterItem.forEach(item => {
		item.item.forEach((i, k) => {
			if (k == 0) {
				i.active = true;
			} else {
				i.active = false;
			}
		})
	})
	return cloneSpecFilterItem;
}

function checkAvatarPath(avatar) {
	avatar = assertString(avatar);
	let result = avatar.includes('http://') || avatar.includes('https://')
	if (result) {
		return avatar;
	} else {
		return `${host}${avatar}`;
	}
}

// 网络地址转临时路径
function url2temPath(url) {
	return new Promise((resFn, rejFn) => {
		uni.getImageInfo({
			src: url,
			success(res) {
				resFn({
					result: res.path,
					type: 'success',
					msg: '成功',
					url
				});
			},
			fail() {
				rejFn({
					result: '获取图片信息错误',
					msg: '获取图片信息错误',
					type: 'error',
					url
				});
			}
		});
	}).catch((e)=>{});
}



/* 
	传入 js格式(毫秒为单位)的时间戳 换算成 xx天 小于1天 返回 xx小时
*/
function calcOverTime(timeStamp) {
	let day = Math.floor(timeStamp / 86400000);
	if (day > 0) {
		return `${day}天`;
	}
	let hours = Math.floor(timeStamp / 1000 / 60 / 60);
	return `${hours}小时`;
}


// 商品详情 里富文本字符串 图片 百分比显示
function goodsDetailWidthFn(str) {
	if (typeof(str) != 'string') {
		return '';
	}





	str = str.replace(/src="\/uploads/ig, `src="${host}/uploads`);

	// 把行间 style="xxx替换  data-style="xxx
	let REGaddDataHead_style = /style="/ig;
	let str0 = str.replace(REGaddDataHead_style, 'data-style="');



	// 把行间 width="100" 替换  data-width="100" 
	let REGaddDataHead = /width="/ig;
	let str2 = str0.replace(REGaddDataHead, 'data-width="');


	// 把style 里的  width: 100px  替换  width: 100%
	let reg = /img src/ig;
	let str3 = str2.replace(reg, 'img style="width:100%;display:block;" src');
	return str3;
}



/* 
	obj.draw_time,
	obj.number_type,
	obj.number,
	计算结束时间
 */
function calcEndTime(obj) {
	let timeStamp;
	if (obj.number_type == 1) { //分钟
		timeStamp = ((obj.draw_time - 0) * 1000) + ((obj.number - 0) * 60) * 1000
	} else if (obj.number_type == 2) { //小时
		timeStamp = ((obj.draw_time - 0) * 1000) + ((obj.number - 0) * 3600) * 1000
	} else if (obj.number_type == 3) { //天数
		timeStamp = ((obj.draw_time - 0) * 1000) + ((obj.number - 0) * 86400) * 1000
	} else if (obj.number_type == 4) { //月数
		timeStamp = ((obj.draw_time - 0) * 1000) + ((obj.number - 0) * 2592000) * 1000
	} else if (obj.number_type == 5) { //年数
		timeStamp = ((obj.draw_time - 0) * 1000) + ((obj.number - 0) * 31536000) * 1000
	} else {
		console.log('参数错误 致命错误')
		return;
	}
	timeStamp = Math.floor(timeStamp / 1000)
	return {
		timeStamp
	}
}


/*
	判断是否过期 返回true / false
	在有效期内 true
	不在有效期内 false

	obj.time_bar
	obj.use_end_time
	obj.use_start_time

	obj.draw_time,
	obj.number_type,
	obj.number,
*/
function checkIsValid(obj) {
	/*
	 	1--领取后算时间  2--平台限制
	*/
	let curtData = Math.floor(+new Date() / 1000)

	// 2--平台限制
	if (obj.time_bar == 2) {

		/*
				结束
				obj.use_end_time
		 		obj.use_start_time
		 		开始

		 */
		if (obj.use_start_time < curtData && obj.use_end_time > curtData) {
			return true;
		} else {
			return false
		}

		// 1--领取后算时间
	} else {

		let res = calcEndTime({
			draw_time: obj.draw_time,
			number_type: obj.number_type,
			number: obj.number,
		})


		if (obj.draw_time < curtData && res.timeStamp > curtData) {
			return true;
		} else {
			return false;
		}
	}
}

// 时间字符串转数组
function timeStr2Arr(str) {
	if (!str) {
		return false;
	}

	function fn2(n) {
		let str = n + '';
		return str.padStart(2, '0');
	}

	let date = new Date(),
		strHours = str.split(':')[0] - 0,
		strMinutes = str.split(':')[1] - 1,
		newHours = date.getHours(),
		newMinutes = date.getMinutes(),
		newT = newHours * 60 + newMinutes,
		endT = strHours * 60 + strMinutes;

	let resHoure = Math.floor((endT - newT) / 60);
	let resMinutes = (endT - newT) % 60;
	let resSeconds = 60 - date.getSeconds();
	let resMilliseconds = 1000 - date.getMilliseconds();

	let resArr;
	if ((endT + 1) - newT > 0) {
		resArr = [fn2(resHoure), fn2(resMinutes), fn2(resSeconds), resMilliseconds]
	} else {
		resArr = [fn2(0), fn2(0), fn2(0), fn2(0)]
	}
	return resArr
}



/* 
	@description
		传时间戳返回时间描述文字
			传
				1609161226410
			返回
				'2020年12月28日21时13分46秒'
		@param
			timeStamp <Number> 时间戳数字 单位是毫秒
		@return
			文字描述的时间字符串
*/
function timeStamp2textFn(timeStamp) {
	let date = new Date(timeStamp)
	return `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`
}


function timeStr2timeObj(str) {
	let strs = `${str}`.replace(/\-/g, '/');
	let date = new Date(strs),
		year = date.getFullYear,
		month = num2zeroStr(date.getMonth() + 1),
		day = num2zeroStr(date.getDate()),
		hours = num2zeroStr(date.getHours()),
		minutes = num2zeroStr(date.getMinutes());
	return {
		year,
		month,
		day,
		hours,
		minutes
	}

}

/*
	@description
		获取可以循环的数据结构,传入后台的not_reason字符串
		服务器反的数据格式
			not_reason1: "商品金额差**元可用__61.1",
			not_reason2: "没有符合条件的商品",
			not_reason3: "",
	@param
		str <String>
	@return <Object>

*/
function getNotReasonObj(str) {
	let arrSplit = assertString(str).split('__');
	if (arrSplit.length == 2) {
		let arr = assertString(arrSplit[0]).split('**');
		return [{
				redColor: false,
				text: arr[0],
			},
			{
				redColor: true,
				text: arrSplit[1],
			},
			{
				redColor: false,
				text: arr[1],
			}
		];
	}
	return [{
		redColor: false,
		text: arrSplit[0],
	}];
}

function isYear(timeValue) {
	var dateyear = new Date(timeValue).getFullYear()
	var toyear = new Date().getFullYear()
	// console.log(dateyear, toyear)
	if (dateyear === toyear) {
		return true
	} else {
		return false
	}
}

function isYestday(timeValue) { // 是否为昨天
	var date = new Date(timeValue)
	var today = new Date()
	if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth()) {
		if ((today.getDate()) - (date.getDate()) === 1) {
			return true
		} else {
			return false
		}
	} else {
		return false
	}
}

function formatTime(date) {
	var t = getTimeArray(date)
	return [t[0], t[1], t[2]].map(formatNumber).join('-') + ' ' + [t[3], t[4], t[5]].map(formatNumber).join(':')
}


function getTimeArray(date) {
	date = new Date(date)
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	var day = date.getDate()
	var hour = date.getHours()
	var minute = date.getMinutes()
	var second = date.getSeconds()
	return [year, month, day, hour, minute, second].map(formatNumber)
}

function formatNumber(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
}

function timeChangedd(timeValue) {
	if (!timeValue){
		return
	}
	// 切记 IOS系统只识别 " / " 不识别 " - "
	timeValue = Date.parse(timeValue.replace(/-/g, '/'));
	var timeNew = new Date().getTime(); // 当前时间		
	var timeDiffer = timeNew - timeValue; // 与当前时间误差
	var returnTime = '';
	if (timeDiffer <= 600000) { // 10分钟内
		returnTime = '刚刚';
	} else if (timeDiffer > 600000 && timeDiffer < 3600000) { // 1小时内内
		returnTime = Math.floor(timeDiffer / 60000) + '分钟前';
	}else if (timeDiffer > 3600000 && timeDiffer < 36000000) { // 10小时内内
		returnTime = Math.floor(timeDiffer / 3600000) + '小时前';			
	} else if (timeDiffer >= 600000 && timeDiffer < 86400000 && isYestday(timeValue) === false) { // 今日
		returnTime = formatTime(timeValue).substr(11, 5);

	} else if (timeDiffer > 600000 && isYestday(timeValue) === true) { // 昨天
		returnTime = '昨天' + formatTime(timeValue).substr(11, 5);
	} else if (timeDiffer > 86400000 && isYestday(timeValue) === false && isYear(timeValue) ===
		true) { // 今年
		returnTime = formatTime(timeValue).substr(5, 11);
	} else if (timeDiffer > 86400000 && isYestday(timeValue) === false && isYear(timeValue) ===
		false) { // 不属于今年
		returnTime = formatTime(timeValue).substr(0, 16);
	}

	return returnTime;

}

// 时间戳(js毫秒级) 转 时间文字描述 (目前只用在拼团首页 和 拼团详情)
function timeStamp2timeText(s) {
	let resStr = '';
	let tian = Math.floor(s / 86400000)
	if (tian) {
		resStr += `${tian}天`;
	}

	let shi = Math.floor(s / 3600000) % 24;
	if (shi) {
		let s1 = `000${shi}`.slice(-2);
		resStr += `${s1}时`;
	} else {
		if (resStr) {
			resStr += `00时`;
		}
	}
	let fen = Math.floor(s / 60000) % 60;
	if (fen) {
		let s1 = `000${fen}`.slice(-2);
		resStr += `${s1}分`;
	}
	/* let miao =Math.floor(s/1000)%1000 ;
	if(miao){
		let s1 = `000${fen}`.slice(-2);
		resStr +=`${s1}秒`;
	} */
	return resStr;
}


// 


/*
	@description 判断固定格式字符串 (例如 名字 手机号等) 是否符合要求
		校验通过 返回 true
		校验失败 返回 页面提示信息
*/
let validateFn = {
	name(title, str) {
		if (str.length > 0 && str.length <= 20) {
			return {
				validate: true
			}
		}
		return {
			validate: false,
			msg: `${title}长度是1~20`
		}
	},
	tel(tel) {
		if (checkTelReg.test(tel)) {
			return {
				validate: true
			}
		}
		return {
			validate: false,
			msg: `请检查手机号格式`
		}
	},
	
}



export {
	timeChangedd,
	checkTypeFn,
	transNumFn,
	assertObject,
	assertArray,
	assertString,
	assertNumber,
	bigPlus,
	bigMinus,
	bigTimes,
	bigDiv,
	toDoubleNumFn,
	cloneFn,
	num2zeroStr,
	getVersionFn,
	createHoursArr,
	toDayStr,
	tomorrowStr,
	checkTelReg,
	addSpecFilterItemActAttrFn,
	url2navigateToUrlFn,
	checkAvatarPath,
	url2temPath,
	calcOverTime,
	goodsDetailWidthFn,
	calcEndTime,
	checkIsValid,
	timeStr2Arr,
	timeStamp2textFn,
	timeStr2timeObj,
	getNotReasonObj,
	Object2QueryString,
	timeStamp2timeText,
	debounce,
	validateFn
}
