const TAB_WIDTH = 2;

module.exports = {
  "rules": {
    // eslint-plugin-react
    "react/display-name": [ 2, { "acceptTranspilerName": true } ],
    "react/jsx-closing-bracket-location": [ 1, "tag-aligned" ],
    "react/jsx-curly-spacing": [ 2, "never", { "allowMultiline": true } ],
    "react/jsx-indent-props": [ 2, TAB_WIDTH ],
    "react/jsx-no-duplicate-props": [ 2 ],
    "react/jsx-no-undef": [ 2 ],
    "react/jsx-uses-react": [ 2 ],
    "react/jsx-uses-vars": [ 2 ],
    "react/no-danger": [ 1 ],
    "react/no-did-mount-set-state": [ 2 ],
    "react/no-did-update-set-state": [ 2 ],
    "react/no-direct-mutation-state": [ 2 ],
    "react/no-multi-comp": [ 2 ],
    "react/no-unknown-property": [ 2 ],
    "react/prop-types": [ 1, { "ignore" : [ "children" ]} ],
    "react/react-in-jsx-scope": [ 2 ],
    "react/self-closing-comp": [ 2 ],
    "react/wrap-multilines": [ 2 ],
    "react/sort-comp": [ 1, {
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
    } ]
  }
}
