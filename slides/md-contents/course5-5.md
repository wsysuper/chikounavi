# IT 基礎 5-5

<img src="/images/icon-transparent.png" alt="icon" width="180"/>

#### 講師：王紹宇

2024-2-18

---page---

## ウォーミングアップ

- curl コマンド
  - [豆知識へ](trivia.html#/25)

---page---

## 今週のコンテンツ

<div style="opacity: 0.4; text-align: left">

### 5-4、バックエンド開発（土曜）

- Spring Bean について
- テストについて
- ハンズオン

</div>

### 5-5、バックエンド開発（日曜）

- その他ハンズオン

---page---

### 補足 1

- [Spring Boot でよく使うアノテーション一覧](https://learning-collection.com/spring-boot%E3%81%A7%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86%E3%82%A2%E3%83%8E%E3%83%86%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E4%B8%80%E8%A6%A7/)

---sub-page---

### 補足 2

- [Mave Repository](https://mvnrepository.com/)
  - groupId, artifactId, version 指定値の調べ方
- 依存性スコープ [Mave & Gradle](https://docs.gradle.org/current/userguide/java_plugin.html#sec:java_plugin_and_dependency_management)
  - Maven [参考](https://www.techscore.com/tech/Java/ApacheJakarta/Maven/3/#maven-3-1-1)
    - compile/provided/runtime/test
  - Gradle [参考](https://docs.gradle.org/current/userguide/java_plugin.html#sec:java_plugin_and_dependency_management)
    - api/implementation/compileOnly/runtimeOnly/testImplementation

---sub-page---

### 補足 3

PostgreSQL と接続する時

- Dependency の追加

  - gradle

  ```
    runtimeOnly 'org.postgresql:postgresql'
  ```

  - maven

  ```
    <dependency>
      <groupId>org.postgresql</groupId>
      <artifactId>postgresql</artifactId>
    </dependency>
  ```

- `application.properties` の設定

```
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://localhost:5432/<YOUR_DATABASE_NAME>
spring.datasource.username=<YOUR_USERNAME>
spring.datasource.password=<YOUR_PASSWORD>
```

---page---

## その他ハンズオン

- [Web 画面フォーム送信処理](https://spring.pleiades.io/guides/gs/handling-form-submission)
- [Web 画面フォーム入力チェック](https://spring.pleiades.io/guides/gs/validating-form-input)
- [ファイルのアップロード](https://spring.pleiades.io/guides/gs/uploading-files)
- [Spring Data REST API の自動生成 (JPA)](https://spring.pleiades.io/guides/gs/accessing-data-rest/)

余裕があれば

- [Spring Boot ログイン画面](https://spring.pleiades.io/guides/gs/securing-web)
- [バッチサービスの作成](https://spring.pleiades.io/guides/gs/batch-processing)

---page---

## 宿題

- 個人プロジェクト
  - ERD 設計 + DB の初期構築 (DDL)

---page---

<section style="text-align: left;">
  <h1>質問応答</h1>
  <br/>
  <br/>
  <h3 style="text-align: right;">つづく</h3>
</section>
