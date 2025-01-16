# [Monospace Land][repo]

[Eleventy][11ty] template made with [monospace][mono] and [pug][pug].

And maybe [alpinejs][alpinejs].

## Why

I like monospace

## How to use

This repo is configured as a template, there is a button "use this template". If
you don't like it, here is the manual setup:

```bash
mkdir my-site
cd my-site
npm init -y
npm i -D @11ty/eleventy @11ty/eleventy-plugin-pug alpinejs js-yaml rimraf
mkdir -p src/{pages,assets,data,includes}
mkdir -p src/includes/{components,controls,layouts}
```

Then copy the [eleventy config file][config] and start writing pug templates and
yal data files.

## Noteworthy

- Configurations and project layout are meant to be as simple as possible.
-

[repo]: https://github.com/sombriks/monospace-land
[11ty]: https://11ty.dev
[mono]: https://owickstrom.github.io/the-monospace-web
[pug]: https://pugjs.org
[alpinejs]: https://alpinejs.dev
[config]: ./eleventy.config.js
