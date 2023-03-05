---
sidebar_position: 1
title: Know the development rules of thinkerAI
slug: /development-rules
---

# Know the development rules of thinkerAI

By knowing the development rules of thinkerAI, it will be easier to create pull requests and version updates.

## Coding Guidelines

At thinkerAI, we have established the following guidelines for code formatting, naming conventions, commenting, error handling, and more.

### 1. Naming Conventions

* Use PascalCase for class names (e.g. TestClass).
* Use camelCase for variable and function names (e.g. testFunction).
* Use kebab-case for command-line arguments (e.g. test-id).

### 2. Indentation

* Use spaces for indentation.
* Set the indentation width to 2.

### 3. Error Handling

* Specify as specific error types as possible when catching errors.
* Use try-catch syntax for error handling.
* Provide detailed error messages when handling exceptions.
* Include the current context (e.g. file name, line number, variable name, etc.) in error messages.

### 4. Other Guidelines

* Avoid using magic numbers.
* Use comments to clarify the intent of the code.

## Branching rules

thinkerAI adopts [**A successful Git branching model**](https://nvie.com/posts/a-successful-git-branching-model/).

| Type | Origin | Destination | Branch naming convention | Purpose |
|------|--------|-------------|--------------------------|---------|
|`main`| -      | -           | -                        | To manage the released source code  |
|`develop`| -   | -           | -                        | To manage the source code being developed  |
|`hotfix`|`main`| `main` and `develop` | hotfix-vx.y.z | To perform urgent bug fixes |
|`release`|`develop`|`main`|release-vx.y.z| To prepare for release (such as fixing the version in `package.json`) |
|`feature`|`develop`|`develop`|feature-*| To develop new features|

`feature` branches are managed **locally**.

Please create pull requests to the `develop` branch as a general rule.

## Release cycle

Unless there are exceptions, thinkerAI transitions to the `release` branch after half a year to 8 months from the previous major version.
Major versions are released approximately **every 6 months**.

### Versioning

- If a function that breaks compatibility is added or deleted, update the major version as `v2.0.0`.
- If a function is added while maintaining compatibility, update the minor version as `v1.1.0`.
- If there are changes that are not noticeable to users, such as minor bug fixes, update the patch version as `v1.0.1`.
