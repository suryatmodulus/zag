# @zag-js/dom-query

## 0.1.2

### Patch Changes

- [`6957678d`](https://github.com/chakra-ui/zag/commit/6957678d2f00f4d219e791dffed91446e64211e7) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Switch to `es2020` to support `import.meta.env`

## 0.1.1

### Patch Changes

- [#462](https://github.com/chakra-ui/zag/pull/462)
  [`f8c47a2b`](https://github.com/chakra-ui/zag/commit/f8c47a2b4442bfadc4d98315a8c1ac4aa4020822) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Update packages to use explicit `exports` field in `package.json`

## 0.1.0

### Minor Changes

- [#375](https://github.com/chakra-ui/zag/pull/375)
  [`9cb4e9de`](https://github.com/chakra-ui/zag/commit/9cb4e9de28a3c6666860bc068c86be67a3b1a2ca) Thanks
  [@darrylblake](https://github.com/darrylblake)! - Ensures code is transpiled with `es2019` target for environments
  that don't support `es2020` and up, i.e. Cypress.

### Patch Changes

- [#356](https://github.com/chakra-ui/zag/pull/356)
  [`454070e8`](https://github.com/chakra-ui/zag/commit/454070e869619cef905818dfc5248ce60dff94ef) Thanks
  [@anubra266](https://github.com/anubra266)! - - Move `defineDomHelpers` to new package `@zag-js/dom-query`
  - Add `createEmitter` and `createListener` helpers for custom event handling
