# IT 基礎 1-3

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2023-12-16

---page---

## ウォーミングアップ

[ハノイの塔 (Tower of Hanoi)](https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%8E%E3%82%A4%E3%81%AE%E5%A1%94)のパズル、ご存知ですか？

→ [ゲームリンク](https://www.mathsisfun.com/games/towerofhanoi.html)

- 考える質問
  - n 枚の円盤すべてを移動させるには最低何回の手数がかかりますか？

---page---

## 今週のコンテンツ

### 1-3、Web アプリケーション基礎知識（土曜）

- ネットワーク基礎
- 各種のサービスとプロトコル
- リクエスト/レスポンス
- HTTP プロトコルの概要
- 認証/認可

<div style="opacity: 0.4; text-align: left">

### 2-1、開発基礎（日曜）

- プログラミング入門

</div>

---page---

## ネットワーク基礎

- ネットワークのレイヤー構造
  - https://www.hitachi-ite.co.jp/column/20.html

<img src="/images/course1-3/network-layers.png" alt="network-layers" width="80%"/>

---sub-page---

- 各レイヤーがそれぞれのプロトコルに沿って通信する

<img src="/images/course1-3/network-layer-protocol.png" alt="network-layer-protocol" width="80%"/>

---sub-page---

### 各種のサービスとプロトコル

- アプリケーション層プロトコル (Protocol)
  - HTTP/HTTPS: ウェブアプリ間通信
    - （詳細は後述）
  - SMTP (Simple Mail Transfer Protocol):
    - メール通信に関わる [参考](https://ja.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol)
  - DNS (Domain Name System)
    - 名前解決 [参考](https://ja.wikipedia.org/wiki/Domain_Name_System)
  - DHCP (Dynamic Host Configuration Protocol)
    - ネットワーク設定情報を自動的に割り当てる [参考](https://ja.wikipedia.org/wiki/Domain_Name_System)

---page---

### リクエスト/レスポンス

【再掲】

- リクエスト(Request)
  - ヘッダー(Header): 本文内容以外の情報
    - メソッド(Method): GET/POST/PUT/DELETE ...
    - その他情報
  - ボディー(Body): 本文内容
- レスポンス(Response)
  - ヘッダー(Header): 本文内容以外の情報
    - その他情報
  - ボディー(Body): 本文内容

<img src="/images/trivia/req-res.png" alt="req-res" width="42%"/>

---page---

## HTTP プロトコルの概要

- 参考資料

  - https://developer.mozilla.org/ja/docs/Web/HTTP/Overview

- Methods (`GET`, `POST`, `PUT`, `DELETE`)
- ステータスコード (Status Codes)
  - 1XX (情報系)
    - （実際にはあまり使われない）
  - 2XX（成功）
    - リクエストが正常に受け取られ、理解され、承認された
  - 3XX（リダイレクト）
    - リクエストを完了するためには、さらなる対応が必要
  - 4XX（クライアントエラー）
    - リクエストに誤った構文が含まれるか、実行できない
  - 5XX（サーバーエラー）
    - サーバーが正当なリクエストを実行できない

---page---

## 認証/認可

- 認証(Authentication)
  - 利用者本人の確認を行うこと
- 認可(Authorization)
  - 利用者に正しい権限を与えること

---page---

[豆知識へ](trivia.html#/10)

---page---

## 宿題

- shared-materials にある各言語の "Hello World" を実行してみる

```shell
$ cd shared-materials/hello-world-examples/java
$ java Hello.java
Hello, Java!
$ cd ../javascript
$ node hello.js
Hello Javascript!
$ cd ../python
$ python3 hello.py
Hello, Python!
$ cd ../shell
$ ./hello.sh
Hello, Shell!
```

---page---

<section style="text-align: left;">
    <h1>質問応答</h1>
    <br/>
    <br/>
    <h3 style="text-align: right;">つづく</h3>
</section>
