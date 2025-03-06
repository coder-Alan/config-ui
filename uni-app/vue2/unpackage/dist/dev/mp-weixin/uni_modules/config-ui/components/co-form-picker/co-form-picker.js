(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/config-ui/components/co-form-picker/co-form-picker"],{

/***/ 289:
/*!****************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-picker/co-form-picker.vue ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./co-form-picker.vue?vue&type=template&id=1e0ce86a& */ 290);
/* harmony import */ var _co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./co-form-picker.vue?vue&type=script&lang=js& */ 292);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/config-ui/components/co-form-picker/co-form-picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 290:
/*!***********************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-picker/co-form-picker.vue?vue&type=template&id=1e0ce86a& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form-picker.vue?vue&type=template&id=1e0ce86a& */ 291);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_template_id_1e0ce86a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 291:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-picker/co-form-picker.vue?vue&type=template&id=1e0ce86a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var g0 = !(_vm.config.pickerType === "dictionary")
    ? ["time", "month"].includes(_vm.config.pickerType)
    : null
  var g1 =
    !(_vm.config.pickerType === "dictionary") && !g0
      ? ["date", "datetime", "daterange", "datetimerange"].includes(
          _vm.config.pickerType
        )
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 292:
/*!*****************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-picker/co-form-picker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form-picker.vue?vue&type=script&lang=js& */ 293);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 293:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-picker/co-form-picker.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 294));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 296));
var _index = __webpack_require__(/*! ../../utils/index.js */ 175);
var CoFormNormal = function CoFormNormal() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-form-normal/co-form-normal */ "uni_modules/config-ui/components/co-form-normal/co-form-normal").then((function () {
    return resolve(__webpack_require__(/*! ../co-form-normal/co-form-normal */ 282));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoPicker = function CoPicker() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-picker/co-picker */ "uni_modules/config-ui/components/co-picker/co-picker").then((function () {
    return resolve(__webpack_require__(/*! ../co-picker/co-picker */ 366));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoDictionaryPicker = function CoDictionaryPicker() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-dictionary-picker/co-dictionary-picker */ "uni_modules/config-ui/components/co-dictionary-picker/co-dictionary-picker").then((function () {
    return resolve(__webpack_require__(/*! ../co-dictionary-picker/co-dictionary-picker */ 373));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoTimePicker = function CoTimePicker() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-time-picker/co-time-picker */ "uni_modules/config-ui/components/co-time-picker/co-time-picker").then((function () {
    return resolve(__webpack_require__(/*! ../co-time-picker/co-time-picker */ 378));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoAreaPicker = function CoAreaPicker() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-area-picker/co-area-picker */ "uni_modules/config-ui/components/co-area-picker/co-area-picker").then((function () {
    return resolve(__webpack_require__(/*! ../co-area-picker/co-area-picker */ 385));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoDatetimePicker = function CoDatetimePicker() {
  Promise.all(/*! require.ensure | uni_modules/config-ui/components/co-datetime-picker/co-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/config-ui/components/co-datetime-picker/co-datetime-picker")]).then((function () {
    return resolve(__webpack_require__(/*! ../co-datetime-picker/co-datetime-picker */ 390));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
/**
 * FormPicker 表单选择器
 * @description form组件的内置组件，合并了CoPicker、CoDictionaryPicker、CoTimePicker、CoDatetimePicker、CoAreaPicker组件
 * @property {String|Number|Object|Array} v-model 绑定值
 * @property {Object} attrs 组件属性
 * 	@field pickerType = [default|dictionary|time|month|date|datetime|daterange|datetimerange|area] 选择器类型
 * 		@value default 默认选择器
 * 		@value dictionary 字典选择器
 * 		@value time 时间选择器
 * 		@value month 月选择器
 * 		@value date 日期选择器
 * 		@value datetime 日期时间选择器
 * 		@value daterange 日期范围选择器
 * 		@value datetimerange 日期时间范围选择器
 * 		@value area 地区选择器
 * 		@default default
 *  @field {String} returnType = [value|label|object] 返回值类型
 * 	 	@value value 返回值
 * 	 	@value label 返回标签
 * 	 	@value object 返回对象
 * 		@default value
 *  @field {String} labelType 标签类型 【CoFormNormal】
 *  @field {String} labelStyle 自定义标签的样式 【CoFormNormal】
 *  @field {String} placeholder 占位符 【CoFormNormal】
 *  @field {Boolean} disabled 是否禁用 【CoFormNormal】
 *  @field {String} borderAlign 标签对齐方式 【CoFormNormal】
 *  @field {String} label 标签内容 【CoFormNormal、CoDictionaryPicker、CoPicker】
 *  @field {Array<object>} list 选项列表 【CoPicker】
 *  @field {String} dictName 字典名称 【CoDictionaryPicker】
 *  @field {Boolean} multiple 是否多选 【CoDictionaryPicker、CoPicker】
 *  @field {Boolean} required 是否必填 【CoDictionaryPicker、CoPicker、CoDatetimePicker】
 *  @field {String|Number} startDate 开始日期 【CoDatetimePicker】
 *  @field {String|Number} endDate 结束日期 【CoDatetimePicker】
 *  @field {String} labelKey 标签字段名 【CoPicker】
 *  @field {String} valueKey 值字段名 【CoPicker】
 * @event {Function} clear 点击Picker组件的清除按钮触发 或者 点击CoFormNormal组件的Arrow组件的清除按钮触发
 * @event {Function} click 点击CoFormNormal组件的CoFormLabel组件的图标触发
 */
var _default2 = {
  name: 'CoFormPicker',
  components: {
    CoFormNormal: CoFormNormal,
    CoPicker: CoPicker,
    CoDictionaryPicker: CoDictionaryPicker,
    CoTimePicker: CoTimePicker,
    CoAreaPicker: CoAreaPicker,
    CoDatetimePicker: CoDatetimePicker
  },
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: ''
    },
    attrs: {
      type: [Object, null],
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showSelect: false,
      valueName: '',
      optionMap: new Map(),
      // 仅 pickerType = default 生效，用于快速获取选项的label
      isSelfChange: false // 是否是内部改变数据
    };
  },

  computed: {
    modelValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    },
    config: function config() {
      var defaultAttrs = {
        pickerType: 'default',
        labelKey: 'label',
        valueKey: 'value',
        labelType: 'arrow',
        label: '',
        labelStyle: '',
        placeholder: '',
        disabled: false,
        borderAlign: 'bottom',
        list: [],
        dictName: '',
        returnType: 'value',
        multiple: false
      };
      return Object.assign(defaultAttrs, this.attrs);
    }
  },
  watch: {
    'config.list': {
      handler: function handler(val) {
        if (!val.length) return;
        var optionMap = new Map();
        for (var i = 0; i < val.length; i++) {
          optionMap.set(val[i][this.config.valueKey], val[i]);
        }
        this.optionMap = optionMap;
      },
      immediate: true
    },
    modelValue: {
      handler: function handler(newVal) {
        // 如果不是自身主动改变，则说明是外部数据的传入，需要回显
        if (!this.isSelfChange) {
          if (!newVal) {
            this.valueName = '';
          } else {
            this.getValueName();
          }
        } else {
          this.isSelfChange = false;
        }
      },
      immediate: true
    }
  },
  methods: {
    getValueName: function getValueName() {
      var data = this.modelValue;
      if (!data) {
        this.valueName = '';
        return;
      }
      var pickerType = this.config.pickerType;
      if (pickerType === 'map') {
        this.getDictionaryPickerLabel();
      } else if (['datetime', 'time', 'date', 'area'].includes(pickerType)) {
        this.valueName = data;
      } else if (pickerType === 'default') {
        this.getDefaultPickerLabel();
      }
    },
    getDictionaryPickerLabel: function getDictionaryPickerLabel() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var valueName, data, _this$config, returnType, dictName, multiple, valueNames, i, name;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                valueName = '';
                data = _this.modelValue;
                _this$config = _this.config, returnType = _this$config.returnType, dictName = _this$config.dictName, multiple = _this$config.multiple;
                if (!(Reflect.toString.call(data) === '[object Object]')) {
                  _context.next = 16;
                  break;
                }
                if (!Reflect.has(data, 'label')) {
                  _context.next = 14;
                  break;
                }
                if (!data.label) {
                  _context.next = 9;
                  break;
                }
                valueName = data.label;
                _context.next = 14;
                break;
              case 9:
                if (!data.value) {
                  _context.next = 14;
                  break;
                }
                _context.next = 12;
                return (0, _index.getDicName)(data.value, dictName);
              case 12:
                valueName = _context.sent;
                _this.modelValue = {
                  label: valueName,
                  value: data.value
                };
              case 14:
                _this.valueName = valueName;
                return _context.abrupt("return");
              case 16:
                if (!multiple) {
                  _context.next = 30;
                  break;
                }
                valueNames = [];
                i = 0;
              case 19:
                if (!(i < data.length)) {
                  _context.next = 27;
                  break;
                }
                _context.next = 22;
                return (0, _index.getDicName)(data[i], dictName);
              case 22:
                name = _context.sent;
                valueNames.push(name);
              case 24:
                i++;
                _context.next = 19;
                break;
              case 27:
                valueName = valueNames.join(',');
                _context.next = 33;
                break;
              case 30:
                _context.next = 32;
                return (0, _index.getDicName)(data, dictName);
              case 32:
                valueName = _context.sent;
              case 33:
                _this.valueName = valueName;
                if (returnType === 'object') {
                  _this.modelValue = {
                    label: valueName,
                    value: data
                  };
                }
              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getDefaultPickerLabel: function getDefaultPickerLabel() {
      var data = this.modelValue;
      if (Reflect.toString.call(data) === '[object Object]') {
        if (Reflect.has(data, 'label')) {
          this.valueName = data.label;
        } else {
          this.valueName = '';
        }
        return;
      }
      var valueName = '';
      var _this$config2 = this.config,
        labelKey = _this$config2.labelKey,
        returnType = _this$config2.returnType,
        multiple = _this$config2.multiple;
      if (multiple) {
        var valueNames = [];
        for (var i = 0; i < data.length; i++) {
          var option = this.optionMap.get(data[i]);
          var name = option ? option[labelKey] : '';
          valueNames.push(name);
        }
        valueName = valueNames.join(',');
      } else {
        var _option = this.optionMap.get(data);
        valueName = _option ? _option[labelKey] : '';
      }
      this.valueName = valueName;
      if (returnType === 'object') {
        this.modelValue = {
          label: valueName,
          value: data
        };
      }
    },
    onConfirm: function onConfirm(e) {
      this.isSelfChange = true;
      this.valueName = e.label || '';
      if (this.config.returnType === 'object') {
        this.modelValue = e;
      } else {
        this.modelValue = e[this.config.returnType];
      }
    },
    onClear: function onClear() {
      var isPickerClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isSelfChange = true;
      if (isPickerClear) {
        this.valueName = '';
      }
      if (this.config.returnType === 'object') {
        this.modelValue = {
          label: undefined,
          value: undefined
        };
      } else {
        this.modelValue = undefined;
      }
      this.$emit('clear', this.attrs);
    },
    onClick: function onClick(e) {
      if (e) {
        this.$emit('click', e, this.attrs);
      } else {
        this.showSelect = true;
      }
    }
  }
};
exports.default = _default2;

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/config-ui/components/co-form-picker/co-form-picker.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/config-ui/components/co-form-picker/co-form-picker-create-component',
    {
        'uni_modules/config-ui/components/co-form-picker/co-form-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(289))
        })
    },
    [['uni_modules/config-ui/components/co-form-picker/co-form-picker-create-component']]
]);
