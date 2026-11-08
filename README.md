# tsrs-example

A small Cloudflare Worker that is typechecked and compiled with
[`@tsrs/wasm`](https://www.npmjs.com/package/@tsrs/wasm), the Rust port of the
TypeScript 7 compiler built for WebAssembly.

```sh
npm ci
npm run typecheck   # tsrs-wasm --noEmit
npm run build       # tsrs-wasm, writing dist/
```
