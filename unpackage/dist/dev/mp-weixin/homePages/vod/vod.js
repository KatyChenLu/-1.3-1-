(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["homePages/vod/vod"],{

/***/ 161:
/*!********************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/main.js?{"page":"homePages%2Fvod%2Fvod"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vod = _interopRequireDefault(__webpack_require__(/*! ./homePages/vod/vod.vue */ 162));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_vod.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 162:
/*!*************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/homePages/vod/vod.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vod.vue?vue&type=template&id=37294502&scoped=true& */ 163);
/* harmony import */ var _vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vod.vue?vue&type=script&lang=js& */ 165);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vod_vue_vue_type_style_index_0_id_37294502_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vod.vue?vue&type=style&index=0&id=37294502&lang=scss&scoped=true& */ 167);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "37294502",
  null,
  false,
  _vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "homePages/vod/vod.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 163:
/*!********************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/homePages/vod/vod.vue?vue&type=template&id=37294502&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vod.vue?vue&type=template&id=37294502&scoped=true& */ 164);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_template_id_37294502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 164:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/homePages/vod/vod.vue?vue&type=template&id=37294502&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      return Promise.all(/*! import() | tuniao-ui/components/tn-nav-bar/tn-nav-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-nav-bar/tn-nav-bar.vue */ 770))
    },
    tnButton: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-button/tn-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-button/tn-button")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-button/tn-button.vue */ 841))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | components/uni-popup/uni-popup */ "components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/components/uni-popup/uni-popup.vue */ 971))
    },
    shareBtn: function () {
      return __webpack_require__.e(/*! import() | components/share-btn/share-btn */ "components/share-btn/share-btn").then(__webpack_require__.bind(null, /*! @/components/share-btn/share-btn.vue */ 978))
    },
    tnPopup: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-popup/tn-popup */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-popup/tn-popup")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-popup/tn-popup.vue */ 918))
    },
    tnEmpty: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-empty/tn-empty */ "tuniao-ui/components/tn-empty/tn-empty").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-empty/tn-empty.vue */ 897))
    },
    tnModal: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-modal/tn-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-modal/tn-modal")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-modal/tn-modal.vue */ 869))
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
  var l0 = _vm.__map(_vm.dataList, function (list, index) {
    var $orig = _vm.__get_orig(list)
    var g0 = Math.abs(_vm.k - index)
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  var g1 = _vm.content.length
  var g2 = _vm.content.length
  var g3 = _vm.content.length
  var l2 =
    g3 > 0
      ? _vm.__map(_vm.content, function (item, pinglun) {
          var $orig = _vm.__get_orig(item)
          var m0 = _vm.timeChange(item.create_time)
          var l1 = _vm.__map(item.child, function (itemhuifu, pinglunhuifu) {
            var $orig = _vm.__get_orig(itemhuifu)
            var m1 = _vm.timeChange(itemhuifu.create_time)
            return {
              $orig: $orig,
              m1: m1,
            }
          })
          return {
            $orig: $orig,
            m0: m0,
            l1: l1,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g1: g1,
        g2: g2,
        g3: g3,
        l2: l2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 165:
/*!**************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/homePages/vod/vod.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vod.vue?vue&type=script&lang=js& */ 166);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 166:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/homePages/vod/vod.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 58));
var _siteinfo = __webpack_require__(/*! @/siteinfo.js */ 33);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var audo = uni.createInnerAudioContext();
audo.loop = true;
var _default = {
  data: function data() {
    return {
      jubao_body: '',
      jubaoshow: false,
      sharedata: [],
      goods_id: 0,
      pid: 0,
      huifubody: '说点啥吧',
      is_focus: false,
      sendmsgBoy: '',
      sendmsgBoy_huifuname: '',
      pingpage: 1,
      id: 0,
      content: [],
      showpinglun: false,
      loginBoxFlag: false,
      windowWidth: 0,
      windowHeight: 0,
      platform: "",
      model: "",
      deleteHeight: 0,
      dataList: [],
      k: 0,
      oldVideo: "",
      voice: "",
      timeout: "",
      current: 0,
      boxStyle: {
        //视频，图片封面样式🌟💗
        'height': 0,
        'width': 0
      },
      videoID: "",
      isShow: false,
      showPlay: false,
      //转轮显示控制
      rotates: 0,
      //转轮旋转角度
      rotateTime: "",
      //转轮递归事件控制
      xrotats: "",
      mpcleartime: "",
      isClick: false,
      changeTimeout: "",
      mptime: 0,
      mpstartTime: 0,
      duration: 500,
      page: 2
    };
  },
  components: {},
  watch: {
    k: function k(_k, old_k) {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var p;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(k, old_k)

                _this.isShow = false;
                _this.dataList[old_k].playIng = false; //如果视频暂停，就加载封面
                _this.dataList[old_k].isplay = true;
                _this.dataList[old_k].state = 'pause';
                console.log('预留第' + (old_k + 1) + '个视频：' + _this.dataList[old_k]._id + '' + old_k);
                // 2.0版本已经去掉了下面这一句，视频不用暂停，只需要把声音禁止就行
                uni.createVideoContext(_this.dataList[old_k]._id + '' + old_k, _this).stop(); //如果视频暂停，那么旧视频停止，这里的this.dataList[old_k]._id + '' + old_k，后面加 old_k 是为了每一个视频的 id 值不同，这样就可以大程度的避免串音问题
                console.log('已经暂停 --> 第' + (old_k + 1) + '个视频～'); //提示
                _this.dataList[_k].state = 'play';
                _this.isShow = true;
                _this.xrotats = setTimeout(function () {
                  _this.showPlay = true;
                }, 200);

                // 如果是小程序端
                clearTimeout(_this.changeTimeout);
                _this.dataList[_k].isplay = false;
                setTimeout(function () {
                  _this.dataList[_k].playIng = true;
                }, 250);
                if (_this.mptime < 0.2) {
                  _this.changeTimeout = setTimeout(function () {
                    uni.createVideoContext(_this.dataList[_this.k]._id + '' + _this.k, _this).play();
                  }, 1400);
                } else {
                  uni.createVideoContext(_this.dataList[_this.k]._id + '' + _this.k, _this).play();
                }
                p = _k + 1;
                console.log('预加载第' + (p + 1) + '个视频：' + _this.dataList[p]._id + '' + p);
              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  onLoad: function onLoad(option) {
    var that = this;
    uni.$off('setLoginBoxFlag');
    uni.$on('setLoginBoxFlag', function (loginBoxFlag) {
      that.loginBoxFlag = loginBoxFlag;
    });
    if (option.id) {
      this.id = Number(option.id);
    }
    this.platform = uni.getSystemInfoSync().platform;
    this.model = uni.getSystemInfoSync().model;
    var model = this.model;
    if (this.platform == 'ios' && (model !== 'iPhone6' || model !== 'iPhone6s' || model !== 'iPhone7' || model !== 'iPhone8')) {
      this.deleteHeight = 0; //有 tabbar的 修改这里可以改变视频高度
    }

    this.windowWidth = uni.getSystemInfoSync().windowWidth;
    this.windowHeight = uni.getSystemInfoSync().windowHeight;
    this.boxStyle.width = this.windowWidth + 'px'; //给宽度加px
    this.boxStyle.height = this.windowHeight - this.deleteHeight; //有 tabbar的 修改这里可以改变视频高度
    this.get(); //刚进入页面加载数据
  },
  onUnload: function onUnload() {
    this.dataList[this.k].state = 'pause';
    uni.createVideoContext(this.dataList[this.k]._id + '' + this.k, this).pause();
    console.log('到后台');
  },
  onShow: function onShow() {
    var _this2 = this;
    console.log('回到前台');
    if (this.dataList.length !== 0) {
      this.dataList[this.k].state = 'play';
      uni.createVideoContext(this.dataList[this.k]._id + '' + this.k, this).play();
      if (this.dataList[this.k].price > 0 && this.dataList[this.k].is_buy == 0) {
        setTimeout(function () {
          uni.createVideoContext(_this2.dataList[_this2.k]._id, _this2).pause();
          audo.pause();
        }, 0);
      }
    }
    //付费
  },
  onHide: function onHide() {
    this.dataList[this.k].state = 'pause';
    uni.createVideoContext(this.dataList[this.k]._id + '' + this.k, this).pause();
    console.log('到后台');
  },
  methods: {
    likeComment: function likeComment(id, index, cindex, type) {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var result;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(id, index, cindex, type);
                if (_this3.isLogin) {
                  _context2.next = 4;
                  break;
                }
                _this3.loginBoxFlag = true;
                return _context2.abrupt("return", false);
              case 4:
                _context2.next = 6;
                return _this3.getlikeComment(id);
              case 6:
                result = _context2.sent;
                if (type == 0) {
                  if (result.msg == '点赞成功') {
                    _this3.content[index].is_like = true;
                    _this3.content[index].like_num += 1;
                  } else {
                    _this3.content[index].is_like = false;
                    _this3.content[index].like_num -= 1;
                  }
                } else {
                  if (result.msg == '点赞成功') {
                    _this3.content[index].child[cindex].is_like = true;
                    _this3.content[index].child[cindex].like_num += 1;
                  } else {
                    _this3.content[index].child[cindex].like_num -= 1;
                    _this3.content[index].child[cindex].is_like = false;
                  }
                }
                _this3.msg(result.msg);
              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    lostfocus: function lostfocus() {
      this.is_focus = false;
    },
    huifuzhuti: function huifuzhuti() {
      if (this.is_focus == false) {
        this.callerhuifu();
      }
    },
    callerhuifu: function callerhuifu() {
      this.huifubody = '说点啥吧';
      this.sendmsgBoy_huifuname = '';
      this.huifuindex = 0;
      this.sendmsgBoy = '';
      this.pid = 0;
      this.is_focus = false;
    },
    hiufu: function hiufu(name, pid, index) {
      this.huifubody = '回复：' + name;
      this.sendmsgBoy_huifuname = name;
      this.huifuindex = index;
      this.pid = pid;
      this.is_focus = true;
    },
    mpTouchend: function mpTouchend() {
      this.mptime = new Date() / 1000 - this.mpstartTime;
    },
    mpTouchstart: function mpTouchstart() {
      this.mpstartTime = new Date() / 1000;
    },
    dealVoice: function dealVoice() {
      // uni.showToast({
      // 	title: '处理声音',
      // 	icon: 'none'
      // })
    },
    clearToTime: function clearToTime() {
      //清理定时器
      for (var i = 0; i < 20; i++) {
        clearTimeout(this.rotateTime);
        clearTimeout(this.xrotats);
        this.showPlay = false;
        this.rotates = 0;
      }
    },
    clearTime: function clearTime() {
      //清理定时器
      for (var i = 0; i < 20; i++) {
        clearTimeout(this.rotateTime);
        clearTimeout(this.xrotats);
      }
    },
    rotateX: function rotateX() {
      var _this4 = this;
      // clearTimeout(this.rotateTime);
      this.rotateTime = setTimeout(function () {
        _this4.rotateX();
        _this4.showPlay = true;
        _this4.rotates += 1;
      }, 30);
    },
    closeScrollview: function closeScrollview() {
      // 点击评论里面的叉叉，就会关闭评论
      this.$refs.pinglun.close();
    },
    ended: function ended() {
      // 1.播放当前视频结束时触发，自动切换下一个视频
      // this.current = this.k+1
    },
    //点击播放&&暂停
    tapVideoHover: function tapVideoHover(state, event) {
      console.log('state--', state);
      if (this.dataList[this.k].price > 0 && this.dataList[this.k].is_buy == 0) {
        return;
      }
      if (state == 'play' || state == 'continue') {
        this.dataList[this.k].state = 'pause';
      } else {
        this.dataList[this.k].state = 'continue';
      }
      if (this.dataList[this.k].state == 'continue') {
        this.isClick = true;
        this.dataList[this.k].playIng = true;
        uni.createVideoContext(this.dataList[this.k]._id + '' + this.k, this).play(); //暂停以后继续播放

        this.dataList[this.k].isplay = false;
      }
      if (this.dataList[this.k].state == 'pause') {
        uni.createVideoContext(this.dataList[this.k]._id + '' + this.k, this).pause(); //暂停以后继续播放

        this.dataList[this.k].isplay = true;
      }
    },
    change: function change(event) {
      this.k = event.detail.current;
    },
    animationfinish: function animationfinish(event) {
      // 1.这里进行判断，如果是最后一个视频就进入 get() 方法加载视频进入列表
      if (this.k == this.dataList.length - 1) {
        this.GET();
      }
    },
    //每一组结束时新的请求
    GET: function GET() {
      var _this5 = this;
      var headerObj = {};
      if (uni.getStorageSync('token')) {
        headerObj.token = this.globalToken;
      }
      uni.request({
        url: _siteinfo.host + '/api/four/vod',
        method: 'POST',
        data: {
          page: this.page++
        },
        header: _objectSpread({}, headerObj),
        success: function success(res) {
          var msg = res.data.data.data;
          // 2.这里把视频添加到视频列表
          for (var i = 0; i < msg.length; i++) {
            _this5.dataList.push(msg[i]);
          }
        }
      });
    },
    get: function get() {
      var _this6 = this;
      // 1.这里引入后端请求数据
      // var msg = userList
      var headerObj = {};
      if (uni.getStorageSync('token')) {
        headerObj.token = this.globalToken;
      }
      uni.request({
        url: _siteinfo.host + '/api/four/vod',
        method: 'POST',
        data: {
          id: this.id,
          page: 1
        },
        header: _objectSpread({}, headerObj),
        success: function success(res) {
          _this6.isShow = false;
          var msg = res.data.data.data;
          // 2.这里把视频添加到视频列表
          for (var i = 0; i < msg.length; i++) {
            _this6.dataList.push(msg[i]);
          }
          // 3.播放当前视频
          setTimeout(function () {
            _this6.isShow = true;

            // 如果是小程序端
            _this6.dataList[_this6.k].isplay = false;
            _this6.dataList[_this6.k].state = 'play';
            _this6.dataList[_this6.k].playIng = true;
            setTimeout(function () {
              uni.createVideoContext(_this6.dataList[_this6.k]._id + '' + _this6.k, _this6).play();
            }, 500);
          }, 200);
          _this6.videoID = _this6.dataList[_this6.k]._id;
        }
      });
    },
    share: function share() {
      uni.showToast({
        title: '分享',
        icon: 'none'
      });
    },
    closedPopup: function closedPopup() {
      this.showpinglun = false;
    },
    toComment: function toComment(index, id) {
      uni.showToast({
        title: '加载中...',
        icon: 'none',
        position: 'bottom',
        duration: 300
      });
      this.showpinglun = true;
      this.goods_id = id;
      this.getpinglun(id);
      //this.$refs.pinglun.open('bottom')
    },
    moregetpinglun: function moregetpinglun() {},
    getpinglun: function getpinglun(id) {
      var _this7 = this;
      this.pingpage = 1;
      var headerObj = {};
      if (uni.getStorageSync('token')) {
        headerObj.token = this.globalToken;
      }
      uni.request({
        url: _siteinfo.host + '/api/index/goodsCommentList',
        method: 'POST',
        data: {
          id: id,
          page: this.pingpage
        },
        header: _objectSpread({}, headerObj),
        success: function success(res) {
          var msg = res.data.data.data;
          _this7.content = msg;
        }
      });
    },
    cLike: function cLike(sss, id) {
      if (!this.isLogin) {
        this.loginBoxFlag = true;
        return false;
      }
      this.dianzantiezi(id, this.dataList[this.k].like);
      this.dataList[this.k].like = !this.dataList[this.k].like;
      var video = this.dataList[this.k];
      sss ? video.like_n -= 1 : video.like_n += 1;
    },
    dianzantiezi: function dianzantiezi(id, like) {
      var _this8 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var shaya, result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this8.isLogin) {
                  _context3.next = 3;
                  break;
                }
                _this8.loginBoxFlag = true;
                return _context3.abrupt("return", false);
              case 3:
                shaya = {
                  id: id,
                  is_like: like
                };
                uni.$emit('onlist_change', shaya);
                _context3.next = 7;
                return _this8.flowgoods(id);
              case 7:
                result = _context3.sent;
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    sendmsg: function sendmsg() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var that, result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = _this9;
                if (_this9.isLogin) {
                  _context4.next = 4;
                  break;
                }
                _this9.loginBoxFlag = true;
                return _context4.abrupt("return", false);
              case 4:
                if (!(that.sendmsgBoy == '')) {
                  _context4.next = 8;
                  break;
                }
                that.is_focus = true;
                that.msg('说点啥呗');
                return _context4.abrupt("return");
              case 8:
                _context4.next = 10;
                return that.$request({
                  loading: 1,
                  method: 'post',
                  url: '/api/user/addGoodsComment',
                  data: {
                    goods_id: _this9.goods_id,
                    content: that.sendmsgBoy,
                    pid: that.pid,
                    to_name: that.sendmsgBoy_huifuname
                  }
                });
              case 10:
                result = _context4.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    if (that.content.length == 0) {
                      //that.mescroll.resetUpScroll();
                      //that.mescroll.removeEmpty()
                    }
                    if (that.pid == 0) {
                      that.content = result.data.data.concat(that.content);
                    } else {
                      console.log(that.content[that.huifuindex]);
                      if (that.content[that.huifuindex].child.length == 0) {
                        that.content[that.huifuindex].child = result.data.data;
                      } else {
                        that.content[that.huifuindex].child = result.data.data.concat(that.content[that.huifuindex].child);
                      }
                    }
                    that.commentCount++;
                    that.callerhuifu();
                    uni.showToast({
                      icon: 'none',
                      title: result.data.msg
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
              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    appshare: function appshare() {
      var sharedata = {
        type: 1,
        strShareUrl: this.dataList[this.k].share_url,
        strShareTitle: this.dataList[this.k].share_title,
        strShareSummary: this.dataList[this.k].share_sub,
        strShareImageUrl: this.dataList[this.k].share_img
      };
      this.sharedata = sharedata;
      this.$refs.sharepopup.open();
    },
    jubaoshowchick: function jubaoshowchick() {
      this.jubaoshow = true;
      this.$refs.sharepopup.close();
    },
    share_qrcode: function share_qrcode() {
      var _this10 = this;
      this.sharelist();
      this.show_poster = true;
      this.$refs.sharepopup.close();
      if (!this.path) {
        setTimeout(function () {
          _this10.toSave();
        }, 500);
      }
    },
    goumai: function goumai(id) {
      var _this11 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var that, result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                that = _this11;
                if (_this11.isLogin) {
                  _context5.next = 4;
                  break;
                }
                _this11.loginBoxFlag = true;
                return _context5.abrupt("return", false);
              case 4:
                _context5.next = 6;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/user/buy_goods',
                  data: {
                    id: id
                  }
                });
              case 6:
                result = _context5.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    if (result.data.msg == '余额不足') {
                      that.chongzhiis = true;
                    }
                    _this11.msg(result.data.msg);
                    _this11.dataList[_this11.k].is_buy = 1;
                    _this11.dataList[_this11.k].state = 'play';
                    uni.createVideoContext(_this11.dataList[_this11.k]._id + '' + _this11.k, _this11).play();
                  }
                }
              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    sharelist: function sharelist() {
      console.log(this.item);
      this.posterObj.views = [{
        type: 'image',
        src: this.item.userAvatar,
        css: {
          left: '32rpx',
          top: '32rpx',
          borderRadius: '50%',
          width: '80rpx',
          height: '80rpx'
        }
      }, {
        type: 'text',
        text: this.item.userName,
        css: {
          fontSize: '28rpx',
          fontWeight: 'bold',
          color: '#1A2033',
          lineHeight: '28rpx',
          left: '136rpx',
          top: '39rpx'
        }
      }, {
        type: 'text',
        text: '发布了一条有趣的动态',
        css: {
          fontSize: '24rpx',
          color: '#4070FF',
          lineHeight: '24rpx',
          left: '136rpx',
          top: '80rpx'
        }
      }, {
        type: 'qrcode',
        text: this.item.share_url,
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
        src: this.item.share_img,
        css: {
          left: '32rpx',
          top: '384rpx',
          width: '90%',
          borderRadius: '16rpx'
        }
      }];
    },
    previewImg: function previewImg() {
      uni.previewImage({
        current: this.path,
        urls: [this.path]
      });
    },
    toSave: function toSave() {
      var _this12 = this;
      uni.showLoading({
        title: '海报生成中'
      });
      var painter = this.$refs.painter;
      painter.canvasToTempFilePath().then(function (res) {
        _this12.path = res.tempFilePath;
        setTimeout(function () {
          uni.hideLoading();
        }, 1000);
      });
    },
    jubaopass: function jubaopass() {
      var _this13 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var that, result;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                that = _this13;
                if (_this13.isLogin) {
                  _context6.next = 4;
                  break;
                }
                _this13.loginBoxFlag = true;
                return _context6.abrupt("return", false);
              case 4:
                if (!(that.jubao_body == '')) {
                  _context6.next = 7;
                  break;
                }
                _this13.msg('请输入举报理由');
                return _context6.abrupt("return");
              case 7:
                _context6.next = 9;
                return that.$request({
                  loading: 0,
                  method: 'post',
                  url: '/api/user/addReport',
                  data: {
                    goods_id: that.goods_id,
                    type: 0,
                    content: that.jubao_body
                  }
                });
              case 9:
                result = _context6.sent;
                if (result.statusCode == 200) {
                  if (result.data.code == 200) {
                    that.jubao_body = '';
                    _this13.msg(result.data.msg);
                    _this13.jubaoshow = false;
                  }
                }
              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    top: function top(id, type, num, ziindex, index, is_zi) {
      var typename = '';
      if (num == 0) {
        typename = '取消';
      }
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确定要' + typename + '置顶该条评论吗？',
        success: function success(res) {
          if (res.confirm) {
            that.editcommet(id, type, num, ziindex, index, is_zi);
          } else if (res.cancel) {}
        }
      });
    },
    delcomment: function delcomment(id, type, num, ziindex, index, is_zi) {
      var that = this;
      uni.showModal({
        title: '提示',
        content: '确定要删除该条评论吗？',
        success: function success(res) {
          if (res.confirm) {
            that.editcommet(id, type, num, ziindex, index, is_zi);
          } else if (res.cancel) {}
        }
      });
    },
    editcommet: function editcommet(id, type, num, ziindex, index, is_zi) {
      var _this14 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var that, result;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                that = _this14;
                _context7.next = 3;
                return that.$request({
                  loading: 1,
                  method: 'post',
                  url: '/api/user/editcomment',
                  data: {
                    id: id,
                    type: type,
                    num: num,
                    goods_id: that.id
                  }
                });
              case 3:
                result = _context7.sent;
                if (!(result.statusCode == 200)) {
                  _context7.next = 14;
                  break;
                }
                if (!(result.data.code == 0)) {
                  _context7.next = 8;
                  break;
                }
                uni.showToast({
                  icon: 'none',
                  title: result.data.msg
                });
                return _context7.abrupt("return");
              case 8:
                if (type == 'del' && is_zi == 0) {
                  that.content.splice(index, 1);
                  that.commentCount--;
                  //删除主评论
                }

                if (type == 'del' && is_zi == 1) {
                  that.commentCount--;
                  //删除回复
                  that.content[index].child.splice(ziindex, 1);
                }
                if (type == 'top') {
                  //操作置顶			
                  that.content[index].is_ding = num;
                }
                uni.showToast({
                  icon: 'none',
                  title: result.data.msg
                });
                _context7.next = 15;
                break;
              case 14:
                uni.showToast({
                  icon: 'none',
                  title: that.$errorMsg
                });
              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    goBack: function goBack() {
      uni.createVideoContext(this.dataList[this.k]._id + '' + this.k, this).stop();

      // 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
      var pages = getCurrentPages();
      if (pages && pages.length > 0) {
        var firstPage = pages[0];
        if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index')) {
          uni.reLaunch({
            url: '/pages/index'
          });
        } else {
          uni.navigateBack({
            delta: 1
          });
        }
      } else {
        uni.reLaunch({
          url: '/pages/index'
        });
      }
    },
    gohome: function gohome() {
      uni.createVideoContext(this.dataList[this.k]._id + '' + this.k, this).stop();
      uni.reLaunch({
        url: '/pages/index'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 167:
/*!***********************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/homePages/vod/vod.vue?vue&type=style&index=0&id=37294502&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_style_index_0_id_37294502_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./vod.vue?vue&type=style&index=0&id=37294502&lang=scss&scoped=true& */ 168);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_style_index_0_id_37294502_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_style_index_0_id_37294502_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_style_index_0_id_37294502_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_style_index_0_id_37294502_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_vod_vue_vue_type_style_index_0_id_37294502_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 168:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/homePages/vod/vod.vue?vue&type=style&index=0&id=37294502&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[161,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/homePages/vod/vod.js.map