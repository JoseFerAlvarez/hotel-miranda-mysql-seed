# MYSQLSEED #

Seed of Mysql to create a local database for the projects [hotel-miranda-php](https://github.com/JoseFerAlvarez/hotel-miranda-php) and [hotel-miranda-laravel](https://github.com/JoseFerAlvarez/hotel-miranda-laravel).

## Installation ##

- Clone this repository in your workspace directory.

 ``` bash
 git clone https://github.com/JoseFerAlvarez/hotel-miranda-mysql-seed.git
 ```

- Create an .env file in the root of your project with the following environment variables.

 ``` javascript
DB_HOST=yourhost
DB_USER=youruser
DB_PASSWORD=yourpassword
DB_DATABASE=yourdatabase
 ```

- Install all node dependencies.

 ``` bash
npm install
 ```

- Now, you can perform two actions:

1. Inserts by default 20 rows of each model.

 ``` bash
 npm run seed
 ```

2. Inserts the defined number of rows.

``` bash
 npm run seed yournumber
 ```

## Links to the Miranda's projects ##

- Link to [hotel-miranda-php](https://github.com/JoseFerAlvarez/hotel-miranda-php).

- Link to [hotel-miranda-laravel](https://github.com/JoseFerAlvarez/hotel-miranda-laravel).

- Link to [hotel-miranda-design](https://github.com/JoseFerAlvarez/hotel-miranda-design).

- Link to [hotel-miranda-dashboard](https://github.com/JoseFerAlvarez/hotel-miranda-dashboard).

- Link to [hotel-miranda-back](https://github.com/JoseFerAlvarez/hotel-miranda-back).

## Technologies used ##

<p align="center">
<img src="https://img.shields.io/badge/-javascript-0D1117?style=for-the-badge&logo=javascript&logoColor=ffffff">
<img src="https://img.shields.io/badge/-typescript-0D1117?style=for-the-badge&logo=typescript&logoColor=ffffff">
<img src="https://img.shields.io/badge/-nodejs-0D1117?style=for-the-badge&logo=node.js&logoColor=ffffff">
<img src="https://img.shields.io/badge/-MySQL-0D1117?style=for-the-badge&logo=mysql&logoColor=ffffff">
</p>

### Libraries ###

- [fakerjs](https://github.com/faker-js/faker)

- [MySQL](https://www.npmjs.com/package/mysql)

- [Dotenv](https://www.npmjs.com/package/dotenv)

- [bcrypt](https://www.npmjs.com/package/bcrypt)

- [TypeScript](https://www.npmjs.com/package/typescript)

- [ESLint](https://www.npmjs.com/package/eslint)
