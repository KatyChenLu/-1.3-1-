(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["homePages/music"],{

/***/ 209:
/*!****************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/main.js?{"page":"homePages%2Fmusic"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _music = _interopRequireDefault(__webpack_require__(/*! ./homePages/music.vue */ 210));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_music.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 210:
/*!***********************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/homePages/music.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music.vue?vue&type=template&id=77acf31d&scoped=true& */ 211);
/* harmony import */ var _music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./music.vue?vue&type=script&lang=js& */ 213);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _music_vue_vue_type_style_index_0_id_77acf31d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music.vue?vue&type=style&index=0&id=77acf31d&lang=scss&scoped=true& */ 215);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 39);

var renderjs





/* normalize component */

var component = Object(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "77acf31d",
  null,
  false,
  _music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "homePages/music.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 211:
/*!******************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/homePages/music.vue?vue&type=template&id=77acf31d&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music.vue?vue&type=template&id=77acf31d&scoped=true& */ 212);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_template_id_77acf31d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 212:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/homePages/music.vue?vue&type=template&id=77acf31d&scoped=true& ***!
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
      return Promise.all(/*! import() | tuniao-ui/components/tn-nav-bar/tn-nav-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-nav-bar/tn-nav-bar.vue */ 770))
    },
    tnBadge: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-badge/tn-badge */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-badge/tn-badge")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-badge/tn-badge.vue */ 993))
    },
    tnTabs: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-tabs/tn-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-tabs/tn-tabs")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-tabs/tn-tabs.vue */ 827))
    },
    tnAvatarGroup: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-avatar-group/tn-avatar-group */ "tuniao-ui/components/tn-avatar-group/tn-avatar-group").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-avatar-group/tn-avatar-group.vue */ 785))
    },
    tnAvatar: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-avatar/tn-avatar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-avatar/tn-avatar")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-avatar/tn-avatar.vue */ 834))
    },
    tnGrid: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-grid/tn-grid */ "tuniao-ui/components/tn-grid/tn-grid").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-grid/tn-grid.vue */ 1000))
    },
    tnGridItem: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-grid-item/tn-grid-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-grid-item/tn-grid-item")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-grid-item/tn-grid-item.vue */ 1007))
    },
    tnStackSwiper: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-stack-swiper/tn-stack-swiper */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-stack-swiper/tn-stack-swiper")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-stack-swiper/tn-stack-swiper.vue */ 1014))
    },
    tnLandscape: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-landscape/tn-landscape */ "tuniao-ui/components/tn-landscape/tn-landscape").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-landscape/tn-landscape.vue */ 799))
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
  var l1 =
    _vm.current == 0
      ? _vm.__map(_vm.content, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g0 = !item.label || item.label.length < 4
          var g1 = item.mainImage
            ? [1, 2, 4].indexOf(item.mainImage.length)
            : null
          var l0 =
            item.mainImage && g1 != -1
              ? _vm.__map(item.mainImage, function (image_item, image_index) {
                  var $orig = _vm.__get_orig(image_item)
                  var g2 = item.mainImage.length
                  var g3 =
                    item.mainImage.length === 2 || item.mainImage.length === 4
                  return {
                    $orig: $orig,
                    g2: g2,
                    g3: g3,
                  }
                })
              : null
          var g4 = _vm.content.length
          return {
            $orig: $orig,
            g0: g0,
            g1: g1,
            l0: l0,
            g4: g4,
          }
        })
      : null
  var l3 =
    _vm.current == 0
      ? _vm.__map(_vm.content, function (item, index) {
          var $orig = _vm.__get_orig(item)
          var g5 = !item.label || item.label.length < 4
          var g6 = item.mainImage
            ? [1, 2, 4].indexOf(item.mainImage.length)
            : null
          var l2 =
            item.mainImage && g6 != -1
              ? _vm.__map(item.mainImage, function (image_item, image_index) {
                  var $orig = _vm.__get_orig(image_item)
                  var g7 = item.mainImage.length
                  var g8 =
                    item.mainImage.length === 2 || item.mainImage.length === 4
                  return {
                    $orig: $orig,
                    g7: g7,
                    g8: g8,
                  }
                })
              : null
          var g9 = _vm.content.length
          return {
            $orig: $orig,
            g5: g5,
            g6: g6,
            l2: l2,
            g9: g9,
          }
        })
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l1: l1,
        l3: l3,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 213:
