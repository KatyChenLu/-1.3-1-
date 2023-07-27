## 使用方法

1. 点击按钮，将项目插件导入到项目中
2. 下载插件，将.vue 文件复制到自己的项目目录里

### 传参说明

| 属性名  | 类型   | 默认值 | 说明                                          |
| ------- | ------ | ------ | --------------------------------------------- |
| options | Object | -      | 参数配置对象，详情配置见下方 options 属性说明 |

### options 属性详情

| 属性名     | 类型   | 默认值                 | 说明                 |
| ---------- | ------ | ---------------------- | -------------------- |
| userImg    | String | -                      | 用户头像             |
| userName   | String | -                      | 用户名称             |
| money      | String | 88.88                  | 红包金额             |
| coverTitle | String | 恭喜发财               | 红包封面标题         |
| openTitle  | String | 恭喜您获得             | 打开红包后的标题文本 |
| openTips   | String | 已存入钱包，可直接体现 | 打开红包后的提示文本 |
| btnText    | String | 查看我的钱包           | 打开红包后的按钮文本 |

### 事件方法

| 事件称名   | 说明                 | 返回参数 |
| ---------- | -------------------- | -------- |
| @onConfirm | 点击确认红包按钮触发 | -        |
| @onCover   | 开启红包时触发       | -        |
| @onClose   | 关闭红包时触发       | -        |

### 示例代码

**html**

```html
<gcm-red-bag :options="redBagConfig" @onConfirm="onConfirm"></gcm-red-bag>
```

**js**

```js
export default {
  data() {
    return {
      redBagConfig: {
        money: "66.88",
        btnText: "确认收款",
      },
    };
  },

  methods: {
    // 点击确认红包按钮事件
    onConfirm() {},
  },
};
```
