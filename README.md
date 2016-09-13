# m-switch

---

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox `的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## API

### Switch
```html
<Switch />
```

| 参数      | 说明                                     | 类型       |默认值 |
|-----------|------------------------------------------|---------|--------|
| checked | 指定当前是否选中 | boolean  |  false    |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 指定是否禁用 | boolean  | false    |
| onChange | 变化时回调函数 | Function(checked:boolean)|  | |
