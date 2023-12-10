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

## ハッシュ

---page---

## エンコーディング・ディコーディング

- 暗号化
  - 対称
  - 非対称
