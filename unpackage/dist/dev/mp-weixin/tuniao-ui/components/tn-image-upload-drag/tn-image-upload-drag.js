(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag"],{

/***/ 1159:
/*!**********************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.vue ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tn-image-upload-drag.vue?vue&type=template&id=4c370648&scoped=true& */ 1160);
/* harmony import */ var _tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tn-image-upload-drag.vue?vue&type=script&lang=js& */ 1162);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tn_image_upload_drag_vue_vue_type_style_index_0_id_4c370648_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tn-image-upload-drag.vue?vue&type=style&index=0&id=4c370648&lang=scss&scoped=true& */ 1164);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c370648",
  null,
  false,
  _tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1160:
/*!*****************************************************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.vue?vue&type=template&id=4c370648&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-image-upload-drag.vue?vue&type=template&id=4c370648&scoped=true& */ 1161);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_template_id_4c370648_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1161:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.vue?vue&type=template&id=4c370648&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    tnLineProgress: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-line-progress/tn-line-progress */ "tuniao-ui/components/tn-line-progress/tn-line-progress").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-line-progress/tn-line-progress.vue */ 862))
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
  var l0 = !_vm.disabled
    ? _vm.__map(_vm.lists, function (item, index) {
        var $orig = _vm.__get_orig(item)
        var g0 = _vm.$t.string.getLengthUnitValue(_vm.width)
        var g1 = _vm.$t.string.getLengthUnitValue(_vm.height)
        var g2 = _vm.$t.string.getLengthUnitValue(_vm.itemWidth, "px")
        var g3 = _vm.$t.string.getLengthUnitValue(_vm.itemHeight, "px")
        return {
          $orig: $orig,
          g0: g0,
          g1: g1,
          g2: g2,
          g3: g3,
        }
      })
    : null
  var g4 = !_vm.disabled
    ? _vm.maxCount > _vm.lists.length && _vm.isadd == true
    : null
  var g5 =
    !_vm.disabled && g4
      ? _vm.$t.string.getLengthUnitValue(_vm.itemWidth, "px")
      : null
  var g6 =
    !_vm.disabled && g4
      ? _vm.$t.string.getLengthUnitValue(_vm.itemHeight, "px")
      : null
  var g7 =
    !_vm.disabled && g4
      ? _vm.$t.string.getLengthUnitValue(_vm.itemWidth, "px")
      : null
  var g8 =
    !_vm.disabled && g4
      ? _vm.$t.string.getLengthUnitValue(_vm.itemHeight, "px")
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        g4: g4,
        g5: g5,
        g6: g6,
        g7: g7,
        g8: g8,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1162:
