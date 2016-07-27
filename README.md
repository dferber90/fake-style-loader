# fake-style-loader

This works similar to [style-loader](https://github.com/webpack/style-loader), except it can be used on the server.

## Deprecation Notice


`css-loader` supports most of what this module enables out of the box by invoking `css-loader/locals` instead of `style-loader!css-loader` as stated in the `css-loader` [documentation](https://github.com/webpack/css-loader#local-scope).

More information in [#3](https://github.com/dferber90/fake-style-loader/issues/3). Kudos to [@chibicode](https://github.com/chibicode) for finding this out.

*The only part not supported using `css-loader/locals` is the special `source` property `fake-style-loader` adds. This is an edge case and it may be possible to work around this using `extract-text-webpack-plugin`.*

## Usage


```js
// in webpack config loaders, for server bundle
{ test: /\.css$/, loader: 'fake-style!css?modules' },

// in webpack config loaders, for client bundle (unrelated to this plugin)
{ test: /\.css$/, loader: 'style!css?modules' },
```


```js
var styles = require('./some-file.css')

console.log(styles)
// returns
// {
//   heading: '.XYZABC123',
//   ...
//   source: '.heading { color: blue; }'
// }

```

The classnames are returned, just like when using the style-loader and the css-loader in modules mode.
As an added bonus the returned object contains a `source` property which contains the CSS source code after it has went through css-loader.
As an example, this css source can be inlined into the HTML response on the server.
