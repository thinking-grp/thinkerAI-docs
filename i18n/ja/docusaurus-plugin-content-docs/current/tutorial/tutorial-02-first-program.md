---
sidebar_position: 1
title: 2. 初めての雑談プログラム
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::info チュートリアルの流れ

これはthinkerAIチュートリアルの**2章**です。

[目次](/docs/category/tutorial)
:::

## 学習目標

このチュートリアルでは、thinkerAIのプロジェクトのセットアップと、最小限のプログラムの作成方法を学びます。

## thinkerAIのセットアップ

thinkerAIをインストールする方法について説明します。以下の2つの方法があります。

<Tabs>
<TabItem value="use-installer" label="thinkerAI Installer" default>
thinkerAIを一番簡単にインストールできる方法です。

<br/>
<br/>

### Windowsの場合

まず[thinkerAIの**リリースページ**](https://github.com/thinking-grp/thinkerAI/releases/)に行きます。
そして**Assets**から`thinkerAI-Installer-(thinkerAIのバージョン).exe`をダウンロードします。

次に、インストーラーを起動して、「インストール先の指定」の画面が表示されたら、インストール先のパスを指定します。

![「インストール先の指定」の画面](https://github.com/mf-3d.png)

最後に「インストール」ボタンをクリックすると、thinkerAIのダウンロードと環境のセットアップが自動的に行われます。

![「インストール中」の画面](https://github.com/mf-3d.png)

### macOSの場合

:::caution

macOSは現時点([v1.0.0 α2](https://github.com/thinking-grp/thinkerAI/releases/tag/v1.0.0-alpha.2))では対応していません。
以下の説明は、将来的にmacOSで使用する場合に備えた**予定の説明**です。

:::

macOSではコマンドラインからのインストールをすることができます。

まず[thinkerAIの**リリースページ**](https://github.com/thinking-grp/thinkerAI/releases/)に行きます。
そして**Assets**から`thinkerAI-Installer-(thinkerAIのバージョン)-darwin-x64.sh`をダウンロードします。

そしてターミナルアプリで以下のコマンドを実行します。
```shell
sh "./thinkerAI-Installer-(thinkerAIのバージョン)-darwin-x64.sh"
```

これで、thinkerAIのダウンロードと環境のセットアップが自動的に行われます。

</TabItem>
<TabItem value="use-source" label="ソースコードから">

:::caution

この方法は、このプログラムを理解した方向けの手順です。

:::

まず[Python](https://python.org) 3.9系 **（3.10以降は使用不可）** と[Rust](https://rust-lang.org)をインストールしてください。

その後、Pythonの仮想環境を作成し、有効化します。Windowsの場合は、以下のコマンドを実行してください。

```shell
python3 -m venv venv
.\venv\Scripts\activate
```

macOSの場合は、以下のコマンドを実行してください。

作成出来たら仮想環境を有効化します。

```shell
python3 -m venv venv
source venv/bin/activate
```

仮想環境を有効化したら、Pythonのライブラリをインストールしてください。

```shell
pip install -r requirements.txt
```

最後に、NPMのモジュールをインストールします。

```shell
npm install
```

上記の手順を実行することで、thinkerAIを利用する準備が整います。
</TabItem>
</Tabs>

## プログラムの実行

まず雑談のプログラムを作成する前に、小さなスクリプトを使用して、package.jsonのエントリポイントが正しく設定されていることを確認します。 
プロジェクトのルートフォルダの`index.ts`というファイルを開き、内容を以下に変更します。

```ts
import { Models, PythonProcess } from "./lib/index";

const pythonProcess = new PythonProcess({
  chatModel: [ Models.Chat.GPT2ja ]
});

pythonProcess.on("pythonStarted", () => {
  console.log("Hello from thinkerAI 👋");
});
```

このスクリプトを実行するには、以下のようなコマンドを実行します。

```shell
node .
```

[**Pythonプロセス**](aaaa)が起動したらターミナルに`Hello from thinkerAI 👋`と出力されるはずです。
これでpackage.jsonのエントリポイントが正しく設定されていることを確認しました。

## 雑談プログラムの作成

今回は、**雑談のできるプログラム**を作成していきましょう。

プロジェクトのルートフォルダの`index.ts`を開き、内容を以下に書き換えます。

```ts
import { api, Models, PythonProcess } from "./lib/index";

const pythonProcess = new PythonProcess({
  chatModel: [ Models.Chat.GPT2ja ]
});

pythonProcess.on("pythonStarted", async () => {
  const result = await api.interactWithHistory("こんにちは。");
  console.log(result.reply);
});
```

### 解説


```ts
import { api, Models, PythonProcess } from "./lib/index";
```

1行目では、ESMのモジュール構文で3つのthinkerAIモジュールをインポートしています。

* [**api**](/api/lib)、**Pythonプロセス**のAPIの制御を行います。
* [**Models**](aaaa)、**Pythonプロセス**で使えるモデルを定義したクラスです。
* [**PythonProcess**](aaaa)、**Pythonプロセス**の制御を行います。

```ts title=index.ts (Lines 3 - 5)
const pythonProcess = new PythonProcess({
  chatModels: [ Models.Chat.GPT2ja ]
});
```

[**PythonProcess**](aaaa)をインスタンス化します。
引数オプションの`chatModels`は使用する雑談モデルを指定しています。