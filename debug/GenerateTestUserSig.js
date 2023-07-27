// #ifndef MP
import LibGenerateTestUserSig from './lib-generate-test-usersig-es.min.js';


const EXPIRETIME = 604800;
function genTestUserSig(userID,SDKAPPID,SECRETKEY) {	
  const generator = new LibGenerateTestUserSig(SDKAPPID, SECRETKEY, EXPIRETIME);
  const userSig = generator.genTestUserSig(userID);
  console.log(userSig)
  return {
    sdkAppId: SDKAPPID,
    userSig,
  };
}

module.exports = {
  genTestUserSig,
};
// #endif
// #ifdef MP

const EXPIRETIME = 604800;
function genTestUserSig(userID,SDKAPPID,SECRETKEY) {
	const generator ="";
	const userSig = "";
 return {
    sdkAppId: SDKAPPID,
    userSig,
  };
}
module.exports = {
  genTestUserSig,
};
// #endif

