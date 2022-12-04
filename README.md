## react-use-firework 🎆

[![npm version](https://img.shields.io/npm/v/react-use-firework.svg?style=flat)](https://www.npmjs.com/package/react-use-firework)
[![npm version](https://img.shields.io/npm/dt/react-use-firework)](https://www.npmjs.com/package/react-use-firework)

### Demo 🪞

[![Edit react-use-ripple demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/compassionate-mcnulty-1rppg)

### Install 📦

```shell
yarn add react-use-firework
```

### Usage 📋

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

### API

the usage demo above is the basic usage with default setting of useFirewrok, you can use it with some options like `useFirework(ref,{ count: 10, ...otherOptions })` as well and the supporting options arguments are like the table below

| name        | type          | default                           | description                                     |
| ----------- | ------------- | --------------------------------- | ----------------------------------------------- |
| count       | number        | 30                                | The number of the firework dot                  |
| duration    | number        | 1500                              | the millisecond of the duration of firework     |
| size        | number        | 6                                 | the size of each firework dot                   |
| range       | number        | 200                               | the spread range radius of the firework         |
| colors      | Array<string> | ["#f59342", '#f5e942', '#f54242'] | the color of the firework                       |
| randomColor | boolean       | false                             | whether to apply random color into the firework |
