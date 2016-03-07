module.exports = {
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
    // es6
    // "arrow-parens": [ 2 ], // @todo this gets confused when doing `async (param) => {}`
    "arrow-spacing": [ 2 ],
    "constructor-super": [ 2 ],
    "no-class-assign": [ 2 ],
    "no-confusing-arrow": [ 2 ],
    "no-const-assign": [ 2 ],
    "no-dupe-class-members": [ 2 ],
    "no-this-before-super": [ 2 ],
    "no-var": [ 2 ],
    "no-new-symbol": [ 2 ],

    // eslint-plugin-cah
    "cah/no-undef-promise": [ 2 ]
  }
}
