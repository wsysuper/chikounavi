# IT 基礎 4-3

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2024-1-28

---page---

## 今週のコンテンツ

### 4-3、データベース（日曜）

- データベースと SQL のプラクティス

---page---

## ウォーミングアップ

下記 ERD の各テーブルの DDL を作る
![ERD](/images/course4-3/erd.png)

---sub-page---

## DDL

```sql
drop table if exists customers cascade;
create table customers (
	customer_id int primary key,
	customer_name varchar(50) not null
);

drop table if exists orders cascade;
create table orders (
	order_id int primary key,
	customer_id int not null references customers(customer_id),
	order_date date not null
);

drop table if exists shipments cascade;
create table shipments (
	shipment_id int primary key,
	order_id int not null references orders(order_id),
	shipment_date date not null
);
```

---page---

## 他の SQL 文法

- [GROUP BY ... HAVING](https://www.w3schools.com/postgresql/postgresql_having.php)
- [CASE](https://www.w3schools.com/postgresql/postgresql_case.php)
- [IN](https://www.w3schools.com/sql/sql_ref_in.asp)
- [LIKE](https://www.w3schools.com/postgresql/postgresql_like.php)
- [BETWEEN ... AND](https://www.w3schools.com/postgresql/postgresql_between.php)
- [ROUND](https://www.w3schools.com/sql/func_mysql_round.asp)
- 集約関数（aggregate function）
  - SUM、AVG、COUNT、MIN、MAX ...

---page---

## 副問合せ（サブクエリ）

- [SQL のサブクエリ（副問合せ）とは](https://products.sint.co.jp/siob/blog/what-is-sql-subquery)
- [WITH 句](https://www.geeksforgeeks.org/sql-with-clause/)

---page---

## トランザクション

- [トランザクションの簡単な説明](https://medium-company.com/%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B6%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3/)
  - トランザクション管理
  - トランザクションの ACID 特性

---sub-page---

### トランザクションを利用した SQL の書き方

更新確定する場合

```sql
BEGIN;
  -- 更新文(INSERT/UPDATE/DELETEなど)
COMMIT;
```

更新を廃棄する場合

```sql
BEGIN;
  -- 更新文(INSERT/UPDATE/DELETEなど)
ROLLBACK;
```

---page---

## 宿題

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
