# IT 基礎 5-6

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2024-2-24

---page---

## 今週のコンテンツ

### 5-5、バックエンド開発（土曜）

- REST ドキュメンテーションツール Swagger
- Repository の自動生成
- 個人プロジェクト: ERD、データベースの設計、機能一覧

<div style="opacity: 0.4; text-align: left">
<br/>

### 5-6、バックエンド開発（日曜）

- フロントエンドとバックエンドの結合
- 個人プロジェクト: バックエンド API の設計、画面設計

</div>

---page---

## 便利な REST API ドキュメンテーションツール

- [Swagger](https://editor.swagger.io/)の紹介
- SpringBoot で自動生成な REST API ドキュメンテーション生成、Swagger UI を使用する
  - [dependency](https://mvnrepository.com/artifact/org.springdoc/springdoc-openapi-starter-webmvc-ui/2.3.0)追加だけ
  - Maven
    ```xml
    <dependency>
      <groupId>org.springdoc</groupId>
      <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
      <version>2.3.0</version>
    </dependency>
    ```
  - Gradle
    ```
    implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.3.0'
    ```

---page---

### Repository の自動生成

- [JPA でインメモリ H2 データアクセス](https://spring.pleiades.io/guides/gs/accessing-data-jpa/)
- [Spring Data REST API の自動生成 (JPA)](https://spring.pleiades.io/guides/gs/accessing-data-rest)

  - PostgreSQL と接続してみる

    - [Dependency](https://mvnrepository.com/artifact/org.postgresql/postgresql/42.7.2) の追加
    - `application.properties` の設定
      - 設定値: shared-materials/docker-examples/postgres/docker-compose.yml

    ```
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql: true
    spring.datasource.driver-class-name=org.postgresql.Driver
    spring.datasource.url=jdbc:postgresql://localhost:5432/<YOUR_DATABASE_NAME>
    spring.datasource.username=<YOUR_USERNAME>
    spring.datasource.password=<YOUR_PASSWORD>
    ```

---page---

## 宿題

- 個人プロジェクト

  - 機能一覧
  - ERD 設計
  - API 一覧
  - 画面イメージ

- その他ハンズオン (余裕があれば)
  - [Spring Boot ログイン画面](https://spring.pleiades.io/guides/gs/securing-web)
  - [バッチサービスの作成](https://spring.pleiades.io/guides/gs/batch-processing)

---page---

<section style="text-align: left;">
  <h1>質問応答</h1>
  <br/>
  <br/>
  <h3 style="text-align: right;">つづく</h3>
</section>
