# **jsoft-react-view**
A [`react.js`](https://reactjs.org/) package to simplify *user interface* development quickly and simply based on `react-native` ` View` and more.

## Getting Started
![](https://raw.githubusercontent.com/Jaytrindade/jsoft-react-view/master/public/assets/img/getting-started-code-2.PNG)

## Prerequisites
This module was developed in `node.js` v10.16.3.
```
We recommend using node.js v10.x or higher.
```

## Installation
This is a [`Node.js`](https://nodejs.org/en/) module available through the npm registry.

Installation is done using the `npm install` command:

``` 
$ npm install --save jsoft-react-view 
or
$ yarn add jsoft-react-view 
```

or in development mode:

``` 
$ npm install --save-dev jsoft-react-view
or
$ yarn add jsoft-react-view --dev
```

## Loading

you can load this module like this:

```javascript 
import View from "jsoft-react-view" 

or

import View, {styledComponents} from "jsoft-react-view"

than

const { styled, others: {createGlobalStyle} } = styledComponents
```
## Demonstration
See a [demonstration](https://youtu.be/n65BEJIJXs8) of how fast and productive it can be using `jsoft-react-view`

## What jsoft-react-view offers us?
`jsoft-react-view` gives us a simple way of styling our components as if using a `template` like `bootstrap` for example.

## What else is good?
`jsoft-react-view` uses [`styled-components`](https://www.styled-components.com/) to style its components. Therefore, you don't have to worry about prefixing the css, class duplication, or unitized styles properties, and it also has a reduced css syntax.

## Not everything is flowers!!
`jsoft-react-view` does not have a simplified syntax for all css properties, so you will have to style using the `pureStyle` or `style` property, or import [`styled-components`](https://www.styled-components.com/) and do whatever you want using [`styled-components`](https://www.styled-components.com/) components.

## How can I use this?
```javascript
import React from "react";
import View from "jsoft-react-view";

function App(){
    return (
      <View el="h1" cl="#09f" ft="15px arial" ftLight>Hello!</View>
    )
}

export default App
```
The `el` property is used to specify which HTML element to use and, if not set, defaults to `div`.

## Simple examples of how to use
Here are some examples of how cool it would be for you to use `jsoft-react-view`.

### Example 1 / Changing the `tag` of an `HTML` element.
Suppose you want to change the `HTML` of a component, ie its `tag`, such as `div` to `h1`. How would it be done using `View`?

```javascript
import React, { useState } from "react";
import View from "jsoft-react-view";

function App() {
  const [el, setEl] = useState("div")

  return (
    <>
      <View
        el={el}
        cl="#09f"
        ft="15px arial"
        ftLight
        onMouseEnter={() => setEl("h1")}
        onMouseLeave={() => setEl("div")}
      >
        Hello jsoft-react-view!
      </View>
    </>
  );
}

export default App;
```
*This way you change the `html` elements and with your creativity you can do much more.*

### Example 2 (VIEW_NULL) / Remove a component, or `HTML` element from` DOM`.
Suppose you have a messaging system and for some reason you want to remove any messages. How to make?

```javascript
import React, { useState } from "react";
import View from "jsoft-react-view";

function App() {
  const [el, removeEl] = useState("span")

  return (
    <>
      <View el={el}>Hello guys!</View>
      <View el="input" type="button" value="Remove" onClick={() => removeEl("VIEW_NULL")} />
    </>
  );
}

export default App;
```
*By adding `VIEW_NULL` as a value of `el` you are automatically removing the element from `DOM`*

### Example 3 / Agility in the use of `CSS`.
**Using `View` you can set your `CSS` in very short syntax without using the `pureStyle` or `style` property. There is a table that shows how to use this but we will show some peculiarities.**

Suppose you intend to change, for example, a color of a child element of a container when the mouse is inside that container.

```javascript
import React from "react";
import View from "jsoft-react-view";

function App() {
  return (
    <>
      <View el="article" hover={{cl: "#09f"}} hoverEffectEl=".myText">
          <View el="h1" className="myText">change my color</View>
      </View>
    </>
  );
}

export default App;
```
*Inside `hoverEffectEl` you can pass your `query` as in pure `CSS`. Example: `hoverEffectEl ="+ h1", hoverEffectEl ="> label"` and so on.*

or with `that` and `thatQuery`

```javascript
import React from "react";
import View from "jsoft-react-view";

function App() {
  return (
    <>
      <View el="article" that={{cl: "#09f"}} thatQuery="> h1">
          <View el="h1">change my color</View>
      </View>
    </>
  );
}

export default App;
```

### Example 4 / Responsive layout.
Using the `_mediaScreen` property you can define a display rule according to the dimensions provided.

```javascript
import React, { useState } from "react";
import View from "jsoft-react-view";

function App() {
  return (
    <>
      <View
        el="main"
        psRelative 
        wdHg="100%" 
        bgCl="#09f"
        _mediaScreen={{
          dimensions: "max-width: 720px",
          style: { bgCl: "#003" }
        }}
      />
    </>
  );
}

export default App;
```

or for multiple resolutions:

```javascript
import React, { useState } from "react";
import View from "jsoft-react-view";

function App() {
  return (
    <>
      <View
        el="main"
        psRelative 
        wdHg="100%" 
        bgCl="#09f"
        _mediaScreen={[
          {
            dimensions: "min-width: 520px",
            style: { bgCl: "#003" }
          },
          {
            dimensions: "min-width: 900px",
            style: { bgCl: "green" }
          }
        ]}
      />
    </>
  );
}

export default App;
```

### Example 5 / Working with pure `CSS`.
Using the `pureStyle` property, you set your styles to be using [`styled-components`](https://www.styled-components.com/) or rather you will be using [`styled-components`](https://www.styled-components.com/).

```javascript
import React, { useState } from "react";
import View from "jsoft-react-view";

function App() {
  return (
    <>
      <View
        el="main"
        pureStyle={`
          margin-top: 50px;
          :hover {background-color: red}
        `}
      />
    </>
  );
}

export default App;
```

or like this:

```javascript
import React, { useState } from "react";
import View from "jsoft-react-view";

function App() {
  return (
    <>
      <View
        el="main"
        psRelative 
        wdHg="100%" 
        bgCl="#09f"
        _mediaScreen={{
          dimensions: "max-width: 720px",
          style: { bgCl: "#003" },
          pureStyle: `padding: 20px;`
        }}
      />
    </>
  );
}

export default App;
```
*and so on...*

### Example 6 (`getRef`) / Referencing an Element.
```javascript
import React, { useState } from "react";
import View from "jsoft-react-view";

function App() {
  let refEl = null
  return (
    <>
      <View
        el="article"
        getRef={ref => (refEl = ref)}
        />
    </>
  );
}

export default App;
```

***These were some examples of how to use it and of course you can do much more according to your creativity.***

## CSS properties simplified
Properties that are not listed can be added using the `pureStyle` or` style` property.

*There are some `CSS` properties that are not listed, but are directly supported by` Views` without changing the original name of `CSS`.*

```javascript
{
  ps: "position",
  psRelative: "position:relative",
  psAbsolute: "position:absolute",
  psFixed: "position:fixed",
  psSticky: "position:sticky",
  pd: "padding",
  pdY: "padding-top:_val_;padding-bottom:_val",
  pdX: "padding-left:_val_;padding-right:_val_",
  pdT: "padding-top",
  pdL: "padding-left",
  pdR: "padding-right",
  pdB: "padding-bottom",
  mg: "margin",
  mgY: "margin-top:_val_;margin-bottom:_val_",
  mgX: "margin-left:_val_;margin-right:_val_",
  mgT: "margin-top",
  mgL: "margin-left",
  mgR: "margin-right",
  mgB: "margin-bottom",
  bd: "border",
  bdY: "border-top:_val_;border-bottom:_val_",
  bdX: "border-left:_val_;border-right:_val_",
  bdT: "border-top",
  bdL: "border-left",
  bdR: "border-right",
  bdB: "border-bottom",
  bdStyle: "border-style",
  bdYstyle: "border-top-style:_val_;border-bottom-style:_val_",
  bdXstyle: "border-left-style:_val_;border-right-style:_val_",
  bdTstyle: "border-top-style",
  bdLstyle: "border-left-style",
  bdRstyle: "border-right-style",
  bdBstyle: "border-bottom-style",
  bdBox: "box-sizing:border-box",
  bdSizing: "box-sizing",
  wd: "width",
  maxWd: "max-width",
  minWd: "min-width",
  solidWd: "min-width:_val_;width:_val_;max-width:_val_",
  hg: "height",
  maxHg: "max-height",
  minHg: "min-height",
  solidHg: "min-height:_val_;height:_val_;max-height:_Val_",
  wdHg: "width:_val_;height:_val_",
  dimensions:
    "min-width:_val_;width:_val_;max-width:_val_;min-height:_val_;height:_val_;max-height:_Val_",
  bg: "background",
  bgCl: "background-color",
  bgImg: "background-image",
  bgSize: "background-size",
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom",
  cl: "color",
  ft: "font",
  ftThin: "font-weight:100",
  ftLight: "font-weight:300",
  ftRegular: "font-weight:400",
  ftMedium: "font-weight:500",
  ftBold: "font-weight:700",
  ftSize: "font-size",
  ftSizeAdj: "font-size-adjust",
  ftFamily: "font-family",
  ftStyle: "font-style",
  ftVar: "font-variant",
  ftWg: "font-weight",
  lineHg: "line-height",
  txtTransform: "text-transform",
  txtAlign: "text-align",
  txtDecoration: "text-decoration",
  whiteSpace: "white-space",
  wordBreak: "word-break",
  liStyle: "list-style",
  elContent: "content",
  transition: "transition",
  shadow: "box-shadow",
  txtShadow: "box-shadow",
  radius: "border-radius",
  transform: "transform",
  display: "display",
  cln: "column",
  clnCount: "column-count",
  clnGap: "column-gap",
  clnWd: "column-width",
  clnBreakIn:
    "column-break-inside:_val_;page-break-inside:_val_;break-inside:_val_",
  float: "float",
  resize: "resize",
  opacity: "opacity",
  index: "z-index",
  cursor: "cursor",
  scroll: "overflow:auto",
  scrollY: "overflow:hidden;overflow-y:auto",
  scrollX: "overflow:hidden;overflow-x:auto",
  Flex: "flex",
  flex: "display:flex",
  flexDirection: "flex-direction",
  flexRow: "flex-direction:row",
  flexRowReverse: "flex-direction:row-reverse",
  flexColumn: "flex-direction:column",
  flexColumnReverse: "flex-direction:column-reverse",
  flexWrap: "flex-wrap",
  flexWrapReverse: "flex-wrap:wrap-reverse",
  flexNowrap: "flex-wrap:nowrap",
  order: "order",
  justifyContent: "justify-content",
  justifyContentStart: "justify-content:flex-start",
  justifyContentEnd: "justify-content:flex-end",
  justifyContentCenter: "justify-content:center",
  justifyContentBetween: "justify-content:space-between",
  justifyContentAround: "justify-content:space-around",
  justifyContentEvenly: "justify-content:space-evenly",
  alignItems: "align-items",
  alignItemsStart: "align-items:flex-start",
  alignItemsEnd: "align-items:flex-end",
  alignItemsCenter: "align-items:center",
  alignContent: "align-content",
  alignContentStart: "align-content:flex-start",
  alignContentEnd: "align-content:flex-end",
  alignContentCenter: "align-content:center",
  alignContentStretch: "align-content:stretch",
  alignContentBaseline: "align-content:baseline",
  alignContentBetween: "align-content:space-between",
  alignContentAround: "align-content:space-around",
  alignContentEvenly: "align-content:space-evenly",
  FlexGrow: "flex-grow",
  flexGrow: "flex-grow:1",
  alignSelf: "align-self",
  grid: "grid",
  placeholderStyle: "&::placeholder",
  hoverThis: "&:hover",
  hover: "&:hover",
  focusThis: "&:focus",
  focus: "&:focus",
  focusInsideThis: "&:focus-within",
  focusInside: "&:focus-within",
  focusWinThis: "&:focus-within",
  focusWin: "&:focus-within",
  activeThis: "&:active",
  active: "&:active",
  elBefore: "&::before",
  elAfter: "&::after",
  elLeft: "&:left",
  elRight: "&:right",
  that: "&",
  _mediaScreen: "@media only screen and (_dm_){_style_}"
}
```

## Contributing
Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versions
We use [SemVer](https://semver.org/) for versioning.

## Author
```
João Trindade
```

* **Email:** <joaotrindade.soft@gmail.com>
* **WhatsApp:** +244 913 056 212
* **Instagram:** jayjsoft
* **[Facebook](https://www.facebook.com/jaytrindade.jt)**

## License
This project is licensed under the MIT License

## Acknowledgments
* I thank God for all the good you have done in my life
* To all those who supported me and always believed in me