const COS=require("./cos-wx-sdk-v5.js")


//上传图片到腾讯云
function uploadFileToTencentClound(filename,filePath,config){
	
	
	const Bucket=config.Bucket;//存储桶的名称，命名规则为 BucketName-APPID，此处填写的存储桶名称必须为此格式
	const Region=config.Region;//存储桶所在地域
	//创建一个 COS SDK 实例
	// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
	const cos = new COS({
	  SecretId: config.SecretId,
	  SecretKey:config.SecretKey,
	});
	//创建存储桶
	cos.putBucket({
	  Bucket:config.Bucket,
	  Region:config.Region,
	}, function (err, data) {
	  console.log(err || data);
	});
	
	
	
	
	
	return new Promise((resolve,reject)=>{
		cos.postObject({
		    Bucket: Bucket,
		    Region: Region,
		    Key: 'wxFile/' + filename,
		    FilePath: filePath,
		    onProgress: function (info) {
		        console.log("[cos.postObject-seccess]",JSON.stringify(info));
		    }      
		}, 
		function (err, data) {	
			console.log(data.Location)
			resolve(data.Location)
		})
	})
}
export default {
	uploadFileToTencentClound
}