/*!************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/homePages/music.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music.vue?vue&type=script&lang=js& */ 214);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 214:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/homePages/music.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'CirclePage',
  data: function data() {
    return {
      cardCur: 0,
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg1.jpg',
        pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full1.png',
        mp4: 'https://tnuiimage.tnkjapp.com/new/111.mp4'
      }, {
        id: 1,
        type: 'image',
        url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg2.jpg',
        pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full2.png',
        mp4: 'https://tnuiimage.tnkjapp.com/new/22.mp4'
      }, {
        id: 2,
        type: 'image',
        url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg1.jpg',
        pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full3.png',
        mp4: 'https://tnuiimage.tnkjapp.com/new/33.mp4'
      }, {
        id: 3,
        type: 'image',
        url: 'https://tnuiimage.tnkjapp.com/swiper/fullbg2.jpg',
        pngurl: 'https://tnuiimage.tnkjapp.com/swiper/full4.png',
        mp4: 'https://tnuiimage.tnkjapp.com/new/111.mp4'
      }],
      current: 0,
      scrollList: [{
        name: '发现'
      }, {
        name: '视频'
      }, {
        name: '世界',
        count: ''
      }],
      latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      }, {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      }, {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      }, {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      }],
      bloggerList: [{
        id: 0,
        type: 'image',
        name: 'UI设计',
        text: '629人关注',
        url: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg'
      }, {
        id: 1,
        type: 'image',
        name: '前端开发',
        text: '688人关注',
        url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      }, {
        id: 2,
        type: 'image',
        name: '校园生活',
        text: '552人关注',
        url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      }, {
        id: 3,
        type: 'image',
        name: '户外摄影',
        text: '105人关注',
        url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      }, {
        id: 4,
        type: 'image',
        name: '电影点评',
        text: '387人关注',
        url: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      }, {
        id: 5,
        type: 'image',
        name: '热血动漫',
        text: '643人关注',
        url: 'https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg'
      }],
      // 内容默认隐藏显示的高度
      contentHideShowHeight: 0,
      content: [{
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        label: ['开源', '创意', 'UI框架'],
        desc: '开源可商用组件，助你开发酷炫UI一臂之力',
        content: '基础常用的布局元素，酷炫完善的配色体系，统一可增的图标 icon ，简便调用的功能组件，酷炫的前端页面，吖，编不下去了',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 62
        },
        collectionCount: 439,
        commentCount: 46,
        likeCount: 83
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        label: ['开源', '创意', 'UI框架'],
        desc: '开源可商用组件，助你开发酷炫UI一臂之力',
        content: '基础常用的布局元素，酷炫完善的配色体系，统一可增的图标 icon ，简便调用的功能组件，酷炫的前端页面，吖，编不下去了',
        mainImage: ['https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 12
        },
        collectionCount: 902,
        commentCount: 64,
        likeCount: 83
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        label: [],
        desc: '',
        content: '',
        mainImage: ['https://tnuiimage.tnkjapp.com/shop/computer2.jpg', 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }],
          viewUserCount: 56
        },
        collectionCount: 431,
        commentCount: 26,
        likeCount: 84
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        label: ['开源', '创意'],
        desc: '开源可商用组件',
        content: '基础常用的布局元素，酷炫完善的配色体系，统一可增的图标 icon ，简便调用的功能组件，酷炫的前端页面，吖，编不下去了 基础常用的布局元素，酷炫完善的配色体系，统一可增的图标 icon ，简便调用的功能组件，酷炫的前端页面，吖，编不下去了',
        mainImage: ['https://tnuiimage.tnkjapp.com/swiper/swiper2.jpg', 'https://tnuiimage.tnkjapp.com/swiper/swiper3.jpg', 'https://tnuiimage.tnkjapp.com/swiper/swiper4.jpg'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }],
          viewUserCount: 231
        },
        collectionCount: 780,
        commentCount: 89,
        likeCount: 82
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        label: ['开源', '链接'],
        desc: 'https://www.yuque.com/tuniao',
        mainImage: ['https://tnuiimage.tnkjapp.com/shop/watch1.jpg', 'https://tnuiimage.tnkjapp.com/shop/watch2.jpg', 'https://tnuiimage.tnkjapp.com/shop/pillow2.jpg', 'https://tnuiimage.tnkjapp.com/shop/pillow.jpg'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }],
          viewUserCount: 28
        },
        collectionCount: 432,
        commentCount: 33,
        likeCount: 12
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        label: ['开源', '创意'],
        desc: '开源可商用组件',
        mainImage: ['https://tnuiimage.tnkjapp.com/blogger/y11.jpg', 'https://tnuiimage.tnkjapp.com/blogger/y33.jpg', 'https://tnuiimage.tnkjapp.com/blogger/y22.jpg', 'https://tnuiimage.tnkjapp.com/blogger/y44.jpg', 'https://tnuiimage.tnkjapp.com/blogger/y55.jpg'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }],
          viewUserCount: 65
        },
        collectionCount: 265,
        commentCount: 22,
        likeCount: 62
      }],
      reserve: [{
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        color: 'red',
        label: ['新年祝福'],
        title: '2023年祝福接力',
        desc: '祝福接力活动：预约接龙的用户，将收到祝福通知',
        mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 567
        },
        collectionCount: 543,
        commentCount: 543,
        likeCount: 206
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        color: 'cyan',
        label: ['时光信件'],
        title: '寄给十年后自己',
        desc: '时光邮局：预约接龙的用户，十年后，将收到一份来着十年前发出的信件',
        mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 987
        },
        collectionCount: 567,
        commentCount: 69,
        likeCount: 65
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        color: 'blue',
        label: ['纪念日'],
        title: '常常忘记纪念日？',
        desc: '纪念日提醒：预约接龙的用户，微信上将收到纪念日提醒通知',
        mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 321
        },
        collectionCount: 654,
        commentCount: 232,
        likeCount: 543
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        color: 'green',
        label: ['团购接龙'],
        title: '冰箱空空如也？一起团购屯菜吖',
        desc: '团购活动：预约接龙的用户，将参与一起来买菜',
        mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 230
        },
        collectionCount: 987,
        commentCount: 236,
        likeCount: 342
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        color: 'orange',
        label: ['回母校'],
        title: '常回家看看',
        desc: '线下活动：预约接龙的用户，将表示参与了活动当天回母校',
        mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 106
        },
        collectionCount: 765,
        commentCount: 32,
        likeCount: 91
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        color: 'purplered',
        label: ['婚礼'],
        title: '我们结婚啦',
        desc: '婚礼请帖：欢迎来参加我们的婚礼宴席，不用随礼',
        mainImage: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 232
        },
        collectionCount: 776,
        commentCount: 48,
        likeCount: 86
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        color: 'purple',
        label: ['大扫除'],
        title: '组队参加大扫除公益活动',
        desc: '活动组队：预约接龙的学生，将表示参与了当天的大扫除活动',
        mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 456
        },
        collectionCount: 342,
        commentCount: 42,
        likeCount: 76
      }, {
        userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
        userName: '图鸟北北',
        date: '2022年5月20日',
        color: 'brown',
        label: ['新疆出游'],
        title: '一起组队去新疆看西西',
        desc: '旅游出行：一起去新疆看西西',
        mainImage: 'https://tnuiimage.tnkjapp.com/shop/card.jpg',
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 129
        },
        collectionCount: 265,
        commentCount: 22,
        likeCount: 62
      }],
      adList: [{
        image: 'https://tnuiimage.tnkjapp.com/swiper/ad1.jpg'
      }, {
        image: 'https://tnuiimage.tnkjapp.com/swiper/ad2.jpg'
      }, {
        image: 'https://tnuiimage.tnkjapp.com/swiper/ad3.jpg'
      }, {
        image: 'https://tnuiimage.tnkjapp.com/swiper/ad4.jpg'
      }, {
        image: 'https://tnuiimage.tnkjapp.com/swiper/ad5.jpg'
      }],
      adAutoplay: false,
      /* 压屏窗*/
      show2: false,
      maskCloseable: true
    };
  },
  onLoad: function onLoad() {
    this.initContentData();
    this.contentHideShowHeight = uni.upx2px(56) * 3;
  },
  onReady: function onReady() {
    // this.$nextTick(() => {
    //   this.getContentRectInfo()
    // })
  },
  onShow: function onShow() {
    this.adAutoplay = true;
  },
  onHide: function onHide() {
    this.adAutoplay = false;
  },
  methods: {
    // cardSwiper
    cardSwiper: function cardSwiper(e) {
      this.cardCur = e.detail.current;
      for (var i = 0; i < this.swiperList.length; i++) {
        var videoContext = uni.createVideoContext("video-".concat(this.swiperList[i]['id']), this);
        if (i === this.cardCur) {
          videoContext.play();
        } else {
          videoContext.stop();
        }
      }
    },
    // 暂停所有视频
    stopAllVideo: function stopAllVideo() {
      this.current = 0;
    },
    // tab选项卡切换
    tabChange: function tabChange(index) {
      this.current = index;
    },
    // 跳转
    tn: function tn(e) {
      uni.navigateTo({
        url: e
      });
    },
    // 震动跳转
    navEdit: function navEdit(e) {
      wx.vibrateLong();
      uni.navigateTo({
        url: '/circlePages/edit'
      });
    },
    // 震动跳转
    navCreate: function navCreate(e) {
      wx.vibrateLong();
      uni.navigateTo({
        url: '/circlePages/create'
      });
    },
    // 震动跳转
    navBuild: function navBuild(e) {
      wx.vibrateLong();
      uni.navigateTo({
        url: '/circlePages/build'
      });
    },
    // 处理内容，给内容添加对应的标识信息
    initContentData: function initContentData() {
      var _this = this;
      this.content.forEach(function (item, index) {
        // 是否需要隐藏内容
        item.hideContent = false;
        // 显示所有内容
        item.showAllContent = false;
        // 内容容器的实际高度
        item.contentContainerHeight = 0;
        // 内容容器是否初始化完成
        item.contentContainerInit = false;
        _this.$set(_this.content, index, item);
      });
    },
    // 获取内容容器的信息
    getContentRectInfo: function getContentRectInfo() {
      var _this2 = this;
      var contentRect = {};
      var query = uni.createSelectorQuery().in(this);
      // 筛选出存在内容的数据
      this.content.forEach(function (item, index) {
        if (item !== null && item !== void 0 && item.content) {
          query.select("#blogger__content--".concat(index)).boundingClientRect();
          contentRect[index] = item;
        }
      });
      // 获取所有内容的宽高信息
      query.exec(function (res) {
        if (!res) {
          setTimeout(function () {
            _this2.getContentRectInfo();
          }, 10);
          return;
        }
        // console.log(res);
        res.map(function (item) {
          // console.log(item.height, this.contentHideShowHeight);
          // 获取对应的标号
          var id = item.id;
          var idIndex = /blogger__content--(\d)/.exec(id)[1];
          var contentItem = _this2.content[idIndex];
          contentItem.hideContent = item.height > _this2.contentHideShowHeight;
          contentItem.showAllContent = false;
          contentItem.contentContainerHeight = item.height;
          contentItem.contentContainerInit = true;
          _this2.$set(_this2.content, idIndex, contentItem);

          // console.log(/blogger__content--(\d)/.exec(id)[1]);
        });
      });
    },
    // 切换内容的显示与隐藏
    switchContentShowStatus: function switchContentShowStatus(index) {
      var contentItem = this.content[index];
      contentItem.showAllContent = !contentItem.showAllContent;
      this.$set(this.content, index, contentItem);
    },
    // 弹出压屏窗
    showLandscape: function showLandscape() {
      this.openLandscape();
    },
    // 打开压屏窗
    openLandscape: function openLandscape() {
      // wx.vibrateLong();
      this.show2 = true;
    },
    // 关闭压屏窗
    closeLandscape: function closeLandscape() {
      this.show2 = false;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 215:
/*!*********************************************************************************************************************!*\
  !*** E:/verac/Documents/多客陪玩1.3前端(1)/homePages/music.vue?vue&type=style&index=0&id=77acf31d&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_77acf31d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./music.vue?vue&type=style&index=0&id=77acf31d&lang=scss&scoped=true& */ 216);
/* harmony import */ var _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_77acf31d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_77acf31d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_77acf31d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_77acf31d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_CoreApplication_Work_HBuilderX_3_8_4_20230531_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_music_vue_vue_type_style_index_0_id_77acf31d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/verac/Documents/多客陪玩1.3前端(1)/homePages/music.vue?vue&type=style&index=0&id=77acf31d&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[209,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/homePages/music.js.map