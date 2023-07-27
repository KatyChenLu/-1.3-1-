///修改为你的域名，一定要安装ssl证书。
const host = `https://game.demo.51duoke.cn`;
//下面参数 是连接聊天服务的，请修改为你的域名注意端口8282不能修改。
const webSocket = 'wss://quanpro.51duoke.cn:8282';
//下面是你的腾讯语音sdk的应用id，
const sdkappid = 1400745478;
//下面参数是腾讯语音sdk的应用秘钥
const secretkey = '7d461bbac2b432bbbbff2137e974712da54b29a94784b1f14067104479759cc4';

export {
	host,
	sdkappid,
	secretkey,
	webSocket
};
