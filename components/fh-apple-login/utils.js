const getThirdService = function(code) {
    return new Promise((res, rej) => {
        plus.oauth.getServices(function(services) {
            res(code ? services.find((s) => s.id === code) : services);
        }, function(e) {
            plus.nativeUI.alert('获取登录授权服务列表失败');
            rej(e);
        });
    });
};

const appleLogin = function() {
    return new Promise((resovle, reject) => {
        uni.login({
            provider: 'apple',
            success: function(loginRes) {
                // let iosopenid = loginRes.authResult.openid
                // 获取用户信息
                uni.getUserInfo({
                    provider: 'apple',
                    success: function() {
                        // 在这里获取到苹果手机的ID后可以继续你的操作，请求后台进行登录
                        resovle(loginRes);
                    },
                });
            },
            fail: function(err) {
                reject(err);
            },
        });
    });
};

export default {
    getThirdService,
    appleLogin,
};
