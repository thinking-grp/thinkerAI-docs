---
sidebar_position: 1
title: api
slug: api
tags: 
  - メインプロセス
  - API
---

> [**Pythonプロセス**](aaaa)のAPIを制御します。

以下の例ではPythonプロセスが起動したときにテキストを生成する方法を示します。

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

## イベント

`api` オブジェクトでは以下のイベントが発生します。

### イベント: example

## メソッド

`api` オブジェクトには以下のメソッドがあります。

### `interactWithHistory([text], [history])` {#interactWithHistory}

* `text` string
* `history` string[] (任意)

戻り値：
* `Object`
  * reply `string | undefined` - 生成結果
  * history `string[] | underfined`

Pythonプロセス API で雑談生成を行います。

このメソッドは、`localhost`で立ち上げられている **Pythonプロセス API** を使用しています。 レスポンスのステータスコードが `200` 以外だった場合、 `reply` と `history` は `undefined` となります。

### `fineTuning([training_file_path], [model_output_dir], [model_name_or_path])` @deprecated {#fineTuning}

@deprecated

* `training_file_path` string - 学習に使用するファイル
* `model_output_dir` string - 学習したモデルを出力するフォルダ
* `model_name_or_path` string - 学習するモデル

Pythonプロセス API でファインチューニングを行います。

このメソッドは、`localhost`で立ち上げられている **Pythonプロセス API** を使用しています。 学習前には`beforeTrain`、学習後には`trained`イベントが発動します。

**非推奨**: