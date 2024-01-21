# IT 基礎 2-1

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2023-12-17

---page---

## ウォーミングアップ

- ファイルの完全性（欠損や改ざんがないこと）のチェック問題

  - 前提条件
    - ネットワークが不安定で、エラー率が高い
    - ネットワーク転送のコストが高いので、転送のデータ量をなるべく最小化する
    - サーバ A から巨大なファイル（数ギガ）をサーバ B に転送したとする
  - 質問
    - B サーバにある転送されたファイルは、サーバ A にあるオリジナルのファイルと完全一致するか、どうチェックする？
      ![file-transport.png](/images/course2-1/file-transport.png)

---sub-page---

#### ダイジェスト(Digest) / 指紋 (Fingerprint) / 拇印 (Thumbprint)

[ハッシュ(Hash)関数](https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E9%96%A2%E6%95%B0)を使って確率的に完全性を保証する

→ 確率は無限に 100%に近づけることが可能

---sub-page---

- よく使われるハッシュ関数
  - MD5 (128 bits)
  - SHA-1 (160 bits)
  - SHA-256 (256 bits)

```shell
$ cat result.txt
hello shell
goodbye shell
goodbye shell
$ cat result.txt | md5
c5b68aaa5e11fec99a88e7ce00d1a84f
$ cat result.txt | shasum
48fbdfe1fcef42ed4db7228c9fdf699e4f97ace0  -
$ cat result.txt | shasum -a 256
887c4cdd56bba9ee6fbf38548db0be6655add9a9259ecca7277b05ecf804d9a0  -
```

---page---

## 今週のコンテンツ

<div style="opacity: 0.4; text-align: left">

### 1-3、Web アプリケーション基礎知識（土曜）

- ネットワーク基礎
- 各種のサービスとプロトコル
- リクエスト/レスポンス
- HTTP プロトコルの概要
- 認証/認可
</div>

### 2-1、開発基礎（日曜）

- プログラミング入門

---page---

[豆知識へ](trivia.html#/11/2)

---page---

## プログラミング入門

- コメント
- 予約語
- データ型とリテラル
- 変数と宣言
- 演算子
- 文と式
- 条件分岐
- ループと反復処理
- 配列とオブジェクト
- 関数とスコープ

---page---

### コメント (Comment)

- JavaScript comment

```js
// print a hello world message
console.log("Hello world!"); // hello world

/*
This is a multi-line
comment example
*/
console.log("Goodbye!");
```

- Java comment

```java
// This is a comment
System.out.println("Hello world!"); // This is a comment
/* The code below will print the words Hello World
to the screen, and it is amazing */
System.out.println("Goodbye!");
```

- Python comment

```python
# comment
print("Hello world!") # another comment
```

---page---

### 予約語 (Reserved word)

- [予約語 wiki](https://ja.wikipedia.org/wiki/%E4%BA%88%E7%B4%84%E8%AA%9E)
- [JavaScript の予約語](https://www.javadrive.jp/javascript/ini/index5.html)
- [Java の予約語](https://eng-entrance.com/java-reserved-word)
- [Python の予約語](https://aiacademy.jp/media/?p=2300)

---page---

### データ型(data type)とリテラル(Literal)

- [データ型 wiki](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E5%9E%8B)
- [リテラル wiki](https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%86%E3%83%A9%E3%83%AB)
- [Javascript のデータ型とリテラル](https://jsprimer.net/basic/data-type/)
- [Java のデータ型](https://java.keicode.com/lang/data-types.php)
- [Java のリテラル](https://java.keicode.com/lang/literals.php)

---page---

※以下の概念は、この [Javascript の書籍](https://jsprimer.net/)を参考資料として解説

- 変数(Variable)と宣言 (Declaration)
- 演算子(Operator)
- 文(Statement)と式(Expression)
- 条件分岐(Condition)
- ループと反復処理(Loop)
- 配列(Array)とオブジェクト(Object)
- 関数(Function)とスコープ(Scope)

---page---

## 宿題

1. ワーク用ディレクトリを作って、その配下に cd する
1. 下記コマンドでユーザ入力を受け付けるためのライブラリをインストールする
   - `npm install prompt-sync`
1. 同ディレクトリ配下で、下記 Javascript の例を`guess.js`として保存し、実行してみる
   - `node guess.js`
   - ```js
     const prompt = require("prompt-sync")();
     const input = prompt("Guess a number (0-9):");
     const inputNum = Number(input);
     if (inputNum === 6) {
       console.log("You guessed a very lucky number!");
     } else {
       console.log("You guessed", inputNum);
     }
     ```
1. それを編集して、シンプルな Guess ゲーム([参考](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html))を実現しよう
   - 多分利用される文法
     - 条件分岐、演算子、文と式、ループ(continue or break)

（自分なりのルールでも OK！）

---sub-page---

- 動画閲覧 (https://cn.chikounavi.co.jp/links/)
  - フロントエンド開発
    - HTML、CSS、JS の役割 1
    - HTML、CSS、JS の役割 2
    - JavaScript の歴史とライブラリを解説！フレームワークとの違いは？

---page---

<section style="text-align: left;">
  <h1>質問応答</h1>
  <br/>
  <br/>
  <h3 style="text-align: right;">つづく</h3>
</section>
