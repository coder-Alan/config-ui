(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/config-ui/components/co-form-cascader/co-form-cascader"],{

/***/ 297:
/*!********************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-cascader/co-form-cascader.vue ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./co-form-cascader.vue?vue&type=template&id=8dd524ea& */ 298);
/* harmony import */ var _co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./co-form-cascader.vue?vue&type=script&lang=js& */ 300);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/config-ui/components/co-form-cascader/co-form-cascader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 298:
/*!***************************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-cascader/co-form-cascader.vue?vue&type=template&id=8dd524ea& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form-cascader.vue?vue&type=template&id=8dd524ea& */ 299);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_template_id_8dd524ea___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 299:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-cascader/co-form-cascader.vue?vue&type=template&id=8dd524ea& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 300:
/*!*********************************************************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-cascader/co-form-cascader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./co-form-cascader.vue?vue&type=script&lang=js& */ 301);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_co_form_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 301:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form-cascader/co-form-cascader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var CoFormNormal = function CoFormNormal() {
  __webpack_require__.e(/*! require.ensure | uni_modules/config-ui/components/co-form-normal/co-form-normal */ "uni_modules/config-ui/components/co-form-normal/co-form-normal").then((function () {
    return resolve(__webpack_require__(/*! ../co-form-normal/co-form-normal */ 282));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var CoCascader = function CoCascader() {
  Promise.all(/*! require.ensure | uni_modules/config-ui/components/co-cascader/co-cascader */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/config-ui/components/co-cascader/co-cascader")]).then((function () {
    return resolve(__webpack_require__(/*! ../co-cascader/co-cascader */ 396));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
/**
 * FormCascader 级联选择器
 * @description form组件的内置组件，用于多层级的数据选择
 * @property {String|Number|Object|Array} v-model 绑定的值
 * @property {Object} attrs 组件属性配置
 * 	@field {String} label 标签内容
 * 	@field {String} labelStyle 自定义标签的样式
 * 	@field {String} placeholder 标签占位符
 * 	@field {Boolean} disabled 是否禁用
 * 	@field {String} borderAlign = [top|bottom|vertical] 边框位置
 * 		@value top 上边框
 * 		@value bottom 下边框
 * 		@value vertical 上下边框
 * 	@field {String} labelKey 标签字段名
 * 	@field {String} valueKey 值字段名
 * 	@field {Array<object>} options 数据列表
 * 	@field {String} returnType = [value|object] 选中的返回类型
 * 		@value value 只返回数据的值
 * 		@value object 返回完整数据
 * 		@default value
 * 	@field {Boolean} showAllLevels 是否显示选中值的完整路径
 * 	@field {Boolean} emitPath 是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
 * @event {Function} clear CoFormNormal组件的清除事件
 * @event {Function} clear 点击CoPickerHeader组件的清除按钮触发 或者 点击CoFormNormal组件的Arrow组件的清除按钮触发
 * @event {Function} click CoFormNormal组件图标的点击事件 和 arrow类型的点击事件
 */
var _default2 = {
  name: 'CoFormCascader',
  components: {
    CoFormNormal: CoFormNormal,
    CoCascader: CoCascader
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
      showCascader: false,
      valueName: '',
      selfChange: false // 是否是内部改变数据
    };
  },

  computed: {
    config: function config() {
      var defaultAttrs = {
        label: '',
        labelStyle: '',
        placeholder: '',
        disabled: false,
        borderAlign: 'bottom',
        labelKey: 'label',
        valueKey: 'value',
        options: [],
        returnType: 'value',
        showAllLevels: true,
        emitPath: true
      };
      var newAttrs = Object.assign(defaultAttrs, this.attrs);
      newAttrs.labelType = 'arrow';
      return newAttrs;
    },
    modelValue: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    },
    title: function title() {
      return "\u8BF7\u9009\u62E9".concat(this.config.label);
    }
  },
  watch: {
    modelValue: {
      handler: function handler() {
        // 如果不是自身主动改变，则说明是外部数据的传入，需要回显
        if (!this.selfChange) {
          this.valueName = this.getValueName();
        } else {
          this.selfChange = false;
        }
      },
      immediate: true
    }
  },
  methods: {
    getValueName: function getValueName() {
      var _this = this;
      if (!this.modelValue || Array.isArray(this.modelValue) && !this.modelValue.length || (0, _typeof2.default)(this.modelValue) === 'object' && !Object.keys(this.modelValue).length) return '';
      var path = [];
      // 获取选中值对应的label
      var arrTraverser = function arrTraverser(options, data) {
        for (var i = 0; i < options.length; i++) {
          var value = options[i][_this.config.valueKey];
          if (value === data[0]) {
            path.push(options[i]);
            if (options[i].children && data.length > 1) {
              arrTraverser(options[i].children, data.slice(1));
              break;
            } else {
              return;
            }
          }
        }
      };
      var strTraverser = function strTraverser(options, currPath, data) {
        for (var i = 0; i < options.length; i++) {
          var value = options[i][_this.config.valueKey];
          if (_this.modelValue === value) {
            return path = currPath.push(options[i]);
          }
          if (options[i].children) {
            strTraverser(options[i].children, currPath.push(options[i]), data);
          } else {
            return;
          }
        }
      };
      var list;
      if (Array.isArray(this.modelValue)) {
        if (this.config.returnType === 'object') {
          list = this.modelValue;
        } else {
          arrTraverser(this.config.options, this.modelValue);
          list = path;
        }
        list = list;
      } else {
        if (this.config.returnType === 'object') {
          strTraverser(this.config.options, [], this.modelValue[this.config.valueKey]);
        } else {
          strTraverser(this.config.options, [], this.modelValue);
        }
        list = path;
      }
      return this.formatLabel(list);
    },
    formatLabel: function formatLabel(list) {
      var _this2 = this;
      if (this.config.showAllLevels) {
        return list.map(function (item) {
          return item[_this2.config.labelKey];
        }).join(' / ');
      } else {
        return list[list.length - 1][this.config.labelKey];
      }
    },
    onClick: function onClick(e) {
      if (e) {
        this.$emit('click', e, this.attrs);
      } else {
        this.showCascader = true;
      }
    },
    onConfirm: function onConfirm(e) {
      var _this3 = this;
      this.selfChange = true;
      if (this.config.emitPath) {
        if (this.config.returnType === 'object') {
          this.modelValue = e;
        } else {
          this.modelValue = e.map(function (item) {
            return item[_this3.config.returnType];
          });
        }
        this.valueName = this.formatLabel(e);
      } else {
        if (this.config.returnType === 'object') {
          this.modelValue = e;
        } else {
          this.modelValue = e[this.config.returnType];
        }
        this.valueName = e.label || '';
      }
    },
    onClear: function onClear() {
      var isPickerClear = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.selfChange = true;
      if (isPickerClear) {
        this.valueName = '';
      }
      if (this.config.emitPath) {
        this.modelValue = [];
      } else {
        if (this.config.returnType === 'object') {
          this.modelValue = {
            label: undefined,
            value: undefined
          };
        } else {
          this.modelValue = undefined;
        }
      }
      this.$emit('clear', this.attrs);
    }
  }
};
exports.default = _default2;

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/config-ui/components/co-form-cascader/co-form-cascader.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/config-ui/components/co-form-cascader/co-form-cascader-create-component',
    {
        'uni_modules/config-ui/components/co-form-cascader/co-form-cascader-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(297))
        })
    },
    [['uni_modules/config-ui/components/co-form-cascader/co-form-cascader-create-component']]
]);
