<template>
	<view class="co-form-picker">
		<CoFormNormal
			v-model="valueName"
			:attrs="config"
			@click="onClick"
			@clear="onClear(false)"
		></CoFormNormal>
		<CoDictionaryPicker
			v-if="config.pickerType === 'dictionary'"
			:show.sync="showSelect"
			:title="config.label"
			:dict-name="config.dictName"
			:multiple="config.multiple"
			:default-value="modelValue"
			:clear="!config.required"
			@confirm="onConfirm"
			@clear="onClear"
		></CoDictionaryPicker>
		<CoTimePicker
			v-else-if="['time', 'month'].includes(config.pickerType)"
			:show.sync="showSelect"
			:type="config.pickerType"
			@confirm="onConfirm"
			@clear="onClear"
		></CoTimePicker>
		<CoDatetimePicker
			v-else-if="['date', 'datetime', 'daterange', 'datetimerange'].includes(config.pickerType)"
			:show.sync="showSelect"
			:type="config.pickerType"
			:start-date="config.startDate"
			:end-date="config.endDate"
			:default-value="modelValue"
			:clear="!config.required"
			@confirm="onConfirm"
			@clear="onClear"
		></CoDatetimePicker>
		<CoAreaPicker
			v-else-if="config.pickerType === 'area'"
			:show.sync="showSelect"
			@confirm="onConfirm"
			@clear="onClear"
		></CoAreaPicker>
		<CoPicker
			v-else-if="config.pickerType === 'default' || !config.pickerType"
			:show.sync="showSelect"
			:title="config.label"
			:list="config.list"
			:label-key="config.labelKey"
			:value-key="config.valueKey"
			:multiple="config.multiple"
			:default-value="modelValue"
			:clear="!config.required"
			@confirm="onConfirm"
			@clear="onClear"
		></CoPicker>
	</view>
</template>

<script>
import CoFormNormal from '../co-form-normal/co-form-normal'
import CoPicker from '../co-picker/co-picker'
import CoDictionaryPicker from '../co-dictionary-picker/co-dictionary-picker'
import CoTimePicker from '../co-time-picker/co-time-picker'
import CoAreaPicker from '../co-area-picker/co-area-picker'
import CoDatetimePicker from '../co-datetime-picker/co-datetime-picker'

import { getDicName } from '../../utils/index.js'

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

export default {
	name: 'CoFormPicker',
	components: {
		CoFormNormal,
		CoPicker,
		CoDictionaryPicker,
		CoTimePicker,
		CoAreaPicker,
		CoDatetimePicker,
	},
	props: {
		value: {
			type: [String, Number, Object, Array],
			default: ''
		},
		attrs: {
			type: [Object, null],
			default: () => ({})
		}
	},
	data() {
		return {
			showSelect: false,
			valueName: '',
			optionMap: new Map(), // 仅 pickerType = default 生效，用于快速获取选项的label
			isSelfChange: false, // 是否是内部改变数据
		}
	},
	computed: {
		modelValue: {
			get() {
				return this.value
			},
			set(val) {
				this.$emit('input', val)
			}
		},
		config() {
			const defaultAttrs = {
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
				multiple: false,
			}
			return Object.assign(defaultAttrs, this.attrs)
		}
	},
	watch: {
		'config.list': {
			handler(val) {
				if (!val.length) return

				const optionMap = new Map()
				for (let i = 0; i < val.length; i++) {
					optionMap.set(val[i][this.config.valueKey], val[i])
				}
				this.optionMap = optionMap
			},
			immediate: true
		},
		modelValue: {
			handler(newVal) {
				// 如果不是自身主动改变，则说明是外部数据的传入，需要回显
				if (!this.isSelfChange) {
					if (!newVal) {
						this.valueName = ''
					}
					else {
						this.getValueName()
					}
				}
				else {
					this.isSelfChange = false
				}
			},
			immediate: true
		}
	},
	methods: {
		getValueName() {
			const data = this.modelValue
			if (!data) {
				this.valueName = ''
				return
			}

			const { pickerType } = this.config
			if (pickerType === 'map') {
				this.getDictionaryPickerLabel()
			}
			else if (['datetime', 'time', 'date', 'area'].includes(pickerType)) {
				this.valueName = data
			}
			else if (pickerType === 'default') {
				this.getDefaultPickerLabel()
			}
		},
		async getDictionaryPickerLabel() {
			let valueName = ''
			const data = this.modelValue
			const { returnType, dictName, multiple } = this.config

			if (Reflect.toString.call(data) === '[object Object]') {
				if (Reflect.has(data, 'label')) {
					if (data.label) {
						valueName = data.label
					}
					else if (data.value) {
						valueName = await getDicName(data.value, dictName)
            this.modelValue = {
              label: valueName,
              value: data.value
            }
					}
				}
        this.valueName = valueName
				return
			}

			if (multiple) {
				const valueNames = []
				for (let i = 0; i < data.length; i++) {
					const name = await getDicName(data[i], dictName)
					valueNames.push(name)
				}
				valueName = valueNames.join(',')
			}
			else {
				valueName = await getDicName(data, dictName)
			}
			this.valueName = valueName

			if (returnType === 'object') {
				this.modelValue = {
					label: valueName,
					value: data
				}
			}
		},
		getDefaultPickerLabel() {
			const data = this.modelValue

			if (Reflect.toString.call(data) === '[object Object]') {
				if (Reflect.has(data, 'label')) {
					this.valueName = data.label
				}
				else {
					this.valueName = ''
				}
				return
			}

			let valueName = ''
			const { labelKey, returnType, multiple } = this.config

			if (multiple) {
				const valueNames = []
				for (let i = 0; i < data.length; i++) {
					const option = this.optionMap.get(data[i])
					const name = option ? option[labelKey] : ''
					valueNames.push(name)
				}
				valueName = valueNames.join(',')
			}
			else {
				const option = this.optionMap.get(data)
				valueName = option ? option[labelKey] : ''
			}
			this.valueName = valueName

			if (returnType === 'object') {
				this.modelValue = {
					label: valueName,
					value: data
				}
			}
		},
		onConfirm(e) {
			this.isSelfChange = true
			this.valueName = e.label || ''

			if (this.config.returnType === 'object') {
				this.modelValue = e
			}
			else {
				this.modelValue = e[this.config.returnType]
			}
		},
		onClear(isPickerClear = true) {
			this.isSelfChange = true

			if (isPickerClear) {
				this.valueName = ''
			}

			if (this.config.returnType === 'object') {
				this.modelValue = {
					label: undefined,
					value: undefined
				}
			}
			else {
				this.modelValue = undefined
			}

			this.$emit('clear', this.attrs)
		},
		onClick(e) {
			if (e) {
				this.$emit('click', e, this.attrs)
			}
			else {
				this.showSelect = true
			}
		}
	}
}
</script>
