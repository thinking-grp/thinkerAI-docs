---
sidebar_position: 1
title: コマンドラインで会話をする
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# コマンドラインで会話をする

## 概要

thinkerAIには会話ができる API が存在します。
その API を使用して **コマンドライン** で会話してみましょう。

## サンプル

<Tabs>
<TabItem value="javascript" label="JavaScript" default>

```js
const { api, Models, PythonProcess } = require("../lib");
const rl = require("readline");

let history = [];

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pythonProcess = new PythonProcess({
  chatModels: [Models.Chat.GPT2ja]
});

let isPythonStarted = false;

pythonProcess.on("pythonStarted", () => {
  conversation("こんにちは！");
});

function conversation (question) {
  readline.question(question, async (answer) => {
    history[history.length] = answer;
    const result = await api.interactWithHistory(answer, history);

    history[history.length] = result.text;

    conversation(result.text);

    readline.close();
  });
}
```

</TabItem>
<TabItem value="typescript" label="TypeScript">

```ts
import { api, Models, PythonProcess } from "../lib";
import rl from "readline";

let history = [];

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pythonProcess = new PythonProcess({
  chatModels: [Models.Chat.GPT2ja]
});

let isPythonStarted = false;

pythonProcess.on("pythonStarted", () => {
  conversation("こんにちは！");
});

function conversation (question: string) {
  readline.question(question, async (answer) => {
    history[history.length] = answer;
    const result = await api.interactWithHistory(answer, history);

    history[history.length] = result.text;

    conversation(result.text);

    readline.close();
  });
}
```

</TabItem>
</Tabs>