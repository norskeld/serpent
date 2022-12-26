# `〜` serpent

<!-- Uncomment & replace owner/repo. -->

<!-- [![Build/Test](https://img.shields.io/github/actions/workflow/status/norskeld/serpent/test.yml?style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/norskeld/serpent/actions 'Build and test workflows') -->
<!-- [![Coverage](https://img.shields.io/coverallsCoverage/github/norskeld/serpent?style=flat-square&colorA=22272d&colorB=22272d)](https://coveralls.io/github/norskeld/serpent 'Test coverage') -->
<!-- [![NPM](https://img.shields.io/npm/v/@nrsk/serpent?style=flat-square&colorA=22272d&colorB=22272d)](https://npm.im/@nrsk/serpent 'This package on NPM') -->
<!-- [![Bundlephobia](https://img.shields.io/bundlephobia/minzip/@nrsk/serpent?style=flat-square&colorA=22272d&colorB=22272d&label=minzipped)](https://bundlephobia.com/package/@nrsk/serpent) -->
<!-- ![Tree Shaking](https://img.shields.io/static/v1?label=tree+shaking&message=✔&style=flat-square&colorA=22272d&colorB=22272d) -->

[![Supported Node Versions](https://img.shields.io/static/v1?label=node&message=14+|+16+|+18&style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/norskeld/sigma/blob/master/package.json#L35 'Supported Node versions')
[![Semantic Release](https://img.shields.io/static/v1?label=semantic+release&message=✔&style=flat-square&colorA=22272d&colorB=22272d)](https://github.com/semantic-release/semantic-release 'This package uses semantic release to handle releasing, versioning, changelog generation and tagging')
[![Conventional Commits](https://img.shields.io/static/v1?label=conventional+commits&message=✔&style=flat-square&colorA=22272d&colorB=22272d)](https://conventionalcommits.org 'This package follows the conventional commits spec and guidelines')

Yet another TypeScript library starter with conventional goodies and automatic semantic releases.

## Usage

Create your own repo [using this one as a template][use-template], clone it, [make necessary changes](#edits), install dependencies and you are set.

## Features

What's inside:

- **[TypeScript]** with **[tsup]** for bundling (CJS/ESM) and **[tsx]** (for executing `.ts` files).
- **[Vitest]**: for testing and generating coverage report, by default it runs in watch mode (behaves properly in CI).
- **[ESLint]**: with TypeScript and Prettier plugins, extends only built-in recommended configs.
- **[Prettier]**: very basic config, feel free to adjust as you want.
- **[commitlint]**: for linting commits, by default it uses [Angular preset][commitlint-preset].
- **[semantic-release]**: for generating `CHANGELOG.md` and [handling the whole releasing process][semantic-release-highlights] based on [conventional commits][cc].
- **[husky]** + **[lint-staged]**: for fixing and formatting your code before committing.
- **[EditorConfig]**: handy little thing to make things a bit more consistent.

Also:

- **[.vscode](.vscode)**: some handy settings for Visual Studio Code.
- **[.scripts/release](.scripts/release.ts)**: custom script to help **semantic-release** produce flat and tidy tarballs.
- **[.github/workflows](.github/workflows)**: basic configs for:
  - Testing and building on **node@16**;
  - Releasing to **npm** with **semantic-release**.

## Edits

You'll have to make some changes right after generating your own repository using this template.

- **[README.md](README.md)**: change as you want, you may want to check [this site][readme] and [this awesome-readme list][readme-awesome] for examples of good readmes.
- **[LICENSE](LICENSE)**: change as you want and don't forget to mention it in README.
- **[package.json](package.json)**: change `name`, `description`, `repository.url`, `keywords`, `author`, `bugs.url`, `homepage`.
- **[.github/workflows](.github/workflows)**: either remove these, replace with your own CI configuration or change as you need.
  - [semantic-release has recipes and instructions][semantic-recipes] for popular CI services.

## License

[MIT](LICENSE) by default, but you may want to [consider using something else][choose-license].

<!-- Links. -->

[use-template]: https://github.com/norskeld/serpent/generate
[typescript]: https://typescriptlang.org
[tsup]: https://github.com/egoist/tsup
[tsx]: https://github.com/esbuild-kit/tsx
[vitest]: https://vitest.dev
[commitlint]: https://github.com/conventional-changelog/commitlint
[commitlint-preset]: https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-angular
[semantic-release]: https://semantic-release.gitbook.io/semantic-release
[eslint]: https://eslint.org
[prettier]: https://prettier.io
[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
[editorconfig]: https://editorconfig.org
[semantic-recipes]: https://semantic-release.gitbook.io/semantic-release/recipes/recipes
[readme]: https://makeareadme.com
[readme-awesome]: https://github.com/matiassingers/awesome-readme
[choose-license]: https://choosealicense.com
[semantic-release-highlights]: https://semantic-release.gitbook.io/semantic-release/#highlights
[cc]: https://conventionalcommits.org
