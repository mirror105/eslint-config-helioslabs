module.exports = {
  "parser": "babel-eslint",
  "plugins": [ "react", "cah" ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends" : [
    "./rules/general.js",
    "./rules/es6.js",
    "./rules/react.js"
  ]
}
