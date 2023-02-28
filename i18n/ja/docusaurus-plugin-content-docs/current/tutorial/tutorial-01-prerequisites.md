---
sidebar_position: 1
title: 1. 必要な環境
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info チュートリアルの流れ

これはthinkerAIチュートリアルの**1章**です。

[目次](/docs/category/tutorial)
:::

このチュートリアルでは、thinkerAIを使用して雑談プログラムを開発し、配布するまでの流れを解説します。

## 目標

このチュートリアルでは、まず最小限の雑談プログラムを作り上げてから、thinkerAI Editorでパッケージ化して配布する方法までを解説します。

## 前提

このチュートリアルは一般的なNode.jsの開発に精通していることを前提としています。 
続ける前に背景を読んでおきたい方は、以下の資料を推奨します。

- [Introduction to Node.js](https://nodejs.dev/en/learn/)

## 必須ソフト

### コードエディタ

thinkerAIを開発するには、[**thinkerAI Editor**](https://github.com/thinking-grp/thinkerAI-Editor)の使用を推奨していますが、[Visual Studio Code](https://code.visualstudio.com/)などのコードエディタでも開発することができます。

### thinkerAI Installer

thinkerAIの環境を手動で整えるのは難しいため、純正のセットアップツールである[**thinkerAI Installer**](https://github.com/thinking-grp/thinkerAI-Installer)を使用します。

### Rust

thinkerAIの使用しているライブラリには`rustc`を使用するライブラリがあります。なので必ず[**Rust**](https://rust-lang.org)をインストールします。