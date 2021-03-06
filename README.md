# CSS in JS
React: [CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) techniques comparison.

## Usage
Inside each package folder, run:

```
npm install
npm run build && open index.html
```

## Features

**How to read the table**

More crosses doesn't mean "better", it depends on your needs.
For example, if a package supports the css file extraction you can run the autoprefixing at build time.

| Package | Version | Autoprefixer Included | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
|---------|:-------:|:---------------------:|:--------------:|:-------------:|:-------------------------:|:----------------:|
| [bloody-react-styled](https://github.com/bloodyowl/react-styled) | 3.0.0 | | x | x | | |
| [css-loader](https://github.com/webpack/css-loader) | 0.14.2 | | x | x | | x |
| [jsxstyle](https://github.com/petehunt/jsxstyle) | 0.0.12 | x | | | x | |
| [radium](https://github.com/FormidableLabs/radium) | 0.12.2 | x | x | x | x | |
| [react-css-builder](https://github.com/jhudson8/react-css-builder) | 0.2.0 | | | | x | |
| [react-free-style](https://github.com/blakeembrey/react-free-style) | 0.5.1 | | x | x | x | |
| [react-inline-css](https://github.com/RickWong/react-inline-css) | 1.1.1 | | x | x | | |
| [react-inline](https://github.com/martinandert/react-inline) | 0.6.1 | x | x | x | x | x |
| [react-jss](https://github.com/jsstyles/react-jss) | 1.0.0 | x | x | x | x | |
| [react-statics-styles](https://github.com/elierotenberg/react-statics-styles) | 2.0.1 | | x | | x | x |
| [react-styl](https://github.com/nick/react-styl) | 0.0.1 | | x | x | | |
| [react-style](https://github.com/js-next/react-style) | 0.5.5 | | | x | x | x |
| [smart-css](https://github.com/hackhat/smart-css) | 1.1.0 | | x | x | x | |
| [stilr](https://github.com/chriskjaer/stilr) | 0.2.2 | | x | x | x | x |

## Contributing
If your package is not listed here, feel free to add it.
