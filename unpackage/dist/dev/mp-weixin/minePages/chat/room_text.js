require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["minePages/chat/room_text"],{

/***/ 757:
/*!***************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/main.js?{"page":"minePages%2Fchat%2Froom_text"} ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _room_text = _interopRequireDefault(__webpack_require__(/*! ./minePages/chat/room_text.vue */ 758));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_room_text.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 758:
/*!********************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/room_text.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room_text.vue?vue&type=template&id=d284df74&scoped=true& */ 759);
/* harmony import */ var _room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room_text.vue?vue&type=script&lang=js& */ 761);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _room_text_vue_vue_type_style_index_0_id_d284df74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room_text.vue?vue&type=style&index=0&id=d284df74&lang=scss&scoped=true& */ 763);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d284df74",
  null,
  false,
  _room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "minePages/chat/room_text.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 759:
/*!***************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/room_text.vue?vue&type=template&id=d284df74&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./room_text.vue?vue&type=template&id=d284df74&scoped=true& */ 760);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_template_id_d284df74_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 760:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/room_text.vue?vue&type=template&id=d284df74&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    tnAvatar: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-avatar/tn-avatar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-avatar/tn-avatar")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-avatar/tn-avatar.vue */ 842))
    },
    tnButton: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-button/tn-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-button/tn-button")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-button/tn-button.vue */ 877))
    },
    tnModal: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-modal/tn-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-modal/tn-modal")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-modal/tn-modal.vue */ 870))
    },
    tnPopup: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-popup/tn-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-popup/tn-popup")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-popup/tn-popup.vue */ 926))
    },
    giftListchat: function () {
      return __webpack_require__.e(/*! import() | components/gift-listchat/gift-listchat */ "components/gift-listchat/gift-listchat").then(__webpack_require__.bind(null, /*! @/components/gift-listchat/gift-listchat.vue */ 1272))
    },
    tnTabs: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-tabs/tn-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-tabs/tn-tabs")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-tabs/tn-tabs.vue */ 835))
    },
    tnTag: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-tag/tn-tag */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-tag/tn-tag")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-tag/tn-tag.vue */ 849))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 979))
    },
    shareBtn: function () {
      return __webpack_require__.e(/*! import() | components/share-btn/share-btn */ "components/share-btn/share-btn").then(__webpack_require__.bind(null, /*! @/components/share-btn/share-btn.vue */ 986))
    },
    dkTanchuang: function () {
      return Promise.all(/*! import() | components/dk-tanchuang/dk-tanchuang */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/dk-tanchuang/dk-tanchuang")]).then(__webpack_require__.bind(null, /*! @/components/dk-tanchuang/dk-tanchuang.vue */ 1143))
    },
    lSvga: function () {
      return Promise.all(/*! import() | uni_modules/lime-svga/components/l-svga/l-svga */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/lime-svga/components/l-svga/l-svga")]).then(__webpack_require__.bind(null, /*! @/uni_modules/lime-svga/components/l-svga/l-svga.vue */ 1150))
    },
    egeIndex: function () {
      return __webpack_require__.e(/*! import() | components/ege-index/ege-index */ "components/ege-index/ege-index").then(__webpack_require__.bind(null, /*! @/components/ege-index/ege-index.vue */ 1279))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([_vm.avatarStyle], {
    "background-image": "linear-gradient(to top, #3d0973 20%, #4b2a6d 80%)",
  })
  var g0 = _vm.popshow ? _vm.emolist.length : null
  var g1 = _vm.$t.number.formatNumberAddPriceUnit(_vm.userinfo.guanzhu)
  var g2 = _vm.$t.number.formatNumberAddPriceUnit(_vm.userinfo.fansi)
  var g3 = _vm.$t.number.formatNumberAddPriceUnit(_vm.userinfo.zhan)
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.guanbishow = true
    }
    _vm.e1 = function ($event) {
      _vm.showrenshu = true
      _vm.chanebang(0)
    }
    _vm.e2 = function ($event) {
      _vm.gonggaoshow = true
    }
    _vm.e3 = function ($event) {
      _vm.jinggaoshow = true
    }
    _vm.e4 = function ($event) {
      _vm.shezhishow = true
    }
    _vm.e5 = function ($event) {
      _vm.egeshow = true
    }
    _vm.e6 = function ($event) {
      _vm.roommoshi = 0
    }
    _vm.e7 = function ($event) {
      _vm.roommoshi = 1
    }
    _vm.e8 = function ($event) {
      _vm.jubaoshowchick()
      _vm.guanbishow = false
    }
    _vm.e9 = function ($event) {
      _vm.appshare()
      _vm.guanbishow = false
    }
    _vm.e10 = function ($event) {
      _vm.goBackfanhui()
      _vm.guanbishow = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 761:
/*!*********************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/room_text.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./room_text.vue?vue&type=script&lang=js& */ 762);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 762:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/room_text.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 56));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 58));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _siteinfo = __webpack_require__(/*! @/siteinfo.js */ 33);
var _template_page_mixin = _interopRequireDefault(__webpack_require__(/*! @/libs/mixin/template_page_mixin.js */ 68));
var _permission = _interopRequireDefault(__webpack_require__(/*! @/TrtcCloud/permission.js */ 569));
var _index = _interopRequireDefault(__webpack_require__(/*! @/TrtcCloud/lib/index */ 570));
var _TrtcDefines = __webpack_require__(/*! @/TrtcCloud/lib/TrtcDefines */ 573);
var _GenerateTestUserSig = __webpack_require__(/*! @/debug/GenerateTestUserSig */ 581);
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
//
//
var lPainter = function lPainter() {
  Promise.all(/*! require.ensure | components/lime-painter/index */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/lime-painter/index")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/lime-painter/ */ 1118));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
///

var sysinfo = uni.getSystemInfoSync();
var audioContext = uni.createInnerAudioContext();
var recorderManager = uni.getRecorderManager();
var recordOptions = {
  duration: 60000,
  sampleRate: 44100,
  numberOfChannels: 1,
  encodeBitRate: 192000,
  format: 'aac' // 音频格式，选择此格式创建的音频消息，可以在即时通信 IM 全平台（Android、iOS、微信小程序和Web）互通
};
var _default = {
  components: {
    lPainter: lPainter
  },
  data: function data() {
    var _ref;
    return _ref = {
      //背景音乐
      musiclist: [],
      bgmshow: false,
      //
      ///				
      egeshow: false,
      isQd: true,
      cid: 0,
      //奖池id
      AwardList: [],
      ///
      managemsg: '',
      jinggaoshow: false,
      jinggaobody: '请注意规范聊天内容，请勿谈论违规话题~',
      tishishow: false,
      tishi_title: '',
      tishi_body: '',
      bangdanlist: [],
      bang_type: 0,
      roomtitle: '',
      roomtitle_sub: '',
      roommoshi: 0,
      gongaobody: '',
      shezhishow: false,
      gonggaoshow: false,
      id: 1002,
      guanbishow: false,
      //、			
      giftnum: 0,
      giftformname: '',
      giftheadimg: '',
      giftname: '',
      giftAnimation: false,
      liwusvgashow: false,
      giftimg: '',
      giftianchu: false,
      giftitle: '',
      gifcontent: '',
      //、
      guanboshow: false,
      gift_userid: 0,
      popshowgift: false,
      ismaishang: false,
      manage: [],
      showrenshu: false,
      emolist: [],
      mailist: [{
        nickname: '主播',
        avatar: '',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        open: 1
      }, {
        nickname: '1号麦位',
        avatar: '',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        open: 0
      }, {
        nickname: '2号麦位',
        avatar: '',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        open: 0
      }, {
        nickname: '3号麦位',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        avatar: '',
        open: 0
      }, {
        nickname: '4号麦位',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        avatar: '',
        open: 0
      }, {
        nickname: '5号麦位',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        avatar: '',
        open: 0
      }, {
        nickname: '6号麦位',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        avatar: '',
        open: 0
      }, {
        nickname: '7号麦位',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        avatar: '',
        open: 0
      }, {
        nickname: '8号麦位',
        id: 0,
        maikefeng: false,
        is_mai: 0,
        avatar: '',
        open: 0
      }],
      screenHeight: sysinfo.screenHeight,
      userinfoshow: false,
      userinfo: [],
      roomInfo: [],
      fangjianhao: '',
      roombg: '',
      scrollIntoIndex: "chatItem_0",
      liwushow: false,
      shen_nickename: '',
      shen_userid: 0,
      tanchutongyiis: false,
      show_shenqing: false,
      loginBoxFlag: false,
      // 登录框显示隐藏状态
      userlist: [],
      manage_id: 0,
      popshow: false,
      isshuru: false,
      emojiindex: 0,
      isplay: false,
      playMsgid: 0,
      is_frind: 0,
      jintian: '',
      talkList: [],
      ajax: {
        rows: 10,
        //每页数量
        page: 1,
        //页码
        flag: true,
        // 请求开关
        loading: true,
        // 加载中
        loadText: '正在获取消息'
      },
      withinArry: []
    }, (0, _defineProperty2.default)(_ref, "userinfo", []), (0, _defineProperty2.default)(_ref, "toname", ''), (0, _defineProperty2.default)(_ref, "fromname", ''), (0, _defineProperty2.default)(_ref, "tohead", ''), (0, _defineProperty2.default)(_ref, "fromhead", ''), (0, _defineProperty2.default)(_ref, "chaoguan", 0), (0, _defineProperty2.default)(_ref, "content", []), (0, _defineProperty2.default)(_ref, "userInfoAvatar_no", '/static/navigation.png'), (0, _defineProperty2.default)(_ref, "sendmsgBoy", ''), (0, _defineProperty2.default)(_ref, "room_id", 1003), (0, _defineProperty2.default)(_ref, "fromid", 0), (0, _defineProperty2.default)(_ref, "is_online", '离线'), (0, _defineProperty2.default)(_ref, "roomTitle", '聊天室'), (0, _defineProperty2.default)(_ref, "messageContent", ''), (0, _defineProperty2.default)(_ref, "conversation", {}), (0, _defineProperty2.default)(_ref, "messageKey", ''), (0, _defineProperty2.default)(_ref, "lastMsgTime", ''), (0, _defineProperty2.default)(_ref, "count", 15), (0, _defineProperty2.default)(_ref, "isEmojiOpen", false), (0, _defineProperty2.default)(_ref, "isMoreOpen", false), (0, _defineProperty2.default)(_ref, "isFocus", false), (0, _defineProperty2.default)(_ref, "isGroup", false), (0, _defineProperty2.default)(_ref, "messageList", []), (0, _defineProperty2.default)(_ref, "lv", 0), (0, _defineProperty2.default)(_ref, "vip", 0), (0, _defineProperty2.default)(_ref, "height", 0), (0, _defineProperty2.default)(_ref, "modalVisible", false), (0, _defineProperty2.default)(_ref, "downloadInfo", {}), (0, _defineProperty2.default)(_ref, "percent", 0), (0, _defineProperty2.default)(_ref, "sysInfo", {}), (0, _defineProperty2.default)(_ref, "customModalVisible", false), (0, _defineProperty2.default)(_ref, "customData", ''), (0, _defineProperty2.default)(_ref, "customDescription", ''), (0, _defineProperty2.default)(_ref, "customExtension", ''), (0, _defineProperty2.default)(_ref, "focusedInput", ''), (0, _defineProperty2.default)(_ref, "safeBottom", 34), (0, _defineProperty2.default)(_ref, "isRecord", false), (0, _defineProperty2.default)(_ref, "isRecording", false), (0, _defineProperty2.default)(_ref, "canSend", true), (0, _defineProperty2.default)(_ref, "startPoint", 0), (0, _defineProperty2.default)(_ref, "title", '正在录音'), (0, _defineProperty2.default)(_ref, "rateModal", false), (0, _defineProperty2.default)(_ref, "rate", 5), (0, _defineProperty2.default)(_ref, "isShow", false), (0, _defineProperty2.default)(_ref, "faceUrl", 'https://webim-1252463788.file.myqcloud.com/assets/face-elem/'), (0, _defineProperty2.default)(_ref, "emojiShow", true), (0, _defineProperty2.default)(_ref, "revokeModal", false), (0, _defineProperty2.default)(_ref, "revokeMessage", {}), (0, _defineProperty2.default)(_ref, "currentTime", 0), (0, _defineProperty2.default)(_ref, "currentTimeID", ''), (0, _defineProperty2.default)(_ref, "isIphoneX", true), (0, _defineProperty2.default)(_ref, "timer", null), (0, _defineProperty2.default)(_ref, "sec", 0), (0, _defineProperty2.default)(_ref, "scrollViewBasicTop", 0), (0, _defineProperty2.default)(_ref, "scrollViewHeight", 0), (0, _defineProperty2.default)(_ref, "scrollViewHeight_room", 0), (0, _defineProperty2.default)(_ref, "leftScrollViewTop", 200), (0, _defineProperty2.default)(_ref, "trtcCloud", null), (0, _defineProperty2.default)(_ref, "sdkAppId", 0), (0, _defineProperty2.default)(_ref, "userSig", ''), (0, _defineProperty2.default)(_ref, "role", _TrtcDefines.TRTCRoleType.TRTCRoleAudience), (0, _defineProperty2.default)(_ref, "roomId", 1), (0, _defineProperty2.default)(_ref, "userId", 0), (0, _defineProperty2.default)(_ref, "appScene", _TrtcDefines.TRTCAppScene.TRTCAppSceneVoiceChatRoom), (0, _defineProperty2.default)(_ref, "isFrontCamera", true), (0, _defineProperty2.default)(_ref, "streamType", _TrtcDefines.TRTCVideoStreamType.TRTCVideoStreamTypeBig), (0, _defineProperty2.default)(_ref, "remoteUserIdList", []), (0, _defineProperty2.default)(_ref, "remoteAudioMuteState", false), (0, _defineProperty2.default)(_ref, "is_kaimai", false), (0, _defineProperty2.default)(_ref, "is_manage", false), (0, _defineProperty2.default)(_ref, "is_zhubo", false), (0, _defineProperty2.default)(_ref, "button", [{
      text: '取消',
      backgroundColor: '#c1c1c1',
      fontColor: '#000000'
    }, {
      text: '确定',
      backgroundColor: 'tn-bg-indigo',
      fontColor: '#FFFFFF'
    }]), (0, _defineProperty2.default)(_ref, "jubao_body", ''), (0, _defineProperty2.default)(_ref, "jubaoshow", false), (0, _defineProperty2.default)(_ref, "show_poster", false), (0, _defineProperty2.default)(_ref, "path", ''), (0, _defineProperty2.default)(_ref, "posterObj", {
      width: '580rpx',
      height: '928rpx',
      background: '#fff',
      borderRadius: '16rpx',
      views: []
    }), (0, _defineProperty2.default)(_ref, "sharedata", []), (0, _defineProperty2.default)(_ref, "share", []), (0, _defineProperty2.default)(_ref, "mailist_gift", []), (0, _defineProperty2.default)(_ref, "animation", {}), (0, _defineProperty2.default)(_ref, "baoxiangmone", {}), _ref;
  },
  computed: {
    avatarStyle: function avatarStyle() {
      var style = {};
      if (this.roombg) {
        style.backgroundImage = "url(".concat(this.roombg, ")");
      }
      return style;
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内分享按钮
      console.log(res.target);
    }
    return {
      title: this.share.share_title,
      //分享的名称
      path: '/minePages/chat/room_text?id=' + this.id + '&daren_id=' + uni.getStorageSync('user_id'),
      imageUrl: this.share.share_img
    };
  },
  //分享到朋友圈
  onShareTimeline: function onShareTimeline(res) {
    return {
      title: this.share.share_title,
      //分享的名称
      path: '/minePages/chat/room_text?id=' + this.id + '&daren_id=' + uni.getStorageSync('user_id'),
      imageUrl: this.share.share_img
    };
  },
  onLoad: function onLoad(option) {
    var _this = this;
    var that = this;
    uni.$off('talkMessage');
    uni.$off('liwuok');
    uni.$off('liwuoksvga_chat');
    uni.$off('liwuok_chat');
    uni.$off('liwuguangbo');
    if (option.daren_id) {
      uni.setStorageSync('daren_id', option.daren_id);
    }
    if (option.id) {
      this.id = option.id;
      this.room_id = option.id;
      this.roomId = option.id;
      this.fangjianhao = 'ID' + this.room_id;
    }
    uni.$on("loginok", /*#__PURE__*/function () {
      var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {
        var pages, currPage;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('登录成功执行');
                pages = getCurrentPages(); //获取所有页面的数组对象
                currPage = pages[pages.length - 2]; //当前页面
                uni.reLaunch({
                  url: currPage.$page.fullPath
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    uni.$off('setLoginBoxFlag');
    uni.$on('setLoginBoxFlag', function (loginBoxFlag) {
      that.loginBoxFlag = loginBoxFlag;
    });
    if (!this.isLogin) {
      console.log('未登录');
      this.loginBoxFlag = true;
      return false;
    }
    this.bind();
    this.fromid = uni.getStorageSync('user_id');
    this.userId = "user_" + uni.getStorageSync('user_id');
    if (uni.getSystemInfoSync().platform === 'android') {
      _permission.default.requestAndroidPermission('android.permission.RECORD_AUDIO');
      _permission.default.requestAndroidPermission('android.permission.CAMERA');
    }
    var _genTestUserSig = (0, _GenerateTestUserSig.genTestUserSig)(this.userId, _siteinfo.sdkappid, _siteinfo.secretkey),
      userSig = _genTestUserSig.userSig;
    this.sdkAppId = _siteinfo.sdkappid;
    this.userSig = userSig;
    if (!_siteinfo.sdkappid || !userSig) {
      uni.showToast({
        title: '请填写 sdkAppId、userSig',
        icon: 'none'
      });
    }
    this.info();
    this.$nextTick(function () {
      var query = uni.createSelectorQuery().in(_this);
      query.select('.shangban').boundingClientRect(function (data) {
        var systemInfo = uni.getSystemInfoSync();
        _this.scrollViewBasicTop = systemInfo.statusBarHeight + uni.upx2px(10);
        _this.scrollViewHeight_room = systemInfo.safeArea.height + systemInfo.statusBarHeight - data.height - uni.upx2px(140);
      }).exec();
    });

    // 注册接受消息监听
    uni.$on('talkMessage', function (message) {
      console.log(message.type);
      switch (message.type) {
        case 'room_text':
          var inmsgsd = {
            is_self: false,
            type: 'text',
            lv: message.lv,
            content: message.data,
            fromhead: message.fromhead,
            chaoguan: message.chaoguan,
            vip: message.vip,
            fromid: message.fromid,
            fromname: message.fromname
          };
          if (message.fromid != _this.fromid) {
            _this.pushmsg(inmsgsd);
          }
          if (message.fromid == _this.manage_id) {
            _this.managemsg = message.data;
            setTimeout(function () {
              _this.managemsg = '';
            }, 5000);
          }
          return;
        case "image":
          var inmsgsdsd = {
            is_self: false,
            type: 'image',
            lv: message.lv,
            content: message.data,
            fromhead: message.fromhead,
            fromid: message.fromid,
            fromname: message.fromname
          };
          if (message.fromid != _this.fromid) {
            _this.pushmsg(inmsgsdsd);
          }
          return;
        case 'system':
          var inmsg = {
            is_self: false,
            type: 'system',
            chaoguan: message.chaoguan,
            content: message.data
          };
          _this.pushmsg(inmsg); //p收到有人进来了
          _this.gaosuxinrenmailis(); //告诉新人麦上的情况

          var yobianlist = {
            headimg: message.headimg,
            nickname: message.data,
            user_id: message.fromid
          };
          _this.pushuserlist(yobianlist); //收到新人加入在线	
          _this.gaosuxinrenuserlist(); //告诉新人在线的情况

          return;
        case 'liwu':
          //广播礼物							
          _this.guangbogiftshoudao(message);
          return;
        case 'roomqita':
          //通用广播
          _this.tongyongmessge(message);
          return;
        case 'leaveGroup':
          //远端用户退出，list删除这个id							
          _this.shanchuuserlist(message.fromid);
          return;
        case 'reglianmai':
          //向管理员申请上麦					
          if (message.manage_id == _this.fromid) {
            _this.tanchutongyi(message.fromid, message.fromname, message.fromhead);
          }
          return;
        case 'tongyishangmai':
          //管理员统一了我
          if (message.fromid == _this.fromid) {
            _this.tongyishangmai_zijikeshangmai();
          }
          //this.chulimourenhuatong(message.fromid, 1)
          return;
        case 'qianzhixiamia':
          //管理员强制下麦我
          if (message.fromid == _this.fromid) {
            _this.qiangzhiwoxiamai();
          }
          //this.chulimourenhuatong(message.fromid, 0) //
          return;
        case 'tichufangjian':
          //管理员踢出去
          if (message.fromid == _this.fromid) {
            _this.tichufangjian();
          }
          return;
        case 'userlist':
          //麦上的人发生变化
          _this.shoudaozaixainuser(message.userlist);
        case 'mailist':
          //麦上的人发生变化

          if (message.mailistdata) {
            _this.zijimaichane(message.mailistdata);
          }
          return;
        case 'guanbo':
          _this.shoudaoguanbo();
          return;
      }
    });
    uni.$on('liwuguangbo', function (data) {
      uni.sendSocketMessage({
        data: JSON.stringify({
          type: 'liwu',
          room_id: _this.room_id,
          fromid: _this.fromid,
          headimg: _this.fromhead,
          fromname: _this.fromname,
          giftnum: data.giftnum,
          giftname: data.giftname,
          img: data.url,
          giftype: data.type
        })
      });
    });
    uni.$on('liwuok_chat', function (data) {
      _this.guangtext(data);
      _this.imggifshow(data.url);
    });
    uni.$on('liwuoksvga_chat', function (data) {
      _this.guangtext(data);
      _this.savggifshow(data.url);
    });
    this.donghua();
  },
  unmounted: function unmounted() {
    this.handleUninstallEvents();
  },
  onUnload: function onUnload() {
    this.destroyInstance();
    this.likaisocket();
    console.log('离开房间');
  },
  onBackPress: function onBackPress(options) {
    if (options.from == 'backbutton') {
      this.guanbishow = true;
      return true;
    }
    this.likaisocket();
    this.destroyInstance();
  },
  methods: {
    bgmpay: function bgmpay(id, url) {
      this.msg('仅支持app内播放');
      return;
      var musicParam = {
        id: 1,
        path: url,
        loopCount: 0,
        publish: true,
        isShortFile: false,
        startTimeMS: 0,
        endTimeMS: 0
      };
      this.trtcCloud.startPlayMusic(musicParam);
    },
    bgmshowopen: function bgmshowopen() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var that, result;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = _this2;
                _context2.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/musiclist',
                  data: {}
                });
              case 3:
                result = _context2.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    _this2.bgmshow = true;
                    _this2.musiclist = result.data.data;
                  }
                }
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    refreshFn: function refreshFn() {
      console.log('refreshFn登录返回');
    },
    closeGlobalLoginFn: function closeGlobalLoginFn(e) {
      console.log(e);
      if (e != false) {
        this.loginBoxFlag = false;
        this.gohome();
      }
    },
    guangbogiftshoudao: function guangbogiftshoudao(massge) {
      var _this3 = this;
      if (massge.fromid != this.fromid) {
        if (massge.giftype == 'svga') {
          this.savggifshow(massge.img);
          setTimeout(function () {
            _this3.giftnum = massge.giftnum;
            _this3.giftheadimg = massge.headimg;
            _this3.giftname = massge.giftname;
            _this3.giftformname = massge.fromname;
            _this3.giftAnimation = true;
          }, 2000);
        }
        if (massge.giftype == 'img') {
          setTimeout(function () {
            _this3.giftnum = massge.giftnum;
            _this3.giftheadimg = massge.headimg;
            _this3.giftname = massge.giftname;
            _this3.giftformname = massge.fromname;
            _this3.giftAnimation = true;
          }, 2000);
          this.imggifshow(massge.img);
        }
        setTimeout(function () {
          _this3.giftAnimation = false;
        }, 4000);
      }
    },
    savggifshow: function savggifshow(data) {
      this.gifcontent = '';
      this.popshowgift = false;
      this.liwubofang(data);
    },
    imggifshow: function imggifshow(data) {
      var _this4 = this;
      this.giftimg = data;
      this.giftitle = "成功送出礼物";
      this.giftianchu = true;
      this.gifcontent = '';
      this.popshowgift = false;
      setTimeout(function () {
        _this4.giftianchu = false;
      }, 5000);
    },
    gloumai: function gloumai(item, index) {
      var that = this;
      if (item.id == 0 && this.manage_id == this.fromid) {
        if (this.mailist[index].open == 0) {
          uni.showModal({
            title: '提示',
            content: '你确定要关闭' + index + '号麦位吗',
            success: function success(res) {
              if (res.confirm) {
                that.mailist[index].open = 1;
                that.maiweichage();
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }
          });
        }
        if (this.mailist[index].open == 1) {
          uni.showModal({
            title: '提示',
            content: '你确定要打开' + index + '号麦位吗',
            success: function success(res) {
              if (res.confirm) {
                that.mailist[index].open = 0;
                that.maiweichage();
              } else if (res.cancel) {
                console.log('用户点击取消');
              }
            }
          });
        }
        return;
      }
      if (item.open == 1) {
        this.msg('已封位，无法上麦');
        return;
      }
      for (var i in this.mailist) {
        if (this.mailist[i].id == this.userinfo.fromInfo.id) {
          this.msg('你已经在麦上，请先下麦');
          return;
        }
      }
      if (this.roomInfo.moshi == 1) {
        this.show_shenqing = true;
        return;
      }
      this.mailist[index].id = this.userinfo.fromInfo.id;
      this.mailist[index].open = 0;
      this.mailist[index].is_mai = 0;
      this.mailist[index].avatar = this.userinfo.fromInfo.avatar;
      this.mailist[index].nickname = this.userinfo.fromInfo.nickname;
      this.is_kaimai = true;
      this.maiweichage();
      this.zhudongshangmai();
    },
    appshare: function appshare() {
      console.log(sharedata);
      var sharedata = {
        type: 1,
        strShareUrl: this.share.share_url,
        strShareTitle: this.share.share_title,
        strShareSummary: this.share.share_sub,
        strShareImageUrl: this.share.share_img
      };
      this.sharedata = sharedata;
      this.$refs.sharepopup.open();
    },
    sharelist: function sharelist() {
      this.posterObj.views = [{
        type: 'text',
        text: this.share.share_title,
        css: {
          left: '0',
          top: '80rpx',
          width: '100%',
          textAlign: 'center',
          fontSize: '24rpx',
          color: '#4070FF',
          lineHeight: '33rpx'
        }
      }, {
        type: 'qrcode',
        text: this.share.share_url,
        css: {
          left: '190rpx',
          top: '120rpx',
          width: '200rpx',
          height: '200rpx'
        }
      }, {
        type: 'text',
        text: '————  长按二维码 快来看看吧  ————',
        css: {
          left: '0',
          top: '340rpx',
          width: '100%',
          textAlign: 'center',
          fontSize: '24rpx',
          color: '#000000',
          lineHeight: '33rpx'
        }
      }, {
        type: 'image',
        src: this.roomInfo.image,
        css: {
          left: '32rpx',
          top: '384rpx',
          width: '90%',
          borderRadius: '16rpx'
        }
      }];
      console.log(this.posterObj.views);
    },
    updateMoney: function updateMoney() {},
    previewImg: function previewImg() {
      uni.previewImage({
        current: this.path,
        urls: [this.path]
      });
    },
    toSave: function toSave() {
      var _this5 = this;
      uni.showLoading({
        title: '海报生成中'
      });
      var painter = this.$refs.painter;
      painter.canvasToTempFilePath().then(function (res) {
        _this5.path = res.tempFilePath;
        setTimeout(function () {
          uni.hideLoading();
        }, 1000);
      });
    },
    share_qrcode: function share_qrcode() {
      var _this6 = this;
      this.sharelist();
      this.show_poster = true;
      this.$refs.sharepopup.close();
      if (!this.path) {
        setTimeout(function () {
          _this6.toSave();
        }, 500);
      }
    },
    jubaopass: function jubaopass() {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this7;
                if (_this7.isLogin) {
                  _context3.next = 4;
                  break;
                }
                _this7.loginBoxFlag = true;
                return _context3.abrupt("return", false);
              case 4:
                if (!(that.jubao_body == '')) {
                  _context3.next = 7;
                  break;
                }
                _this7.msg('请输入举报理由');
                return _context3.abrupt("return");
              case 7:
                _context3.next = 9;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/user/addReport',
                  data: {
                    goods_id: that.id,
                    type: 1,
                    content: that.jubao_body
                  }
                });
              case 9:
                result = _context3.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    that.jubao_body = '';
                    _this7.msg(result.data.msg);
                    _this7.jubaoshow = false;
                  }
                }
              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    jubaoshowchick: function jubaoshowchick() {
      if (!this.isLogin) {
        this.loginBoxFlag = true;
        this.$refs.sharepopup.close();
        return false;
      }
      console.log(33333333);
      this.jubaoshow = true;
      this.$refs.sharepopup.close();
    },
    clickBtn_shenqing: function clickBtn_shenqing(res) {
      this.show_shenqing = false;
      if (res == 1) {
        console.log('提出申请');
        uni.sendSocketMessage({
          data: JSON.stringify({
            type: 'reglianmai',
            room_id: this.room_id,
            fromid: this.fromid,
            fromname: this.fromname,
            fromhead: this.fromhead,
            manage_id: this.manage_id
          })
        });
      }
    },
    closedPopup: function closedPopup() {
      this.isEmojiOpen = false;
    },
    liaotian: function liaotian() {
      this.isFocus = true;
      this.isshuru = true;
    },
    shiquisd: function shiquisd() {
      this.isFocus = false;
      this.isshuru = false;
    },
    liwubofang: function liwubofang(url) {
      var _this8 = this;
      this.liwusvgashow = true;
      setTimeout(function () {
        _this8.bofangsvga(url);
      }, 500);
    },
    bofangsvga: function bofangsvga(url) {
      var _this9 = this;
      this.$refs.svga.render( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(parser, player) {
          var videoItem;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return parser.load(url);
                case 2:
                  videoItem = _context4.sent;
                  _context4.next = 5;
                  return player.setVideoItem(videoItem);
                case 5:
                  // 设置当前动画的循环次数，0代表无限循环 默认 0
                  player.loops = 1;
                  player.clearsAfterStop = true;
                  // 开始播放动画，reverse = true 时则反向播放。
                  player.startAnimation();
                  player.onPercentage(function (percentage) {
                    // 由于有动画未完成时需要显示其他效果的需求，所以监听动画播放进度
                    // svga动画播放进度大于 70% 时，显示卡牌
                    if (percentage * 100 > 70) {
                      //this.svgaShow = false
                    }
                  });
                  // 监听动画完成
                  player.onFinished(function () {
                    console.log('播放完毕');
                    player.clear();
                    _this9.liwusvgashow = false;
                  });
                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return function (_x2, _x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    },
    info: function info() {
      var _this10 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var that, result, join_room;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                that = _this10;
                _context5.next = 3;
                return that.$request({
                  loading: 1,
                  method: 'post',
                  url: '/api/chat/getChatRoom',
                  data: {
                    room_id: that.room_id,
                    fromid: that.fromid
                  }
                });
              case 3:
                result = _context5.sent;
                if (!(result.statusCode == 200)) {
                  _context5.next = 41;
                  break;
                }
                if (!(result.data.code == 200)) {
                  _context5.next = 38;
                  break;
                }
                if (!(result.data.data.roomInfo.open == 0)) {
                  _context5.next = 9;
                  break;
                }
                _this10.shoudaoguanbo();
                return _context5.abrupt("return");
              case 9:
                if (result.data.data.roomInfo.id) {
                  _context5.next = 12;
                  break;
                }
                uni.showModal({
                  title: '提示',
                  content: '房间号不存在',
                  confirmText: '知道了',
                  showCancel: false,
                  success: function success(res) {
                    if (res.confirm) {
                      uni.navigateBack();
                    } else if (res.cancel) {
                      console.log('用户点击取消');
                    }
                  }
                });
                return _context5.abrupt("return");
              case 12:
                _this10.mailist[0].id = result.data.data.roomInfo.manage_id;
                _this10.mailist[0].open = 0;
                _this10.mailist[0].is_mai = 0;
                _this10.mailist[0].avatar = result.data.data.roomInfo.manage.avatar;
                _this10.mailist[0].nickname = result.data.data.roomInfo.manage.nickname;
                that.share = result.data.data.share;
                that.userinfo = result.data.data;
                that.roomInfo = result.data.data.roomInfo;
                that.roomtitle = result.data.data.roomInfo.title;
                that.roomtitle_sub = result.data.data.roomInfo.title_sub;
                that.roommoshi = result.data.data.roomInfo.moshi;
                that.manage = result.data.data.roomInfo.manage;
                that.fromname = result.data.data.fromInfo.nickname;
                that.fromhead = result.data.data.fromInfo.avatar;
                that.chaoguan = result.data.data.fromInfo.is_manage_normal;
                that.vip = result.data.data.fromInfo.vip;
                that.lv = result.data.data.fromInfo.lv;
                that.roomTitle = result.data.data.roomInfo.title;
                that.manage_id = result.data.data.roomInfo.manage_id;
                //that.userlist = result.data.data.userlist
                that.roombg = result.data.data.roomInfo.image;
                that.emolist = that.configInfo.emolist;
                join_room = '{"type":"join_room","lv":"' + _this10.lv + '",data":"' + _this10.fromname + '","vip":"' + _this10.vip + '","chaoguan":"' + _this10.chaoguan + '","room_id":"' + _this10.room_id + '","fromid":"' + _this10.fromid + '"}';
                uni.sendSocketMessage({
                  data: JSON.stringify({
                    type: 'join_room',
                    room_id: _this10.room_id,
                    chaoguan: _this10.chaoguan,
                    vip: _this10.vip,
                    fromid: _this10.fromid,
                    headimg: _this10.fromhead,
                    data: _this10.fromname
                  })
                });
                if (_this10.manage_id == _this10.fromid) {
                  _this10.is_zhubo = true;
                  _this10.is_manage = true;
                }
                _context5.next = 39;
                break;
              case 38:
                uni.showModal({
                  title: '提示',
                  content: result.data.msg,
                  confirmText: '知道了',
                  showCancel: false,
                  success: function success(res) {
                    if (res.confirm) {
                      uni.navigateBack();
                    } else if (res.cancel) {
                      console.log('用户点击取消');
                    }
                  }
                });
              case 39:
                _context5.next = 42;
                break;
              case 41:
                uni.showToast({
                  icon: 'none',
                  title: that.$errorMsg
                });
              case 42:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    guangtext: function guangtext(magess) {
      var that = this;
      var bodynei;
      bodynei = '送出【' + magess.giftname + '】x' + magess.giftnum;
      var message = '{"data":"' + bodynei + '","fromname":"' + this.fromname + '","fromhead":"' + this.fromhead + '","sec":"0","lv":"' + this.lv + '","type":"text","fromid":"' + this.fromid + '","room_id":"' + this.room_id + '"}';
      var inmsgsd = {
        is_self: false,
        type: 'text',
        lv: this.lv,
        content: bodynei,
        fromhead: this.fromhead,
        fromname: this.fromname,
        create_time: 0
      };
      this.pushmsg(inmsgsd);
      this.$socket.send(message);
    },
    sendmsg: function sendmsg() {
      if (this.sendmsgBoy == '') {
        this.msg('说点什么呀');
        return;
      }
      var that = this;
      var message = '{"data":"' + this.sendmsgBoy + '","fromname":"' + this.fromname + '","fromhead":"' + this.fromhead + '","sec":"0","lv":"' + this.lv + '","type":"text","fromid":"' + this.fromid + '","chaoguan":"' + this.chaoguan + '","vip":"' + this.vip + '","room_id":"' + this.room_id + '"}';
      var inmsgsd = {
        is_self: false,
        type: 'text',
        lv: this.lv,
        content: this.sendmsgBoy,
        fromhead: this.fromhead,
        chaoguan: this.chaoguan,
        vip: this.vip,
        fromname: this.fromname,
        create_time: 0
      };
      this.pushmsg(inmsgsd);
      this.shiquisd();
      this.$socket.send(message);
      this.sendmsgBoy = "";
    },
    pushmsg: function pushmsg(data) {
      this.talkList.push(data);
      this.bootem();
    },
    pushuserlist: function pushuserlist(data) {
      var shifouyou = false;
      for (var i in this.userlist) {
        if (this.userlist[i].user_id == data.user_id) {
          shifouyou = true;
          break;
        }
      }
      if (shifouyou == false) {
        this.userlist.push(data);
      }
    },
    gaibianzhuangtai: function gaibianzhuangtai(userid) {
      var _this11 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var that, result;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                that = _this11;
                _context6.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/room_update_user',
                  data: {
                    user_id: that.fromid,
                    room_id: that.room_id
                  }
                });
              case 3:
                result = _context6.sent;
              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    bootem: function bootem() {
      var _this12 = this;
      this.$nextTick(function () {
        //这里将 最后一条聊天的下标'chatItem_' + index 赋值给 刚刚绑定的scrollIntoIndex。这样就可以实现滚动到底部
        if (_this12.talkList.length > 1) {
          var index = _this12.talkList.length - 1;
          _this12.scrollIntoIndex = 'chatItem_' + index;
        }
      });
    },
    list: function list() {
      var _this13 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var that, result;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                that = _this13;
                _context7.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/room_userlist',
                  data: {
                    room_id: that.room_id,
                    page: that.ajax.page
                  }
                });
              case 3:
                result = _context7.sent;
                if (!(result.statusCode == 200)) {
                  _context7.next = 9;
                  break;
                }
                if (!(result.data.code == 200)) {
                  _context7.next = 7;
                  break;
                }
                return _context7.abrupt("return", result.data.data.data.reverse());
              case 7:
                _context7.next = 10;
                break;
              case 9:
                uni.showToast({
                  icon: 'none',
                  title: that.$errorMsg
                });
              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    // 发消息选中emoji
    chooseEmoji: function chooseEmoji(imageurl) {
      this.popshow = false;
      var inmsgsd = {
        is_self: false,
        type: 'image',
        lv: this.lv,
        content: imageurl,
        fromhead: this.fromhead,
        fromname: this.fromname,
        create_time: 0
      };
      this.pushmsg(inmsgsd);
      uni.sendSocketMessage({
        data: JSON.stringify({
          type: 'image',
          room_id: this.room_id,
          fromid: this.fromid,
          lv: this.lv,
          fromhead: this.fromhead,
          fromname: this.fromname,
          data: imageurl
        })
      });
    },
    tabChange: function tabChange(e) {
      this.emojiindex = e;
    },
    zhuanban: function zhuanban() {
      this.msg('装扮功能开发中');
    },
    liwu: function liwu() {
      this.gift_userid = 0;
      this.mailist_gift = this.mailist;
      this.popshowgift = true;
    },
    giftusere: function giftusere(item) {
      console.log(item);
      var list = [{
        id: item.id,
        open: 0,
        is_mai: 0,
        avatar: item.avatar,
        nickname: item.nickname,
        name: item.nickname
      }];
      this.gift_userid = item.id;
      this.userinfoshow = false;
      this.mailist_gift = JSON.stringify(list);
      this.popshowgift = true;
    },
    //、、、聊天、、、、
    destroyInstance: function destroyInstance() {},
    createTrtcCloud: function createTrtcCloud() {
      this.trtcCloud = _index.default.createInstance();
      this.handleEvents();
    },
    enterRoom: function enterRoom() {
      try {
        this.createTrtcCloud(); //连接云	      

        var roomId = this.roomId,
          userId = this.userId,
          sdkAppId = this.sdkAppId,
          appScene = this.appScene,
          userSig = this.userSig,
          role = this.role;
        var param = {
          roomId: +roomId,
          userId: userId,
          sdkAppId: sdkAppId,
          userSig: userSig,
          role: role
        };
        this.trtcCloud.enterRoom(param, appScene);
      } catch (error) {
        this.msg("\u8FDB\u5165\u623F\u95F4\u9519\u8BEF = ".concat(JSON.stringify(error)));
        console.log("\u8FDB\u5165\u623F\u95F4\u9519\u8BEF = ".concat(JSON.stringify(error)));
      }
    },
    exitRoom: function exitRoom() {
      try {
        if (this.manage_id == this.fromid) {
          this.fangjianclose();
        }
        this.remoteUserIdList = [];
      } catch (e) {
        console.log('退出错误');
        // TODO handle the exception
      }
    },
    startLocalAudio: function startLocalAudio() {
      this.is_kaimai = true;
      this.msg('麦克风已开启');
      for (var i in this.mailist) {
        if (this.mailist[i].id == this.fromid) {
          this.mailist[i].is_mai = 0;
        }
      }
      this.maiweichage();
    },
    stopLocalAudio: function stopLocalAudio() {
      this.is_kaimai = false;
      for (var i in this.mailist) {
        if (this.mailist[i].id == this.fromid) {
          this.mailist[i].is_mai = 1;
        }
      }
      this.maiweichage();
    },
    muteLocalAudio: function muteLocalAudio() {
      this.trtcCloud.muteLocalAudio(true);
    },
    muteLocalAudioopen: function muteLocalAudioopen() {
      this.trtcCloud.muteLocalAudio(false);
    },
    muteLocalAudioolose: function muteLocalAudioolose(userid) {
      this.trtcCloud.muteRemoteAudio(userid, true);
    },
    //用户申请连麦给管理员，需要发送一个send给管理员，管理员收到，点确认回复他。他在调用
    shenqinglianmai: function shenqinglianmai() {
      this.show_shenqing = true;
    },
    //主动上麦	
    zhudongshangmai: function zhudongshangmai() {
      this.is_zhubo = true;
    },
    tongyishangmai_zijikeshangmai: function tongyishangmai_zijikeshangmai() {
      this.msg('主播同意我上麦');
      for (var index in this.mailist) {
        if (this.mailist[index].id == 0 && this.mailist[index].open == 0) {
          this.mailist[index].id = this.userinfo.fromInfo.id;
          this.mailist[index].open = 0;
          this.mailist[index].is_mai = 0;
          this.mailist[index].avatar = this.userinfo.fromInfo.avatar;
          this.mailist[index].nickname = this.userinfo.fromInfo.nickname;
          this.maiweichage();
          this.zhudongshangmai();
          break;
        }
      }
    },
    qiangzhiwoxiamai: function qiangzhiwoxiamai() {
      this.msg('被管理踢下麦');
      this.xiamai();
    },
    //处理刚才上麦的人话筒状态
    chulimourenhuatong: function chulimourenhuatong(user_id, type) {
      for (var i in this.userlist) {
        if (this.userlist[i].user_id == user_id) {
          this.userlist[i].is_zhubo = type;
        }
      }
    },
    muteAllRemoteAudio: function muteAllRemoteAudio() {
      this.remoteAudioMuteState = !this.remoteAudioMuteState;
      this.trtcCloud.muteAllRemoteAudio(this.remoteAudioMuteState);
    },
    handleEvents: function handleEvents() {
      var _this14 = this;
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
        if (result > 0) {
          console.log('连接腾讯云成功');
          if (_this14.manage_id == _this14.fromid) {
            _this14.is_zhubo = true;
            _this14.is_manage = true;
          }
        } else {
          console.log("enter room failed\uFF0Cerror code = ".concat(result));
        }
      });
      this.trtcCloud.on('onExitRoom', function (reason) {
        var reasonList = ['主动调用 exitRoom 退房', '被服务器踢出当前房间', '当前房间整个被解散'];
        console.log('退出房间：' + reasonList[reason]);
      });
      this.trtcCloud.on('onSendFirstLocalAudioFrame', function (res) {
        console.log("\u5F00\u59CB\u4F20\u8F93\u97F3\u9891\uFF0C\u53EF\u4EE5\u8BF4\u8BDD = ".concat(JSON.stringify(res)));
      });
      this.trtcCloud.on('onSwitchRole', function (res) {
        console.log("\u8F6C\u6362\u8EAB\u4EFD\u7ED3\u679C = ".concat(JSON.stringify(res)));
      });
      this.trtcCloud.on('onUserAudioAvailable', function (res) {
        if (res.available == true) {
          var user_id = res.userId.slice(5);
          for (var i in _this14.mailist) {
            if (_this14.mailist[i].id == user_id) {
              _this14.mailist[i].maikefeng = true;
            }
          }
          console.log(res.userId + '在说话');
        } else {
          var _user_id = res.userId.slice(5);
          for (var _i in _this14.mailist) {
            if (_this14.mailist[_i].id == _user_id) {
              _this14.mailist[_i].maikefeng = false;
            }
          }
          console.log(res.userId + '没说话');
        }
      });
      this.trtcCloud.on('onRemoteUserEnterRoom', function (userId) {
        if (!_this14.remoteUserIdList.includes(userId)) {
          _this14.remoteUserIdList.push(userId);
        }
        console.log('远端用户进入' + userId);
      });
      this.trtcCloud.on('onRemoteUserLeaveRoom', function (res) {
        var userId = res.userId,
          reason = res.reason;
        if (userId) {
          var list = _this14.remoteUserIdList.filter(function (val) {
            return val !== userId;
          });
          _this14.remoteUserIdList = list;
        }
        console.log('远端用户退出' + userId);
      });
    },
    handleUninstallEvents: function handleUninstallEvents() {
      this.trtcCloud.off('*');
    },
    //、、、、、、、、、、、
    likaisocket: function likaisocket() {
      var _this15 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var i;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                uni.sendSocketMessage({
                  data: JSON.stringify({
                    type: 'leaveGroup',
                    room_id: _this15.room_id,
                    fromid: _this15.fromid
                  })
                });
                _context8.t0 = _regenerator.default.keys(_this15.userlist);
              case 2:
                if ((_context8.t1 = _context8.t0()).done) {
                  _context8.next = 9;
                  break;
                }
                i = _context8.t1.value;
                if (!(_this15.userlist[i].user_id == _this15.fromid)) {
                  _context8.next = 7;
                  break;
                }
                _this15.xiamai();
                return _context8.abrupt("break", 9);
              case 7:
                _context8.next = 2;
                break;
              case 9:
                _this15.exitRoom();
              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    //远端离开房间的某一个
    shanchuuserlist: function shanchuuserlist(user_id) {
      console.log('socket远端离开了' + user_id);
      for (var i in this.userlist) {
        if (this.userlist[i].user_id == user_id) {
          this.userlist.splice(i, 1);
        }
      }
      if (user_id == this.manage_id) {
        this.shoudaoguanbo();
      }
    },
    //管理员同意用户上麦
    manage_tongyishangmai: function manage_tongyishangmai(res) {
      this.tanchutongyiis = false;
      if (res == 1) {
        uni.sendSocketMessage({
          data: JSON.stringify({
            type: 'tongyishangmai',
            room_id: this.room_id,
            fromid: this.shen_userid
          })
        });
      }
    },
    //管理员下麦用户上麦
    qianzhixiamia: function qianzhixiamia(id) {
      if (this.manage_id == id) {
        this.msg('自己踢自己干啥');
        return;
      }
      uni.sendSocketMessage({
        data: JSON.stringify({
          type: 'qianzhixiamia',
          room_id: this.room_id,
          fromid: id
        })
      });
    },
    //管理员踢出去我
    tichufanfgjian: function tichufanfgjian(id) {
      if (this.manage_id == id) {
        this.msg('自己踢自己干啥');
        return;
      }
      this.exitRoom();
      console.log(id);
      uni.sendSocketMessage({
        data: JSON.stringify({
          type: 'tichufangjian',
          room_id: this.room_id,
          fromid: id
        })
      });
    },
    tanchutongyi: function tanchutongyi(userid, nickename, headimg) {
      this.shen_userid = userid;
      this.shen_nickename = nickename + '发起了上麦请求';
      this.tanchutongyiis = true;
    },
    xiamai: function xiamai() {
      this.is_zhubo = false;
      this.is_kaimai = false;
      for (var index in this.mailist) {
        if (this.mailist[index].id == this.userinfo.fromInfo.id) {
          this.mailist[index].id = 0;
          this.mailist[index].open = 0;
          this.mailist[index].is_mai = 0;
          this.mailist[index].avatar = '';
          this.mailist[index].nickname = index + '号麦位';
        }
      }
      this.msg('成功');
      this.maiweichage();
    },
    handleEmoji: function handleEmoji() {
      this.popshow = true;
    },
    showinfo: function showinfo(id) {
      var _this16 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var that, result, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                that = _this16;
                _context9.next = 3;
                return that.$request({
                  loading: 1,
                  method: 'post',
                  url: '/api/index/GetUser',
                  data: {
                    user_id: id
                  }
                });
              case 3:
                result = _context9.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    that.userinfoshow = true;
                    for (i in that.mailist) {
                      if (that.mailist[i].id == id) {
                        that.ismaishang = true;
                      }
                    }
                    that.userinfo = result.data.data.userinfo;
                  }
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: that.$errorMsg
                  });
                }
              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    tichufangjian: function tichufangjian() {
      setTimeout(function () {
        uni.navigateBack();
      }, 5000);
      uni.showModal({
        title: '提示',
        content: '你被管理员踢出，5秒后自动离开',
        confirmText: '确定',
        showCancel: false,
        success: function success(res) {
          if (res.confirm) {
            uni.navigateBack();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    goBackfanhui: function goBackfanhui() {
      //this.likaisocket()
      //this.destroyInstance()
      // 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
      var pages = getCurrentPages();
      if (pages && pages.length > 0) {
        var firstPage = pages[0];
        if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index')) {
          uni.reLaunch({
            url: '/pages/index'
          });
        } else {
          uni.navigateBack();
        }
      } else {
        console.log(1113);
        uni.reLaunch({
          url: '/pages/index'
        });
      }
    },
    gohome: function gohome() {
      this.likaisocket();
      this.destroyInstance();
      uni.reLaunch({
        url: '/pages/index'
      });
    },
    maiweichage: function maiweichage() {
      uni.sendSocketMessage({
        data: JSON.stringify({
          type: 'mailist',
          room_id: this.room_id,
          mailistdata: this.mailist
        })
      });
    },
    zijimaichane: function zijimaichane(mailist) {
      //console.log('收到麦上的名单')
      this.mailist = mailist;
    },
    bind: function bind() {
      var msg = {
        'type': 'bind',
        'fromid': uni.getStorageSync('user_id')
      };
      uni.sendSocketMessage({
        data: JSON.stringify(msg),
        success: function success(res) {
          console.log('重新连接聊天服务器' + uni.getStorageSync('user_id'), res);
        },
        fail: function fail(res) {
          console.log('重复绑定会员id');
          //console.log('绑定会员id失败'+uni.getStorageSync('user_id'), res)
        }
      });
    },
    mixwindows: function mixwindows() {
      uni.reLaunch({
        url: '/pages/index'
      });
    },
    jinggaoguanbo: function jinggaoguanbo() {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '你确定要强制关闭该房间吗？房间关闭用户强制退出',
        success: function success(res) {
          if (res.confirm) {
            uni.sendSocketMessage({
              data: JSON.stringify({
                type: 'roomqita',
                room_id: that.room_id,
                title: that.roomtitle,
                datatype: 'guanbo'
              })
            });
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    guanbo: function guanbo() {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '你确定要关播吗？房间关闭用户强制退出',
        success: function success(res) {
          if (res.confirm) {
            uni.sendSocketMessage({
              data: JSON.stringify({
                type: 'guanbo',
                room_id: this.room_id
              })
            });
            that.likaisocket();
            that.destroyInstance();
            uni.navigateBack();
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      });
    },
    fangjianclose: function fangjianclose(userid) {
      var _this17 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var that, result;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                that = _this17;
                _context10.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/room_close',
                  data: {
                    room_id: that.room_id
                  }
                });
              case 3:
                result = _context10.sent;
              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    xiugairoom: function xiugairoom() {
      var _this18 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var that, result;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                that = _this18;
                _context11.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/room_update',
                  data: {
                    room_id: that.room_id,
                    roomtitle: that.roomtitle,
                    roomtitle_sub: that.roomtitle_sub,
                    roommoshi: that.roommoshi
                  }
                });
              case 3:
                result = _context11.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    that.shezhishow = false;
                    that.msg('设置成功');
                    that.roomInfo.title = that.roomtitle;
                    that.roomInfo.title_sub = that.roomtitle_sub;
                    that.roomInfo.moshi = that.roommoshi;
                    uni.sendSocketMessage({
                      data: JSON.stringify({
                        type: 'roomqita',
                        room_id: that.room_id,
                        title: that.roomtitle,
                        datatype: 'moshichane',
                        title_sub: that.roomtitle_sub,
                        moshi: that.roommoshi
                      })
                    });
                  } else {
                    uni.showToast({
                      icon: 'none',
                      title: result.data.msg
                    });
                  }
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: that.$errorMsg
                  });
                }
              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    shoudaoguanbo: function shoudaoguanbo() {
      var _this19 = this;
      setTimeout(function () {
        _this19.goBackfanhui();
      }, 5000);
      this.guanboshow = true;
    },
    gaosuxinrenmailis: function gaosuxinrenmailis() {
      if (this.manage_id == this.fromid) {
        this.maiweichage();
      }
    },
    gaosuxinrenuserlist: function gaosuxinrenuserlist() {
      //管理员下发给新人
      if (this.manage_id == this.fromid) {
        uni.sendSocketMessage({
          data: JSON.stringify({
            type: 'userlist',
            room_id: this.room_id,
            userlist: this.userlist
          })
        });
      }
    },
    jinggaopass: function jinggaopass() {
      this.tishishow = true;
      this.tishi_title = '巡管警告';
      this.tishi_body = this.jinggaobody;
      this.jinggaoshow = false;
      uni.sendSocketMessage({
        data: JSON.stringify({
          type: 'roomqita',
          room_id: this.room_id,
          datatype: 'jinggao',
          tishi_title: this.tishi_title,
          tishi_body: this.jinggaobody
        })
      });
    },
    shoudaozaixainuser: function shoudaozaixainuser(userlist) {
      this.userlist = userlist;
    },
    guanzhu: function guanzhu() {
      var _this20 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var result;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (_this20.isLogin) {
                  _context12.next = 3;
                  break;
                }
                _this20.loginBoxFlag = true;
                return _context12.abrupt("return", false);
              case 3:
                _context12.next = 5;
                return _this20.flowUser(_this20.manage_id);
              case 5:
                result = _context12.sent;
                _this20.roomInfo.is_follow = result.is_follow;
                _this20.msg(result.msg);
              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    },
    tongyongmessge: function tongyongmessge(massge) {
      if (massge.datatype == 'moshichane') {
        this.roomInfo.title = massge.title;
        this.roomInfo.title_sub = massge.title_sub;
        this.roomInfo.moshi = massge.datatype;
      }
      if (massge.datatype == 'jinggao') {
        this.tishi_title = massge.tishi_title;
        this.tishi_body = massge.tishi_body;
        this.tishishow = true;
      }
      if (massge.datatype == 'guanbo') {
        this.shoudaoguanbo();
      }
    },
    chanebang: function chanebang(type) {
      this.bang_type = type;
      if (type < 4) {
        this.getbanglist(type);
      }
    },
    getbanglist: function getbanglist(type) {
      var _this21 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var that, result;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                that = _this21;
                _context13.next = 3;
                return that.$request({
                  loading: 1,
                  method: 'post',
                  url: '/api/gift/rank',
                  data: {
                    id: that.manage_id,
                    type: type
                  }
                });
              case 3:
                result = _context13.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    that.bangdanlist = result.data.data;
                  } else {
                    uni.showToast({
                      icon: 'none',
                      title: result.data.msg
                    });
                  }
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: that.$errorMsg
                  });
                }
              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }))();
    },
    donghua: function donghua() {
      var baoxiangmone = uni.createAnimation({
        duration: 1000,
        timingFunction: 'ease'
      });
      this.baoxiangmone = baoxiangmone;
      baoxiangmone.translate(-100).step({
        duration: 500
      });
      baoxiangmone.scale(3, 3).step();
      baoxiangmone.scale(1, 1).step();
      baoxiangmone.translate(0).step({
        duration: 500
      });
      this.baoxiangmone = baoxiangmone.export();

      // 1: 创建动画实例animation:
      var animation = uni.createAnimation({
        duration: 500,
        timingFunction: 'ease'
      });
      this.animation = animation;
      var next = true;
      //连续动画关键步骤
      setInterval(function () {
        //2: 调用动画实例方法来描述动画
        if (next) {
          animation.translateX(4).step();
          animation.rotate(19).step();
          next = !next;
        } else {
          animation.translateX(-4).step();
          animation.rotate(-19).step();
          next = !next;
        }
        //3: 将动画export导出，把动画数据传递组件animation的属性 
        this.animation = animation.export();
      }.bind(this), 300);
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 763:
/*!******************************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/room_text.vue?vue&type=style&index=0&id=d284df74&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_style_index_0_id_d284df74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./room_text.vue?vue&type=style&index=0&id=d284df74&lang=scss&scoped=true& */ 764);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_style_index_0_id_d284df74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_style_index_0_id_d284df74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_style_index_0_id_d284df74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_style_index_0_id_d284df74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_room_text_vue_vue_type_style_index_0_id_d284df74_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 764:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/room_text.vue?vue&type=style&index=0&id=d284df74&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[757,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/minePages/chat/room_text.js.map