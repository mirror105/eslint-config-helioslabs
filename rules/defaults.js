module.exports = {
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "es6": true
  },
  "plugins": [
    "react",
    "cah"
  ],
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": false,
    "jsx": true
  },
  "rules": {

    // possible errors
    "comma-dangle": [ 2, "always-multiline" ],
    "no-unused-expressions": [ 1 ],
    "no-console": [ 1 ],

    // best practices
    "default-case": [ 2 ],
    "guard-for-in": [ 2 ],
    "no-else-return": [ 2 ],
    "no-eq-null": [ 2 ],
    "no-fallthrough": [ 2 ],
    "no-floating-decimal": [ 2 ],
    "no-self-compare": [ 2 ],
    "no-throw-literal": [ 2 ],
    "radix": [ 1 ],
    "wrap-iife": [ 2 ],

    // strict mode
    "strict": [ 2 ],

    // variables
    "no-catch-shadow": [ 2 ],
    "no-delete-var": [ 2 ],
    "no-label-var": [ 2 ],
    "no-shadow": [ 2 ],
    "no-shadow-restricted-names": [ 2 ],
    "no-undef": [ 2 ],
    "no-undef-init": [ 2 ],
    "no-unused-vars": [ 2, {"args": "none"} ],
    "no-use-before-define": [ 2, "nofunc" ],

    // node environment
    "no-mixed-requires": [ 2 ],
    "no-new-require": [ 2 ],
    "no-path-concat": [ 2 ],
    "no-restricted-modules": [ 2 ],

    // style
    "indent": [ 2, 2, { "SwitchCase" : 1 } ],
    "brace-style": [ 2, "1tbs" ],
    "camelcase": [ 2, { "properties" : "never" } ],
    "comma-spacing": [ 2, { "before": false, "after": true } ],
    "eol-last": [ 2 ],
    "key-spacing": [ 2, { "beforeColon": true, "afterColon": true } ],
    "max-nested-callbacks": [ 1, 3 ],
    "new-cap": [ 1, { "capIsNew" : false } ],
    "no-lonely-if": [ 2 ],
    "no-multiple-empty-lines": [ 2 ],
    "no-nested-ternary": [ 2 ],
    "quote-props": [ 2, "consistent-as-needed" ],
    "quotes": [ 2, "single", "avoid-escape" ],
    "semi": [ 2, "always" ],
    "space-after-keywords": [ 2, "always" ],
    "space-before-blocks": [ 2, "always" ],
    "space-before-function-paren": [ 2, "never" ],
    "space-infix-ops": [ 2 ],
    "space-return-throw-case": [ 2 ],
    "spaced-comment": [ 2 ],

    // es6
    "no-var": [ 2 ],

    // legacy
    "max-depth": [ 2, 2 ],
    "max-len": [ 2, 100 ],
    "max-params": [ 2, 4 ],
    "max-statements": [ 1, 15 ],
    "no-bitwise": [ 2 ],

    // eslint-plugin-react
    "react/display-name": [2, { "acceptTranspilerName": true }],
    "react/jsx-no-undef": [ 2 ],
    "react/jsx-uses-react": [ 2 ],
    "react/jsx-uses-vars": [ 2 ],
    "react/no-did-mount-set-state": [ 2 ],
    "react/no-did-update-set-state": [ 2 ],
    "react/no-multi-comp": [ 2 ],
    "react/no-unknown-property": [ 2 ],
    "react/prop-types": [ 1, { "ignore" : [ "children" ]} ],
    "react/react-in-jsx-scope": [ 2 ],
    "react/self-closing-comp": 2,
    "react/wrap-multilines": [ 2 ],
    "react/sort-comp": [ 2, {
      "order": [
        "displayName",
        "statics",
        "contexts",
        "mixins",
        "props",
        "constructor",
        "state",
        "lifecycle",
        "listeners",
        "everything-else",
        "renderers"
      ],
      "groups": {
         "contexts": [
           "contextTypes",
           "childContextTypes",
           "getChildContext",
         ],
         "lifecycle": [
           "componentWillMount",
           "componentDidMount",
           "componentWillReceiveProps",
           "shouldComponentUpdate",
           "componentWillUpdate",
           "componentDidUpdate",
           "componentWillUnmount",
         ],
         "listeners": [
           "/^on.+$/",
         ],
         "props": [
           "propTypes",
           "defaultProps",
           "getDefaultProps",
         ],
         "renderers": [
           "/^render.+$/",
           "render",
         ],
         "state": [
           "state",
           "getInitialState",
         ]
       }
     }],

    // eslint-plugin-cah
    "cah/no-const-reassign": [ 2 ],
    "cah/no-undef-promise": [ 2 ],
  }
}
