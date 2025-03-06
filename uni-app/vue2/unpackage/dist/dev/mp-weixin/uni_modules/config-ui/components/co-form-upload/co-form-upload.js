(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/config-ui/components/co-form-upload/co-form-upload"],{

/***/ 302:
/*!****************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-upload/co-form-upload.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./co-form-upload.vue?vue&type=template&id=ee72712a&scoped=true& */ 303);
/* harmony import */ var _co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./co-form-upload.vue?vue&type=script&lang=js& */ 305);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _co_form_upload_vue_vue_type_style_index_0_id_ee72712a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./co-form-upload.vue?vue&type=style&index=0&id=ee72712a&lang=scss&scoped=true& */ 308);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ee72712a",
  null,
  false,
  _co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/config-ui/components/co-form-upload/co-form-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 303:
/*!***********************************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-upload/co-form-upload.vue?vue&type=template&id=ee72712a&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form-upload.vue?vue&type=template&id=ee72712a&scoped=true& */ 304);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_template_id_ee72712a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 304:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-upload/co-form-upload.vue?vue&type=template&id=ee72712a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = !(_vm.config.uploadType === "image")
    ? ["file", "video"].includes(_vm.config.uploadType)
    : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 305:
/*!*****************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-upload/co-form-upload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form-upload.vue?vue&type=script&lang=js& */ 306);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 306:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-upload/co-form-upload.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 294));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 296));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _fileHandler = __webpack_require__(/*! ../../utils/file-handler.js */ 307);
var _configStore = _interopRequireDefault(__webpack_require__(/*! ../../utils/config-store.js */ 34));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var CoFormLabel = function CoFormLabel() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-form-label/co-form-label */ "uni_modules/config-ui/components/co-form-label/co-form-label").then((function () {
    return resolve(__webpack_require__(/*! ../co-form-label/co-form-label */ 331));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var UploadImage = function UploadImage() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-form-upload/upload-image */ "uni_modules/config-ui/components/co-form-upload/upload-image").then((function () {
    return resolve(__webpack_require__(/*! ./upload-image */ 403));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var UploadFile = function UploadFile() {
  Promise.all(/*! require.ensure | uni_modules/config-ui/components/co-form-upload/upload-file */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/config-ui/components/co-form-upload/upload-file")]).then((function () {
    return resolve(__webpack_require__(/*! ./upload-file */ 410));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
/**
 * FormUpload 表单上传
 * @description form组件的内置组件，支持图片、视频和文件上传
 * @property {Array<object>|String} v-model 已上传的文件列表，格式为[{url: 'http://xxx', uploadInfo: {}}]或字符串
 * @property {Object} attrs 组件属性
 *  @field {String} label 标签内容
 *  @field {String} labelSize 标签字体大小
 *  @field {String} labelColor 标签字体颜色
 *  @field {String} labelStyle 标签样式
 *  @field {String} labelIcon 标签图标
 *  @field {String} labelIconStyle 标签图标样式
 *  @field {String} borderAlign = [top|bottom|vertical] 边框位置
 *    @value top 上边框
 *    @value bottom 下边框
 *    @value vertical 上下边框
 *    @default bottom
 *  @field {Number} max 最多上传多少张图片
 *    @default 1
 *  @field {Boolean} required 是否必填
 *  @field {Boolean} disabled 是否禁用
 *  @field {String} uploadType = [image|file|video] 上传类型
 *    @value image 图片
 *    @value file 文件
 *    @value video 视频
 *    @default image
 *  @field {String} placeholder 待上传时的占位符，仅 uploadType = file/video 生效
 *  @field {String} customStyle 自定义样式
 *  @field {Object} uploadConfig 上传配置
 *  @field {Array<object>} customActionSheet 自定义菜单按钮，格式为[{label: '*', value: '*'}]
 *  @field {Boolean} allowOfflineUpload 是否允许在断网情况下上传
 *  @field {Boolean} allowWatermarkOriginalUpload 是否允许水印上传后再上传水印原图
 * @property {Function} before-upload 上传文件之前的钩子，参数为上传的文件，若返回 Promise 且被 reject，则停止上传。
 * @property {Function} before-remove 删除文件之前的钩子，参数为上传的文件和上传列表，若返回 Promise 且被 reject，则停止上传。
 * @event {Function} watermarkOriginal 水印原图上传完成后触发，返回水印数据和原图数据
 * @event {Function} fulfilled 上传成功后触发
 * @event {Function} rejected 上传失败后触发
 * @event {Function} uploadRemove 删除上传文件后触发
 * @event {Function} 自定义事件名 点击标签图标时触发
 * @event {Function} 自定义事件名 点击自定义菜单时触发
 */
var _default2 = {
  name: 'CoFormUpload',
  components: {
    CoFormLabel: CoFormLabel,
    UploadImage: UploadImage,
    UploadFile: UploadFile
  },
  props: {
    value: {
      type: [Array, String],
      default: []
    },
    attrs: {
      type: Object | null,
      default: function _default() {
        return {};
      }
    },
    beforeUpload: {
      type: Function,
      default: function _default() {
        return function () {
          return Promise.resolve();
        };
      }
    },
    beforeRemove: {
      type: Function,
      default: function _default() {
        return function () {
          return Promise.resolve();
        };
      }
    }
  },
  data: function data() {
    return {
      uploadList: [],
      // 上传列表
      isSelfChange: false // 是否是内部改变数据
    };
  },

  computed: {
    modelValue: {
      get: function get() {
        var _this = this;
        var list = [];
        if (this.isSelfChange) {
          list = this.uploadList;
        } else {
          // 如果 value 的类型是Array，则检测每一项是否是对象
          if (Object.prototype.toString.call(this.value) === '[object Array]') {
            for (var i = 0; i < this.value.length; i++) {
              var item = this.value[i];
              var uploadData = void 0;
              if ((0, _typeof2.default)(item) === 'object') {
                if (item.url) uploadData = item;else {
                  uploadData = {
                    url: item.fileId,
                    uploadInfo: item,
                    status: 'fulfilled'
                  };
                }
              } else if (typeof item === 'string') {
                uploadData = {
                  url: item,
                  status: 'fulfilled'
                };
              }
              uploadData && list.push(this.formatUploadData(uploadData));
            }
          }
          // 如果 value 的类型是 String ，则自动转换为 Array
          else if (Object.prototype.toString.call(this.value) === '[object String]' && this.value) {
            list.push(this.formatUploadData({
              url: this.value,
              status: 'fulfilled'
            }));
          }
        }
        return new Proxy(list, {
          set: function set(target, key, value) {
            _this.isSelfChange = true;
            Reflect.set(target, key, value);
            _this.uploadList = (0, _toConsumableArray2.default)(target);
            _this.$emit('input', _this.formatUploadedList());
            return true;
          }
        });
      },
      set: function set(val) {
        this.isSelfChange = true;
        this.uploadList = val;
        this.$emit('input', this.formatUploadedList());
      }
    },
    config: function config() {
      var defaultAttrs = {
        label: '',
        labelSize: '32rpx',
        labelColor: '#999',
        labelStyle: '',
        labelIcon: '',
        labelIconStyle: '',
        borderAlign: 'bottom',
        max: 1,
        required: false,
        disabled: false,
        uploadType: 'image',
        placeholder: '',
        customStyle: '',
        uploadConfig: {
          count: 1,
          sourceType: ['album', 'camera'],
          sizeType: ['compressed']
        },
        customActionSheet: [],
        allowOfflineUpload: false,
        allowWatermarkOriginalUpload: false
      };
      var newAttrs = Object.assign(defaultAttrs, this.attrs);
      newAttrs.uploadConfig.count = newAttrs.max ? newAttrs.max > 1 && newAttrs.max <= 9 ? newAttrs.max : 9 : 1; // 多选，最多可以同时选择的图片张数，最多9张

      return newAttrs;
    },
    barClass: function barClass() {
      return [this.config.borderAlign ? "co-border-".concat(this.config.borderAlign) : ''];
    },
    hasNet: function hasNet() {
      return _configStore.default.hasNet;
    },
    env: function env() {
      return _configStore.default.env;
    },
    systemInfo: function systemInfo() {
      return _configStore.default.systemInfo;
    },
    // 图片的压缩质量
    compressionQuality: function compressionQuality() {
      var quality = 50;
      switch (this.systemInfo.platform) {
        case 'android':
          quality = 50;
          break;
        case 'ios':
          quality = 30;
          break;
      }
      return quality;
    }
  },
  methods: {
    formatUploadedList: function formatUploadedList() {
      var list = this.uploadList.filter(function (item) {
        return item.status === 'fulfilled';
      }).map(function (item) {
        return item.uploadInfo;
      });
      return list;
    },
    onUpload: function onUpload() {
      var _this2 = this;
      if (this.config.disabled) return;
      if (this.config.uploadType === 'image') {
        this.handleChooseImage();
      } else if (this.config.uploadType === 'file') {
        this.handleChooseFile();
      } else if (this.config.uploadType === 'video') {
        uni.chooseVideo(_objectSpread(_objectSpread({}, this.config.uploadConfig), {}, {
          success: function success(res) {
            _this2.upload({
              path: res.tempFilePath,
              size: res.size,
              name: "".concat(new Date().getTime(), ".").concat(res.tempFilePath.split('.').reverse()[0])
            });
          }
        }));
      }
    },
    getActionSheet: function getActionSheet() {
      var customActionSheet = this.config.customActionSheet;
      var actionSheet;
      if (this.config.uploadType === 'image') {
        actionSheet = [{
          label: '拍摄',
          value: 'camera'
        }, {
          label: '水印拍摄',
          value: 'watermark'
        }, {
          label: '从相册选择',
          value: 'album'
        }];
      } else if (this.config.uploadType === 'file') {
        actionSheet = [{
          label: '拍摄',
          value: 'camera'
        }, {
          label: '从相册选择',
          value: 'album'
        }, {
          label: '从聊天选择',
          value: 'message'
        }];
      }
      if (Reflect.toString.call(customActionSheet) === '[object Array]') {
        actionSheet = actionSheet.concat(customActionSheet);
      }
      return actionSheet;
    },
    handleChooseImage: function handleChooseImage() {
      var _this3 = this;
      var actionSheet = this.getActionSheet();
      var list = actionSheet.filter(function (item) {
        return _this3.config.uploadConfig.sourceType.includes(item.value);
      });
      uni.showActionSheet({
        itemList: list.map(function (item) {
          return item.label;
        }),
        success: function success(res) {
          if (list[res.tapIndex].value !== 'watermark') {
            _this3.customChooseImage([list[res.tapIndex].value]);
          } else {
            uni.navigateTo({
              url: '/page_common/watermarkImage',
              events: {
                finishEmit: function () {
                  var _finishEmit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(data) {
                    var path, _yield$wx$compressIma, tempFilePath, _yield$getFileInfo, md5, size, watermarkData, originalData;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return wx.compressImage({
                              src: data.path,
                              quality: _this3.compressionQuality
                            });
                          case 3:
                            _yield$wx$compressIma = _context.sent;
                            tempFilePath = _yield$wx$compressIma.tempFilePath;
                            path = tempFilePath;
                            _context.next = 11;
                            break;
                          case 8:
                            _context.prev = 8;
                            _context.t0 = _context["catch"](0);
                            path = data.path;
                          case 11:
                            _context.next = 13;
                            return (0, _fileHandler.getFileInfo)(path);
                          case 13:
                            _yield$getFileInfo = _context.sent;
                            md5 = _yield$getFileInfo.digest;
                            size = _yield$getFileInfo.size;
                            Object.assign(data, {
                              md5: md5,
                              size: size,
                              path: path
                            });
                            // 上传水印图片
                            _context.next = 19;
                            return _this3.upload(data);
                          case 19:
                            watermarkData = _context.sent;
                            if (!_this3.config.allowWatermarkOriginalUpload) {
                              _context.next = 27;
                              break;
                            }
                            if (!(_this3.hasNet && watermarkData)) {
                              _context.next = 26;
                              break;
                            }
                            _context.next = 24;
                            return (0, _fileHandler.handleUpload)({
                              path: data.originalPath
                            });
                          case 24:
                            originalData = _context.sent;
                            _this3.$emit('click', 'watermarkOriginal', {
                              watermark: watermarkData,
                              original: originalData
                            });
                          case 26:
                            if (!_this3.hasNet && _this3.config.allowOfflineUpload) {
                              _this3.$emit('click', 'watermarkOriginal', {
                                watermark: watermarkData,
                                original: data
                              });
                            }
                          case 27:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[0, 8]]);
                  }));
                  function finishEmit(_x) {
                    return _finishEmit.apply(this, arguments);
                  }
                  return finishEmit;
                }()
              }
            });
          }
        },
        fail: function fail(res) {
          console.warn(res.errMsg);
        }
      });
    },
    customChooseImage: function customChooseImage(sourceType) {
      var _this4 = this;
      uni.chooseImage(_objectSpread(_objectSpread({}, this.config.uploadConfig), {}, {
        sourceType: sourceType,
        success: function () {
          var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {
            var compressList, i, path, _yield$wx$compressIma2, tempFilePath, _yield$getFileInfo2, md5, size;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // 压缩图片
                    compressList = []; // 压缩列表
                    i = 0;
                  case 2:
                    if (!(i < res.tempFiles.length)) {
                      _context2.next = 24;
                      break;
                    }
                    path = void 0;
                    _context2.prev = 4;
                    _context2.next = 7;
                    return wx.compressImage({
                      src: res.tempFiles[i].path,
                      quality: _this4.compressionQuality
                    });
                  case 7:
                    _yield$wx$compressIma2 = _context2.sent;
                    tempFilePath = _yield$wx$compressIma2.tempFilePath;
                    path = tempFilePath;
                    _context2.next = 15;
                    break;
                  case 12:
                    _context2.prev = 12;
                    _context2.t0 = _context2["catch"](4);
                    path = res.tempFiles[i].path;
                  case 15:
                    _context2.next = 17;
                    return (0, _fileHandler.getFileInfo)(path);
                  case 17:
                    _yield$getFileInfo2 = _context2.sent;
                    md5 = _yield$getFileInfo2.digest;
                    size = _yield$getFileInfo2.size;
                    compressList.push(_objectSpread(_objectSpread({}, res.tempFiles[i]), {}, {
                      path: path,
                      md5: md5,
                      size: size
                    }));
                  case 21:
                    i++;
                    _context2.next = 2;
                    break;
                  case 24:
                    _this4.batchUpload(compressList);
                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[4, 12]]);
          }));
          function success(_x2) {
            return _success.apply(this, arguments);
          }
          return success;
        }()
      }));
    },
    handleChooseFile: function handleChooseFile() {
      var _this5 = this;
      var list = this.getActionSheet();
      uni.showActionSheet({
        itemList: list.map(function (item) {
          return item.label;
        }),
        success: function success(res) {
          var action = list[res.tapIndex].value;
          if (['camera', 'album'].includes(action)) {
            _this5.customChooseImage([action]);
          } else if (action === 'message') {
            var chooseFile = function chooseFile(api) {
              api(_objectSpread(_objectSpread({
                type: 'file',
                extension: ['.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.pdf', '.txt']
              }, _this5.config.uploadConfig), {}, {
                success: function success(res) {
                  _this5.batchUpload(res.tempFiles);
                }
              }));
            };
            if (_this5.env === 'QW') {
              wx.qy.checkSession({
                success: function success() {
                  chooseFile(wx.qy.chooseMessageFile);
                },
                fail: function fail() {
                  uni.showToast({
                    title: '企微登录已过期',
                    icon: 'error'
                  });
                }
              });
            } else {
              chooseFile(wx.chooseMessageFile);
            }
          } else {
            _this5.$emit('click', action);
            _this5.$emit(action);
          }
        }
      });
    },
    /**
     * 单个上传处理方法
     * @param {Object} data 本地临时文件信息
     * @param {String} data.path 本地临时文件路径 (本地路径)
     * @param {Number} data.size 本地临时文件大小，单位 B
     */
    upload: function upload(data) {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var newData, index, uploadedData;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                newData = _this6.formatUploadData({
                  status: 'pending',
                  md5: data.md5,
                  url: data.path,
                  uploadInfo: {
                    fileName: data.name
                  }
                });
                _context3.prev = 1;
                _context3.next = 4;
                return _this6.beforeUpload([newData]);
              case 4:
                _context3.next = 9;
                break;
              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](1);
                throw new Error(_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message);
              case 9:
                index = _this6.modelValue.length;
                _this6.modelValue[index] = newData;
                _context3.prev = 11;
                _context3.next = 14;
                return _this6.handleModelValue(index);
              case 14:
                uploadedData = _context3.sent;
                _context3.next = 20;
                break;
              case 17:
                _context3.prev = 17;
                _context3.t1 = _context3["catch"](11);
                throw new Error(_context3.t1 === null || _context3.t1 === void 0 ? void 0 : _context3.t1.message);
              case 20:
                return _context3.abrupt("return", uploadedData);
              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 6], [11, 17]]);
      }))();
    },
    /**
     * 批量上传处理方法
     * @param {Object} list 文件集合
     */
    batchUpload: function batchUpload() {
      var _arguments = arguments,
        _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var list, modelValue, oldLength, i, _i;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                list = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : [];
                if (list.length) {
                  _context4.next = 3;
                  break;
                }
                return _context4.abrupt("return");
              case 3:
                modelValue = (0, _toConsumableArray2.default)(_this7.modelValue) || [];
                oldLength = modelValue.length;
                _context4.prev = 5;
                _context4.next = 8;
                return _this7.beforeUpload(list);
              case 8:
                _context4.next = 13;
                break;
              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](5);
                throw new Error(_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.message);
              case 13:
                for (i = 0; i < list.length; i++) {
                  modelValue.push(_this7.formatUploadData({
                    status: 'pending',
                    md5: list[i].md5,
                    url: list[i].path,
                    uploadInfo: {
                      fileName: list[i].name
                    }
                  }));
                }
                _this7.modelValue = modelValue;
                for (_i = 0; _i < list.length; _i++) {
                  _this7.handleModelValue(_i + oldLength);
                }
              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[5, 10]]);
      }))();
    },
    handleModelValue: function handleModelValue(index) {
      var _this8 = this;
      return new Promise(function (resolve, reject) {
        _this8.$nextTick( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
          var uploadRes;
          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (_this8.hasNet) {
                    _context5.next = 8;
                    break;
                  }
                  if (!_this8.config.allowOfflineUpload) {
                    _context5.next = 6;
                    break;
                  }
                  _this8.modelValue[index] = _objectSpread(_objectSpread({}, _this8.modelValue[index]), {}, {
                    status: 'uploaded'
                  });
                  return _context5.abrupt("return", resolve(_this8.modelValue[index]));
                case 6:
                  _this8.modelValue[index] = _objectSpread(_objectSpread({}, _this8.modelValue[index]), {}, {
                    status: 'rejected'
                  });
                  return _context5.abrupt("return", reject('当前检测到是断网状态，无法上传文件'));
                case 8:
                  uploadRes = null;
                  _context5.prev = 9;
                  _context5.next = 12;
                  return (0, _fileHandler.handleUpload)({
                    path: _this8.modelValue[index].url
                  });
                case 12:
                  uploadRes = _context5.sent;
                  _context5.next = 18;
                  break;
                case 15:
                  _context5.prev = 15;
                  _context5.t0 = _context5["catch"](9);
                  console.warn(_context5.t0);
                case 18:
                  if (uploadRes) {
                    _this8.modelValue[index] = _objectSpread(_objectSpread({}, _this8.modelValue[index]), {}, {
                      uploadInfo: {
                        fileName: uploadRes.fileName,
                        fileSize: uploadRes.fileSize,
                        fileId: uploadRes.fileId
                      },
                      status: 'uploaded'
                    });
                  } else {
                    _this8.modelValue[index] = _this8.formatUploadData(_objectSpread(_objectSpread({}, _this8.modelValue[index]), {}, {
                      status: 'rejected'
                    }));
                  }
                  resolve(uploadRes);
                case 20:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[9, 15]]);
        })));
      });
    },
    onStatusChange: function onStatusChange(index) {
      var item = this.modelValue[index];
      item.status = 'fulfilled';
      this.$emit('click', 'fulfilled', item);
      this.modelValue[index] = item;
    },
    onDelete: function onDelete(index) {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var delData;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                delData = JSON.parse(JSON.stringify(_this9.modelValue[index]));
                _context6.prev = 1;
                _context6.next = 4;
                return _this9.beforeRemove(delData, _this9.modelValue);
              case 4:
                _context6.next = 9;
                break;
              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](1);
                throw new Error(_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message);
              case 9:
                if (_this9.config.max === 1) {
                  _this9.modelValue = [];
                } else {
                  _this9.modelValue.splice(index, 1);
                }
                _this9.$emit('click', 'uploadRemove', delData);
              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 6]]);
      }))();
    },
    validate: function validate() {
      if (this.modelValue.length) {
        return true;
      } else {
        return false;
      }
    },
    onClick: function onClick(e) {
      this.$emit('click', e, this.attrs);
    },
    formatUploadData: function formatUploadData(data) {
      var defaultData = {
        status: '',
        url: '',
        md5: '',
        uploadInfo: null
      };
      return Object.assign(defaultData, data);
    },
    /**
     * 检查当前是否有附件正在上传中
     */
    checkIsUploading: function checkIsUploading() {
      return this.modelValue.some(function (item) {
        return item.status === 'pending';
      });
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 308:
/*!**************************************************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-upload/co-form-upload.vue?vue&type=style&index=0&id=ee72712a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_style_index_0_id_ee72712a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form-upload.vue?vue&type=style&index=0&id=ee72712a&lang=scss&scoped=true& */ 309);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_style_index_0_id_ee72712a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_style_index_0_id_ee72712a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_style_index_0_id_ee72712a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_style_index_0_id_ee72712a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_upload_vue_vue_type_style_index_0_id_ee72712a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 309:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-upload/co-form-upload.vue?vue&type=style&index=0&id=ee72712a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/config-ui/components/co-form-upload/co-form-upload.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/config-ui/components/co-form-upload/co-form-upload-create-component',
    {
        'uni_modules/config-ui/components/co-form-upload/co-form-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(302))
        })
    },
    [['uni_modules/config-ui/components/co-form-upload/co-form-upload-create-component']]
]);
