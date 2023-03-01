---
sidebar_position: 1
title: Know the development rules of thinkerAI projects
---

# thinkerAIの開発ルールを知る

thinkerAIの開発ルールを知ることで、 プルリクエスト や バージョン更新 が容易になります。

## ブランチルール

thinkerAIでは [**A successful Git branching model**](https://nvie.com/posts/a-successful-git-branching-model/) を採用しています。

| 種類 | 分岐元 | マージ先 | ブランチ名の慣習 | 用途 |
|------|-------|----------|----------------|------|
|`main`| -     | -        | -              | リリースしたソースコードを管理する  |
|`develop`| -  | -        | -              | 	開発中のソースコードを管理する  |
|`hotfix`|`main`| `main` と `develop` | hotfix-vx.y.z | 緊急の修正作業を行う |
|`release`|`develop`|`main`|release-vx.y.z| リリース準備作業を行う（`package.json`のバージョンなどを修正する） |
|`feature`|`develop`|`develop`|feature-*|機能実装の開発作業を行う|

`feature` ブランチは **ローカル** で管理します。

基本的にプルリクエストをする際は `develop` ブランチに行ってください。

## リリース周期

thinkerAIでは 例外がない限り、前回のメジャーバージョンから半年～8ヵ月たったら `release` ブランチへと移行します。
メジャーバージョンのリリースはおおよそ **6ヶ月ごと** になります。

### バージョニング

互換性が破壊される機能を追加、削除をした場合は、`v2.0.0`のように、メジャーバージョンを更新します。
互換性を維持しつつ機能の追加をした場合は、`v1.1.0`のように、マイナーバージョンを更新します。
細かいバグの修正など、ユーザにとってはあまり気づかない変更点しかない場合は、`v1.0.1`のように、バッチバージョンを更新します。
