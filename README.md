# Grunt Strip Media Queries

[![npm version](https://badge.fury.io/js/grunt-strip-media-queries.svg)](https://badge.fury.io/js/grunt-strip-media-queries)

> Grunt task to strip media queries from a CSS file and create a file with them. It uses [strip-media-queries](https://github.com/alexcanessa/strip-media-queries)

## Getting Started

This plugin requires Grunt `~0.4.5` and [strip-media-queries](https://github.com/alexcanessa/strip-media-queries) `^0.2.1`

```shell
npm install grunt-strip-media-queries --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-strip-media-queries');
```

## Options

See full options are the same as [strip-media-queries](https://github.com/alexcanessa/strip-media-queries):

### Example

```js
strip_media_queries: {
    mobile: {
        options: {
            width: 400
        },
        files: {
            src: './demo/**.css',
            dest: './demo/mobile-queries.css'
        }
    }
}
```