/*!***********************************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-image-upload-drag.vue?vue&type=script&lang=js& */ 1163);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1163:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 = {
  name: 'tn-image-upload-drag',
  props: {
    // 已上传的文件列表
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 上传图片地址
    action: {
      type: String,
      default: ''
    },
    // 上传文件的字段名称
    name: {
      type: String,
      default: 'file'
    },
    // 头部信息
    header: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 携带的参数
    formData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    isadd: {
      type: Boolean,
      default: true
    },
    // 是否自动上传
    autoUpload: {
      type: Boolean,
      default: true
    },
    // 最大上传数量
    maxCount: {
      type: Number,
      default: 9
    },
    // 预览上传图片的裁剪模式
    imageMode: {
      type: String,
      default: 'aspectFill'
    },
    // 点击图片是否全屏预览
    previewFullImage: {
      type: Boolean,
      default: true
    },
    // 是否显示进度条
    showProgress: {
      type: Boolean,
      default: true
    },
    // 是否显示删除按钮
    deleteable: {
      type: Boolean,
      default: true
    },
    // 删除按钮图标
    deleteIcon: {
      type: String,
      default: 'close'
    },
    // 删除按钮的背景颜色
    deleteBackgroundColor: {
      type: String,
      default: '#ff0000'
    },
    // 删除按钮的颜色
    deleteColor: {
      type: String,
      default: ''
    },
    // 上传区域提示文字
    uploadText: {
      type: String,
      default: '选择图片'
    },
    // 显示toast提示
    showTips: {
      type: Boolean,
      default: true
    },
    // 预览图片和选择图片区域的宽度
    width: {
      type: Number,
      default: 200
    },
    // 预览图片和选择图片区域的高度
    height: {
      type: Number,
      default: 200
    },
    sizeType: {
      type: Array,
      default: function _default() {
        return ['original', 'compressed'];
      }
    },
    // 图片来源
    sourceType: {
      type: Array,
      default: function _default() {
        return ['album', 'camera'];
      }
    },
    // 是否可以多选
    multiple: {
      type: Boolean,
      default: true
    },
    // 文件大小(byte)
    maxSize: {
      type: Number,
      default: 10 * 1024 * 1024
    },
    // 允许上传的类型
    limitType: {
      type: Array,
      default: function _default() {
        return ['png', 'jpg', 'jpeg', 'webp', 'gif', 'image'];
      }
    },
    // 是否自定转换为json
    toJson: {
      type: Boolean,
      default: true
    },
    // 上传前钩子函数，每个文件上传前都会执行
    beforeUpload: {
      type: Function,
      default: null
    },
    // 删除文件前钩子函数
    beforeRemove: {
      type: Function,
      default: null
    },
    index: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    movableAreaHeight: function movableAreaHeight() {
      if (this.lists.length < this.maxCount) {
        return Math.ceil(this.lists.length / this.baseData.columns) * uni.upx2px(this.height) + 'px';
      } else {
        return Math.ceil(this.lists.length / this.baseData.columns) * uni.upx2px(this.height) + 'px';
      }
    },
    itemWidth: function itemWidth() {
      return uni.upx2px(this.width) - uni.upx2px(10) * 2;
    },
    itemHeight: function itemHeight() {
      return uni.upx2px(this.height) - uni.upx2px(10) * 2;
    }
  },
  data: function data() {
    return {
      lists: [],
      uploading: false,
      baseData: {
        windowWidth: 0,
        columns: 3,
        dragItem: null,
        widthPx: 0,
        heightPx: 0
      },
      addBtn: {
        x: 0,
        y: 0
      },
      timer: null,
      dragging: false
    };
  },
  watch: {
    // fileList: {
    //   handler(val) {
    //     val.map(value => {
    //       // 首先检查内部是否已经添加过这张图片，因为外部绑定了一个对象给fileList的话(对象引用)，进行修改外部fileList时，
    //       // 会触发watch，导致重新把原来的图片再次添加到this.lists
    //       // 数组的some方法意思是，只要数组元素有任意一个元素条件符合，就返回true，而另一个数组的every方法的意思是数组所有元素都符合条件才返回true
    //       let tmp = this.lists.some(listVal => {
    //         return listVal.url === value.url
    //       })
    //       // 如果内部没有这张图片，则添加到内部
    //       !tmp && this.lists.push({ url: value.url, error: false, progress: 100 })
    //     })
    //   },
    //   immediate: true
    // },
    lists: function lists(val) {
      this.$emit('on-list-change', this.sortList(), this.index);
    }
  },
  created: function created() {
    this.baseData.windowWidth = uni.getSystemInfoSync().windowWidth;
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      _this.updateDragInfo();
    });
  },
  methods: {
    // 清除列表
    clear: function clear() {
      this.lists = [];
      this.updateAddBtnPositioin();
    },
    // 重新上传队列中上传失败所有文件
    reUpload: function reUpload() {
      this.uploadFile();
    },
    wenjianlist: function wenjianlist() {
      return this.sortList();
    },
    // 选择图片
    selectFile: function selectFile() {
      var _this2 = this;
      if (this.disabled) return;
      var _this$name = this.name,
        name = _this$name === void 0 ? '' : _this$name,
        maxCount = this.maxCount,
        multiple = this.multiple,
        maxSize = this.maxSize,
        sizeType = this.sizeType,
        lists = this.lists,
        camera = this.camera,
        compressed = this.compressed,
        sourceType = this.sourceType;
      var chooseFile = null;
      var newMaxCount = maxCount - lists.length;
      // 只选择图片的时候使用 chooseImage 来实现
      chooseFile = new Promise(function (resolve, reject) {
        uni.chooseImage({
          count: multiple ? newMaxCount > 9 ? 9 : newMaxCount : 1,
          sourceType: sourceType,
          sizeType: sizeType,
          success: resolve,
          fail: reject
        });
      });
      chooseFile.then(function (res) {
        var file = null;
        var listOldLength = lists.length;
        res.tempFiles.map(function (val, index) {
          if (!_this2.checkFileExt(val)) return;

          // 是否超出最大限制数量
          if (!multiple && index >= 1) return;
          if (val.size > maxSize) {
            _this2.$emit('on-oversize', val, _this2.sortList(), _this2.index);
            _this2.showToast('超出可允许文件大小');
          } else {
            if (maxCount <= lists.length) {
              _this2.$emit('on-exceed', val, _this2.sortList(), _this2.index);
              _this2.showToast('超出最大允许的文件数');
              return;
            }
            lists.push(_this2.handleDragListItem({
              url: val.path,
              progress: 0,
              error: false,
              file: val
            }));
            _this2.updateAddBtnPositioin();
          }
        });
        _this2.$emit('on-choose-complete', _this2.sortList(), _this2.index);
        if (_this2.autoUpload) _this2.uploadFile(listOldLength);
      }).catch(function (err) {
        _this2.$emit('on-choose-fail', err);
      });
    },
    // 提示用户信息
    showToast: function showToast(message) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.showTips || force) {
        this.$t.message.toast(message);
      }
    },
    // 手动上传，通过ref进行调用
    upload: function upload() {
      this.uploadFile();
    },
    // 对失败图片进行再次上传
    retry: function retry(index) {
      this.lists[index].data.progress = 0;
      this.lists[index].data.error = false;
      this.lists[index].data.response = null;
      this.$t.message.loading('重新上传');
      this.uploadFile(index);
    },
    // 上传文件
    uploadFile: function uploadFile() {
      var _arguments = arguments,
        _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var index, beforeResponse, task;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 0;
                if (!_this3.disabled) {
                  _context.next = 3;
                  break;
                }
                return _context.abrupt("return");
              case 3:
                if (!_this3.uploading) {
                  _context.next = 5;
                  break;
                }
                return _context.abrupt("return");
              case 5:
                if (!(index >= _this3.lists.length)) {
                  _context.next = 8;
                  break;
                }
                _this3.$emit('on-uploaded', _this3.sortList(), index);
                return _context.abrupt("return");
              case 8:
                _this3.$emit('upjindu', index + 1 / _this3.lists.length * 10);
                // 检查是否已经全部上传或者上传中
                if (!(_this3.lists[index].data.progress === 100)) {
                  _context.next = 13;
                  break;
                }
                _this3.lists[index].data.uploadTask = null;
                if (_this3.autoUpload) _this3.uploadFile(index + 1);
                return _context.abrupt("return");
              case 13:
                if (!(_this3.beforeUpload && typeof _this3.beforeUpload === 'function')) {
                  _context.next = 24;
                  break;
                }
                // 在微信，支付宝等环境(H5正常)，会导致父组件定义的函数体中的this变成子组件的this
                // 通过bind()方法，绑定父组件的this，让this的this为父组件的上下文
                // 因为upload组件可能会被嵌套在其他组件内，比如tn-form，这时this.$parent其实为tn-form的this，
                // 非页面的this，所以这里需要往上历遍，一直寻找到最顶端的$parent，这里用了this.$u.$parent.call(this)
                beforeResponse = _this3.beforeUpload.bind(_this3.$t.$parent.call(_this3))(index, _this3.lists); // 判断是否返回了Promise
                if (!(!!beforeResponse && typeof beforeResponse.then === 'function')) {
                  _context.next = 20;
                  break;
                }
                _context.next = 18;
                return beforeResponse.then(function (res) {
                  // promise返回成功，不进行操作继续
                }).catch(function (err) {
                  // 进入catch回调的话，继续下一张
                  return _this3.uploadFile(index + 1);
                });
              case 18:
                _context.next = 24;
                break;
              case 20:
                if (!(beforeResponse === false)) {
                  _context.next = 24;
                  break;
                }
                return _context.abrupt("return", _this3.uploadFile(index + 1));
              case 24:
                if (_this3.action) {
                  _context.next = 27;
                  break;
                }
                _this3.showToast('请配置上传地址', true);
                return _context.abrupt("return");
              case 27:
                _this3.lists[index].data.error = false;
                _this3.uploading = true;
                // 创建上传对象
                task = uni.uploadFile({
                  url: _this3.action,
                  filePath: _this3.lists[index].data.url,
                  name: _this3.name,
                  formData: _this3.formData,
                  header: _this3.header,
                  success: function success(res) {
                    // 判断啊是否为json字符串，将其转换为json格式
                    var data = _this3.toJson && _this3.$t.test.jsonString(res.data) ? JSON.parse(res.data) : res.data;
                    if (![200, 201, 204].includes(res.statusCode)) {
                      _this3.uploadError(index, data);
                    } else {
                      _this3.lists[index].data.response = data;
                      _this3.lists[index].data.progress = 100;
                      _this3.lists[index].data.error = false;
                      _this3.$emit('on-success', data, index, _this3.sortList(), _this3.index);
                    }
                  },
                  fail: function fail(err) {
                    _this3.uploadError(index, err);
                  },
                  complete: function complete(res) {
                    _this3.$t.message.closeLoading();
                    _this3.uploading = false;
                    _this3.uploadFile(index + 1);
                    _this3.$emit('on-change', res, index, _this3.sortList(), _this3.index);
                  }
                });
                _this3.lists[index].uploadTask = task;
                task.onProgressUpdate(function (res) {
                  if (res.progress > 0) {
                    _this3.lists[index].data.progress = res.progress;
                    _this3.$emit('on-progress', res, index, _this3.sortList(), _this3.index);
                  }
                });
              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 上传失败
    uploadError: function uploadError(index, err) {
      this.lists[index].data.progress = 0;
      this.lists[index].data.error = true;
      this.lists[index].data.response = null;
      this.showToast('上传失败，请重试');
      this.$emit('on-error', err, index, this.sortList(), this.index);
    },
    // 删除一个图片
    deleteItem: function deleteItem(index) {
      var _this4 = this;
      if (!this.deleteable) return;
      this.$t.message.modal('提示', '你确定要删除吗？', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var beforeResponse;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this4.beforeRemove && typeof _this4.beforeRemove === 'function')) {
                  _context2.next = 10;
                  break;
                }
                beforeResponse = _this4.beforeRemove.bind(_this4.$t.$parent.call(_this4))(index, _this4.lists); // 判断是否返回promise 
                if (!(!!beforeResponse && typeof beforeResponse.then === 'function')) {
                  _context2.next = 7;
                  break;
                }
                _context2.next = 5;
                return beforeResponse.then(function (res) {
                  // promise返回成功不进行操作
                  _this4.handlerDeleteItem(index);
                }).catch(function (err) {
                  _this4.showToast('删除操作被中断');
                });
              case 5:
                _context2.next = 8;
                break;
              case 7:
                if (beforeResponse === false) {
                  _this4.showToast('删除操作被中断');
                } else {
                  _this4.handlerDeleteItem(index);
                }
              case 8:
                _context2.next = 11;
                break;
              case 10:
                _this4.handlerDeleteItem(index);
              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })), true);
    },
    // 移除文件操作
    handlerDeleteItem: function handlerDeleteItem(index) {
      // 如果文件正在上传中，终止上传任务
      if (this.lists[index].data.progress < 100 && this.lists[index].data.progress > 0) {
        typeof this.lists[index].data.uploadTask !== 'undefined' && this.lists[index].data.uploadTask.abort();
      }
      this.remove(index);
      this.$forceUpdate();
      this.$emit('on-remove', index, this.sortList(), this.index);
      this.showToast('删除成功');
    },
    // 移除文件，通过ref手动形式进行调用
    remove: function remove(index) {
      var _this5 = this;
      if (!this.deleteable) return;
      // 判断索引合法
      if (index >= 0 && index < this.lists.length) {
        var currentItemIndex = this.lists[index].index;
        this.lists.splice(index, 1);
        // 重新排列列表信息
        var _iterator = _createForOfIteratorHelper(this.lists),
          _step;
        try {
          var _loop = function _loop() {
            var item = _step.value;
            if (item.index > currentItemIndex) {
              item.index -= 1;
              item.x = item.positionX * _this5.baseData.widthPx;
              item.y = item.positionY * _this5.baseData.heightPx;
              item.positionX = item.index % _this5.baseData.columns;
              item.positionY = Math.floor(item.index / _this5.baseData.columns);
              _this5.$nextTick(function () {
                item.x = item.positionX * _this5.baseData.widthPx;
                item.y = item.positionY * _this5.baseData.heightPx;
              });
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.updateAddBtnPositioin();
      }
    },
    // 预览图片
    doPreviewImage: function doPreviewImage(url, index) {
      var _this6 = this;
      if (!this.previewFullImage) return;
      var images = this.lists.sort(function (l1, l2) {
        return l1.index - l2.index;
      }).map(function (item) {
        return item.data.url || item.data.path;
      });
      uni.previewImage({
        urls: images,
        current: url,
        success: function success() {
          _this6.$emit('on-preview', url, _this6.sortList(), _this6.index);
        },
        fail: function fail() {
          _this6.showToast('预览图片失败');
        }
      });
    },
    // 检查文件后缀是否合法
    checkFileExt: function checkFileExt(file) {
      // 是否为合法后缀
      var noArrowExt = false;
      // 后缀名
      var fileExt = '';
      var reg = /.+\./;
      fileExt = file.path.replace(reg, '').toLowerCase();
      noArrowExt = this.limitType.some(function (ext) {
        return ext.toLowerCase() === fileExt;
      });
      if (!noArrowExt) this.showToast("\u4E0D\u652F\u6301".concat(fileExt, "\u683C\u5F0F\u7684\u6587\u4EF6"));
      return noArrowExt;
    },
    /********************* 拖拽处理 ********************/
    // 更新拖拽信息
    updateDragInfo: function updateDragInfo() {
      var _this7 = this;
      this.baseData.widthPx = uni.upx2px(this.width);
      this.baseData.heightPx = uni.upx2px(this.height);

      // 获取可移动区域的信息，用于判断当前有多少列
      var query = uni.createSelectorQuery().in(this);
      query.select('.tn-image-upload__movable-area').boundingClientRect();
      query.exec(function (res) {
        if (res[0].width == 0) {
          setTimeout(function () {
            _this7.updateDragInfo();
          }, 1000);
          return;
        }
        _this7.baseData.columns = Math.floor(res[0].width / _this7.baseData.widthPx);

        // 初始化可拖拽列表信息
        _this7.lists = [];
        _this7.fileList.forEach(function (item) {
          // 首先检查内部是否已经添加过这张图片，因为外部绑定了一个对象给fileList的话(对象引用)，进行修改外部fileList时，
          // 会触发watch，导致重新把原来的图片再次添加到this.lists
          // 数组的some方法意思是，只要数组元素有任意一个元素条件符合，就返回true，而另一个数组的every方法的意思是数组所有元素都符合条件才返回true
          var tmp = _this7.lists.map(function (value) {
            return value.data;
          }).some(function (listVal) {
            return listVal.url === item.url;
          });
          // 如果内部没有这张图片，则添加到内部
          !tmp && _this7.lists.push(_this7.handleDragListItem({
            url: item.url,
            error: false,
            progress: 100
          }));
        });

        // 更新添加按钮位置
        _this7.updateAddBtnPositioin();
      });
    },
    // 处理拖拽列表信息
    handleDragListItem: function handleDragListItem(item) {
      var positionX = this.lists.length % this.baseData.columns;
      var positionY = Math.floor(this.lists.length / this.baseData.columns);
      var x = positionX * this.baseData.widthPx;
      var y = positionY * this.baseData.heightPx;
      return {
        id: this.unique(),
        x: x,
        y: y,
        preX: x,
        preY: y,
        positionX: positionX,
        positionY: positionY,
        zIndex: 1,
        disabled: true,
        opacity: 1,
        scale: 1,
        index: this.lists.length,
        offset: 0,
        moveEnd: false,
        moving: false,
        data: _objectSpread({}, item)
      };
    },
    // 生成元素唯一id
    unique: function unique() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
      var id = '';
      for (var i = 0; i < n; i++) {
        id += Math.floor(Math.random() * 10);
      }
      return 'tn_' + new Date().getTime() + id;
    },
    // 更新添加按钮位置
    updateAddBtnPositioin: function updateAddBtnPositioin() {
      if (this.lists.length >= this.maxCount) return;
      this.addBtn.x = this.lists.length % this.baseData.columns * this.baseData.widthPx;
      this.addBtn.y = Math.floor(this.lists.length / this.baseData.columns) * this.baseData.heightPx;
    },
    // 获取排序后数据
    sortList: function sortList() {
      var list = this.lists.slice();
      list.sort(function (l1, l2) {
        return l1.index - l2.index;
      });
      return list.map(function (item) {
        return item.data;
      });
    },
    mouseEnterArea: function mouseEnterArea() {},
    mouseLeaveArea: function mouseLeaveArea() {},
    movableLongPress: function movableLongPress(item) {
      uni.vibrateShort();
      // console.log("LongPress--------------------------------------------------------------");
      this.lists.forEach(function (value) {
        value.moving = false;
      });
      this.dragging = true;
      // 设置对应的元素允许拖动
      var index = this.lists.findIndex(function (obj) {
        return obj.id === item.id;
      });
      item.disabled = false;
      item.opacity = 0.7;
      item.scale = 1.1;
      this.$set(this.lists, index, item);
    },
    movableChange: function movableChange(e, item) {
      if (!item || !this.dragging) return;
      // console.log("movableChange");
      item.moving = true;
      item.preX = e.detail.x;
      item.preY = e.detail.y;
      // console.log(item.preX, item.preY);

      if (e.detail.source === 'touch') {
        if (!item.moveEnd) {
          item.offset = Math.sqrt(Math.pow(item.preX - item.positionX * this.baseData.widthPx, 2) + Math.pow(item.preY - item.positionY * this.baseData.heightPx, 2));
        }
        var x = Math.floor((e.detail.x + this.baseData.widthPx / 2) / this.baseData.widthPx);
        if (x > this.baseData.columns) return;
        var y = Math.floor((e.detail.y + this.baseData.heightPx / 2) / this.baseData.heightPx);
        var index = this.baseData.columns * y + x;
        if (item.index !== index && index < this.lists.length) {
          var _iterator2 = _createForOfIteratorHelper(this.lists),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var obj = _step2.value;
              if (item.index > index && obj.index >= index && obj.index < item.index) {
                this.updateItemPosition(obj, 1);
              } else if (item.index < index && obj.index <= index && obj.index > item.index) {
                this.updateItemPosition(obj, -1);
              } else if (item.id != obj.id) {
                // obj.offset = 0
                // console.log(obj.moving);
                // if (!obj.moving) {
                //   obj.preX = obj.positionX * this.baseData.widthPx
                //   obj.preY = obj.positionY * this.baseData.heightPx
                //   console.log("moving", obj.id, obj.preX, obj.preY);
                // }
                // obj.x = obj.preX
                // obj.y = obj.preY
                // // console.log(obj.id, obj.preX, obj.preY);
                // this.$nextTick(() => {
                //   obj.x = obj.positionX * this.baseData.widthPx
                //   obj.y = obj.positionY * this.baseData.heightPx
                // })
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          item.index = index;
          item.positionX = x;
          item.positionY = y;
          // TODO 发送事件
        }
      }
    },
    movableStart: function movableStart(item) {
      // console.log("movableStart");
      this.lists.forEach(function (item) {
        item.zIndex = 1;
      });
      item.zIndex = 10;
      item.moveEnd = false;
      this.baseData.dragItem = item;
    },
    movableEnd: function movableEnd(item) {
      var _this8 = this;
      if (!this.dragging) return;
      // console.log("movableEnd");
      var index = this.lists.findIndex(function (obj) {
        return obj.id === item.id;
      });
      if (!item.moving) {
        item.preX = item.positionX * this.baseData.widthPx;
        item.preY = item.positionY * this.baseData.heightPx;
      }
      item.x = item.preX;
      item.y = item.preY;
      item.offset = 0;
      item.moveEnd = true;
      item.moving = false;
      item.disabled = true;
      // console.log(item.x, item.y);
      // console.log(item.id, item.moving);
      // this.$set(this.lists, index, item)
      // this.lists[index] = item
      // console.log(this.lists[index]);
      this.lists.forEach(function (listValue) {
        listValue.moving = false;
        listValue.disabled = true;
      });
      this.$nextTick(function () {
        item.x = item.positionX * _this8.baseData.widthPx;
        item.y = item.positionY * _this8.baseData.heightPx;
        item.opacity = 1;
        item.scale = 1;
        _this8.baseData.dragItem = null;
        _this8.dragging = false;
        // console.log(item.x, item.y);
        _this8.$set(_this8.lists, index, item);
      });
      this.$emit('sort-list', this.sortList());
    },
    // 更新图片位置信息
    updateItemPosition: function updateItemPosition(item, offset) {
      var _this9 = this;
      var index = this.lists.findIndex(function (obj) {
        return obj.id === item.id;
      });
      item.index += offset;
      item.offset = 0;
      item.positionX = item.index % this.baseData.columns;
      item.positionY = Math.floor(item.index / this.baseData.columns);
      if (!item.moving) {
        item.preX = item.positionX * this.baseData.widthPx;
        item.preY = item.positionY * this.baseData.heightPx;
      }
      item.x = item.preX;
      item.y = item.preY;
      // console.log("updateItemPosition", item.id, item.preX, item.preY);
      // this.$set(this.lists, index, item)
      this.$nextTick(function () {
        item.x = item.positionX * _this9.baseData.widthPx;
        item.y = item.positionY * _this9.baseData.heightPx;
        _this9.$set(_this9.lists, index, item);
      });
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1164:
/*!********************************************************************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.vue?vue&type=style&index=0&id=4c370648&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_style_index_0_id_4c370648_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../下载/HBuilderX.3.8.7.20230703/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-image-upload-drag.vue?vue&type=style&index=0&id=4c370648&lang=scss&scoped=true& */ 1165);
/* harmony import */ var _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_style_index_0_id_4c370648_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_style_index_0_id_4c370648_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_style_index_0_id_4c370648_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_style_index_0_id_4c370648_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_image_upload_drag_vue_vue_type_style_index_0_id_4c370648_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1165:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.vue?vue&type=style&index=0&id=4c370648&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag-create-component',
    {
        'tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1159))
        })
    },
    [['tuniao-ui/components/tn-image-upload-drag/tn-image-upload-drag-create-component']]
]);
