# IT 基礎 1-2

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2023-12-10

---page---

## ウォーミングアップ

- 考える質問

国王は、自身が重い病気で命が長くない状況にあります。

彼は大事な核兵器の起動パスワード（4 桁の数字、例：3473）を、2 人の後継者に伝えたいと考えています。

しかし、国王は彼らが不和になることを恐れており、これらの 2 人の後継者は核兵器を個別に起動することはできず、両方の後継者の同意が必要です。

国王はどのようにしてこれを実現することができるでしょうか？

---page---

## 今週のコンテンツ

<div style="opacity: 0.4; text-align: left">

### 1-1、Web アプリケーション基礎知識（土曜）

- IT 基礎コースの概要
- IT 業界概況

</div>

### 1-2、Web アプリケーション基礎知識（日曜）

- IT 用語大辞典
- プログラミング言語

---page---

## IT 用語大辞典

- ハードウェアとソフトウェア
- オペレーティングシステム
- サーバ
- アプリケーション
- ファイル

---page---

### ハードウェアとソフトウェア

以下はどちらはハードウエア、どちらはソフトウェア？

- マザーボード
- CPU
- チップ
- メモリー
- ディスク
- macOS
- Windows
- Linux
- Office Excel

---sub-page---

- ハードウエア
  - 外部ディバイス：マウス、キーボード
  - CPU、メモリー、ネットカード
- ソフトウェア
  - オペレーティングシステム(OS)：Windows、macOS、Linux
  - アプリケーション：ブラウザ、ゲーム、エディター、統合開発環境(IDE)、オフェンスソフトウェア
  - ミドルウェア：ウェブサーバ、データベース、仮想コンテナ(Docker)
- 仮想マシン
  - VirtualBox
  - VMware

---page---

### オペレーティングシステム(Operating System)

<img src="/images/course1-2/Operating_system_placement-ja.svg" alt="os_placement" width="22%"/>
<img src="/images/course1-2/Kernel_Layout.svg.png" alt="os_placement" width="42%"/>

from [wikipedia](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%9A%E3%83%AC%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)

OS 例：Windows, macOS, Chrome OS, Linux

---sub-page---

- OS の役割
  - ハードウェアの抽象化
  - リソースの管理
    - 進行管理（Processing management）
    - メモリ管理（Memory management）
    - ファイルシステム（File system）
    - ネットワーキング（Networking）
    - セキュリティ（Security）
    - ユーザーインターフェース（User interface）
    - デバイスドライバー（Device drivers）
  - コンピュータの利用効率の向上、使いやすい操作ツールなど

---page---

### サーバ

<img src="/images/course1-2/servers.png" alt="servers" width="42%"/>

- 物理サーバ（ハードウエア）と仮想サーバ(ソフトウェア)

---sub-page---

参考資料：https://www.rworks.jp/system/system-column/sys-entry/16259/

- 用途
  - Web サーバー
  - メールサーバー
  - ファイルサーバー
  - データベースサーバー
  - DNS サーバー
  - アプリケーションサーバー
  - FTP サーバー

---page---

### アプリケーション

- ローカルアプリ、ネイティブアプリ(Local App, Native App)
- ウェブアプリ(Web App)、ウェブサービス(Web Service)
  - クライアント・サーバ構造(client/server, C/S)
  - ブラウザ・サーバ(Browser/Server, B/S)
- スタンドアローン・分散アプリケーション(Stand-alone/Distrubuted)
- 中央型、分散型アプリケーション(Centralized/Decentralized)
  - ブロックチェーン(Blockchain)

---page---

### ファイル

- テキスト(Text)とバイナリ(Binary)
- ASCII
  - [ASCII コード表](https://www.k-cube.co.jp/wakaba/server/ascii_code.html)

<img src="/images/course1-2/binary-text.png" alt="Binary File vs. Text File" width="62%"/>

---page---

## プログラミング言語

- レベルで分類
  - ハイレベル(High-level)言語
  - ローレベル(Low-level)言語
    - アセンブリ(Assembly)言語
    - 機械語 (Machine Code)

---sub-page---

- 実行方式で分類
  - コンパイル型(Compiled)言語
    - 実行する前にコンパイラ(Compiler)での変換が必要
      - Java
      - C/C++
      - Go
  - インタプリタ型(Interpreted)言語
    - 変換が不要で、インタープリター(Interpreter)で実行
      - Javascript
      - Python
      - Ruby
      - Shell (Bash)

---sub-page---

- 用途で分類
  - ウェブ言語(フロントエンド)
    - HTML/JavaScript/CSS
    - TypeScript
  - サーバ言語(バックエンド)
    - GO
    - Java
  - データベース言語(クエリ)
    - SQL
  - 運用系
    - Python
    - Shell (Bash)
  - データを表す系
    - HTML/XML
    - JSON/YAML/TOML
    - Markdown

---page---

---page---

## 宿題

- Install Docker Desktop (https://www.docker.com/products/docker-desktop/)

```
$ docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (arm64v8)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.
```

---sub-page---

- Install node.js

```
$ brew install node
...
$ node --version
v21.4.0
$ npm --version
10.2.4
```

---sub-page---

- 動画閲覧 (https://cn.chikounavi.co.jp/links/)
  - WEB 応用基礎知識
    - WEB サービスが動く仕組み
    - IP アドレスとは
    - ドメインとは
    - プロトコルとは
    - サーバーとは
    - WEB サービスに必要な言語
    - まとめ

---page---

<section style="text-align: left;">
    <h1>質問応答</h1>
    <br/>
    <br/>
    <h3 style="text-align: right;">つづく</h3>
</section>
