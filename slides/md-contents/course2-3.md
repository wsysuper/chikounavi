# IT 基礎 2-3

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2023-12-24

---page---

## ウォーミングアップ 1

- Guess Number ゲーム（0-99）は、最悪の場合を考慮した最善の戦略で、何回の ゲス は必要？

---sub-page---

- 二分法の考え方

---page---

## ウォーミングアップ 2

- 変数 `a`(整数型) と変数 `b`(整数型) の値を交換したい

---sub-page---

- use temp

```js
let a = 1;
let b = 2;
const temp = a;
a = b;
b = temp;
console.log(a, b);
```

---sub-page---

- use +/-

```js
let a = 1;
let b = 2;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);
```

```js
let a = 1;
let b = 2;
a += b;
b = a - b;
a -= b;
console.log(a, b);
```

---sub-page---

- use XOR

```js
let a = 1;
let b = 2;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b);
```

```js
let a = 1;
let b = 2;
a ^= b;
b ^= a;
a ^= b;
console.log(a, b);
```

---page---

## 今週のコンテンツ

<div style="opacity: 0.4; text-align: left">

### 2-2、Javascript プログラミング（土曜）

- Javascript プログラミング
- 開発環境とツール
- Docker

</div>

### 2-3、フロントエンド開発基礎（日曜）

- HTML 概要
- CSS 概要
- JavaScript と HTML の結合

---page---

## ハンズオン

- see [here](https://github.com/wsysuper/chikounavi/blob/main/shared-materials/hello-world-examples/html/index.html)

```sh
cd shared-materials/hello-world-examples/html
npx http-server
```

ブラウザで http://localhost:8080/ にアクセスしてみる

---page---

## HTML 概要

- [HTML テキストの基礎](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [ハイパーリンクの作成](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [文書とウェブサイトの構造](https://developer.mozilla.org/ja/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)

---page---

## CSS 概要

- [CSS の構文](https://developer.mozilla.org/ja/docs/Learn/CSS/First_steps/What_is_CSS#css_%E3%81%AE%E6%A7%8B%E6%96%87)
- [HTML に CSS を加える](https://developer.mozilla.org/ja/docs/Learn/CSS/First_steps/Getting_started)
- [CSS セレクター](https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/Selectors)
- [ボックスモデル](https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/The_box_model)
- [背景と枠線](https://developer.mozilla.org/ja/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)

---page---

## JavaScript と HTML の結合

- [JavaScript 参考ページ](https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

---page---

[豆知識へ](trivia.html#/19)

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

---sub-page---

好きな HTML ページ（自己紹介など）を 1 枚を作ってみましょう

---page---

<section style="text-align: left;">
  <h1>質問応答</h1>
  <br/>
  <br/>
  <h3 style="text-align: right;">つづく</h3>
</section>
