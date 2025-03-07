<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">Config UI</h3>
<h3 align="center">可动态配置的UI组件库</h3>

[![stars](https://img.shields.io/github/stars/coder-Alan/config-ui?style=flat-square&logo=GitHub)](https://github.com/coder-Alan/config-ui)
[![forks](https://img.shields.io/github/forks/coder-Alan/config-ui?style=flat-square&logo=GitHub)](https://github.com/coder-Alan/config-ui)
[![issues](https://img.shields.io/github/issues/coder-Alan/config-ui?style=flat-square&logo=GitHub)](https://github.com/coder-Alan/config-ui)
[![release](https://img.shields.io/github/v/release/coder-Alan/config-ui?style=flat-square)](https://gitee.com/coder-Alan/config-ui/releases)
[![license](https://img.shields.io/github/license/umicro/uView2.0?style=flat-square)](https://en.wikipedia.org/wiki/MIT_License)

## 说明

config UI，是以配置驱动的UI组件库，涵盖常用的组件，通过简单的配置即可生成内容丰富、功能强大的表单。

## 安装

#### **uni-app插件市场链接** —— [https://ext.dcloud.net.cn/plugin?id=22467](https://ext.dcloud.net.cn/plugin?id=22467)

## 使用方法

配置easycom规则后，自动按需引入，无需`import`组件，直接引用即可。

```html
<template>
	<co-button type="primary">按钮</co-button>
</template>
```

## 文档说明

- ### co-form

------

**Attributes**

| 属性名        | 说明                                                    | 类型          | 默认值                  |
| ------------- | ------------------------------------------------------- | ------------- | ----------------------- |
| v-model       | 表单数据对象                                            | object        | {}                      |
| options       | 表单项配置，具体配置见下表                              | array[object] | []                      |
| is-format     | 是否需要格式化数据，如果是，只保留 options 属性里的字段 | boolean       | true                    |
| before-upload | 上传前的回调函数                                        | Function      | () => Promise.resolve() |
| before-remove | 删除前的回调函数                                        | Function      | () => Promise.resolve() |

**options**

| 属性       | 说明                                                   | 类型    | 默认值 |
| ---------- | ------------------------------------------------------ | ------- | ------ |
| field      | 字段名                                                 | string  | -      |
| component  | 所需要用到的组件名，具体配置见下表                     | string  | -      |
| slot       | 是否使用插槽                                           | boolean | -      |
| slotName   | 插槽名称                                               | string  | -      |
| hidden     | 是否显示该表单项，比 showConfig 属性的优先级高         | boolean | -      |
| showConfig | 显示条件，具体配置见下表                               | object  | -      |
| required   | 是否必填                                               | boolean | false  |
| rule       | 表单验证规则，具体配置见下表，更详细可查看 validate.js | object  | -      |
| ...        | 其余配置为对应组件的配置，具体配置见下表               |         |        |

**options.showConfig**

| 属性    | 说明                                 | 类型          | 默认值 |
| ------- | ------------------------------------ | ------------- | ------ |
| type    | 对比方式，具体配置见下表             | string        | all    |
| options | 显示条件的配置项集合，具体配置见下表 | array[object] | -      |

**options.showConfig.options**

| 属性  | 说明                                                         | 类型                 | 默认值 |
| ----- | ------------------------------------------------------------ | -------------------- | ------ |
| field | 表单里某个对比字段，如果是数组，说明这个字段是对象里面的某个字段 | string/array[string] | -      |
| terms | 对比条件，具体配置见下表                                     | string               | ===    |
| value | 表单里某个对比字段的值，如果是数组，说明这个字段是对象里面的某个字段 | string/number/array  | -      |

**options.rule**

| 属性    | 说明                 | 类型   | 默认值 |
| ------- | -------------------- | ------ | ------ |
| reg     | 验证规则，正则表达式 | RegExp | -      |
| message | 验证失败提示信息     | string | -      |

**options.component**

| 类型        | 说明                        |
| ----------- | --------------------------- |
| Normal      | 代表 CoFormNormal 组件      |
| Picker      | 代表 CoFormPicker 组件      |
| Cascader    | 代表 CoFormCascader 组件    |
| Upload      | 代表 CoFormUpload 组件      |
| CheckButton | 代表 CoFormCheckButton 组件 |

**options.showConfig.type**

| 类型   | 说明               |
| ------ | ------------------ |
| all    | 所有条件满足才显示 |
| anyOne | 任意一项满足就显示 |

**options.showConfig.options.terms**

| 类型      | 说明     |
| --------- | -------- |
| ===       | 等于     |
| !==       | 不等于   |
| >         | 大于     |
| >=        | 大于等于 |
| <         | 小于     |
| <=        | 小于等于 |
| includes  | 包含     |
| !includes | 不包含   |
| null      | 为空     |
| !null     | 不为空   |

**Events**

| 事件名         | 说明                                                         | 回调参数                             |
| -------------- | ------------------------------------------------------------ | ------------------------------------ |
| change         | 当某个字段的值发生变化时触发                                 | 共两个参数，依次为字段名、改变后的值 |
| blur           | 当 CoFormNormal 组件里的 textarea 组件失去焦点时触发         | -                                    |
| clear          | 当点击 CoFormNormal 组件和 CoFormPicker 组件的清除按钮时触发 | 共一个参数，为当前点击的配置项       |
| * 自定义事件名 | 对应组件的触发事件                                           | 共一个参数，为当前触发的配置项       |

- [ ] **co-form-normal**

**Attributes**

| 属性名  | 说明                     | 类型                  | 默认值 |
| ------- | ------------------------ | --------------------- | ------ |
| v-model | 表单内容数据             | string/number/boolean | -      |
| attrs   | 属性配置，具体配置见下表 | object                | -      |

**attrs**

| 属性             | 说明                                                         | 类型    | 默认值     |
| ---------------- | ------------------------------------------------------------ | ------- | ---------- |
| labelType        | 标签类型，具体配置见下表                                     | string  | -          |
| label            | 标签内容                                                     | string  | -          |
| labelSize        | 标签字体大小                                                 | string  | -          |
| labelColor       | 标签颜色                                                     | string  | -          |
| labelStyle       | 自定义标签的样式                                             | string  | -          |
| labelIcon        | 标签尾部图标                                                 | string  | -          |
| labelIconColor   | 标签尾部图标颜色                                             | string  | -          |
| labelIconSize    | 标签尾部图标大小                                             | string  | -          |
| labelIconStyle   | 标签尾部图标样式                                             | string  | -          |
| iconMethod       | 点击尾部图标触发的事件名称                                   | string  | -          |
| valueColor       | 值的颜色                                                     | string  | -          |
| borderAlign      | 边框位置，具体配置见下表                                     | string  | bottom     |
| layout           | 标签位置，具体配置见下表                                     | string  | horizontal |
| required         | 是否显示星号                                                 | boolean | -          |
| disabled         | 是否禁用                                                     | boolean | -          |
| placeholder      | 占位符内容                                                   | string  | -          |
| placeholderColor | 占位符颜色                                                   | string  | -          |
| radioList        | 单项选择器的选择项列表                                       | array   | -          |
| customStyle      | 自定义样式                                                   | string  | -          |
| unit             | 单位，仅当 labelType 属性为 input/text 时生效                | string  | -          |
| inputType        | input框的类型，仅当 labelType 属性为 input/text 时生效，具体配置见下表 | string  | text       |
| maxlength        | 最大输入长度，设置为 -1 时不限制最大长度，仅当 labelType 属性为 textarea 时生效 | number  | -          |
| showTip          | 值为空时是否显示提示，仅当 labelType 属性为 arrow 时生效     | boolean | -          |
| clear            | 是否显示清除按钮，仅当 labelType 属性为 arrow 时生效         | boolean | -          |
| methodName       | 点击事件的回调名称，仅当 labelType 属性为 text/arrow 时生效  | string  | -          |
| ellipsis         | 是否需要单行省略，仅当 labelType 属性为 text/arrow 时生效    | boolean | -          |

**attrs.labelType**

| 类型     | 说明       |
| -------- | ---------- |
| input    | 输入框     |
| arrow    | 选择箭头   |
| text     | 文本       |
| textarea | 多行输入框 |
| radio    | 单项选择器 |

**attrs.borderAlign**

| 类型     | 说明     |
| :------- | -------- |
| top      | 上边框   |
| bottom   | 下边框   |
| vertical | 上下边框 |

**attrs.layout**

| 类型       | 说明       |
| ---------- | ---------- |
| horizontal | 标签在左侧 |
| vertical   | 标签在上方 |

**attrs.inputType**

| 类型          | 说明               |
| ------------- | ------------------ |
| text          | 文本输入键盘       |
| number        | 数字输入键盘       |
| digit         | 带小数点的数字键盘 |
| idcard        | 身份证输入键盘     |
| tel           | 电话输入键盘       |
| safe-password | 密码安全输入键盘   |
| nickname      | 昵称输入键盘       |

**Events**

| 事件名 | 说明                                                         | 回调参数                                       |
| ------ | ------------------------------------------------------------ | ---------------------------------------------- |
| blur   | 当 textarea 组件失去焦点时触发                               | -                                              |
| clear  | 当点击 Input 组件或者 Arrow 组件的清除按钮时触发             | 共一个参数，为当前的属性配置                   |
| click  | 当点击 CoFormLabel 组件图标或者点击 labelType 属性为 arrow/text 类型时触发 | 共两个参数，依次为触发的事件名、当前的属性配置 |

- [ ] **co-form-picker**

**Attributes**

| 属性名  | 说明                     | 类型                       | 默认值 |
| ------- | ------------------------ | -------------------------- | ------ |
| v-model | 表单内容数据             | string/number/object/array | -      |
| attrs   | 属性配置，具体配置见下表 | object                     | -      |

**attrs**

| 属性        | 说明                                                         | 类型          | 默认值  |
| ----------- | ------------------------------------------------------------ | ------------- | ------- |
| pickerType  | 选择器类型，具体配置见下表                                   | string        | default |
| returnType  | 返回值类型，具体配置见下表                                   | string        | value   |
| labelStyle  | 自定义标签的样式，CoFormNormal 组件的属性                    | string        | -       |
| placeholder | 占位符内容，CoFormNormal 组件的属性                          | string        | -       |
| disabled    | 是否禁用，CoFormNormal 组件的属性                            | boolean       | false   |
| borderAlign | 边框位置，CoFormNormal 组件的属性                            | string        | bottom  |
| label       | 标签内容，CoFormNormal、CoDictionaryPicker、CoPicker 组件的属性 | string        | -       |
| dictName    | 字典名称，CoDictionaryPicker 组件的属性                      | string        | -       |
| multiple    | 是否多选，CoDictionaryPicker、CoPicker 组件的属性            | boolean       | false   |
| required    | 是否必填，CoDictionaryPicker、CoPicker、CoDatetimePicker 组件的属性 | boolean       | -       |
| startDate   | 开始日期，CoDatetimePicker 组件的属性                        | string/number | -       |
| endDate     | 结束日期，CoDatetimePicker 组件的属性                        | string/number | -       |
| list        | 选项列表，CoPicker 组件的属性                                | array[object] | []      |
| labelKey    | 标签字段名，CoPicker 组件的属性                              | string        | label   |
| valueKey    | 值字段名，CoPicker 组件的属性                                | string        | value   |

**attrs.pickerType**

| 类型          | 说明                                  |
| ------------- | ------------------------------------- |
| default       | 默认选择器 - CoPicker                 |
| dictionary    | 字典选择器 - CoDictionaryPicker       |
| time          | 时间选择器 - CoTimePicker             |
| month         | 年月选择器 - CoTimePicker             |
| date          | 日期选择器 - CoDatetimePicker         |
| datetime      | 日期时间选择器 - CoDatetimePicker     |
| daterange     | 日期范围选择器 - CoDatetimePicker     |
| datetimerange | 日期时间范围选择器 - CoDatetimePicker |
| area          | 地区选择器 - CoAreaPicker             |

**attrs.returnType**

| 类型   | 说明     |
| ------ | -------- |
| value  | 返回值   |
| label  | 返回标签 |
| object | 返回对象 |

**Events**

| 事件名 | 说明                                                         | 回调参数                                       |
| ------ | ------------------------------------------------------------ | ---------------------------------------------- |
| clear  | 当点击 CoPicker 组件的清除按钮触发或者点击 CoFormNormal 组件里面的 Arrow 组件的清除按钮触发 | 共一个参数，为当前的属性配置                   |
| click  | 当点击 CoFormNormal 组件里面的 CoFormLabel 组件的图标触发    | 共两个参数，依次为触发的事件名、当前的属性配置 |



- [ ] **co-form-cascader**
- [ ] **co-form-upload**
- [ ] **co-form-check-button**



- ### co-svg-icon

------

**Attributes**

| 属性名       | 说明             | 类型          | 默认值 |
| ------------ | ---------------- | ------------- | ------ |
| icon         | 图标名称         | string        | -      |
| size         | 图标大小         | string/number | 16     |
| color        | 图标颜色，16进制 | string        | #999   |
| svg          | 自定义svg        | string        | -      |
| custom-class | 自定义class      | string/array  | -      |

**Events**

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| click  | 当点击时触发 |          |



- ### co-button

------

**Attributes**

| 属性名   | 说明           | 类型                                    | 默认值  |
| -------- | -------------- | --------------------------------------- | ------- |
| type     | 按钮类型       | default\|primary\|info\|warning\|danger | default |
| plain    | 是否为朴素按钮 | boolean                                 | false   |
| disabled | 是否禁用按钮   | boolean                                 | false   |
| icon     | 图标名称       | string                                  | -       |
| style    | 自定义样式     | string                                  | -       |

**Events**

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| click  | 当点击时触发 |          |



- ### co-tag

------

**Attributes**

| 属性名   | 说明           | 类型                                    | 默认值  |
| -------- | -------------- | --------------------------------------- | ------- |
| type     | 标签类型       | primary\|success\|info\|warning\|danger | primary |
| effect   | 标签效果       | light\|dark\|plain                      | light   |
| hit      | 是否有边框描边 | boolean                                 | false   |
| ellipsis | 是否省略       | boolean                                 | false   |
| style    | 标签样式       | string                                  | -       |



- ### co-alert

------

**Attributes**

| 属性名           | 说明         | 类型                          | 默认值 |
| ---------------- | ------------ | ----------------------------- | ------ |
| title            | Alert 标题   | string                        | -      |
| type             | Alert 类型   | success\|info\|warning\|error | info   |
| color            | 文字颜色     | string                        | -      |
| background-color | 背景颜色     | string                        | -      |
| custom-style     | 自定义样式   | string                        | -      |
| show-icon        | 是否显示图标 | boolean                       | true   |
| icon             | 自定义图标   | string                        | -      |
| icon-size        | 图标大小     | number                        | 18     |
| icon-color       | 图标颜色     | string                        | -      |
| effect           | 主题样式     | light\|dark                   | light  |



- ### co-menu

------

**Events**

| 事件名 | 说明                                     | 回调参数 |
| ------ | ---------------------------------------- | -------- |
| click  | 点击菜单项时触发，返回参数为菜单项的索引 |          |

- ### co-menu-item

------

**Attributes**

| 属性名 | 说明             | 类型          | 默认值 |
| ------ | ---------------- | ------------- | ------ |
| index  | 菜单项的唯一标志 | string/number | -      |



- ### co-tree

------

**Attributes**

| 属性名        | 说明                                                         | 类型             | 默认值 |
| ------------- | ------------------------------------------------------------ | ---------------- | ------ |
| default-value | 默认值，单选时为id，多选时为id数组                           | string/array[id] | -      |
| data          | 展示数据                                                     | array[object]    | []     |
| props         | 配置选项，具体配置见下表                                     | object           | -      |
| show-checkbox | 是否显示多选框，节点是否可被选择                             | boolean          | false  |
| only-leaf     | 是否仅在叶子节点才显示多选框，仅当 showCheckbox 属性为 true 时生效 | boolean          | false  |
| multiple      | 是否多选                                                     | boolean          | false  |
| lazy          | 是否启用懒加载                                               | boolean          | false  |
| load          | 加载子树数据的方法，仅当 lazy 属性为 true 时生效             | Function         | -      |
| disabled      | 复选框禁用数组，存储 id，仅当 showCheckbox 属性为 true 时生效 | array[id]        | []     |
| id-separator  | id分隔符，默认为 - ，如果设置了 defaultValue 默认值，务必设置 idSeparator | string           | -      |

**props**

| props    | 说明                                                       | 类型   | 默认值   |
| -------- | ---------------------------------------------------------- | ------ | -------- |
| id       | 指定节点id为节点对象的某个属性值                           | string | id       |
| label    | 指定节点标签为节点对象的某个属性值                         | string | label    |
| children | 指定子树为节点对象的某个属性值                             | string | children |
| isLeaf   | 指定节点是否为叶子节点，仅当 lazy 属性为 true 的情况下生效 | string | isLeaf   |

**Events**

| 事件名       | 说明                             | 回调参数                                                     |
| ------------ | -------------------------------- | ------------------------------------------------------------ |
| check        | 点击的节点选中状态发生变化时触发 | 共三个参数，依次为当前节点数据、当前节点是否被选中、当前所有已选中的节点数据 |
| check-change | 相关的节点选中状态发生变化时触发 | 共三个参数，依次为当前节点数据、当前节点是否被选中、当前所有已选中的节点数据 |
| click        | 点击叶子节点时触发               | 共一个参数，为当前节点数据                                   |



- ### co-popup

------

**Attributes**

| 属性名               | 说明                                          | 类型                | 默认值 |
| -------------------- | --------------------------------------------- | ------------------- | ------ |
| v-model              | 是否显示弹框                                  | boolean             | false  |
| placement            | 弹出位置                                      | top\|bottom\|center | bottom |
| position             | 定位方式                                      | fixed\|absolute     | fixed  |
| fixed                | 弹出距离                                      | string/number       | -      |
| height               | 内容高度                                      | string/number       | unset  |
| width                | 弹框宽度，仅当 placement 属性为 center 时生效 | string/number       | 80vw   |
| round                | 是否显示圆角                                  | boolean             | false  |
| modal                | 是否显示遮罩                                  | boolean             | true   |
| close-on-click-modal | 是否可以通过点击遮罩层关闭                    | boolean             | true   |

**Events**

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | -------- |
| open   | 当弹框打开时触发 | -        |
| opened | 当弹框打开后触发 | -        |
| close  | 当弹框关闭时触发 | -        |
| closed | 当弹框关闭后触发 | -        |



- ### co-collapse

------

**Attributes**

| 属性名        | 说明               | 类型        | 默认值 |
| ------------- | ------------------ | ----------- | ------ |
| title         | 标题               | string      | 标题   |
| custom-class  | 自定义class        | string      | -      |
| open          | 是否默认是打开状态 | boolean     | false  |
| icon-position | 展开图标的位置     | left\|right | right  |

**Events**

| 事件名 | 说明                 | 回调参数 |
| ------ | -------------------- | -------- |
| open   | 当折叠面板打开时触发 | -        |
| close  | 当折叠面板关闭时触发 | -        |



- ### co-search

------

**Attributes**

| 属性名            | 说明                                                         | 类型          | 默认值           |
| ----------------- | ------------------------------------------------------------ | ------------- | ---------------- |
| v-model           | 搜索条件                                                     | object        | {}               |
| input-field       | 输入框的搜索值字段名                                         | string        | searchText       |
| placeholder       | 输入框的占位符                                               | string        | 请输入搜索关键字 |
| placeholder-color | 输入框的占位符颜色                                           | string        | #999             |
| color             | 输入框的文字颜色                                             | string        | #333             |
| background        | 输入框的背景颜色                                             | string        | #fff             |
| border            | 是否需要边框                                                 | boolean       | true             |
| filter            | 是否需要搜索条件                                             | boolean       | false            |
| filter-options    | 搜索条件的表单配置                                           | array[object] | []               |
| default-button    | 是否需要默认的搜索按钮，不需要时将会自动搜索                 | boolean       | false            |
| is-format         | 是否格式化搜索条件，如果是，只保留 filterOptions 属性里的字段 | boolean       | true             |
| fixed             | 是否固定在顶部                                               | boolean       | true             |

**Events**

| 事件名         | 说明                                              | 回调参数 |
| -------------- | ------------------------------------------------- | -------- |
| search         | 点击搜索按钮或者自动搜索时触发                    | -        |
| reset          | 点击重置按钮时触发                                | -        |
| * 自定义事件名 | 点击搜索条件表单的表单项 labelType = arrow 时触发 | -        |



- ### co-footer

------

**Attributes**

| 属性名  | 说明                                 | 类型          | 默认值                                                       |
| ------- | ------------------------------------ | ------------- | ------------------------------------------------------------ |
| options | 底部操作栏的按钮配置，具体配置见下表 | array[object] | [{ type: 'primary', text: '提交', slot: false, disbaled: false, methodName: 'click' }] |
| fixed   | 是否固定在底部                       | boolean       | true                                                         |
| shadow  | 是否显示阴影                         | boolean       | true                                                         |

**options**

| options    | 说明       | 类型                                    | 默认值  |
| ---------- | ---------- | --------------------------------------- | ------- |
| type       | 按钮类型   | primary\|success\|info\|warning\|danger | primary |
| text       | 按钮文本   | string                                  | 提交    |
| slot       | 是否是插槽 | boolean                                 | false   |
| disabled   | 是否禁用   | boolean                                 | false   |
| methodName | 回调事件名 | string                                  | click   |

**Events**

| 事件名         | 说明           | 回调参数 |
| -------------- | -------------- | -------- |
| * 自定义事件名 | 点击按钮时触发 | -        |



- ### co-load

------

**Attributes**

| 属性名      | 说明                                               | 类型          | 默认值                                            |
| ----------- | -------------------------------------------------- | ------------- | ------------------------------------------------- |
| v-model     | 列表数据                                           | array[object] | []                                                |
| search-data | 接口的查询参数，其他参数也可以通过该字段传递，必传 | object        | {}                                                |
| load        | 加载列表数据的方法                                 | Function      | () => Promise.resolve({ list: [], totalPage: 0 }) |
| init-search | 是否需要在组件初始化时搜索                         | boolean       | true                                              |
| page-size   | 每页条数                                           | number        | 20                                                |
| placeholder | 暂无数据时的提示语                                 | string        | 暂无数据                                          |
| loading     | 是否显示加载中的提示弹框                           | boolean       | true                                              |

**Events**

| 事件名        | 说明                 | 回调参数                       |
| ------------- | -------------------- | ------------------------------ |
| loadingChange | 当加载状态改变时触发 | 共一个参数，为改变后的加载状态 |
| listChange    | 当列表数据改变时触发 | 共一个参数，为改变后的列表数据 |



- ### co-select-page

------

**Attributes**

| 属性名             | 说明                                                | 类型          | 默认值                                            |
| ------------------ | --------------------------------------------------- | ------------- | ------------------------------------------------- |
| search-data        | 接口的查询参数，其他参数也可以通过该字段传递，必传  | object        | {}                                                |
| load               | 加载列表数据的方法                                  | Function      | () => Promise.resolve({ list: [], totalPage: 0 }) |
| init-search        | 是否需要在组件初始化时搜索                          | boolean       | true                                              |
| placeholder        | 暂无数据时的提示语                                  | string        | 暂无数据                                          |
| filter             | 是否开启搜索条件筛选                                | boolean       | false                                             |
| filter-options     | 搜索条件的表单配置                                  | array[object] | []                                                |
| search-input-field | 搜索框的输入字段，属于 search-data 属性里的一个字段 | string        | searchText                                        |
| label-key          | 用于展示数据                                        | string        | label                                             |
| value-key          | 用于选中状态                                        | string        | value                                             |
| multiple           | 是否多选                                            | boolean       | false                                             |
| back               | 点击确认后是否返回上一个页面                        | boolean       | true                                              |
| slot-type          | 使用插槽组件的类型，组件需自行引入                  | string        | -                                                 |
| has-search         | 是否需要搜索框                                      | boolean       | true                                              |
| default-value      | 默认选中数据                                        | array         | []                                                |
| required           | 是否必须选择数据后才能点击确定按钮                  | boolean       | true                                              |

**Events**

| 事件名            | 说明                 | 回调参数                       |
| ----------------- | -------------------- | ------------------------------ |
| confirm           | 当点击确认按钮时触发 | 共一个参数，为当前选中的数据   |
| listChange        | 当列表数据改变时触发 | 共一个参数，为改变后的列表数据 |
| update:searchData | 当查询参数改变时触发 | 共一个参数，为改变后的查询参数 |



- ### co-steps

------

**Attributes**

| 属性名         | 说明               | 类型                                   | 默认值 |
| -------------- | ------------------ | -------------------------------------- | ------ |
| active         | 设置当前激活步骤   | number                                 | -1     |
| process-status | 设置当前步骤的状态 | wait\|process\|warning\|error\|success | wait   |

- ### co-step

------

**Attributes**

| 属性名 | 说明                       | 类型                                   | 默认值 |
| ------ | -------------------------- | -------------------------------------- | ------ |
| icon   | 图标                       | string                                 | -      |
| color  | 图标颜色                   | string                                 | -      |
| top    | 图标与步骤条顶部之间的距离 | string                                 | 50%    |
| status | 步骤状态                   | wait\|process\|warning\|error\|success | wait   |

**Events**

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| click  | 当点击步骤条时触发 | -        |
