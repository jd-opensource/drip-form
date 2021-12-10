# drip-form-plugin-eggjs

drip-form eggjs插件。

## 安装

```bash
$ npm i @jdfed/drip-form-plugin-eggjs --save
```

## 开启插件

```js
// config/plugin.js
exports.dripValidator = {
  enable: true,
  package: '@jdfed/drip-form-plugin-eggjs',
};
```

## 使用场景

```js
// app/controller/home.js
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const rules = {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'integer',
        },
      },
      required: [
        'name',
        'age',
      ],
    };
    this.ctx.validateBySchema(rules);
    this.ctx.body = 'ok!';
  }
}
module.exports = HomeController;
```

## 提问交流

请到 [issues](https://github.com/JDFED/drip-form) 异步交流。

## License

[MIT](LICENSE)
