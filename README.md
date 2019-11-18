# **jsoft-react-view**
A [`react.js`](https://reactjs.org/) package to simplify *user interface* development quickly and simply based on `react-native` ` View` and more.

## Getting Started
![](https://raw.githubusercontent.com/Jaytrindade/jsoft-react-view/master/src/view/assets/img/getting-started-code-2.PNG)

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
```

or in development mode:

``` 
$ npm install --save-dev jsoft-react-view 
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

## What jsoft-react-view offers us?
`jsoft-react-view` gives us a simple way of styling our components as if using a `template` like `bootstrap` for example.

## What else is good?
`jsoft-react-view` uses [`styled-components`](https://www.styled-components.com/) to style its components. Therefore, you don't have to worry about prefixing the css, class duplication, or unitized styles properties, and it also has a reduced css syntax.

## Not everything is flowers!!
`jsoft-react-view` does not have a simplified syntax for all css properties, so you will have to style using the` style` property or import [`styled-components`](https://www.styled-components.com/) and do whatever you want using [`styled-components`](https://www.styled-components.com/) components.

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
Suppose you want to change the `html` of a component, ie its `tag`, such as `div` to `h1`. How would it be done using `View`?

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
        onMouseLeave={() => setEl("label")}
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
**Using `View` you can set your `CSS` in very short syntax without using the `style` property. There is a table that shows how to use this but we will show some peculiarities.**

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

### Example 4 / Responsive layout.
Using the `_mediaScrean` property you can define a display rule according to the dimensions provided.

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
        _mediaScrean={{
          dimensions: "max-width: 720px",
          style: { bgCl: "#003" }
        }}
      />
    </>
  );
}

export default App;
```

### Example 5 (`getRef`) / Referencing an Element.
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
Properties that are not listed in the table can be added using the `style` property.*

*There are some `CSS` properties that are not listed, but are directly supported by` Views` without changing the original name of `CSS`.*

| jsoft-react-view             	| Normal CSS Properties                                         	| example                                                                                                                     	|
|------------------------------	|---------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------	|
| `ps`                         	| `position`                                                    	| `<View ps="relative" />`                                                                                                    	|
| `psRelative`                 	| `position: relative;`                                         	| `<View psRelative />`                                                                                                       	|
| `psAbsolute`                 	| `position: absolute;`                                         	| `<View psAbsolute />`                                                                                                       	|
| `psFixed`                    	| `position: fixed;`                                            	| `<View psFixed />`                                                                                                          	|
| `psSticky`                   	| `position: sticky;`                                           	| `<View psSticky />`                                                                                                         	|
| `pd`                         	| `padding`                                                     	| `<View pd="10px" />`                                                                                                        	|
| `pdY`                        	| `padding-top, padding-bottom`                                 	| `<View pdY="6px" />`                                                                                                        	|
| `pdX`                        	| `padding-left, padding-right`                                 	| `<View pdX="8px" />`                                                                                                        	|
| `pdT`                        	| `padding-top`                                                 	| `<View pdT="1px" />`                                                                                                        	|
| `pdL`                        	| `padding-left`                                                	| `<View pdL="2px" />`                                                                                                        	|
| `pdR`                        	| `padding-right`                                               	| `<View pdR="3px" />`                                                                                                        	|
| `pdB`                        	| `padding-bottom`                                              	| `<View pdB="4px" />`                                                                                                        	|
| `mg`                         	| `margin`                                                      	| `<View mg="1px" />`                                                                                                         	|
| `mgY`                        	| `margin-top, margin-bottom`                                   	| `<View mgY="2px" />`                                                                                                        	|
| `mgX`                        	| `margin-left, margin-right`                                   	| `<View mgX="3px" />`                                                                                                        	|
| `mgT`                        	| `margin-top`                                                  	| `<View mgT="4px" />`                                                                                                        	|
| `mgL`                        	| `margin-left`                                                 	| `<View mgL="5px" />`                                                                                                        	|
| `mgR`                        	| `margin-right`                                                	| `<View mgR="6px" />`                                                                                                        	|
| `mgB`                        	| `margin-bottom`                                               	| `<View mgB="7px" />`                                                                                                        	|
| `bd`                         	| `border`                                                      	| `<View bd="1px" />`                                                                                                         	|
| `bdY`                        	| `border-top, border-bottom`                                   	| `<View bdY="2px" />`                                                                                                        	|
| `bdX`                        	| `border-left, border-right`                                   	| `<View bdX="3px" />`                                                                                                        	|
| `bdT`                        	| `border-top`                                                  	| `<View bdT="4px" />`                                                                                                        	|
| `bdL`                        	| `border-left`                                                 	| `<View bdL="5px" />`                                                                                                        	|
| `bdR`                        	| `border-right`                                                	| `<View bdR="6px" />`                                                                                                        	|
| `bdB`                        	| `border-bottom`                                               	| `<View bdB="7px" />`                                                                                                        	|
| `bdStyle`                    	| `border-style`                                                	| `<View bdStyle="solid" />`                                                                                                  	|
| `bdYstyle`                   	| `border-top-style, border-bottom-style`                       	| `<View bdYstyle="solid" />`                                                                                                 	|
| `bdXstyle`                   	| `border-left-style, border-right-style`                       	| `<View bdXstyle="solid" />`                                                                                                 	|
| `bdTstyle`                   	| `border-top-style`                                            	| `<View bdTstyle="solid" />`                                                                                                 	|
| `bdLstyle`                   	| `border-left-style`                                           	| `<View bdLstyle="solid" />`                                                                                                 	|
| `bdRstyle`                   	| `border-right-style`                                          	| `<View bdRstyle="solid" />`                                                                                                 	|
| `bdBstyle`                   	| `border-bottom-style`                                         	| `<View bdBstyle="solid" />`                                                                                                 	|
| `wd`                         	| `width`                                                       	| `<View wd="10px" />`                                                                                                        	|
| `maxWd`                      	| `max-width`                                                   	| `<View maxWd="10px" />`                                                                                                     	|
| `minWd`                      	| `min-width`                                                   	| `<View minWd="10px" />`                                                                                                     	|
| `solidWd`                    	| `width, min-width, max-width`                                 	| `<View solidWd="10px" />`                                                                                                   	|
| `hg`                         	| `height`                                                      	| `<View hg="10px" />`                                                                                                        	|
| `maxHg`                      	| `max-height`                                                  	| `<View maxHg="10px" />`                                                                                                     	|
| `minHg`                      	| `min-height`                                                  	| `<View minHg="10px" />`                                                                                                     	|
| `solidHg`                    	| `height, min-height, max-height`                              	| `<View solidHg="10px" />`                                                                                                   	|
| `wdHg`                       	| `width, height`                                               	| `<View wdHg="10px" />`                                                                                                      	|
| `dimensions`                 	| `width, height, min-width, min-height, max-width, max-height` 	| `<View dimensions="10px" />`                                                                                                	|
| `bg`                         	| `background`                                                  	| `<View bg="#09f url(...)" />`                                                                                               	|
| `bgCl`                       	| `background-color`                                            	| `<View bgCl="#09f" />`                                                                                                      	|
| `bgImg`                      	| `background-image`                                            	| `<View bgImg="url(...)" />`                                                                                                 	|
| `bgSize`                     	| `background-size`                                             	| `<View bgSize="cover" />`                                                                                                   	|
| `cl`                         	| `color`                                                       	| `<View cl="#09f" />`                                                                                                        	|
| `placeholder`                	| `::placeholder`                                               	| `<View placeholder={{cl: "green"}} />`                                                                                      	|
| `ft`                         	| `font`                                                        	| `<View ft="13px arial" />`                                                                                                  	|
| `ftThin`                     	| `font-weight: 100;`                                           	| `<View ftThin />`                                                                                                           	|
| `ftLight`                    	| `font-weight: 300;`                                           	| `<View ftLight />`                                                                                                          	|
| `ftRegular`                  	| `font-weight: 400;`                                           	| `<View ftRegular />`                                                                                                        	|
| `ftMediun`                   	| `font-weight: 500;`                                           	| `<View ftMediun />`                                                                                                         	|
| `ftBold`                     	| `font-weight: 700;`                                           	| `<View ftBold/>`                                                                                                            	|
| `ftSize`                     	| `font-size`                                                   	| `<View ftSize="20px" />`                                                                                                    	|
| `ftFamily`                   	| `font-family`                                                 	| `<View ftFamily="arial cursive" />`                                                                                         	|
| `lineHg`                     	| `line-height`                                                 	| `<View lineHg="30px" />`                                                                                                    	|
| `txtTransform`               	| `text-transform`                                              	| `<View txtTransform="scale(2)" />`                                                                                          	|
| `txtAlign`                   	| `text-align`                                                  	| `<View txtAlign="center" />`                                                                                                	|
| `txtDecoration`              	| `text-decoration`                                             	| `<View txtDecoration="none" />`                                                                                             	|
| `whiteSpace`                 	| `white-space`                                                 	| `<View whiteSpace="nowrap" />`                                                                                              	|
| `wordBreak`                  	| `word-break`                                                  	| `<View wordBreak="break-all" />`                                                                                            	|
| `liStyle`                    	| `list-style`                                                  	| `<View liStyle="square inside url("sqpurple.gif")" />`                                                                      	|
| `elContent`                  	| `content`                                                     	| `<View elContent="jsoft" />`                                                                                                	|
| `shadow`                     	| `box-shadow`                                                  	| `<View shadow="0 0 1px #000" />`                                                                                            	|
| `txtShadow`                  	| `text-shadow`                                                 	| `<View txtShadow="0 0 1px blue" />`                                                                                         	|
| `radius`                     	| `border-radius`                                               	| `<View radius="50%" />`                                                                                                     	|
| `cln`                        	| `columns`                                                     	| `<View cln="100px 3" />`                                                                                                    	|
| `clnCount`                   	| `column-count`                                                	| `<View clnCount="3" />`                                                                                                     	|
| `clnGap`                     	| `column-gap`                                                  	| `<View clnGap="30px" />`                                                                                                    	|
| `clWd`                       	| `column-width`                                                	| `<View clnWd="100px" />`                                                                                                    	|
| `clnBreakIn`                 	| `column-break-inside, page-break-inside, break-inside`        	| `<View clnBreakIn="auto" />`                                                                                                	|
| `index`                      	| `z-index`                                                     	| `<View index="-1" />`                                                                                                       	|
| `scrollY`                    	| `overflow: hidden; overflow-y: auto;`                         	| `<View scrollY />`                                                                                                          	|
| `scrollX`                    	| `overflow: hidden; overflow-x: auto;`                         	| `<View scrollX />`                                                                                                          	|
| `scroll`                     	| `overflow: auto;`                                             	| `<View scroll />`                                                                                                           	|
| `flex`                       	| `display: flex;`                                              	| `<View flex />`                                                                                                             	|
| `flexDirection`              	| `flex-direction`                                              	| `<View flexDirection="column" />`                                                                                           	|
| `flexRow`                    	| `flex-direction: row;`                                        	| `<View flexRow />`                                                                                                          	|
| `flexRowReverse`             	| `flex-direction: row-reverse;`                                	| `<View flexRowReverse />`                                                                                                   	|
| `flexColumn`                 	| `flex-direction: column;`                                     	| `<View flexColumn />`                                                                                                       	|
| `flexColumnReverse`          	| `flex-direction: column-reverse;`                             	| `<View flexColumnReverse />`                                                                                                	|
| `flexWrap`                   	| `flex-wrap: wrap;`                                            	| `<View flexWrap />`                                                                                                         	|
| `flexWrapReverse`            	| `flex-wrap: wrap-reverse;`                                    	| `<View flexWrapReverse />`                                                                                                  	|
| `flexNowrap`                 	| `flex-wrap: nowrap;`                                          	| `<View flexNowrap />`                                                                                                       	|
| `justifyContent`             	| `justify-content`                                             	| `<View justifyContent="space-between" />`                                                                                   	|
| `justifyContentStart`        	| `justify-content: flex-start;`                                	| `<View justifyContentStart />`                                                                                              	|
| `justifyContentEnd`          	| `justify-content: flex-end;`                                  	| `<View justifyContentEnd />`                                                                                                	|
| `justifyContentCenter`       	| `justify-content: center;`                                    	| `<View justifyContentCenter />`                                                                                             	|
| `justifyContentBetween`      	| `justify-content: space-between;`                             	| `<View justifyContentBetween />`                                                                                            	|
| `justifyContentAround`       	| `justify-content: space-around;`                              	| `<View justifyContentAround />`                                                                                             	|
| `justifyContentEvenly`       	| `justify-content: space-evenly;`                              	| `<View justifyContentEvenly />`                                                                                             	|
| `alignContent`               	| `align-content`                                               	| `<View alignContent="flex-end" />`                                                                                          	|
| `alignContentStart`          	| `align-content: flex-start;`                                  	| `<View alignContentStart/>`                                                                                                 	|
| `alignContentEnd`            	| `align-content: flex-end;`                                    	| `<View alignContentEnd />`                                                                                                  	|
| `alignContentCenter`         	| `align-content: center;`                                      	| `<View alignContentCenter />`                                                                                               	|
| `alignContentStretch`        	| `align-content: stretch;`                                     	| `<View alignContentStretch />`                                                                                              	|
| `alignContentBaseline`       	| `align-content: baseline;`                                    	| `<View alignContentBaseline />`                                                                                             	|
| `alignContentBetween`        	| `align-content: space-between;`                               	| `<View alignContentBetween />`                                                                                              	|
| `alignContentAround`         	| `align-content: space-around;`                                	| `<View alignContentAround />`                                                                                               	|
| `alignContentEvenly`         	| `align-content: space-evenly;`                                	| `<View alignContentEvenly />`                                                                                               	|
| `alignItems`                 	| `align-items`                                                 	| `<View alignItems="center" />`                                                                                              	|
| `alignItemsStart`            	| `align-items: flex-start;`                                    	| `<View alignItemsStart />`                                                                                                  	|
| `alignItemsEnd`              	| `align-items: flex-end;`                                      	| `<View alignItemsEnd />`                                                                                                    	|
| `alignItemsCenter`           	| `align-items: center;`                                        	| `<View alignItemsCenter />`                                                                                                 	|
| `alignItemsStretch`          	| `align-items: stretch;`                                       	| `<View alignItemsStretch />`                                                                                                	|
| `alignItemsBaseline`         	| `align-items: baseline;`                                      	| `<View alignItemsBaseline />`                                                                                               	|
| `alignItemsBetween`          	| `align-items: space-between;`                                 	| `<View alignItemsBetween />`                                                                                                	|
| `alignItemsAround`           	| `align-items: space-around;`                                  	| `<View alignItemsAround />`                                                                                                 	|
| `alignItemsEvenly`           	| `align-items: space-evenly;`                                  	| `<View alignItemsEvenly/>`                                                                                                  	|
| `flexGrow`                   	| `flex-grow: 1;`                                               	| `<View flexGrow />`                                                                                                         	|
| `alignSelf`                  	| `align-self`                                                  	| `<View alignSelf="center"/>`                                                                                                	|
| `hover, hoverEffectEl`       	| `:hover .something`                                           	| `<View hover={{cl: "#09f"}} hoverEffectEl=".something"><View el="span" className="something">Hello!</View></View>`          	|
| `hoverThis`                  	| `:hover`                                                      	| `<View hoverThis={{bg: "green"}} />`                                                                                        	|
| `focus, focusEffectEl`       	| `:focus .something`                                           	| `<View focus={{cl: "#09f"}} focusEffectEl=".something"><View el="span" className="something">Hello!</View></View>`          	|
| `focusThis`                  	| `:focus`                                                      	| `<View focusThis={{bg: "green"}} />`                                                                                        	|
| `focusWin, focusWinEffectEl` 	| `:focus-within .something`                                    	| `<View focusWin={{cl: "#09f"}} focusWinEffectEl=".something"><View el="span" className="something">Hello!</View></View>`    	|
| `focusWinThis`               	| `:focus-within`                                               	| `<View focusWinThis={{bg: "green"}} />`                                                                                     	|
| `active, activeEffectEl`     	| `:active .something`                                          	| `<View el="a" active={{cl: "#09f"}} activeEffectEl=".something"><View el="span" className="something">Hello!</View></View>` 	|
| `activeThis`                 	| `:active`                                                     	| `<View activeThis={{bg: "green"}} />`                                                                                       	|
| `elBefore`                   	| `::before`                                                    	| `<View elBefore={{bg: "blue"}} />`                                                                                          	|
| `elAfter`                    	| `::after`                                                     	| `<View elAfter={{bg: "red"}} />`                                                                                            	|
| `_mediaScrean`               	| `@media only screen and (min-width: 100px, max-width: 720px)` 	| `<View _mediaScrean={{dimensions: "min-width: 720px", style: {bg: "#09f"}}} />`                                             	|                                             	|

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