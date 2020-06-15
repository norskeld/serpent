# :snake: serpent

[![Semantic Release](https://img.shields.io/badge/semantic-release-e10079)](https://github.com/semantic-release/semantic-release)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Yet another TypeScript library starter with conventional goodies and automatic semantic releases.

## Usage

Create your own repo [using this one as a template](https://github.com/arcdelta/serpent/generate), clone it, [make necessary changes](#edits), install dependencies and you are set.

## Features

What's inside:

- **[TypeScript](https://www.typescriptlang.org)** + **[ts-node](https://github.com/TypeStrong/ts-node)**: no bundlers whatsoever. Use **Rollup** for libraries. :)
- **[Jest](https://jestjs.io)**: for testing, really basic setup with `watch` and `coverage` scripts.
- **[Commitizen](https://github.com/commitizen/cz-cli)**: `npm run cz` for interactive committing.
- **[Commitlint](https://github.com/conventional-changelog/commitlint)**: for linting your commits, uses [Angular preset](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-angular) by default.
- **[Semantic Release](https://semantic-release.gitbook.io/semantic-release/)**: for generating *CHANGELOG.md*, releasing and publishing to npm.
- **[ESLint](https://eslint.org/)**: with TypeScript and Prettier plugins, extends only built-in recommended configs.
- **[Prettier](https://prettier.io)**: very basic config, feel free to adjust as you want.
- **[Husky](https://github.com/typicode/husky)** + **[lint-staged](https://github.com/okonet/lint-staged)**: for fixing and formatting your code before committing.
- **[EditorConfig](https://editorconfig.org)**: handy little thing.

> I highly recommend you install plugins for **ESLint**, **Prettier** and **EditorConfig** and configure your IDE to use **local TypeScript installation**.

Also (these can be deleted right away if you don't need them):

- **CircleCI**: very basic config for testing on **node@12** and releasing via **semantic-release**.
- **Github**: generic issue templates for features, performance and bug reports.
- **Visual Studio Code**: some handy settings like auto-fixing and formatting, JSON Schemas mappings and ruler which matches the prettier settings (`100` by default).

## Edits

You'll have to make some changes first. (Maybe I'll automate this with some `postinstall` script and CLI...)

- [README.md](README.md): change as you want, you may want to check [this site](https://www.makeareadme.com/) and [this awesome-readme list](https://github.com/matiassingers/awesome-readme) for examples of good readmes.
- [package.json](package.json): change `name`, `description`, `repository.url`, `keywords`, `author`, `bugs.url`, `homepage`.
- [CircleCI config](.circleci/config.yml): either remove this or change as you need.

## Badges

To use badges for CircleCI, npm and Dependabot, simply add them above, replacing `<user>`, `<repo>` and `<package>` accordingly.

```markdown
[![CircleCI](https://img.shields.io/circleci/build/github/<user>/<repo>/master)](https://circleci.com/gh/<user>/<repo>/tree/master)
[![npm](https://img.shields.io/npm/v/<user>/<package>?label=npm)](https://www.npmjs.com/package/<user>/<package>)
![Dependabot](https://flat.badgen.net/dependabot/<user>/<repo>?icon=dependabot)
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
