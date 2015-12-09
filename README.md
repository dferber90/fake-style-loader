# fake-style-loader

This works similar to [style-loader](https://github.com/webpack/style-loader), except it can be used on the server.

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
