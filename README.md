# TypeScript

## Install Directions

1. Install TypeScript with `npm`
``` bash
npm install typescript --save-dev
```

2. Write a `.ts` program (hello.ts)
``` ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("World");
console.log(message);
```

3. Convert / Transpose in`.js`
``` bash
npx tsc hello.ts
```

4. Run the `.js` file
``` bash
node hello.js
```


## Configue [`tsconfig.json`](tsconfig.json)

- Add these to the `compilerOptions` section of the [`tsconfig.json`](tsconfig.json) file:

1. Add error for `Any` type
``` json
"noImplicitAny": true
```
- This adds an compile-time error that a variable was typed with any which could cause problems later on

2. Added `strickNullChecks`
``` json
"strictNullChecks": true
```
- This addes checking for `null` and `undefined` types