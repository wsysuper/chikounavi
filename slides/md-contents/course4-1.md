# IT 基礎 4-1

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2024-1-20

---page---

## ウォーミングアップ

### SSH と Git

[豆知識へ](trivia.html#/22)

---page---

## 今週のコンテンツ

### 4-1、データベース（土曜）

- データベースの基本概念
- ERD

<div style="opacity: 0.4; text-align: left">

### 4-2、データベース（日曜）

- データベースの操作
- SQL 基礎

</div>

---page---

# データベースとは

電子的に保存され、アクセスできる組織化されたデータの集合である。(from [wikipedia](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9))

- データベースの種類([参考](https://www.oracle.com/jp/database/what-is-database/#link5))
  - リレーショナル・データベース
  - オブジェクト指向データベース
  - 分散データベース
  - データ・ウェアハウス
  - NoSQL データベース
  - グラフ・データベース

---page---

## データベースの設計

- ERD (Entity Relationship Diagram)
  - [概念の解説](https://wa3.i-3-i.info/word16654.html)
- [ERD の詳細、書き方]
  - 参考: https://data-viz-lab.com/er-diagram
- ツール例:

  - [draw.io](https://app.diagrams.net/)

<img src="/images/course4-1/physical-erd.png" alt="physical-erd" />

---page---

## 構造化クエリ言語（SQL）とは

- SQL(Structured Query Language)

データをクエリ、操作、定義する
ほか、アクセス制御を提供するためにほとんどすべてのリレーショナル・データベースで使用されているプログラミング言語です。

---sub-page---

### SQL 言語の構成

- データ定義言語 (DDL: data definition language)
  - CREATE - 新しいデータベース、関係（テーブル） 、ビュー、索引、ストアドプロシージャを作成する。
  - DROP - 既に存在するデータベース、関係（テーブル）、ビュー、索引、ストアドプロシージャを削除する。
  - ALTER - 既に存在するデータベースオブジェクトに対する変更。
  - TRUNCATE - 関係（テーブル）からのデータの不可逆的な削除。
- データ操作言語 (DML: data manipulation language)
  - SELECT - 検索する
  - INSERT - 挿入する (新規登録する)
  - UPDATE - 更新する
  - DELETE - 削除する
- データ制御言語 (DCL: data control language)
  - GRANT - 特定のデータベース利用者に特定の作業を行う権限を与える
  - REVOKE - 特定のデータベース利用者から既に与えた権限を剥奪する

---sub-page---

### 文法例

詳しい説明は後のコースで

<img src="/images/course4-1/sql-example.png" alt="sql-example" height="800px"/>

---sub-page---

### 主な SQL

- MySQL（オープンソース）
- PostgreSQL（オープンソース）
- SQLite（オープンソース、機能が少ないが、開発によく使われる）
- Oracle Database
- Microsoft SQL Server（Only Windows）

---page---

## 宿題

- データベースクライアントツールをインストールする
  - https://dbeaver.io/download/

---page---

<section style="text-align: left;">
  <h1>質問応答</h1>
  <br/>
  <br/>
  <h3 style="text-align: right;">つづく</h3>
</section>
