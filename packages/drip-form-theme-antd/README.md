# @jdfed/drip-form-theme-antd

## 安装

`jnpm install @jdfed/drip-form-theme-antd`

## 支持组件

- 持续更新

| 组件名                 |  状态  |
| ---------------------- | :----: |
| Text 文本输入          | 已支持 |
| Number 数字输入        | 已支持 |
| Select 选择器          | 已支持 |
| Radio 单选框           | 已支持 |
| Null 空表单            | 已支持 |
| Switch 开关            | 已支持 |
| Slider 滑动输入条      | 已支持 |
| TimePicker 时间选择器  | 已支持 |
| DatePicker 日期选择器  | 已支持 |
| ColorPicker 颜色选择器 | 已支持 |
| Checkbox 多选框        | 已支持 |
| Uploader 上传          | 已支持 |
| Cascader 级联选择      | 已支持 |
| TreeSelect 树形选择器  | 已支持 |

## 相关依赖

由于`antd`主题包导出样式为`less`，此举是为了便于通过`webpack`配置以消除其样式对全局样式的污染问题

`less-loader`的配置需使用者根据自身项目情况进行配置

如果使用`webpack`进行构建，请参考`docs/`下的《如何避免 antd 的全局样式污染》
