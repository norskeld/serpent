# `〜` serpent

[![Semantic Release](https://img.shields.io/badge/semantic_release-black?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/conventional_commits-black?style=flat-square)](https://conventionalcommits.org)

Yet another TypeScript library starter with conventional goodies and automatic semantic releases.

## Usage

Create your own repo [using this one as a template](https://github.com/norskeld/serpent/generate), clone it, [make necessary changes](#edits), install dependencies and you are set.

## Features

What's inside:

- **[TypeScript](https://www.typescriptlang.org)**: no bundlers whatsoever. Use **rollup** or **esbuild** for production. :)
- **[Jest](https://jestjs.io)**: for testing, really basic setup with TypeScript support.
- **[Commitlint](https://github.com/conventional-changelog/commitlint)**: for linting your commits, uses [Angular preset](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-angular) by default.
- **[Semantic Release](https://semantic-release.gitbook.io/semantic-release/)**: for generating _CHANGELOG.md_, releasing and publishing to npm.
- **[ESLint](https://eslint.org/)**: with TypeScript and Prettier plugins, extends only built-in recommended configs.
- **[Prettier](https://prettier.io)**: very basic config, feel free to adjust as you want.
- **[Husky](https://github.com/typicode/husky)** + **[lint-staged](https://github.com/okonet/lint-staged)**: for fixing and formatting your code before committing.
- **[EditorConfig](https://editorconfig.org)**: handy little thing.

> I highly recommend you install plugins for **ESLint**, **Prettier** and **EditorConfig** and configure your IDE to use **local TypeScript installation**.

Also (these can be deleted right away if you don't need them):

- **[.vscode](.vscode/)**: some handy settings for Visual Studio Code, like auto-fixing and formatting, JSON schema mappings and a ruler, which matches the prettier settings (`100` by default).
- **[.github/workflows](.github/workflows)**: basic configs for testing and building on **node@16** and releasing to **npm** with **semantic-release**.

## Edits

You'll have to make some changes right after generating your own repository using this template.

- [package.json](package.json): change `name`, `description`, `repository.url`, `keywords`, `author`, `bugs.url`, `homepage`.
- [.github/workflows/\*.yml](.github/workflows): either remove these, replace with your own CI configuration or change as you need. **semantic-release** [has recipes and instructions](https://semantic-release.gitbook.io/semantic-release/recipes/recipes) for popular CI services.
- [README.md](README.md): change as you want, you may want to check [this site](https://www.makeareadme.com/) and [this awesome-readme list](https://github.com/matiassingers/awesome-readme) for examples of good readmes.
- [LICENSE](LICENSE): change as you want and don't forget to mention it in README.

## License

[MIT](LICENSE) by default, but you may want to [consider using something else](https://choosealicense.com/).
