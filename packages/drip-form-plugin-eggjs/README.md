# drip-form-plugin-eggjs

drip-form plugin for eggjs.

## Install

```bash
$ npm i @jdfed/drip-form-plugin-eggjs --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.dripValidator = {
  enable: true,
  package: '@jdfed/drip-form-plugin-eggjs',
};
```

## Example

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

## Questions & Suggestions

Please open an issue [here](https://github.com/JDFED/drip-form).

## License

[MIT](LICENSE)
