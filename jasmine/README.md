# [esnext-coverage] + [jasmine]

## Installation

Install esnext-coverage and the formatters you want to use:

```sh
npm install --save-dev esnext-coverage esnext-coverage-format-html
```

## Configuration

Create .esnextcoveragerc in the root of your project:

```json
{
  "only": "src/*.js",
  "reporters": [
    {"outFile": "reports/coverage/coverage.json"},
    {"formatter": "html", "outFile": "reports/coverage/coverage.html"}
  ]
}
```

Add esnext-coverage to the list of Jasmine helpers (remove babel-register if it is present):

```json
{
  "helpers": [
    "../node_modules/esnext-coverage/lib/esnext-coverage.js"
  ]
}
```

## Usage

Run jasmine as usual.

## License

[MIT License](http://opensource.org/licenses/MIT)


[esnext-coverage]: https://github.com/esnext-coverage/esnext-coverage
[jasmine]: https://github.com/jasmine/jasmine
