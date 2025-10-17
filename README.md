<h1 align="center">TypeScript</h1>
<p align="center">Learning the basics of TypeScript and how I could use it in my projects for advanced type checking in JavaScript.</p>

---

<p align="center">
  <img src="https://img.shields.io/github/license/kscardinal/TypeScript?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub License">
  <img src="https://img.shields.io/github/v/release/kscardinal/TypeScript?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub Release">
  <img src="https://img.shields.io/github/commit-activity/t/kscardinal/TypeScript?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub Commit Activity">
  <img src="https://img.shields.io/github/last-commit/kscardinal/TypeScript?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub Last Commit">
  <img src="https://img.shields.io/github/contributors/kscardinal/TypeScript?style=flat&logo=git&logoColor=white&color=0080ff" alt="GitHub Contributors">
</p>
<div align="center">
  <img src="https://img.shields.io/badge/node.js-5FA04E.svg?style=flat&logo=node.js&logoColor=white" alt="Node.js Badge">
  <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript Badge">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=white" alt="JavaScript Badge">
  <img src="https://img.shields.io/badge/json-222222.svg?style=flat&logo=json&logoColor=white" alt="JSON Badge">
  <img src="https://img.shields.io/badge/Markdown-222222.svg?style=flat&logo=Markdown&logoColor=white" alt="Markdown Badge">
</div>

---


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
