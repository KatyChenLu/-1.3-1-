(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["friendPages/reg"],{

/***/ 555:
/*!****************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/main.js?{"page":"friendPages%2Freg"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _reg = _interopRequireDefault(__webpack_require__(/*! ./friendPages/reg.vue */ 556));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_reg.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 556:
/*!***********************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/friendPages/reg.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg.vue?vue&type=template&id=2912d7a6&scoped=true& */ 557);
/* harmony import */ var _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg.vue?vue&type=script&lang=js& */ 559);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _reg_vue_vue_type_style_index_0_id_2912d7a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reg.vue?vue&type=style&index=0&id=2912d7a6&lang=scss&scoped=true& */ 561);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2912d7a6",
  null,
  false,
  _reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "friendPages/reg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 557:
/*!******************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/friendPages/reg.vue?vue&type=template&id=2912d7a6&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reg.vue?vue&type=template&id=2912d7a6&scoped=true& */ 558);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_template_id_2912d7a6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 558:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/friendPages/reg.vue?vue&type=template&id=2912d7a6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    kspCropper: function () {
      return __webpack_require__.e(/*! import() | uni_modules/ksp-cropper/components/ksp-cropper/ksp-cropper */ "uni_modules/ksp-cropper/components/ksp-cropper/ksp-cropper").then(__webpack_require__.bind(null, /*! @/uni_modules/ksp-cropper/components/ksp-cropper/ksp-cropper.vue */ 963))
    },
    tnSlider: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-slider/tn-slider */ "tuniao-ui/components/tn-slider/tn-slider").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-slider/tn-slider.vue */ 1232))
    },
    tnTag: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-tag/tn-tag */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-tag/tn-tag")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-tag/tn-tag.vue */ 849))
    },
    tnButton: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-button/tn-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-button/tn-button")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-button/tn-button.vue */ 877))
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 559:
/*!************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/friendPages/reg.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reg.vue?vue&type=script&lang=js& */ 560);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 560:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/friendPages/reg.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _tools = __webpack_require__(/*! @/tools/tools.js */ 32);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var getTel = function getTel() {
  Promise.all(/*! require.ensure | components/loginFn/get-tel */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/loginFn/get-tel")]).then((function () {
    return resolve(__webpack_require__(/*! @/components/loginFn/get-tel */ 972));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var audioContext = uni.createInnerAudioContext();
var _default = {
  components: {
    getTel: getTel
  },
  name: 'TemplateCreate',
  mixins: [_template_page_mixin.default],
  data: function data() {
    var _ref;
    return _ref = {
      zhiye: '',
      wxhao: '',
      city: '请选择城市',
      popshow: false,
      pingmugaodu: 0,
      shengaozhi: '50',
      tizhongzhi: '50',
      shengao: '150',
      tizhong: '75',
      quxiang: '',
      hun: '',
      shuxingindex: 0,
      ruquanindex: 0,
      jingyanindex: 0,
      dec: '',
      tags_user: [{
        name: "FtoM",
        checked: false
      }],
      //、、、	
      date: '请选择生日',
      riqishow: false,
      mode: 'date',
      showLunar: true,
      activeBgColor: '#01BEFF',
      activeColor: '#FFFFFF',
      rangeBgColor: '#E6E6E655',
      rangeColor: '#01BEFF',
      btnColor: '#01BEFF',
      lunarColor: '#AAAAAA',
      startText: '开始',
      endText: '结束',
      toolTips: '请选择日期',
      changeYear: true,
      changeMonth: true,
      result: '',
      //、、
      page: 1,
      shengri: '',
      mobile: '',
      showGetTelModal: false,
      // 是否显示 获取手机号的模态框
      //录音
      bgimgnews: '',
      bgshow: false,
      voc: false,
      vocurl: "",
      vocscend: 0,
      vocurlpass: "",
      isplay: false,
      op: '',
      truehead: '',
      isRound: true,
      imageUrl: '',
      show: false,
      avatar: '',
      body: [],
      action: '',
      title: ''
    }, (0, _defineProperty2.default)(_ref, "dec", ''), (0, _defineProperty2.default)(_ref, "vovnew", ''), (0, _defineProperty2.default)(_ref, "sex", 0), (0, _defineProperty2.default)(_ref, "yanse0", "#e6e6e6"), (0, _defineProperty2.default)(_ref, "yanse1", "#e6e6e6"), (0, _defineProperty2.default)(_ref, "yanse2", "#e6e6e6"), (0, _defineProperty2.default)(_ref, "tagLength", 5), (0, _defineProperty2.default)(_ref, "headerPosition", 'fixed'), (0, _defineProperty2.default)(_ref, "checktags", ''), (0, _defineProperty2.default)(_ref, "bgimgbendi", ''), (0, _defineProperty2.default)(_ref, "tjbgimg", ''), _ref;
  },
  computed: {
    startDate: function startDate() {
      return '1965-01-01';
    },
    endDate: function endDate() {
      return '2023-01-01';
    }
  },
  onLoad: function onLoad(option) {
    var _this = this;
    var that = this;
    that.action = _siteinfo.host + '/api/login/up_img';
    that.info();
    if (option.op) {
      this.op = option.op;
    }
    this.showGetTelModal = true;
    uni.getSystemInfo({
      success: function success(res) {
        console.log(res.screenHeight); // 屏幕高度，包含导航栏
        console.log(res.screenWidth); // 屏幕宽度
        console.log(res.windowHeight); // 可使用窗口高度，不包含导航栏
        console.log(res.windowWidth); // 可使用窗口宽度
        // 可使用窗口高度，将px转换rpx
        var phoneHeight = res.windowHeight * (750 / res.windowWidth);
        _this.pingmugaodu = phoneHeight;
      }
    });
  },
  methods: {
    handleGetRegion: function handleGetRegion(region) {
      this.region = region[0].name + '-' + region[1].name;
      this.city = region[1].name;
      if (region[1].name == '市辖区') {
        this.city = region[0].name;
      }
    },
    getquannei: function getquannei(e) {
      this.shuxingtitle = e;
    },
    closedPopup: function closedPopup() {
      this.popshow = false;
    },
    getsex: function getsex(e) {
      this.sex = e;
    },
    gethun: function gethun(e) {
      this.hun = e;
    },
    getquxiang: function getquxiang(e) {
      this.quxiang = e;
    },
    gettizhong: function gettizhong(e) {
      var tizhong = 150 * e / 100;
      this.tizhong = tizhong;
    },
    getshengao: function getshengao(e) {
      var shengao = 300 * e / 100;
      this.shengao = shengao;
    },
    binshuxing: function binshuxing(e) {
      console.log(11111111111);
      this.shuxingindex = e.detail.value;
      this.shuxingtitle = this.shuxing[e.detail.value];
    },
    bindshijian: function bindshijian(e) {
      this.ruquanindex = e.detail.value;
      this.ruquantitle = this.ruquanlist[e.detail.value];
    },
    bindjingyan: function bindjingyan(e) {
      this.jingyanindex = e.detail.value;
      this.jingyantitle = this.jingyanlist[e.detail.value];
    },
    bindDateChange: function bindDateChange(e) {
      this.date = e.detail.value;
    },
    closeGetTelModalFn: function closeGetTelModalFn() {
      this.showGetTelModal = false;
    },
    nexttow: function nexttow() {
      if (this.title == '') {
        this.msg('请填写昵称');
        return;
      }
      if (this.sex == 0) {
        this.msg('请选择性别');
        return;
      }
      if (this.date == '请选择生日') {
        this.msg('请选择生日');
        return;
      }
      var csrq = this.date;
      var age = '';
      var d = new Date();
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      if (month < 10) {
        month = '0' + month;
      }
      if (day < 10) {
        day = '0' + day;
      }
      var now = year + '-' + month + '-' + day;
      if (now.substring(0, 4) >= csrq.substring(0, 4) && now.substring(5, 7) >= csrq.substring(5, 7) && now.substring(8, 10) >= csrq.substring(8, 10)) {
        age = year - parseInt(csrq.substring(0, 4));
      } else {
        age = year - parseInt(csrq.substring(0, 4)) - 1;
      }
      if (age < 18) {
        this.msg('不开放18岁以下注册使用');
        return;
      }
      this.page = 2;
    },
    nexttheer: function nexttheer() {
      if (this.shuxingtitle == '请选择圈内属性') {
        this.msg('请选择圈内属性');
        return;
      }
      if (this.ruquantitle == '请选择实践经验') {
        this.msg('请选择入圈时间');
        return;
      }
      if (this.jingyantitle == '请选择实践经验') {
        this.msg('请选择实践经验');
        return;
      }
      if (this.dec == '') {
        this.msg('请填写简介');
        return;
      }
      this.page = 3;
    },
    nextfour: function nextfour() {
      var num = 0;
      for (var i in this.tags_user) {
        if (this.tags_user[i].checked) {
          num++;
        }
      }
      if (num == 0) {
        this.msg('请选择标签');
        return;
      }
      this.page = 4;
    },
    nextfive: function nextfive() {
      var num = 0;
      for (var i in this.tags_user_aiwan) {
        if (this.tags_user_aiwan[i].checked) {
          num++;
        }
      }
      if (num == 0) {
        this.msg('请选择标签');
        return;
      }
      this.page = 5;
    },
    next: function next() {
      this.page++;
    },
    back: function back() {
      this.page--;
    },
    start: function start() {
      console.log('开始录音');
      // 开始录音
    },
    end: function end(event) {
      this.voc = false;
      console.log(event);
      this.vocurl = event.tempFilePath;
      this.vocscend = event.duration;
      // 结束录音并处理得到的录音文件
      // event中，app端仅有tempFilePath字段，微信小程序还有duration和fileSize两个字段
    },
    cancel: function cancel() {
      console.log('用户取消录音');
    },
    voctap: function voctap() {
      this.voc = true;
    },
    closedPopup_voc: function closedPopup_voc() {
      this.voc = false;
      this.$refs.luyinUpload.stopRecord();
    },
    labelBtn: function labelBtn(name, index) {
      var num = 0;
      for (var i in this.tags_user) {
        if (this.tags_user[i].checked) {
          num++;
        }
      }
      if (num == 3 && this.tags_user[index].checked == false) {
        this.msg('最多可选3个');
        return;
      }
      this.tags_user[index].checked = !this.tags_user[index].checked;
    },
    labelBtn_juju: function labelBtn_juju(name, index) {
      var num = 0;
      for (var i in this.tags_user_jujue) {
        if (this.tags_user_jujue[i].checked) {
          num++;
        }
      }
      if (num == 3 && this.tags_user_jujue[index].checked == false) {
        this.msg('最多可选3个');
        return;
      }
      this.tags_user_jujue[index].checked = !this.tags_user_jujue[index].checked;
    },
    labelBtn_aiwan: function labelBtn_aiwan(name, index) {
      var num = 0;
      for (var i in this.tags_user_aiwan) {
        if (this.tags_user_aiwan[i].checked) {
          num++;
        }
      }
      if (num == 3 && this.tags_user_aiwan[index].checked == false) {
        this.msg('最多可选3个');
        return;
      }
      this.tags_user_aiwan[index].checked = !this.tags_user_aiwan[index].checked;
    },
    // 选择图片
    close: function close() {
      this.show = false;
    },
    chooseImage: function chooseImage() {
      var _this2 = this;
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths[0];
          _this2.imageUrl = tempFilePaths;
          _this2.show = true;
        }
      });
    },
    showFn: function showFn(e) {
      var that = this;
      this.mobile = e.data.msg;
    },
    // 裁剪完成
    cropperFinish: function cropperFinish(res) {
      this.cropperImageUrl = res.path;
      this.avatar = this.cropperImageUrl;
      this.show = false;
    },
    gaibian: function gaibian(sex) {
      this.sex = sex;
      if (sex == 0) {
        this.yanse0 = "#00FFC6";
        this.yanse1 = "#00FFC6";
        this.yanse2 = "#ff55ff";
      }
      if (sex == 1) {
        this.yanse1 = "#00FFC6";
        this.yanse0 = "#e6e6e6";
        this.yanse2 = "#e6e6e6";
      }
      if (sex == 2) {
        this.yanse2 = "#ff55ff";
        this.yanse0 = "#e6e6e6";
        this.yanse1 = "#e6e6e6";
      }
    },
    info: function info() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var that, result;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = _this3;
                _context.next = 3;
                return that.$request({
                  loading: 1,
                  method: 'post',
                  url: '/api/four/friend_usershow',
                  data: {}
                });
              case 3:
                result = _context.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    that.body = result.data.data.userinfo;
                    that.avatar = that.body.avatar;
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
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    uploadSuccess: function uploadSuccess() {
      var _this4 = this;
      uni.uploadFile({
        url: this.action,
        //仅为示例，非真实的接口地址
        filePath: this.cropperImageUrl,
        name: 'file',
        formData: {
          'token': uni.getStorageSync('token'),
          'user': 'test'
        },
        success: function success(uploadFileRes) {
          var data = JSON.parse(uploadFileRes.data);
          _this4.avatar = data.data.file;
          _this4.truehead = data.data.file;
          _this4.post();
        }
      });
    },
    send: function send() {
      if (this.title == '') {
        this.msg('请输入昵称');
        return;
      }
      if (this.sex == 0) {
        this.msg('请选择性别');
        return;
      }
      if (this.cropperImageUrl) {
        this.uploadSuccess();
      } else {
        this.post();
      }
    },
    post: function post() {
      this.post_xcx();
    },
    post_app: function post_app() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var that, data, woshi, i, jujue, _i, aiwan, _i2, result, token, user_id;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = _this5;
                data = uni.getStorageSync('user_reg');
                data.nickname = that.title;
                data.sex = that.sex;
                data.avatar = that.avatar;
                data.op = that.op;
                data.daren_id = uni.getStorageSync('daren_id');
                woshi = '';
                for (i in _this5.tags_user) {
                  if (_this5.tags_user[i].checked) {
                    woshi += _this5.tags_user[i].name + ',';
                  }
                }
                jujue = '';
                for (_i in _this5.tags_user_jujue) {
                  if (_this5.tags_user_jujue[_i].checked) {
                    jujue += _this5.tags_user_jujue[_i].name + ',';
                  }
                }
                aiwan = '';
                for (_i2 in _this5.tags_user_aiwan) {
                  if (_this5.tags_user_aiwan[_i2].checked) {
                    aiwan += _this5.tags_user_aiwan[_i2].name + ',';
                  }
                }
                data.date = _this5.date;
                data.dec = _this5.dec;
                data.shuxingtitle = _this5.shuxingtitle;
                data.ruquantitle = _this5.ruquantitle;
                data.jingyantitle = _this5.jingyantitle;
                data.hun = _this5.hun;
                data.quxiang = _this5.quxiang;
                data.tizhong = _this5.tizhong;
                data.shengao = _this5.shengao;
                data.woshi = woshi;
                data.jujue = jujue;
                data.aiwan = aiwan;
                data.city = _this5.city;
                _context2.next = 28;
                return that.$request({
                  loading: 1,
                  method: 'post',
                  url: '/api/LoginNew/set_user',
                  data: data
                });
              case 28:
                result = _context2.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    uni.hideLoading();
                    token = (0, _tools.assertObject)(result.data.data).login_token;
                    user_id = result.data.data.user_id;
                    uni.setStorageSync('user_id', user_id);
                    that.$store.commit('setToken', token);
                    uni.setStorageSync('user_reg_xcx', '');
                    uni.setStorageSync('user_reg', '');
                    that.bind();
                    uni.setStorageSync('token', token);
                    uni.hideLoading();
                    that.hasTokenGetUserInfo(function () {
                      uni.hideLoading();
                      uni.showToast({
                        icon: 'success',
                        title: '登录成功'
                      });
                      uni.$emit('loginok', true);
                      setTimeout(function () {
                        uni.navigateBack({
                          delta: 2
                        });
                      }, 500);
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
              case 30:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    post_xcx: function post_xcx() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var that, data, woshi, i, jujue, _i3, aiwan, _i4, result, token, user_id;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                that = _this6;
                data = {};
                data.nickname = that.title;
                data.sex = that.sex;
                data.avatar = that.avatar;
                data.open_id = uni.getStorageSync('user_reg_xcx');
                data.mobile = that.mobile;
                data.daren_id = uni.getStorageSync('daren_id');
                woshi = '';
                for (i in _this6.tags_user) {
                  if (_this6.tags_user[i].checked) {
                    woshi += _this6.tags_user[i].name + ',';
                  }
                }
                jujue = '';
                for (_i3 in _this6.tags_user_jujue) {
                  if (_this6.tags_user_jujue[_i3].checked) {
                    jujue += _this6.tags_user_jujue[_i3].name + ',';
                  }
                }
                aiwan = '';
                for (_i4 in _this6.tags_user_aiwan) {
                  if (_this6.tags_user_aiwan[_i4].checked) {
                    aiwan += _this6.tags_user_aiwan[_i4].name + ',';
                  }
                }
                data.date = _this6.date;
                data.dec = _this6.dec;
                data.shuxingtitle = _this6.shuxingtitle;
                data.ruquantitle = _this6.ruquantitle;
                data.jingyantitle = _this6.jingyantitle;
                data.hun = _this6.hun;
                data.quxiang = _this6.quxiang;
                data.tizhong = _this6.tizhong;
                data.shengao = _this6.shengao;
                data.woshi = woshi;
                data.jujue = jujue;
                data.aiwan = aiwan;
                data.city = _this6.city;
                _context3.next = 29;
                return that.$request({
                  loading: 1,
                  method: 'post',
                  url: '/api/LoginNew/set_user_xcx',
                  data: data
                });
              case 29:
                result = _context3.sent;
                ///////////要去检查手机号是否有这个用户，保持通用
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    uni.hideLoading();
                    token = (0, _tools.assertObject)(result.data.data).login_token;
                    user_id = result.data.data.user_id;
                    uni.setStorageSync('user_id', user_id);
                    that.$store.commit('setToken', token);
                    uni.setStorageSync('user_reg_xcx', '');
                    uni.setStorageSync('user_reg', '');
                    that.bind();
                    uni.setStorageSync('token', token);
                    uni.hideLoading();
                    that.hasTokenGetUserInfo(function () {
                      uni.hideLoading();
                      uni.showToast({
                        icon: 'success',
                        title: '登录成功'
                      });
                      uni.$emit('loginok', true);
                      setTimeout(function () {
                        uni.navigateBack({
                          delta: 1
                        });
                      }, 500);
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
              case 31:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    bind: function bind() {
      var msg = {
        'type': 'bind',
        'fromid': uni.getStorageSync('user_id')
      };
      uni.sendSocketMessage({
        data: JSON.stringify(msg),
        success: function success(res) {
          console.log('login绑定会员id成功' + uni.getStorageSync('user_id'), res);
        },
        fail: function fail(res) {
          //console.log('绑定会员id失败'+uni.getStorageSync('user_id'), res)
        }
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 561:
/*!*********************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/friendPages/reg.vue?vue&type=style&index=0&id=2912d7a6&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_style_index_0_id_2912d7a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./reg.vue?vue&type=style&index=0&id=2912d7a6&lang=scss&scoped=true& */ 562);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_style_index_0_id_2912d7a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_style_index_0_id_2912d7a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_style_index_0_id_2912d7a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_style_index_0_id_2912d7a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_reg_vue_vue_type_style_index_0_id_2912d7a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 562:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/friendPages/reg.vue?vue&type=style&index=0&id=2912d7a6&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[555,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/friendPages/reg.js.map