## react-use-firework 🎆 

[![npm version](https://img.shields.io/npm/v/react-use-firework.svg?style=flat)](https://github.com/uyarn/react-use-firework)

<image src="./use-firework.gif" />

### Installation

```shell
npm install react-use-firework --save-dev
yarn add react-use-firework
```

### Usage

```js
import React, { useRef } from "react";

import useFireWork from "react-use-firework";

export component = ()=> {
  const ref = useRef(null);
  useFireWork(ref);

  return (
    <div
     ref={ref}
     style={{ width: "100%", height: "600px", background: "#000" }}
    />
  );
}

```
