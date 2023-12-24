# IT 基礎 2-2

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2023-12-23

---page---

## ウォーミングアップ

- `11111` は素数ですか、合成数ですか？

---sub-page---

答えは、合成数です。

`41 * 271 = 11111`

---sub-page---

### プログラミングで計算する

```js
function isPrime(x) {
  if (x <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false
    }
  }
  return true
}
// isPrime(1) => false
// isPrime(2) => true
// isPrime(3) => true
// isPrime(4) => false
```

---page---

## 今週のコンテンツ

### 2-2、Javascript プログラミング（土曜）

- Javascript プログラミング
- 開発環境とツール
- Docker

<div style="opacity: 0.4; text-align: left">

### 2-3、フロントエンド開発基礎（日曜）

- HTML 概要
- Javascript 概要
- CSS 概要

</div>

---page---

## Javascript プログラミング

[See code](https://github.com/wsysuper/chikounavi/blob/main/shared-materials/hello-world-examples/javascript/guess.js)

```js []
// use library to get user input
const prompt = require('prompt-sync')({ sigint: true })

// output num1 is lower or higher than num2
// returns if num1 and num2 are equal
function compare(num1, num2) {
  let res = false
  if (num1 < num2) {
    console.log(`${num1} is lower`)
  } else if (num1 > num2) {
    console.log(`${num1} is higher`)
  } else {
    res = true
  }
  return res
}

function main() {
  const answer = Math.floor(Math.random() * 100)
  const history = []
  let guessed = false
  let score = 10
  console.log('Your inital score is:', score, '\n')

  do {
    const input = prompt('Guess a number (0-99): ')
    const inputNum = Number(input)
    history.push(inputNum)
    guessed = compare(inputNum, answer)
    console.log(`guessed history: ${history}`)
    if (!guessed) {
      score -= 1
    }
    console.log('Your score:', score, '\n')
    if (score === 0) {
      break
    }
  } while (!guessed)

  if (guessed) {
    console.log(`You win! Answer:${answer} Score:${score}`)
  } else {
    console.log(`You lose! Answer:${answer} Score:${score}`)
  }
}

main()
```

---page---

### [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```js
const age = 20
const name = 'David'
const message = `Hello ${name}, your age is ${age}.`
console.log(message) // => Hello David, your age is 20.
```

---sub-page---

### 配列の操作

- Object を新規する
  - `names = []`
  - `names = Array()`
- 要素を追加する
  - `names.push("Bob")`
  - `names.push("Alice","Bob","Eve")`
  - `names[4] = "Charle"`
- 要素をアクセスする
  - `firstName = names[0]`
  - `secondName = names[1]`
- [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- [Array.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

---sub-page---

### オブジェクトの操作

- Object を新規する
  - `a = {}`
  - `a = Object()`
- 属性を追加する
  - `a.name = "Bob"`
  - `a["age"] = 20`
- 属性をアクセスする
  - `b = a.name`
  - `b = a["age"]`
- [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- length: `Object.keys(a).length`

---sub-page---

### ループ

- [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
- [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

---sub-page---

### 関数

- [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Arrow function `=>`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```js
const plusOne = (x) => x + 1
console.log(plusOne(100)) // => 101
```

```js
const minusOneIfOdd = (x) => {
  if (x % 2 !== 0) {
    return x - 1
  }
  return x
}
```

- [Recursive function](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

```js
f(x) = 1;           if x == 0
f(x) = f(x-1) * x;  if x > 0
```

```js
function factorial(x) {
  if (x === 0) {
    return 1
  }
  return factorial(x - 1) * x
}
```

---sub-page---

### インポートとエクスポート

- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

---page---

## 開発環境とツール

- Visual Studio Code おすすめのプラグイン
  - フォーマッター：[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - ファイル比較：[Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff)
- GUI git 管理ツール
  - [Source Tree](https://www.sourcetreeapp.com/)

---page---

[豆知識へ](trivia.html#/17)

---page---

## 宿題(来週金曜まで)

プログラミング練習(JavaScript)

1. [素因数分解](https://ja.wikipedia.org/wiki/%E7%B4%A0%E5%9B%A0%E6%95%B0%E5%88%86%E8%A7%A3)
   - input: `120`
   - output: `[2, 2, 2, 3, 5]`
   - input: `11111`
   - output: `[41, 271]`
2. n の[階乗](https://ja.wikipedia.org/wiki/%E9%9A%8E%E4%B9%97)を計算する: n!
   - input: `0`
   - output: `1`
   - input: `5`
   - output: `120`
3. 第 n 項までの[フィボナッチ数](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%9C%E3%83%8A%E3%83%83%E3%83%81%E6%95%B0)を出力する(第 0 項から始まる)
   - input: `0`
   - output: `[0]`
   - input: `5`
   - output: `[0,1,1,2,3,5]`

---page---

<section style="text-align: left;">
  <h1>質問応答</h1>
  <br/>
  <br/>
  <h3 style="text-align: right;">つづく</h3>
</section>
