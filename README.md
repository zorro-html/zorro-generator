# generator-zorro

A yeoman generator which help you create [Zorro](https://github.com/zorro-html/zorro) component easily.

## Installation

- `npm install -g yo`
- `npm install -g generator-zorro`

## Usage

- `mkdir z-foo`
- `yo zorro` and confirm your component name (`z-foo`)
- That's it!

## Zorro Component Dev

### init

- `npm install -g bower`
- `npm install`
- `bower install`

### Dev

- modify `package.json` just like author, lisence ...
- write bower deps on other components (if has)
- write `z-foo.html` (both doc comment, sample comment and code)
- write test case in `test` folder
- run `gulp` to lint and build `README.md` automatically

### Depoly

- generate semver tag
- push into your own repo
- create an [issue](https://github.com/zorro-html/zorro/issues) here to tell us
