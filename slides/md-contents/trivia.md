# IT 豆知識

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

(随時更新)

---page---

## Git について

- [Git の仕組み](https://tetoblog.org/2021/06/git-how/)
- 補足資料
  - [Git について (Github からの説明)](https://docs.github.com/ja/get-started/using-git/about-git)
  - [GitHub とは何？ Git との違いとあわせて解説！](https://it-kyujin.jp/article/detail/150/)

---sub-page---

![vcs](/images/trivia/vcs.png)

---page---

## シェルとは

![shells](/images/trivia/shells.png)

---sub-page---

- シェル（Shell）以外もたくさんの名称
  - コマンドライン（Commandline）
  - コマンドインタプリタ（Command interpreter）
  - コマンドプロンプト（Command prompt）
  - ターミナル（Teminal）
  - コンソール（Console）

---sub-page---

- ベーシックなコマンド
  - ファイルの実行
    - `./`
  - 作業ディレクトリーのパス名表示
    - `pwd`
  - 作業ディレクトリーのファイル一覧表示
    - `ls`
  - 他の作業ディレクトリーへ移動
    - `cd`
  - 空ディレクトリ作成
    - `mkdir`
  - 空ディレクトリ削除
    - `rmdir`
  - 空ファイル作成
    - `touch`
  - ファイルの削除（危ないコマンド！要注意）
    - `rm`

---page---

## Git 一人作業時よく利用するコマンド

- 初回リモートからリポジトリをローカルに取り込む
  - `git clone [https://github.com/xxx.git]`
- リモートの変更をローカルに取り込む
  - `git pull`
- コミット(commit)提出対象を追加する
  - `git add .`
- コミットする：チェックポイントを作成する
  - `git commit -m '[message]'`
- ローカルで新たなコミットをリモートへ反映する
  - `git push`

---page---

## Shell の Hello World

下記内容をファイル`hello.sh`として保存

```sh[]
#!/bin/sh

echo "Hello World"
```

ファイル`hello.sh`に実行可能な権限をつける

```sh
$ chmod +x hello.sh
```

ファイル`hello.sh`を実行する

```sh
$ ./hello.sh
```

---page---

## ウェブ(Web)について

### URL の構成

- 補足資料
  - [URL の構成要素](https://www.ibm.com/docs/ja/cics-ts/5.4?topic=concepts-components-url)
  - [ドメインとサブドメイン](https://blog.hubspot.jp/marketing/parts-url)
  - [fqdn](https://www.nic.ad.jp./ja/basics/terms/fqdn.html)

---sub-page---

### リクエストとレスポンス

- リクエスト(request)
  - ヘッダー(Header): 本文内容以外の情報
    - メソッド(Method): GET/POST/PUT/DELETE ...
    - その他情報
  - ボディー(Body): 本文内容
- レスポンス(response)
  - ヘッダー(Header): 本文内容以外の情報
    - その他情報
  - ボディー(Body): 本文内容

![req-res](/images/trivia/req-res.png)

---sub-page---

### API

アプリケーション・プログラミング・インターフェース（Application Programming Interface）

https://www.sbbit.jp/article/cont1/62752

---page---

## セマンティック バージョニング(SemVer)

https://semver.org/lang/ja/
互換性

---page---

## データ構造

- 操作 (Operation)
  - 二進数 (Binary Number)
  - ブーリアン操作 (Boolean Operation)
- 構造体 (Data Structure)
  - 配列 (Array)
  - 連結リスト (Linked List)
    - 双方向連結リスト (Doubly Linked List)
  - 木 (Tree)
    - 二分木 (Binary Tree)
    - 二分探索木 (Binary Search Tree)
  - キュー (Queue)
  - スタック (Stack)
  - ヒープ (Heap)
  - グラフ (Graph)

---page---

## 二進数、ブーリアン

### 進数変換

[10 進数/16 進数/2 進数の変換テーブル](http://www.rtpro.yamaha.co.jp/RT/docs/misc/number-table.html)

---sub-page---

### ブーリアン(Boolean)

[論理演算](https://ja.wikipedia.org/wiki/%E8%AB%96%E7%90%86%E6%BC%94%E7%AE%97)
[真理値表](https://ja.wikipedia.org/wiki/%E7%9C%9F%E7%90%86%E5%80%A4%E8%A1%A8)

---page---

### アルゴリズム

- 計算量 (Complexity)
  - 時間計算量 (Time Complexity)
  - 空間計算量 (Space Complexity)
- アルゴリズム (Algorithm)
  - ソート (Sort)
  - 分割統治 (Divide and Conquer)
  - 探索 (Search)
    - 二分探索 (Binary Search)
    - 幅優先探索 (Breadth First Search: BFS)
    - 深さ優先探索 (Depth First Search: DFS)

---page---

## データ記述言語

### JSON (JavaScript Object Notation、ジェイソン)

https://ja.wikipedia.org/wiki/JavaScript_Object_Notation

### YAML (YAML Ain't a Markup Language、ヤムル)

https://ja.wikipedia.org/wiki/YAML

- 変換ツール(例)
  - https://www.json2yaml.com/
  - https://www.json2yaml.com/convert-yaml-to-json

---page---

## 高級コマンド操作

- 他のコマンド
  - コマンドのファイル本体パスを表示する
    - `which`
  - ファイル中の文字列検索する
    - `grep`
  - 行数、文字数を数えるする
    - `wc`

---sub-page---

### コマンドパラメータとオプション

```shell
$ ls -alh hello.sh
-rwxr-xr-x  1 wsysuper  staff    45B Dec 10 21:59 hello.sh
$ wc -l hello.sh
       5 hello.sh
```

---sub-page---

### パスについて (`.`, `..`, `~`)

- 絶対パス：`/`と始まるパス

```shell
$ ls -alh /Users
total 0
drwxr-xr-x   5 root      admin   160B Dec  2 21:16 .
drwxr-xr-x  20 root      wheel   640B Nov 19 03:13 ..
-rw-r--r--   1 root      wheel     0B Nov 19 03:13 .localized
drwxrwxrwt   7 root      wheel   224B Nov 19 03:13 Shared
drwxr-x---+ 56 wsysuper  staff   1.8K Dec 16 12:30 wsysuper
```

- 相対パス：`/`以外で始まるパス

```shell
$ ls -alh ../hello
```

---sub-page---

### パイプ (`>`, `>>`, `|`)

```shell
$ echo 'hello shell' > result.txt
$ echo 'goodbye shell' >> result.txt
$ cat result.txt | grep goodbye
goodbye shell
$ cat result.txt | grep goodbye | wc
       1       2      14
```

---page---

## また２進数について

（シェルで、`node` で実行可能、`.exit`で退出）

- `x`(数値) を `n`進数に変換: `(x).toString(n)`
- AND: `&`
- OR: `|`

```js
> (1234).toString(2)
'10011010010'
> (4321).toString(2)
'1000011100001'
> 1234 & 4321
192
> (192).toString(2)
'11000000'
> (1234 & 4321).toString(2)
'11000000'
> 1234 | 4321
5363
> (1234 | 4321).toString(2)
'1010011110011'
```

- `n`進数`y`(文字列)を Int に変換: `parseInt(y, n)`

```js
> (192).toString(16)
'c0'
> parseInt('c0', 16)
192
```

---sub-page---

- XOR: `^`
- LEFT SHIFT: `<<`
- RIGHT SHIFT: `>>`

```js
> 1234 ^ 4321
5171
> (1234 ^ 4321).toString(2)
'1010000110011'
> 1234 ^ 4321 ^ 4321
1234
> 1234 ^ 4321 ^ 1234
4321
```

```js
> (1234).toString(2)
'10011010010'
> 1234 << 1
2468
> (1234 << 1).toString(2)
'100110100100'
> 1234 << 2
4936
> (1234 << 2).toString(2)
'1001101001000'
```

```js
> 1234 >> 1
617
> (1234 >> 1).toString(2)
'1001101001'
> 1234 >> 2
308
> (1234 >> 2).toString(2)
'100110100'
```

---page---

## プログラミングに利用する数学

- 整数
  - 素数(Prime Number)と合成数(Composite Number)
- 小数点数
  - 固定小数点数 (fixed-point number)
  - 浮動小数点数 (floating-point number) [参考](https://ja.wikipedia.org/wiki/%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0)
- 演算子 ([Javascript 例](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators))
  - 算術演算子(`+`, `-`, `*`, `/`, `**`)
  - 関係演算子(`<`, `>`, `<=`, `>=`)
  - 等値演算子(`==`, `!=`, `===`, `!==`)
- 優先順位 ([Javascript 例](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_precedence))
- 関数/写像 (Function/Mapping)
- ベクトル (Vector) [参考](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB)
- 行列 (Matrix) [参考](https://ja.wikipedia.org/wiki/%E8%A1%8C%E5%88%97)

---page---

## 正規表現（特定なパターンを表現する）

- 用途
  - 高度な検索及び置換
    - 表記統一 (例：¥5678 → 5678 円)
  - パターンのマッチングチェック
    - markdown のタイトル行かどうかの判断 (例：`^#+\s`)
- 正規表現学習参考資料例
  - [サルにもわかる正規表現入門](https://userweb.mnet.ne.jp/nakama/)
  - [Javascript ドキュメント](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_expressions)

---page---

## 秘密通信はどう実現できる

- Alice と Bob は遠くに離れているところに住んでいて、Alice さんは Bob さんにメッセージを伝えたいとしましょう。
- ただし、メッセージの内容を他の人に知られたくありません。

<img src="/images/trivia/alice-bob.png" alt="alice-bob" width="600"/>

---sub-page---

- 事前に秘密を共有すれば解決できそうだが、その秘密はどう共有するの？

---page---

## 配列とオブジェクト

- array/list
  - `[1, 2, 3, 4, 100, 200]`
  - `["1", "hello", "world"]`
- object/map/dictionary
  - `{"name": "David", "age": 23}`
- list of objects
  - ```
    [
      {"name": "David", "age": 23},
      {"name": "Bob", "age": 32},
      {"name": "Alice", "age": 5}
    ]
    ```
- object of lists and so on
  - ```
    {
      "name": "David", "age": 23,
      "hobby": ["ski", "skate", "driving", "golf"]
    }
    ```

---page---

## エンコーディング・ディコーディング

- ユニコード(Unicode) エンコーディング (例:`UTF-8`)

```js
> encoded = new TextEncoder().encode("こんにちは、世界");
Uint8Array(24) [
  227, 129, 147, 227, 130,
  147, 227, 129, 171, 227,
  129, 161, 227, 129, 175,
  227, 128, 129, 228, 184,
  150, 231, 149, 140
]
> decoded = new TextDecoder("utf-8").decode(encoded);
'こんにちは、世界'
```

---sub-page---

- URI encode

[オンラインツール](https://www.url-encode-decode.com/)

```bash
> encodeURIComponent('こんにちは、世界')
'%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%E3%80%81%E4%B8%96%E7%95%8C'
> decodeURIComponent('%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%E3%80%81%E4%B8%96%E7%95%8C')
'こんにちは、世界'
```

---page---

### Docker で仮想環境でサーバを立ち上げる

```sh
$ cd shared-materials/docker-examples/wordpress
$ ls
docker-compose.yml
$ docker-compose up -d
[+] Building 0.0s (0/0)                    docker:desktop-linux
[+] Running 3/3
 ✔ Network wordpress_default        Created                0.0s
 ✔ Container wordpress-db-1         Started                0.0s
 ✔ Container wordpress-wordpress-1  Started                0.0s
```

- ブラウザで下記 URL で結果確認
  http://localhost:8080/

- `docker-compose down`でサービスを停止する
  - (docker-compose.yml ファイルと同じ場所で実施する)
