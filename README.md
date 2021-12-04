# Node / Typescript / Jest MWE

A small boilerplate library for mocking new typescript functions.

## How it works

`src/index.ts` => Write all your code here.
`src/index.test.ts` => Write all your tests here. To run, use `npm run test`.
`src/runner.ts` => A helper function required for `npm run dev`.
* When `npm run dev` is called, the directory is transpiled and then the runner is called.
* The runner script will pass cli args to the function. 
    * For example: `npm run dev -- word=testing` will pass the var `word` with the value `testing` into `dist/index.js`
