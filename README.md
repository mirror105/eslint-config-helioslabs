# eslint-config-helioslabs

ESLint rules used by Helios Labs.

### Purpose

These rules are designed to support development of modern Javascript
using Babel. No effort is made to provide help with ES5-style code.

### Peer Dependencies

See `peerDependencies` in `package.json` for an exhaustive list. You must
add each of these (at a verison matching the version constraint) to your own
`package.json`.

 - `babel-eslint` is currently our preferred parser due to its support
   for ES7 features like decorators.
 - `eslint-plugin-cah` contains a few custom rules that we find useful
 - `eslint-plugin-react` is essential for linting React components
