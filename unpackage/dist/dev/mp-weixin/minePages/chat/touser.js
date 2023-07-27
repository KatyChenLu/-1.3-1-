require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["minePages/chat/touser"],{

/***/ 757:
/*!************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/main.js?{"page":"minePages%2Fchat%2Ftouser"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _touser = _interopRequireDefault(__webpack_require__(/*! ./minePages/chat/touser.vue */ 758));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_touser.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 758:
/*!*****************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/touser.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./touser.vue?vue&type=template&id=31bee161& */ 759);
/* harmony import */ var _touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./touser.vue?vue&type=script&lang=js& */ 761);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__["render"],
  _touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "minePages/chat/touser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 759:
/*!************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/touser.vue?vue&type=template&id=31bee161& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./touser.vue?vue&type=template&id=31bee161& */ 760);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_template_id_31bee161___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 760:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/touser.vue?vue&type=template&id=31bee161& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 761:
/*!******************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/touser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./touser.vue?vue&type=script&lang=js& */ 762);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_touser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 762:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/touser.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _permission = _interopRequireDefault(__webpack_require__(/*! @/TrtcCloud/permission.js */ 561));
var _index = _interopRequireDefault(__webpack_require__(/*! @/TrtcCloud/lib/index */ 562));
var _TrtcDefines = __webpack_require__(/*! @/TrtcCloud/lib/TrtcDefines */ 565);
var _GenerateTestUserSig = __webpack_require__(/*! @/debug/GenerateTestUserSig */ 573);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var roomId = Math.floor(Math.random() * 100000).toString();
var userId = 'user_' + Math.floor(Math.random() * 100000).toString();
var _default = {
  components: {},
  data: function data() {
    return {
      trtcCloud: null,
      sdkAppId: 0,
      userSig: '',
      roomId: Math.floor(Math.random() * 100000),
      userId: 'user_' + Math.floor(Math.random() * 100000).toString(),
      appScene: _TrtcDefines.TRTCAppScene.TRTCAppSceneVideoCall,
      // TRTCAppSceneVideoCall
      isFrontCamera: true,
      streamType: _TrtcDefines.TRTCVideoStreamType.TRTCVideoStreamTypeBig,
      remoteUserId: '',
      audioRoute: _TrtcDefines.TRTCAudioRoute.TRTCAudioRouteSpeaker,
      remoteAudioMuteState: false,
      localAudioMuteState: false,
      localVideoMuteState: false
    };
  },
  onLoad: function onLoad(option) {
    this.roomId = option.id;
  },
  mounted: function mounted() {
    if (uni.getSystemInfoSync().platform === 'android') {
      _permission.default.requestAndroidPermission('android.permission.RECORD_AUDIO');
      _permission.default.requestAndroidPermission('android.permission.CAMERA');
    }

    // 生成 userSig
    var _genTestUserSig = (0, _GenerateTestUserSig.genTestUserSig)(this.userId),
      sdkAppId = _genTestUserSig.sdkAppId,
      userSig = _genTestUserSig.userSig;
    this.sdkAppId = sdkAppId;
    this.userSig = userSig;
    if (!sdkAppId || !userSig) {
      uni.showToast({
        title: '请填写 sdkAppId、userSig',
        icon: 'none'
      });
    }
  },
  onUnload: function onUnload() {
    this.destroyInstance();
    console.log('- onUnload');
  },
  unmounted: function unmounted() {
    this.handleUninstallEvents();
  },
  onBackPress: function onBackPress() {
    this.destroyInstance();
  },
  methods: {
    bindInputChange: function bindInputChange(event, type) {
      var value = event.detail.value;
      switch (type) {
        case 'roomId':
          {
            this.roomId = value;
            break;
          }
        case 'userId':
          {
            this.userId = value;
            break;
          }
      }
    },
    destroyInstance: function destroyInstance() {
      if (this.trtcCloud) {
        _index.default.destroyInstance();
        this.trtcCloud = null;
        uni.showToast({
          title: '销毁实例',
          icon: 'none'
        });
      }
    },
    createTrtcCloud: function createTrtcCloud() {
      uni.showToast({
        title: '创建实例 ',
        icon: 'none'
      });
      this.trtcCloud = _index.default.createInstance();
      this.handleEvents();
    },
    enterRoom: function enterRoom() {
      try {
        var _roomId = this.roomId,
          _userId = this.userId,
          sdkAppId = this.sdkAppId,
          appScene = this.appScene,
          userSig = this.userSig;
        var param = {
          roomId: +_roomId,
          userId: _userId,
          sdkAppId: sdkAppId,
          userSig: userSig
        };
        this.trtcCloud.enterRoom(param, appScene);
        uni.showToast({
          title: 'enterRoom ',
          icon: 'none'
        });
      } catch (error) {
        console.log("enterRoom error = ".concat(JSON.stringify(error)));
      }
    },
    exitRoom: function exitRoom() {
      try {
        this.stopLocalPreview();
        this.stopRemoteView();
        this.stopLocalAudio();
        this.trtcCloud.exitRoom();
        this.remoteUserId = '';
        this.handleUninstallEvents();
      } catch (e) {
        // TODO handle the exception
      }
    },
    // 本地预览
    startLocalPreview: function startLocalPreview() {
      this.trtcCloud.startLocalPreview(this.isFrontCamera, this.userId);
      uni.showToast({
        title: 'localPreview',
        icon: 'none'
      });
    },
    stopLocalPreview: function stopLocalPreview() {
      this.trtcCloud.stopLocalPreview();
    },
    // 切前置、后置
    switchCamera: function switchCamera() {
      this.isFrontCamera = !this.isFrontCamera;
      this.trtcCloud.switchCamera(this.isFrontCamera);
    },
    muteLocalVideo: function muteLocalVideo() {
      this.localVideoMuteState = !this.localVideoMuteState;
      this.trtcCloud.muteLocalVideo(_TrtcDefines.TRTCVideoStreamType.TRTCVideoStreamTypeBig, this.localVideoMuteState);
    },
    startLocalAudio: function startLocalAudio() {
      try {
        this.trtcCloud.startLocalAudio();
        uni.showToast({
          title: 'start local audio',
          icon: 'none'
        });
      } catch (e) {}
    },
    stopLocalAudio: function stopLocalAudio() {
      this.trtcCloud.stopLocalAudio();
    },
    muteLocalAudio: function muteLocalAudio() {
      this.localAudioMuteState = !this.localAudioMuteState;
      this.trtcCloud.muteLocalAudio(this.localAudioMuteState);
    },
    startRemoteView: function startRemoteView() {
      if (this.remoteUserId) {
        this.trtcCloud.startRemoteView(this.remoteUserId, this.streamType, this.remoteUserId);
        uni.showToast({
          title: "the remoteUserId: ".concat(this.remoteUserId),
          icon: 'none'
        });
      } else {
        uni.showToast({
          title: '无远端用户',
          icon: 'none'
        });
      }
    },
    stopRemoteView: function stopRemoteView() {
      if (this.remoteUserId) {
        this.trtcCloud.stopRemoteView(this.remoteUserId, this.streamType);
      }
    },
    muteRemoteAudio: function muteRemoteAudio() {
      this.remoteAudioMuteState = !this.remoteAudioMuteState;
      console.log('远端用户 id = ', this.remoteUserId, '状态 = ', this.remoteAudioMuteState);
      this.remoteUserId && this.trtcCloud.muteRemoteAudio(this.remoteUserId, this.remoteAudioMuteState);
    },
    // 听筒、免提 切换
    switchAudioRoute: function switchAudioRoute() {
      this.audioRoute = this.audioRoute === _TrtcDefines.TRTCAudioRoute.TRTCAudioRouteSpeaker ? _TrtcDefines.TRTCAudioRoute.TRTCAudioRouteEarpiece : _TrtcDefines.TRTCAudioRoute.TRTCAudioRouteSpeaker;
      this.trtcCloud.setAudioRoute(this.audioRoute);
    },
    handleEvents: function handleEvents() {
      var _this = this;
      this.trtcCloud.on('onWarning', function (res) {
        uni.showToast({
          title: "onWarning: ".concat(JSON.stringify(res)),
          icon: 'none'
        });
      });
      this.trtcCloud.on('onError', function (res) {
        console.log('- onError: ', JSON.stringify(res));
        uni.showToast({
          title: "error: ".concat(JSON.stringify(res)),
          icon: 'none'
        });
      });
      this.trtcCloud.on('onEnterRoom', function (result) {
        console.log("- onEnterRoom = ".concat(result));
        if (result > 0) {
          uni.showToast({
            title: "\u8FDB\u623F\u6210\u529F\uFF0C\u8017\u65F6: ".concat(result, "ms"),
            icon: 'none'
          });
        } else {
          console.log("enter room failed\uFF0Cerror code = ".concat(result));
        }
      });
      this.trtcCloud.on('onExitRoom', function (reason) {
        var reasonList = ['主动调用 exitRoom 退房', '被服务器踢出当前房间', '当前房间整个被解散'];
        uni.showToast({
          title: "\u9000\u623F ".concat(reasonList[reason]),
          icon: 'none',
          duration: 1000
        });
      });
      this.trtcCloud.on('onFirstVideoFrame', function (res) {
        console.log("\u6E32\u67D3\u7684\u9996\u5E27\u753B\u9762\u54CD\u5E94 = ".concat(JSON.stringify(res)));
      });
      this.trtcCloud.on('onRemoteUserEnterRoom', function (userId) {
        _this.remoteUserId = userId;
        uni.showToast({
          title: "\u8FDC\u7AEF\u8FDB\u623F: userId = ".concat(userId),
          icon: 'none'
        });
      });
      this.trtcCloud.on('onUserVideoAvailable', function (res) {
        var userId = res.userId,
          available = res.available;
        console.log('onUserVideoAvailable = ', res);
        if (userId && available) {
          _this.remoteUserId = userId;
        }
      });
    },
    handleUninstallEvents: function handleUninstallEvents() {
      this.trtcCloud.off('*');
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[757,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/minePages/chat/touser.js.map