# IT 基礎 4-2

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2024-1-21

---page---

## ウォーミングアップ

- WordPress の DB を見る

---page---

## 今週のコンテンツ

<div style="opacity: 0.4; text-align: left">

### 4-1、データベース（土曜）

- データベースの基本概念
- データベース設計： ERD

</div>

### 4-2、データベース（日曜）

- データベースの操作
- SQL 基礎

---page---

## ローカルで DB サーバを立ち上げる（Docker を利用する）

```yml
version: "3.1"

services:
  db:
    image: postgres
    restart: always
    ports:
      - 5432:5432
    environment:
      POSTGRES_USER: test_user
      POSTGRES_PASSWORD: test_pass
      POSTGRES_DB: postgres

  adminer:
    image: adminer
    restart: always
    ports:
      - 8888:8080
```

- 起動：`docker-compose up -d`
- 停止：`docker-compose down`

---page---

## （再掲）SQL 言語の構成

- データ定義言語 (DDL: data definition language)
  - CREATE - 新しいデータベース、関係（テーブル） 、ビュー、索引、ストアドプロシージャを作成する。
  - DROP - 既に存在するデータベース、関係（テーブル）、ビュー、索引、ストアドプロシージャを削除する。
  - ALTER - 既に存在するデータベースオブジェクトに対する変更。
  - TRUNCATE - 関係（テーブル）からのデータの不可逆的な削除。

<div style="opacity: 0.4; text-align: left">

- データ操作言語 (DML: data manipulation language)
  - SELECT - 検索する
  - INSERT - 挿入する (新規登録する)
  - UPDATE - 更新する
  - DELETE - 削除する
- データ制御言語 (DCL: data control language)
  - GRANT - 特定のデータベース利用者に特定の作業を行う権限を与える
  - REVOKE - 特定のデータベース利用者から既に与えた権限を剥奪する

</div>

---sub-page---

- Persons テーブルを作成する
- PK: ID

```sql
CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);
```

---sub-page---

- Persons テーブルを作成する
- FK: PersonID

```sql
CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int REFERENCES Persons(ID)
);
```

---page---

## （再掲）SQL 言語の構成

<div style="opacity: 0.4; text-align: left">

- データ定義言語 (DDL: data definition language)
  - CREATE - 新しいデータベース、関係（テーブル） 、ビュー、索引、ストアドプロシージャを作成する。
  - DROP - 既に存在するデータベース、関係（テーブル）、ビュー、索引、ストアドプロシージャを削除する。
  - ALTER - 既に存在するデータベースオブジェクトに対する変更。
  - TRUNCATE - 関係（テーブル）からのデータの不可逆的な削除。

</div>

- データ操作言語 (DML: data manipulation language)
  - SELECT - 検索する
  - INSERT - 挿入する (新規登録する)
  - UPDATE - 更新する
  - DELETE - 削除する

<div style="opacity: 0.4; text-align: left">

- データ制御言語 (DCL: data control language)
  - GRANT - 特定のデータベース利用者に特定の作業を行う権限を与える
  - REVOKE - 特定のデータベース利用者から既に与えた権限を剥奪する

</div>

---sub-page---

## データ操作 CRUD

[Wikipedia](https://ja.wikipedia.org/wiki/CRUD)

- Create（生成）
- Read（読み取り）
- Update（更新）
- Delete（削除）
- 具体例
  - SQL: Insert/Select/Update/Delete
  - WEB API / HTTP METHOD: POST/GET/PUT/DELETE

---sub-page---

### Persons テーブルにレコードを挿入する

```sql
INSERT INTO Persons (id,lastname,firstname,age) VALUES
	 (1,'Green','Alice',20),
	 (2,'Brown','Bob',25);
```

---sub-page---

### Persons テーブルからデータを取得する

```sql
SELECT firstname, lastname FROM Persons;
SELECT * FROM Persons WHERE age <= 20;
```

---sub-page---

### Persons テーブルのレコードを更新する

```sql
UPDATE Persons
	SET age=18
	WHERE id=1;
```

---sub-page---

### Persons テーブルのレコードを削除する

```sql
DELETE FROM Persons
	WHERE id=1;
```

---page---

## （再掲）SQL 言語の構成

<div style="opacity: 0.4; text-align: left">

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

</div>

- データ制御言語 (DCL: data control language)
  - GRANT - 特定のデータベース利用者に特定の作業を行う権限を与える
  - REVOKE - 特定のデータベース利用者から既に与えた権限を剥奪する

---sub-page---

### Learn More

https://www.w3schools.com/postgresql/index.php

---page---

## 宿題

- [Exercise](https://www.w3schools.com/postgresql/exercise.php?filename=exercise_create_table1)
- LeetCode SQL
  - https://leetcode.cn/studyplan/sql-free-50/
  - ベストエフォートで良い (簡単レベルから)

---page---

<section style="text-align: left;">
  <h1>質問応答</h1>
  <br/>
  <br/>
  <h3 style="text-align: right;">つづく</h3>
</section>
