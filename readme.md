# [Funico](https://github.com/chenshenchao/funico)

一个字体图标库。

```bash
npm i funico
```

```js
import 'funico';
```

```html
<i class="fi fi-user"></i>
<i class="fi fi-key"></i>
```

## 开发

原始的 svg 图标必须满足：

1. 使用 路径 必填充和闭合，且不能描边。（不然效果不一致，没闭合的转换后会自动闭合）
2. 宽高：200mm x 200mm 
3. 视图框大小（viewbox）： 200 x 200


