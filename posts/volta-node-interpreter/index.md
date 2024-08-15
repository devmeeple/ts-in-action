---
title: "IntelliJ IDEA Volta 인터프리터 에러 해결하기"
description: ""
date: 2024-08-15
update: 2024-08-15
tags:
  - Node.js
series: 
---

IntelliJ IDEA 2024.2가 정식으로 출시됐다. 업데이트된 여러 기능 중 'TypeScript 파일을 직접 실행 및 디버그'가 가장 흥미로웠다. 바로 업데이트하고 확인해 봤지만 문제가 발생했다.

```shell 
node:internal/modules/run_main:129
    triggerUncaughtException(
    ^
Error: tsx must be loaded with --import instead of --loader
The --loader flag was deprecated in Node v20.6.0 and v18.19.0
``` 

문제가 발생한 이유는 `Volta` 환경에서만 발생했다. 해결하기 위해서는 표준 Node.js 인터프리터를 사용해야 한다.

## Volta 제거하기

> macOS, zsh 환경에서 진행한다.

1. `rm -rf ~/.volta`: 바이너리를 제거한다.
2. `vim ~/.zshrc`: 환경 변수를 제거한다.

```shell
export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"
```

3. `source ~/.zshrc`: 설정 파일을 다시 불러온다.
4. `volta -v`: 삭제를 확인한다.

## 마치며

Volta를 삭제하면 당장의 문제는 해결할 수 있다. 하지만 다양한 버전을 사용하기 위해서 다른 버전 관리자(Node Version Manager)를 고려해야겠다.

**<참고 자료>**

* [IntelliJ IDEA 2024.2의 새로운 기능](https://www.jetbrains.com/ko-kr/idea/whatsnew/)
* [YoTrack 'Volta Node interpreter version not correctly detected when running Typescript with
  `tsx`'](https://youtrack.jetbrains.com/issue/WEB-67800/Volta-Node-interpreter-version-not-correctly-detected-when-running-Typescript-with-tsx)
* [VOLTA 'Uninstalling Volta'](https://docs.volta.sh/advanced/uninstall)
