const TAB_WIDTH = 2;

module.exports = {
  "rules": {
    // possible errors
    "comma-dangle": [ 2, "always-multiline" ],
    "no-cond-assign": [ 2 ],
    "no-console": [ 1 ],
    "no-constant-condition": [ 1 ],
    "no-control-regex": [ 2 ],
    "no-debugger": [ 2 ],
    "no-dupe-args": [ 2 ],
    "no-dupe-keys": [ 2 ],
    "no-duplicate-case": [ 2 ],
    "no-empty-character-class": [ 2 ],
    "no-empty": [ 1 ],
    "no-ex-assign": [ 2 ],
    "no-extra-semi": [ 1 ],
    "no-func-assign": [ 2 ],
    "no-invalid-regexp": [ 2 ],
    "no-irregular-whitespace": [ 2 ],
    "no-obj-calls": [ 2 ],
    "no-regex-spaces": [ 1 ],
    "no-sparse-arrays": [ 1 ],
    "no-unexpected-multiline": [ 2 ],
    "no-unreachable": [ 1 ],
    "use-isnan": [ 2 ],
    "valid-jsdoc": [ 1 ],
    "valid-typeof": [ 2 ],

    // best practices
    "array-callback-return": [ 1 ],
    "curly": [ 2 ],
    "dot-location": [ 2, "property" ],
    "dot-notation": [ 2, { "allowKeywords": true } ],
    "default-case": [ 2 ],
    "eqeqeq": [ 2 ],
    "guard-for-in": [ 2 ],
    "no-alert": [ 2 ],
    "no-caller": [ 2 ],
    "no-else-return": [ 2 ],
    "no-empty-pattern": [ 2 ],
    "no-eq-null": [ 2 ],
    "no-extend-native": [ 2 ],
    "no-extra-bind": [ 1 ],
    "no-fallthrough": [ 2 ],
    "no-floating-decimal": [ 2 ],
    "no-implicit-coercion": [ 2 ],
    "no-implicit-globals": [ 2 ],
    "no-implied-eval": [ 2 ],
    "no-invalid-this": [ 2 ],
    "no-labels": [ 1, { "allowLoop" : true, "allowSwitch": true } ],
    "no-lone-blocks": [ 1 ],
    "no-loop-func": [ 2 ],
    "no-multi-spaces": [ 2 ],
    "no-multi-str": [ 2 ],
    "no-native-reassign": [ 2 ],
    "no-new-func": [ 2 ],
    "no-new-wrappers": [ 2 ],
    "no-octal-escape": [ 2 ],
    "no-octal": [ 2 ],
    "no-param-reassign": [ 2 ], // in a perfect world, we would add { props : "true" }
    "no-proto": [ 2 ],
    "no-redeclare": [ 2, { "builtinGlobals": true } ],
    "no-return-assign": [ 2 ],
    "no-script-url": [ 1 ],
    "no-self-compare": [ 2 ],
    "no-sequences": [ 2 ],
    "no-throw-literal": [ 2 ],
    "no-unused-expressions": [ 1 ],
    "no-useless-call": [ 1 ],
    "no-useless-concat": [ 1 ],
    "no-void": [ 1 ],
    "no-with": [ 2 ],
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
    "no-undef-init": [ 2 ],
    "no-undef": [ 2 ],
    "no-unused-vars": [ 2, {"args": "none"} ],
    "no-use-before-define": [ 2, "nofunc" ],

    // node/commonjs environment
    "callback-return": [ 2, [ "callback", "cb", "next", "done" ] ],
    "handle-callback-err": [ 1 ],
    "no-mixed-requires": [ 2 ],
    "no-new-require": [ 2 ],
    "no-path-concat": [ 2 ],
    "no-process-exit": [ 1 ],
    "no-restricted-modules": [ 2 ],

    // style
    "brace-style": [ 2, "1tbs" ],
    "camelcase": [ 2, { "properties" : "never" } ],
    "comma-spacing": [ 2, { "before": false, "after": true } ],
    "eol-last": [ 2 ],
    "id-blacklist" : [ 2, "data" ], // <3 @jwdotjs
    "indent": [ 2, TAB_WIDTH, { "SwitchCase" : 1 } ],
    "key-spacing": [ 2, { "beforeColon": true, "afterColon": true } ],
    "max-nested-callbacks": [ 1, 3 ],
    "new-cap": [ 1, { "capIsNew" : false } ],
    "no-lonely-if": [ 2 ],
    "no-multiple-empty-lines": [ 2 ],
    "no-nested-ternary": [ 2 ],
    "quote-props": [ 2, "consistent-as-needed" ],
    "quotes": [ 2, "single", "avoid-escape" ],
    "semi": [ 2, "always" ],
    "space-before-blocks": [ 2, "always" ],
    "space-before-function-paren": [ 2, "never" ],
    "space-infix-ops": [ 2 ],
    "spaced-comment": [ 2 ],

    // legacy
    "max-depth": [ 1, 2 ],
    "max-params": [ 1, 4 ],
    "max-statements": [ 1, 15 ],
    "no-bitwise": [ 2 ],
  }
}
