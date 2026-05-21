# vue论坛联调后端

基于 Vue 的前端管理系统或展示应用。

## 技术栈

Vue + Spring Boot

## 项目结构

- 详见项目根目录及 src 等文件夹

## 快速开始

### 环境要求

- Node.js 16+（含前端/Node 项目时）
- JDK 8/11+ 与 Maven（含 Spring Boot 项目时）
- MySQL / MongoDB（按项目配置文件准备）

### 安装与运行

```bash
npm install
npm run dev   # 或 npm start
npm run build  # 如有该脚本
```
```bash
# Maven 启动
mvn spring-boot:run
# 或在 IDE 中运行 Spring Boot 主类
```

## 配置说明

- 数据库连接、API 密钥等请在 application.yml、application.properties、.env 或 config 目录中修改。
- 如有 sql 脚本，请先创建数据库并导入后再启动。

## 说明

本仓库由本地项目整理上传，仅供学习与交流使用。
