(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/config-ui/components/co-form/co-form"],{

/***/ 192:
/*!**************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form/co-form.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./co-form.vue?vue&type=template&id=acc6d6d2&scoped=true& */ 193);
/* harmony import */ var _co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./co-form.vue?vue&type=script&lang=js& */ 195);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _co_form_vue_vue_type_style_index_0_id_acc6d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./co-form.vue?vue&type=style&index=0&id=acc6d6d2&lang=scss&scoped=true& */ 198);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "acc6d6d2",
  null,
  false,
  _co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/config-ui/components/co-form/co-form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 193:
/*!*********************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form/co-form.vue?vue&type=template&id=acc6d6d2&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form.vue?vue&type=template&id=acc6d6d2&scoped=true& */ 194);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_template_id_acc6d6d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 194:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form/co-form.vue?vue&type=template&id=acc6d6d2&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var l0 = _vm.__map(_vm.options, function (item, __i0__) {
    var $orig = _vm.__get_orig(item)
    var m0 = _vm.itemShowEvent(item)
    return {
      $orig: $orig,
      m0: m0,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 195:
/*!***************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form/co-form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form.vue?vue&type=script&lang=js& */ 196);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 196:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form/co-form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ 197));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var CoFormNormal = function CoFormNormal() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-form-normal/co-form-normal */ "uni_modules/config-ui/components/co-form-normal/co-form-normal").then((function () {
    return resolve(__webpack_require__(/*! ../co-form-normal/co-form-normal */ 282));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoFormPicker = function CoFormPicker() {
  Promise.all(/*! require.ensure | uni_modules/config-ui/components/co-form-picker/co-form-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/config-ui/components/co-form-picker/co-form-picker")]).then((function () {
    return resolve(__webpack_require__(/*! ../co-form-picker/co-form-picker */ 289));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoFormCascader = function CoFormCascader() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-form-cascader/co-form-cascader */ "uni_modules/config-ui/components/co-form-cascader/co-form-cascader").then((function () {
    return resolve(__webpack_require__(/*! ../co-form-cascader/co-form-cascader */ 297));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoFormUpload = function CoFormUpload() {
  Promise.all(/*! require.ensure | uni_modules/config-ui/components/co-form-upload/co-form-upload */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/config-ui/components/co-form-upload/co-form-upload")]).then((function () {
    return resolve(__webpack_require__(/*! ../co-form-upload/co-form-upload */ 302));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoFormCheckButton = function CoFormCheckButton() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-form-check-button/co-form-check-button */ "uni_modules/config-ui/components/co-form-check-button/co-form-check-button").then((function () {
    return resolve(__webpack_require__(/*! ../co-form-check-button/co-form-check-button */ 310));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
/**
 * 表单组件
 * @property {Object} v-model 表单数据
 * @property {Array<object>} options 表单项配置
 * 	@field {String} options.field 字段名
 * 	@field {String} options.component = [Normal|Picker|Cascader|Upload|CheckButton] 所需要用到的组件名
 * 		@value Normal CoFormNormal组件
 *  	@value Picker CoFormPicker组件
 * 		@value Cascader CoFormCascader组件
 * 		@value Upload CoFormUpload组件
 * 		@value CheckButton CoFormCheckButton组件
 * 	@field {Boolean} options.slot 是否使用插槽
 * 	@field {String} options.slotName 插槽名称
 * 	@field {Boolean} options.hidden 是否显示该表单项，比 showConfig 的优先级高
 * 	@field {Object} options.showConfig 显示条件
 *  	@field {String} options.showConfig.type = [all|anyOne] 对比方式
 *    	@value all 所有条件满足才显示
 * 			@value anyOne 任意一项满足就显示
 * 			@default all
 *    @field {Array<object>} options.showConfig.options 显示条件的配置项集合
 * 			@field {String|Array} options.showConfig.options.field 表单里某个对比字段，如果是数组，说明这个字段是对象里面的某个字段
 * 			@field {String} options.showConfig.options.terms = [===|!==|>|>=|<|<=|includes|!includes|null|!null] 表单里某个对比字段的条件
 * 				@value === 等于
 * 				@value !== 不等于
 * 				@value > 大于
 * 				@value >= 大于等于
 * 				@value < 小于
 * 				@value <= 小于等于
 * 				@value includes 包含
 * 				@value !includes 不包含
 * 				@value null 为空
 * 				@value !null 不为空
 * 				@default ===
 * 			@field {String|Number|Array} options.showConfig.options.value 表单里某个对比字段的值，如果是数组，说明这个字段是对象里面的某个字段
 * 	@field {Boolean} options.required 是否必填，默认为 false
 * 	@field {Object} options.rule 表单验证规则，具体配置可查看 validate.js
 * 		@field {RegExp} options.rule.reg 验证规则，正则表达式
 * 		@field {String} options.rule.message 验证失败提示信息
 * @property {Boolean} isFormat 是否需要格式化数据，只保留 options 里的字段
 * 	@default true
 * @property {Function} beforeUpload 上传前的回调函数
 * @property {Function} beforeRemove 删除前的回调函数
 * ...其余配置为对应组件的配置，可到对应组件查看
 * @event {Function} blur CoFormNormal组件里的textarea组件的失焦事件
 * @event {Function} change 字段值发生变化时触发
 * @event {Function} clear CoFormNormal组件 和 CoFormPicker组件 的清除按钮点击事件
 * @event {Function} * 自定义事件，对应组件的触发事件
 */
var _default2 = {
  name: 'CoForm',
  components: {
    CoFormNormal: CoFormNormal,
    CoFormPicker: CoFormPicker,
    CoFormCascader: CoFormCascader,
    CoFormUpload: CoFormUpload,
    CoFormCheckButton: CoFormCheckButton
  },
  props: {
    value: {
      type: [Object, null],
      default: function _default() {
        return {};
      }
    },
    options: {
      type: Array,
      required: true,
      default: []
    },
    // 是否需要格式化数据
    isFormat: {
      type: Boolean,
      default: true
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
  computed: {
    modelValue: {
      get: function get() {
        var _this = this;
        var data;
        if (this.isFormat) {
          data = {};
        } else {
          data = _objectSpread({}, this.value || {});
        }
        if (this.options.length && Object.keys(data).length !== this.options.length) {
          for (var i = 0; i < this.options.length; i++) {
            var field = this.options[i].field;
            var value = this.value ? this.value[field] : '';
            if (value || typeof value === 'number') {
              data[field] = value;
            } else {
              data[field] = undefined;
            }
          }
          this.$emit('input', data);
        }
        return new Proxy(data, {
          set: function set(target, key, value) {
            if (JSON.stringify(value) !== JSON.stringify(data[key])) {
              _this.$emit('change', key, value);
            }
            Reflect.set(target, key, value);
            _this.$emit('input', target);
            return true;
          }
        });
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    onClick: function onClick(methodName, item) {
      methodName = methodName || 'click';
      this.$emit(methodName, item);
    },
    onClear: function onClear(e) {
      this.$emit('clear', e);
    },
    onBlur: function onBlur() {
      this.$emit('blur');
    },
    /**
     * 对整个表单的内容进行验证
     * @return {Promise} 校验结果
     */
    validate: function validate() {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        var errorHandle = function errorHandle(title) {
          uni.showToast({
            title: title,
            icon: 'none'
          });
          reject("\u8868\u5355\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF01".concat(title, "\uFF01"));
          throw new Error();
        };
        for (var i = 0; i < _this2.options.length; i++) {
          if (!_this2.itemShowEvent(_this2.options[i])) continue;
          var value = _this2.modelValue[_this2.options[i].field];
          if (_this2.options[i].required) {
            var notNull = false;
            if (value) {
              // 如果值是个数组，且长度不等于 0 时才通过校验
              if (Reflect.toString.call(value) === '[object Array]') {
                if (value.length) notNull = true;
              }
              // 如果值是个对象，且键值对的值长度不等于 0 时才通过校验
              else if (Reflect.toString.call(value) === '[object Object]') {
                if (Object.values(value).length) notNull = true;
              } else notNull = true;
            }
            !notNull && errorHandle("".concat(_this2.options[i].label, "\u4E0D\u80FD\u4E3A\u7A7A"));
          }
          if (_this2.options[i].rule) {
            var rule = _this2.options[i].rule;
            if (typeof rule === 'string') {
              rule = _validate.default[rule];
            }
            if (rule.reg.test(value)) continue;
            errorHandle(rule.message);
          }
        }
        if (_this2.$refs.uploadBarRef) {
          for (var _i = 0; _i < _this2.$refs.uploadBarRef.length; _i++) {
            if (_this2.$refs.uploadBarRef[_i].checkIsUploading()) {
              errorHandle('请等待附件上传完成');
            }
          }
        }
        resolve(true);
      });
    },
    /**
     * 判断表单项是否可以展示
     * @param {Object} item 表单项配置
     * @return {Boolean}
     */
    itemShowEvent: function itemShowEvent(item) {
      var hidden = item.hidden,
        showConfig = item.showConfig;
      // hidden 优先级比 showConfig 要高
      if (Reflect.has(item, 'hidden') && typeof hidden !== 'undefined') {
        return !hidden;
      } else if (Reflect.has(item, 'showConfig') && typeof showConfig !== 'undefined') {
        // 如果没有 options 或者 options 的长度为 0，说明没有显示条件需要满足，返回 true
        if (!Reflect.has(showConfig, 'options') || !showConfig.options.length) return true;
        var isShow;
        var type = showConfig.type || 'all'; // 比对类型，如果 type 的值为空，则默认为 all
        var options = showConfig.options;

        // anyOne，数组任意一项通过就显示
        if (type === 'anyOne') {
          for (var i = 0; i < options.length; i++) {
            isShow = this.configHandler(options[i]);
            if (isShow) break;
          }
        }
        // all，数组每一项必须都通过才显示
        else {
          for (var _i2 = 0; _i2 < options.length; _i2++) {
            isShow = this.configHandler(options[_i2]);
            if (!isShow) break;
          }
        }
        return isShow;
      }
      // 如果 hidden 和 showConfig 都没有，则默认显示，返回 true
      else {
        return true;
      }
    },
    /**
     * 配置处理函数
     * @param {Object} config 显示配置
     * @return {Boolean} 是否显示
     */
    configHandler: function configHandler(config) {
      var value;
      // 如果对比的表单值是个对象，则 field 必须是数组才能进行深度对比
      if (Reflect.toString.call(config.field) === '[object Array]') {
        try {
          value = JSON.parse(JSON.stringify(this.modelValue[config.field[0]]));
          for (var i = 1; i < config.field.length; i++) {
            value = value[config.field[i]];
          }
        } catch (e) {
          //TODO handle the exception
        }
      } else {
        value = this.modelValue[config.field];
      }
      return this.termsHandler(config, value);
    },
    /**
     * 条件处理函数
     * @param {Object} config 显示配置
     * @param {String|number} value 表单值，config.value -> 比对值
     * @return {Boolean} 是否对该表单项进行渲染
     */
    termsHandler: function termsHandler(config, value) {
      var terms = config.terms || '==='; // 比对条件，如果 terms 的值为空，则默认为 ===（等于）
      // 等于
      if (terms === '===') {
        return value === config.value;
      }
      // 不等于
      else if (terms === '!==') {
        return value !== config.value;
      }
      // 大于
      else if (terms === '>') {
        return Number(value) > config.value;
      }
      // 大于或等于
      else if (terms === '>=') {
        return Number(value) >= config.value;
      }
      // 小于
      else if (terms === '<') {
        return Number(value) < config.value;
      }
      // 小于或等于
      else if (terms === '<=') {
        return Number(value) <= config.value;
      }
      // 包含
      else if (terms === 'includes') {
        return config.value.includes(value);
      }
      // 不包含
      else if (terms === '!includes') {
        return !config.value.includes(value);
      }
      // 为空
      else if (terms === 'null') {
        return Boolean(!value);
      }
      // 不为空
      else if (terms === '!null') {
        return Boolean(value);
      }
      // 如果 terms 不是以上类型，则直接返回 false
      else {
        return false;
      }
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 198:
/*!************************************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form/co-form.vue?vue&type=style&index=0&id=acc6d6d2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_style_index_0_id_acc6d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form.vue?vue&type=style&index=0&id=acc6d6d2&lang=scss&scoped=true& */ 199);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_style_index_0_id_acc6d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_style_index_0_id_acc6d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_style_index_0_id_acc6d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_style_index_0_id_acc6d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_vue_vue_type_style_index_0_id_acc6d6d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form/co-form.vue?vue&type=style&index=0&id=acc6d6d2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/config-ui/components/co-form/co-form.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/config-ui/components/co-form/co-form-create-component',
    {
        'uni_modules/config-ui/components/co-form/co-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(192))
        })
    },
    [['uni_modules/config-ui/components/co-form/co-form-create-component']]
]);
