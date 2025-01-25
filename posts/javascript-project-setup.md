---
title: "Javascript project setup"
created: "2025-01-22T08:00Z"
published: true
category: "Programming"
---

These are some essential utilities that should be part of every Javascript project.

# Typescript

We should use Typescript because it provides static typing, helps catch errors early during development, and improves code maintainability and readability.

# Eslint

Eslint is used for linting the project files, that is, checking the code for potential errors, enforcing coding standards, and ensuring consistency across the codebase.

Eslint should run on a file after saving it.

## `eslint-plugin-simple-import-sort`
This plugin is used to sort the imports. Installation:
```shell
npm install --save-dev eslint-plugin-simple-import-sort
```
After installed, imports will be sorted when running `eslint --fix`.

Note that there are other alternatives:
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports)


# Prettier

Prettier is an opinionated code formatter that ensures consistent code style across the project by automatically formatting code based on a predefined set of rules.

Prettier should run on a file after saving it.

## TODO Tailwind Prettier rules

Importantly, classes will get sorted in the same way as they are sorted in the actual CSS code.
Thanks to this, we can understand which classes override each other, just by looking at
the HTML.

# *Other resources

- What's the difference between prettier-eslint, eslint-plugin-prettier and eslint-config-prettier?

As of 2025: just use `eslint-config-prettier`.

See https://stackoverflow.com/questions/44690308/whats-the-difference-between-prettier-eslint-eslint-plugin-prettier-and-eslint


