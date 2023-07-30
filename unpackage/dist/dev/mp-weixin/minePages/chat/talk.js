require('../common/vendor.js');(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["minePages/chat/talk"],{

/***/ 743:
/*!**********************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/main.js?{"page":"minePages%2Fchat%2Ftalk"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _talk = _interopRequireDefault(__webpack_require__(/*! ./minePages/chat/talk.vue */ 744));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_talk.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 744:
/*!***************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/talk.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./talk.vue?vue&type=template&id=9c6a59f2&scoped=true& */ 745);
/* harmony import */ var _talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./talk.vue?vue&type=script&lang=js& */ 747);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _talk_vue_vue_type_style_index_0_id_9c6a59f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./talk.vue?vue&type=style&index=0&id=9c6a59f2&lang=scss&scoped=true& */ 749);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9c6a59f2",
  null,
  false,
  _talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "minePages/chat/talk.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 745:
/*!**********************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/talk.vue?vue&type=template&id=9c6a59f2&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./talk.vue?vue&type=template&id=9c6a59f2&scoped=true& */ 746);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_template_id_9c6a59f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 746:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/talk.vue?vue&type=template&id=9c6a59f2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    tnNavBar: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-nav-bar/tn-nav-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-nav-bar/tn-nav-bar.vue */ 778))
    },
    tnActionSheet: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-action-sheet/tn-action-sheet */ "tuniao-ui/components/tn-action-sheet/tn-action-sheet").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-action-sheet/tn-action-sheet.vue */ 1265))
    },
    tnButton: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-button/tn-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-button/tn-button")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-button/tn-button.vue */ 877))
    },
    tnLoading: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-loading/tn-loading */ "tuniao-ui/components/tn-loading/tn-loading").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-loading/tn-loading.vue */ 1211))
    },
    tnModal: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-modal/tn-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-modal/tn-modal")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-modal/tn-modal.vue */ 870))
    },
    tnPopup: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-popup/tn-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-popup/tn-popup")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-popup/tn-popup.vue */ 926))
    },
    tnEmpty: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-empty/tn-empty */ "tuniao-ui/components/tn-empty/tn-empty").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-empty/tn-empty.vue */ 905))
    },
    tnListCell: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-list-cell/tn-list-cell */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-list-cell/tn-list-cell")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-list-cell/tn-list-cell.vue */ 863))
    },
    tnTabs: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-tabs/tn-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-tabs/tn-tabs")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-tabs/tn-tabs.vue */ 835))
    },
    giftList: function () {
      return __webpack_require__.e(/*! import() | components/gift-list/gift-list */ "components/gift-list/gift-list").then(__webpack_require__.bind(null, /*! @/components/gift-list/gift-list.vue */ 1136))
    },
    dkTanchuang: function () {
      return Promise.all(/*! import() | components/dk-tanchuang/dk-tanchuang */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/dk-tanchuang/dk-tanchuang")]).then(__webpack_require__.bind(null, /*! @/components/dk-tanchuang/dk-tanchuang.vue */ 1143))
    },
    lSvga: function () {
      return Promise.all(/*! import() | uni_modules/lime-svga/components/l-svga/l-svga */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/lime-svga/components/l-svga/l-svga")]).then(__webpack_require__.bind(null, /*! @/uni_modules/lime-svga/components/l-svga/l-svga.vue */ 1150))
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
  var l0 = _vm.__map(_vm.talkList, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 = _vm.withinArry.indexOf(index)
    var m0 = g0 == -1 ? _vm.timeChange(item.create_time) : null
    return {
      $orig: $orig,
      g0: g0,
      m0: m0,
    }
  })
  var g1 = _vm.zujulist.length
  var m1 = Number(_vm.toid)
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.listshow = true
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g1: g1,
        m1: m1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 747:
/*!****************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/talk.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./talk.vue?vue&type=script&lang=js& */ 748);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 748:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/talk.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 56));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 58));
var _siteinfo = __webpack_require__(/*! @/siteinfo.js */ 33);
var _template_page_mixin = _interopRequireDefault(__webpack_require__(/*! @/libs/mixin/template_page_mixin.js */ 68));
var _permission = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/wa-permission/permission.js */ 740));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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
  data: function data() {
    return {
      is_liao: 0,
      chatindex: -1,
      listanniu: [{
        text: '拉黑'
      }, {
        text: '删除记录'
      }, {
        text: '举报'
      }],
      listshow: false,
      //、
      zujukey: '',
      zujulist: [],
      zujushow: false,
      moreshow: false,
      /////
      qipaofrom: '',
      qipaoto: '',
      liwusvgashow: false,
      giftimg: '',
      giftianchu: false,
      giftitle: '',
      gifcontent: '',
      //、
      button: [{
        text: '取消',
        backgroundColor: '#c1c1c1',
        fontColor: '#000000'
      }, {
        text: '立即充值',
        backgroundColor: '#ffff00',
        fontColor: '#000000'
      }],
      chongzhiis: false,
      shouhutype: '3',
      shouhuxiu: false,
      isReady: false,
      popshow: false,
      //、、
      is_xianzhi: false,
      is_liaoguo: true,
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
      withinArry: [],
      userinfo: [],
      toname: '',
      fromname: '',
      tohead: '',
      fromhead: '',
      content: [],
      userInfoAvatar_no: '/static/navigation.png',
      sendmsgBoy: '',
      toid: 0,
      fromid: 0,
      is_online: '离线',
      /////
      messageContent: '',
      conversation: {},
      messageKey: '',
      lastMsgTime: '',
      count: 15,
      isEmojiOpen: false,
      isMoreOpen: false,
      isFocus: false,
      isGroup: false,
      messageList: [],
      height: 0,
      modalVisible: false,
      downloadInfo: {},
      percent: 0,
      sysInfo: {},
      customModalVisible: false,
      customData: '',
      customDescription: '',
      customExtension: '',
      focusedInput: '',
      safeBottom: 34,
      isRecord: false,
      isRecording: false,
      canSend: true,
      startPoint: 0,
      title: '正在录音',
      rateModal: false,
      rate: 5,
      isShow: false,
      faceUrl: '',
      emojiShow: true,
      revokeModal: false,
      revokeMessage: {},
      currentTime: 0,
      currentTimeID: '',
      isIphoneX: true,
      timer: null,
      sec: 0,
      to_is_online: 0,
      totags: '',
      pipei: 0,
      jubaoshow: false,
      jubao_body: ''
    };
  },
  onLoad: function onLoad(option) {
    var _this = this;
    var that = this;
    uni.$off('talkMessage');
    uni.$off('liwuoksvga_talk');
    uni.$off('liwuok_talk');
    uni.$off('talkMessage');
    if (option.toid) {
      this.toid = option.toid;
    }
    if (option.index) {
      this.chatindex = option.index;
    }
    this.fromid = uni.getStorageSync('user_id');
    this.$socket.bind();
    this.jintian = this.getNowDate();
    this.info();
    this.getHistoryMsg();
    var online = '{"type":"online","toid":"' + this.toid + '","fromid":"' + this.fromid + '"}';
    this.$socket.send(online);

    // 注册接受消息监听
    uni.$on('talkMessage', function (message) {
      switch (message.type) {
        case "text":
          if (_this.toid == message.fromid) {
            var inmsg = {
              is_self: false,
              type: 'text',
              content: message.data,
              create_time: message.create_time
            };
            _this.pushmsg(inmsg);
            _this.paymp3('/static/shou.mp3', 0);
            _this.changeNoRead();
            _this.is_liaoguo = true;
            uni.$emit('jianshacount', 1);
          }
          return;
        case "music":
          if (_this.toid == message.fromid) {
            var _inmsg = {
              is_self: false,
              type: 'music',
              sec: message.sec,
              content: message.data,
              create_time: message.create_time
            };
            _this.is_liaoguo = true;
            _this.pushmsg(_inmsg);
            _this.paymp3('/static/shou.mp3', 0);
            _this.changeNoRead();
            uni.$emit('jianshacount', 1);
          }
          return;
        case "liwuuser":
          if (_this.toid == message.fromid) {
            var liwudata = message.data.replace(/\'/g, '"');
            var liwujosn = JSON.parse(liwudata);
            var _inmsg2 = {
              is_self: false,
              type: 'liwuuser',
              sec: message.sec,
              content: liwujosn,
              gift: liwujosn,
              create_time: message.create_time
            };
            _this.is_liaoguo = true;
            _this.pushmsg(_inmsg2);
            _this.paymp3('/static/shou.mp3', 0);
            _this.changeNoRead();
            uni.$emit('jianshacount', 1);
            if (message.sec == 1) {
              _this.giftimg = liwujosn.image;
              _this.giftitle = "收到礼物";
              _this.giftianchu = true;
              _this.gifcontent = '';
              _this.popshow = false;
              setTimeout(function () {
                _this.giftianchu = false;
              }, 2000);
            }
            if (message.sec == 2) {
              _this.gifcontent = '';
              _this.popshow = false;
              _this.liwu(liwujosn.svga);
            }
          }
          return;
        case "face":
          if (_this.toid == message.fromid) {
            var _inmsg3 = {
              is_self: false,
              type: 'face',
              sec: message.sec,
              content: message.data,
              create_time: message.create_time
            };
            _this.is_liaoguo = true;
            _this.pushmsg(_inmsg3);
            _this.paymp3('/static/shou.mp3', 0);
            _this.changeNoRead();
            uni.$emit('jianshacount', 1);
          }
          return;
        case "image":
          if (_this.toid == message.fromid) {
            var _inmsg4 = {
              is_self: false,
              type: 'image',
              sec: message.sec,
              content: message.data,
              create_time: message.create_time
            };
            _this.is_liaoguo = true;
            _this.pushmsg(_inmsg4);
            _this.paymp3('/static/shou.mp3', 0);
            _this.changeNoRead();
            uni.$emit('jianshacount', 1);
          }
          return;
        case "save":
          if (message.isread == 1) {
            _this.is_online = '已读';
          } else {
            _this.is_online = '未读';
          }
          return;
        case "online":
          if (message.status == 1) {
            _this.is_online = '在线';
          } else {
            _this.is_online = '离线';
          }
          return;
        case 'roomqita':
          //通用广播
          if (_this.toid == message.fromid) {
            _this.zhixing(message);
          }
          return;
      }
    });

    ///监听语音
    recorderManager.onStart(function () {
      console.log('recorder start');
    });
    recorderManager.onPause(function () {
      console.log('recorder pause');
    });
    recorderManager.onStop(function (res) {
      audioContext.src = res.tempFilePath;
      var sec = 0;
      setTimeout(function () {
        sec = that.sec;
        console.log(sec, that.sec);
        if (that.canSend) {
          if (sec < 2) {
            that.msg('太短了');
          } else {
            that.sendmp3(res.tempFilePath, sec);
          }
        }
      }, 500);
    });
    uni.$on('liwuok_talk', function (data) {
      _this.giftimg = data.image;
      _this.giftitle = "成功送出礼物";
      _this.giftianchu = true;
      _this.gifcontent = '';
      _this.popshow = false;
      setTimeout(function () {
        _this.giftianchu = false;
      }, 2000);
      var postdata = JSON.stringify(data).replace(/\"/g, "'");
      console.log('送出gifliwu');
      _this.faliwu(postdata, 1);
    });
    uni.$on('liwuoksvga_talk', function (data) {
      console.log('收到svga' + data.svga);
      _this.gifcontent = '';
      _this.popshow = false;
      _this.liwu(data.svga);
      var postdata = JSON.stringify(data).replace(/\"/g, "'");
      _this.faliwu(postdata, 2);
    });
  },
  onPageScroll: function onPageScroll(e) {
    if (e.scrollTop < 5) {
      this.getHistoryMsg();
    }
  },
  onUnload: function onUnload() {},
  methods: {
    click: function click(index) {
      //2删除 1拉黑
      if (index == 2) {
        this.jubaoshow = true;
        return;
      }
      this.onSwiperItemClick(index + 1);
    },
    onSwiperItemClick: function onSwiperItemClick(status) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var that, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this2;
                _context.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/delChatLognew',
                  data: {
                    toid: _this2.toid,
                    status: status
                  }
                });
              case 3:
                result = _context.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    if (status == 1) {
                      _this2.msg('拉黑成功');
                      uni.$emit('lahie', _this2.chatindex);
                      uni.navigateBack();
                    }
                    if (status == 2) {
                      _this2.msg('删除记录成功');
                      _this2.talkList = [];
                    }
                    //this.content.splice(e.name, 1);			
                  }
                }
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    songliwushow: function songliwushow() {
      if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
        this.msg('等待对方回复');
        return;
      }
      this.popshow = true;
    },
    faliwu: function faliwu(item, gif) {
      var that = this;
      var message = '{"data":"' + item + '","sec":"' + gif + '","type":"liwuuser","fromid":"' + this.fromid + '","toid":"' + this.toid + '"}';
      var liwudata = item.replace(/\'/g, '"');
      var liwujosn = JSON.parse(liwudata);
      var inmsg = {
        is_self: true,
        content: item,
        gift: liwujosn,
        type: 'liwuuser',
        sec: gif,
        create_time: that.jintian
      };
      this.pushmsg(inmsg);
      this.paymp3('/static/fa.mp3', 0);
      console.log('传输到后台');
      this.save_message(message);
    },
    zhixing: function zhixing(msg) {
      var that = this;
      if (msg.datatype == 'pipeitongzhi') {}
    },
    fazuju: function fazuju(item) {
      var that = this;
      var message = '{"data":"' + item.detail + '","sec":"' + item.id + '","type":"text","fromid":"' + this.fromid + '","toid":"' + this.toid + '"}';
      if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
        this.msg('等待对方回复');
        return;
      }
      var inmsg = {
        is_self: true,
        content: item.detail,
        type: 'text',
        sec: item.id,
        create_time: that.jintian
      };
      this.pushmsg(inmsg);
      this.paymp3('/static/fa.mp3', 0);
      this.save_message(message);
      this.zujushow = false;
      this.moreshow = false;
    },
    dakaijuju: function dakaijuju() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var that, result;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = _this3;
                _context2.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/zuju/getList',
                  data: {
                    key: _this3.zujukey
                  }
                });
              case 3:
                result = _context2.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    _this3.zujushow = true;
                    _this3.zujulist = result.data.data.data;
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
    jubaopass: function jubaopass() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this4;
                if (!(that.jubao_body == '')) {
                  _context3.next = 4;
                  break;
                }
                _this4.msg('请输入举报理由');
                return _context3.abrupt("return");
              case 4:
                _context3.next = 6;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/user/addReport',
                  data: {
                    goods_id: that.toid,
                    type: 1,
                    content: that.jubao_body
                  }
                });
              case 6:
                result = _context3.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    that.jubao_body = '';
                    _this4.msg(result.data.msg);
                    _this4.jubaoshow = false;
                  }
                }
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    closedPopup: function closedPopup() {
      this.popshow = false;
    },
    info: function info() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var that, result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = _this5;
                _context4.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/getChatTwoUser',
                  data: {
                    toid: that.toid,
                    fromid: that.fromid
                  }
                });
              case 3:
                result = _context4.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    if (result.data.data.is_liaoguo == 0) {
                      that.is_liaoguo = false;
                    }
                    that.is_liao = result.data.data.toInfo.is_liao;
                    that.qipaofrom = result.data.data.fromInfo.qipao;
                    that.qipaoto = result.data.data.toInfo.qipao;
                    that.to_is_online = result.data.data.toInfo.is_online;
                    that.userinfo = result.data.data;
                    that.toname = result.data.data.toInfo.nickname;
                    that.fromname = result.data.data.fromInfo.nickname;
                    that.tohead = result.data.data.toInfo.avatar;
                    that.fromhead = result.data.data.fromInfo.avatar;
                    that.totags = result.data.data.toInfo.tags;
                    that.pipei = result.data.data.toInfo.pipei;
                  } else {
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
                  }
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: that.$errorMsg
                  });
                }
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    changeNoRead: function changeNoRead() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var that, result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                that = _this6;
                _context5.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/changeNoRead',
                  data: {
                    toid: that.toid
                  }
                });
              case 3:
                result = _context5.sent;
              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    save_message: function save_message(datassd) {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var that, result;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                that = _this7;
                _context6.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/save_message',
                  data: datassd
                });
              case 3:
                result = _context6.sent;
                if (result.data.code == 200) {
                  _this7.$socket.send(datassd);
                } else {
                  uni.showModal({
                    title: '提示',
                    content: result.data.msg,
                    confirmText: '去充值',
                    success: function success(res) {
                      if (res.confirm) {
                        this.navigateToFn({
                          url: '/minePages/gift/chongzhi',
                          checkLogin: true
                        });
                      } else if (res.cancel) {
                        console.log('用户点击取消');
                      }
                    }
                  });
                }
                //暂时关闭聊天列表刷新
                uni.$emit('fasonglist', true);
              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    sendmsg: function sendmsg() {
      if (!this.sendmsgBoy) {
        return;
      }
      var that = this;
      var message = '{"data":"' + this.sendmsgBoy + '","sec":"' + this.sec + '","type":"text","fromid":"' + this.fromid + '","toid":"' + this.toid + '"}';
      if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
        this.msg('等待对方回复');
        return;
      }
      var inmsg = {
        is_self: true,
        content: this.sendmsgBoy,
        type: 'text',
        sec: 0,
        create_time: that.jintian
      };
      this.pushmsg(inmsg);
      this.paymp3('/static/fa.mp3', 0);
      this.isEmojiOpen = false;
      this.save_message(message);
      this.isFocus = true;
    },
    sendmp3: function sendmp3(url, sec) {
      var _this8 = this;
      var that = this;
      if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
        this.msg('等待对方回复');
        return;
      }
      var inmsg = {
        is_self: true,
        content: url,
        id: 1,
        type: 'music',
        sec: sec,
        create_time: that.jintian
      };
      this.pushmsg(inmsg);
      this.paymp3('/static/fa.mp3');
      uni.uploadFile({
        url: _siteinfo.host + '/api/user/up_mp3',
        //仅为示例，非真实的接口地址
        filePath: url,
        name: 'file',
        formData: {
          'token': uni.getStorageSync('token'),
          'user': 'test'
        },
        success: function success(uploadFileRes) {
          var data = JSON.parse(uploadFileRes.data);
          var mp3url = data.data.file;
          var message = '{"data":"' + mp3url + '","sec":"' + sec + '","type":"music","fromid":"' + _this8.fromid + '","toid":"' + _this8.toid + '"}';
          _this8.save_message(message);
        }
      });
    },
    pushmsg: function pushmsg(data) {
      this.sendmsgBoy = '';
      this.talkList.push(data);
      this.doHistory();
      this.bootem();
    },
    bootem: function bootem() {
      this.$nextTick(function () {
        uni.pageScrollTo({
          scrollTop: 999999,
          // 设置一个超大值，以保证滚动条滚动到底部
          duration: 0
        });
      });
    },
    list: function list() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var that, result;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                that = _this9;
                _context7.next = 3;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/chat/load',
                  data: {
                    toid: that.toid,
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
    doHistory: function doHistory() {
      var within = [];
      for (var i = 0; i < this.talkList.length; i++) {
        if (this.talkList.length >= i + 2) {
          var lst = Date.parse(this.talkList[i + 1].create_time.replace(/-/g, '/')) - Date.parse(this.talkList[i].create_time.replace(/-/g, '/'));
          //（60000 == 一分钟）
          if (lst < 300000) {
            //获取小于5分钟的信息的下标存到数组中
            within.push(i + 1);
            within.forEach(function (item, i) {
              //6条信息后显示一次发送时间
              if (item % 8 == 0) {
                within.splice(i, 1);
              } else {
                return true;
              }
            });
            this.withinArry = within;
          }
        }
      }
    },
    // 获取消息
    getHistoryMsg: function getHistoryMsg() {
      var _this10 = this;
      if (!this.ajax.flag) {
        return;
      }
      var get = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
          var data, selector;
          return _regenerator.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  //this.hideLoadTips();
                  _this10.ajax.flag = false;
                  _context8.next = 3;
                  return _this10.list();
                case 3:
                  data = _context8.sent;
                  if (!(data.length == 0)) {
                    _context8.next = 7;
                    break;
                  }
                  _this10.ajax.loading = false;
                  return _context8.abrupt("return");
                case 7:
                  selector = '';
                  if (_this10.ajax.page > 1) {
                    // 非第一页，则取历史消息数据的第一条信息元素
                    selector = "#msg-".concat(_this10.talkList[0].id);
                  } else {
                    // 第一页，则取当前消息数据的最后一条信息元素
                    selector = "#msg-".concat(data[data.length - 1].id);
                  }

                  // 将获取到的消息数据合并到消息数组中
                  _this10.talkList = [].concat((0, _toConsumableArray2.default)(data), (0, _toConsumableArray2.default)(_this10.talkList));
                  _this10.doHistory();

                  // 数据挂载后执行，不懂的请自行阅读 Vue.js 文档对 Vue.nextTick 函数说明。
                  _this10.$nextTick(function () {
                    // 设置当前滚动的位置
                    _this10.setPageScrollTo(selector);
                    _this10.hideLoadTips(true);
                    if (data.length < _this10.ajax.rows) {
                      //this.msg('没有记录了哦')
                    } else {
                      _this10.ajax.page++;
                      // 延迟 200ms ，以保证设置窗口滚动已完成
                      setTimeout(function () {
                        _this10.ajax.flag = true;
                      }, 200);
                    }
                  });
                case 12:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8);
        }));
        return function get() {
          return _ref.apply(this, arguments);
        };
      }();
      get();
    },
    // 设置页面滚动位置
    setPageScrollTo: function setPageScrollTo(selector) {
      var view = uni.createSelectorQuery().in(this).select(selector);
      view.boundingClientRect(function (res) {
        uni.pageScrollTo({
          scrollTop: res.top - 50,
          // -30 为多显示出大半个消息的高度，示意上面还有信息。
          duration: 0
        });
      }).exec();
    },
    // 隐藏加载提示
    hideLoadTips: function hideLoadTips(flag) {
      var _this11 = this;
      if (flag) {
        setTimeout(function () {
          _this11.ajax.loading = false;
        }, 300);
      } else {
        this.ajax.loading = true;
      }
    },
    getNowDate: function getNowDate() {
      var date = new Date();
      var sign2 = ":";
      var year = date.getFullYear(); // 年
      var month = date.getMonth() + 1; // 月
      var day = date.getDate(); // 日
      var hour = date.getHours(); // 时
      var minutes = date.getMinutes(); // 分
      var seconds = date.getSeconds(); //秒
      var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
      var week = weekArr[date.getDay()];
      // 给一位数的数据前面加 “0”
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (day >= 0 && day <= 9) {
        day = "0" + day;
      }
      if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
      }
      if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
      }
      if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
      }
      return year + "-" + month + "-" + day + " " + hour + sign2 + minutes + sign2 + seconds;
    },
    // 处理emoji选项卡
    handleEmoji: function handleEmoji() {
      if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
        this.msg('等待对方回复');
        return;
      }
      this.isRecord = false;
      if (this.isFocus) {
        this.isFocus = false;
        this.isMoreOpen = false;
        this.isEmojiOpen = true;
      } else {
        this.isEmojiOpen = !this.isEmojiOpen;
        this.isMoreOpen = false;
      }
    },
    // 处理更多选项卡
    handleMore: function handleMore() {
      if (this.isFocus) {
        this.isFocus = false;
        this.isEmojiOpen = false;
        this.isMoreOpen = true;
      } else {
        this.isMoreOpen = !this.isMoreOpen;
        this.isEmojiOpen = false;
      }
    },
    // 选项卡关闭
    handleClose: function handleClose() {
      this.rateModal = false;
      this.isFocus = false;
      this.isMoreOpen = false;
      this.isEmojiOpen = false;
    },
    sendPhoto: function sendPhoto(name) {
      console.log('选择图片');
      this.handleClose();
    },
    chooseRecord: function chooseRecord() {
      var _this12 = this;
      this.handleClose();
      this.isRecord = !this.isRecord;
      if (this.isRecord) {
        this.isFocus = false;
      }
      if (this.isRecord) {
        uni.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.record'] === false) {
              // 已申请授权，但已被用户拒绝
              _this12.toSettingPage({
                content: '请前往设置页打开麦克风',
                suc: function suc(res) {
                  if (!res.authSetting['scope.record']) {
                    _this12.isRecord = false;
                  }
                },
                fail: function fail() {
                  _this12.isRecord = false;
                },
                cancel: function cancel() {
                  _this12.isRecord = false;
                }
              });
            }
          },
          fail: function fail() {
            wx.showToast({
              title: '获取授权信息失败',
              icon: 'none',
              duration: 1500
            });
          }
        });
      }
    },
    // 提示前往设置页
    toSettingPage: function toSettingPage(options) {
      uni.showModal({
        title: '授权提示',
        content: options.content,
        success: function success(tipRes) {
          if (tipRes.confirm) {
            uni.openSetting({
              success: function success(settingRes) {
                options.suc && options.suc(settingRes);
              },
              fail: function fail() {
                options.fail && options.fail();
              }
            });
          } else {
            options.cancel && options.cancel();
          }
        }
      });
    },
    // 长按录音，监听在页面最外层div，如果是放在button的话，手指上划离开button后获取距离变化有bug
    handleLongPress: function handleLongPress(e) {
      var _this13 = this;
      this.startPoint = e.touches[0];
      if (e.target.id === 'record') {
        uni.getSetting({
          success: function success(res) {
            var auth = res.authSetting['scope.record'];
            if (auth === true) {
              // 用户已经同意授权
              _this13.title = '正在录音中';
              _this13.isRecording = true;
              _this13.startRecording();
              _this13.canSend = true;
            } else if (auth === false) {
              // 首次发起授权
              _this13.toSettingPage({
                content: '请前往设置页打开麦克风',
                suc: function suc(res) {
                  if (!res.authSetting['scope.record']) {
                    _this13.isRecord = false;
                  }
                },
                fail: function fail() {
                  _this13.isRecord = false;
                },
                cancel: function cancel() {
                  _this13.isRecord = false;
                }
              });
            }
          },
          fail: function fail() {}
        });
      }
    },
    // 录音时的手势上划移动距离对应文案变化
    handleTouchMove: function handleTouchMove(e) {
      if (this.isRecording) {
        if (this.startPoint.clientY - e.touches[e.touches.length - 1].clientY > 200) {
          this.title = '松开手指，取消发送';
          this.canSend = false;
        } else if (this.startPoint.clientY - e.touches[e.touches.length - 1].clientY > 80) {
          this.title = '上划可取消';
          this.canSend = true;
        } else {
          this.title = '正在录音';
          this.canSend = true;
        }
      }
    },
    // 手指离开页面滑动
    handleTouchEnd: function handleTouchEnd() {
      console.log('录音结束');
      clearInterval(this.timer);
      this.isRecording = false;
      recorderManager.stop();
    },
    // 开始录音
    startRecording: function startRecording() {
      var env = uni.getSystemInfoSync().platform;
      this.isRecording = true;
      this.canSend = true;
      console.log('小程序开始录音');
      this.startDate();
      recorderManager.start(recordOptions);
    },
    //录音计时
    startDate: function startDate() {
      var that = this;
      that.sec = 0;
      that.timer = setInterval(function () {
        that.sec++;
      }, 1000);
    },
    // 预览图片
    showPic: function showPic(msg) {
      uni.previewImage({
        indicator: "none",
        current: msg,
        urls: ["" + msg + ""]
      });
    },
    paymp3: function paymp3(url) {
      var _this14 = this;
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (this.isplay) {
        audioContext.stop();
        this.playMsgid = null;
        this.isplay = false;
        return;
      }
      this.isplay = !this.isplay;
      this.playMsgid = id;
      var that = this;
      audioContext.src = url;
      audioContext.play();
      audioContext.onPlay(function () {});
      audioContext.onEnded(function () {
        _this14.isplay = false;
        _this14.playMsgid = null;
      });
      audioContext.onError(function () {
        _this14.playMsgid = null;
        _this14.isplay = false;
        //	that.msg('不支持播放该音频格式')
      });
    },
    // replaceEmoji(str) {
    // 	let replacedStr = str.replace(/\[([^(\]|\[)]*)\]/g, (item, index) => {
    // 		return '<img src="' + emojiUrl + '' + this.emojiMap[item] +
    // 			'" style="width:20px;" mode="heightFix"></img>';
    // 	});
    // 	return '' + replacedStr + '';
    // },
    tabChange: function tabChange(e) {
      this.emojiindex = e;
    },
    album: function album() {
      var _this15 = this;
      if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
        this.msg('等待对方回复');
        return;
      }
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths[0];
          uni.compressImage({
            src: tempFilePaths,
            quality: 80,
            success: function success(resdd) {
              _this15.uploadSuccess(resdd.tempFilePath);
            }
          });
        }
      });
    },
    camera: function camera() {
      var _this16 = this;
      if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
        this.msg('等待对方回复');
        return;
      }
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths[0];
          uni.compressImage({
            src: tempFilePaths,
            quality: 80,
            success: function success(resdd) {
              _this16.uploadSuccess(resdd.tempFilePath);
            }
          });
        }
      });
    },
    uploadSuccess: function uploadSuccess(image) {
      var _this17 = this;
      var inmsg = {
        is_self: true,
        content: image,
        type: 'image',
        sec: 0,
        create_time: this.jintian
      };
      this.pushmsg(inmsg);
      this.paymp3('/static/fa.mp3', 0);
      uni.uploadFile({
        url: _siteinfo.host + '/api/user/up_img',
        //仅为示例，非真实的接口地址
        filePath: image,
        fileType: 'image',
        name: 'file',
        formData: {
          'token': uni.getStorageSync('token'),
          'user': 'test'
        },
        success: function success(uploadFileRes) {
          var data = JSON.parse(uploadFileRes.data);
          var avatar = data.data.file;
          var message = '{"data":"' + avatar + '","sec":"0","type":"image","fromid":"' + _this17.fromid + '","toid":"' + _this17.toid + '"}';
          _this17.save_message(message);
        }
      });
    },
    // 发消息选中emoji
    chooseEmoji: function chooseEmoji(item) {
      this.handleEmoji();
      if (this.talkList.length >= this.configInfo.siliaoxianzhi && this.is_liaoguo == false) {
        this.msg('等待对方回复');
        return;
      }
      var inmsg = {
        is_self: true,
        content: item,
        type: 'face',
        sec: 0,
        create_time: this.jintian
      };
      this.pushmsg(inmsg);
      this.paymp3('/static/fa.mp3', 0);
      var message = '{"data":"' + item + '","sec":"0","type":"face","fromid":"' + this.fromid + '","toid":"' + this.toid + '"}';
      this.save_message(message);
    },
    liwu: function liwu(url) {
      var _this18 = this;
      this.liwusvgashow = true;
      setTimeout(function () {
        _this18.bofangsvga(url);
      }, 500);
    },
    bofangsvga: function bofangsvga(url) {
      var _this19 = this;
      console.log('开始播放');
      this.$refs.svga.render( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(parser, player) {
          var videoItem;
          return _regenerator.default.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return parser.load(url);
                case 2:
                  videoItem = _context9.sent;
                  _context9.next = 5;
                  return player.setVideoItem(videoItem);
                case 5:
                  // 设置当前动画的循环次数，0代表无限循环 默认 0
                  player.loops = 1;
                  player.clearsAfterStop = true;
                  // 开始播放动画，reverse = true 时则反向播放。
                  player.startAnimation();
                  // player.onPercentage((percentage) => {
                  // 	// 由于有动画未完成时需要显示其他效果的需求，所以监听动画播放进度
                  // 	// svga动画播放进度大于 70% 时，显示卡牌
                  // 	if (percentage * 100 > 70) {
                  // 		//this.svgaShow = false
                  // 	}
                  // })
                  // 监听动画完成
                  player.onFinished(function () {
                    console.log('播放完毕');
                    player.clear();
                    _this19.liwusvgashow = false;
                  });
                case 9:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));
        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    longpress: function longpress(e) {
      //
      uni.setClipboardData({
        data: e,
        success: function success() {}
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 749:
/*!*************************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/talk.vue?vue&type=style&index=0&id=9c6a59f2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_style_index_0_id_9c6a59f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./talk.vue?vue&type=style&index=0&id=9c6a59f2&lang=scss&scoped=true& */ 750);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_style_index_0_id_9c6a59f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_style_index_0_id_9c6a59f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_style_index_0_id_9c6a59f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_style_index_0_id_9c6a59f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_talk_vue_vue_type_style_index_0_id_9c6a59f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 750:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/minePages/chat/talk.vue?vue&type=style&index=0&id=9c6a59f2&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[743,"common/runtime","common/vendor","minePages/common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/minePages/chat/talk.js.map