# Contributing to Drip-form

> Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md).
> By participating in this project you agree to abide by its terms.

## To get started with the repo

### Installation

1. Ensure you have [Yarn](https://yarnpkg.com/) installed.
1. After cloning the repository, run `yarn install` in the root of the repository.
1. Run `yarn build:prod` to build project.
1. To start a development server, run `yarn start:generator`.
1. If you want to monitor changes, run `yarn watch:babel`.

### Code Structure

Currently, the [source](https://github.com/JDFED/drip-form/tree/dev) is split up into a few categories:

- examples: Drip-form examples

  - [form-generator](https://github.com/JDFED/drip-form/tree/dev/examples/form-generator)

    Drip-form generator example

- packages: Drip-form npm package

  - [ajv](https://github.com/JDFED/drip-form/tree/dev/packages/ajv)

    Register[AJV](https://ajv.js.org/), imported` AJV` plugin

  - [drip-form](https://github.com/JDFED/drip-form/tree/dev/packages/drip-form)

  - [drip-form-plugin-formats](https://github.com/JDFED/drip-form/tree/dev/packages/drip-form-plugin-formats)

    Drip form AJV formats plugin

  - [drip-form-plugin-keywords](https://github.com/JDFED/drip-form/tree/dev/packages/drip-form-plugin-keywords)

    Drip form AJV keyword plugin

  - [drip-form-theme-antd](https://github.com/JDFED/drip-form/tree/dev/packages/drip-form-theme-antd)

    Drip form antd theme

  - [generator](https://github.com/JDFED/drip-form/tree/dev/packages/generator)

    Drip form generator

  - [hooks](https://github.com/JDFED/drip-form/tree/dev/packages/hooks)

    Drip form hooks

  - [utils](https://github.com/JDFED/drip-form/tree/dev/packages/utils)

    Drip form utils

- [scripts](https://github.com/JDFED/drip-form/tree/dev/packages/scripts)

  sh or node script

- [website](https://github.com/JDFED/drip-form/tree/dev/packages/website)

  Drip form website

## Semantic versioning

Drip form follows [semantic versioning](https://semver.org/)

## Commit message

Drip form use [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/) to generate CHANGELOG。

See how a minor change to your commit message style can make you a better programmer.

The commit message should be structured as follows:

---

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

`<scope>` is optional. If your change is specific to one/two packages, consider adding the scope. Scopes should be brief but recognizable, e.g. `form`, `theme`, `ajv`,`generator`,`hooks`,`utils`

The various types of commits:

- `feat`: a new API or behavior **for the end user**.
- `fix`: a bug fix **for the end user**.
- `docs`: a change to the website or other Markdown documents in our repo.
- `refactor`: a change to production code that leads to no behavior difference, e.g. splitting files, renaming internal variables, improving code style...
- `test`: adding missing tests, refactoring tests; no production code change.
- `chore`: upgrading dependencies, releasing new versions... Chores that are **regularly done** for maintenance purposes.
- ...

Also, we use [commitizen](https://github.com/commitizen/cz-cli). You can run `yarn cz` or `npm run cz` , you'll be prompted to fill out any required commit fields at commit time.

Do not get too stressed about PR titles, however. The maintainers will help you get them right, and we also have a PR label system that doesn't equate with the commit message types. Your code is more important than conventions!

## Code Conventions

We use [husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged#readme). In `pre-commit`, automatically run the `eslint` and` pretty` to lint code and format code.

## Submitting Pull Requests

This project follows [GitHub's standard forking model](https://guides.github.com/activities/forking/). Please fork the project to submit pull requests.

## Contributors

[Thanks goes to these wonderful people](./CONTRIBUTORS.md)

People are giving themselves and their free time to contribute to open source projects in so many ways, so we believe everyone should be praised for their contributions (code or not).

`Drip form` follows [all-contributors](https://allcontributors.org/docs/en/specification) specification.

Write a comment on an issue or pull request to recognise their contribution.
`@all-contributors please add @<username> for <contributions>`

For example:
`@all-contributors please add @mengshang918 for code ✨`

For more information, please see [all-contributors contributions](https://allcontributors.org/docs/en/emoji-key)

[Add yourself to the contributor list](https://github.com/JDFED/drip-form/issues/5)

## Releasing

We use `github action` and `lerna` to auto release npm package.

The `alpha` package is released `every Friday` at `8 p.m`

The `latest` package is released `every Monday` at `8 p.m`
