# **jsoft-react-view**
A [react.js](https://reactjs.org/) package to simplify **user interface** development, based on react-native **View** and more...

## Getting Started
![](https://raw.githubusercontent.com/Jaytrindade/jsoft-react-view/master/src/view/assets/img/getting-started-code-1.PNG)

###### On screens larger than 720px
![](https://raw.githubusercontent.com/Jaytrindade/jsoft-react-view/master/src/view/assets/img/getting-started-view-1.PNG)

###### On screens less than or equal to 720px
![](https://raw.githubusercontent.com/Jaytrindade/jsoft-react-view/master/src/view/assets/img/getting-started-view-2.PNG)

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
`jsoft-react-view` uses [`styled-components`](https://www.styled-components.com/) for styling its components. So you don't have to worry about prefixing css properties, class duplication, or unitized styles, and you have a reduced css syntax.

## Not everything is flowers!!
`jsoft-react-view` does not have a simplified syntax for all css properties, so you will have to style using the style property or import the [`styled-components`](https://www.styled-components.com/) and then do what you want using the [`styled-components`](https://www.styled-components.com/) components.

## Looking at this code you already know how to use it. Right?

```javascript
import React, { useEffect } from "react";
import View from "jsoft-react-view";

function App() {
  let refEl = null;
  useEffect(() => {console.log(refEl);}, [refEl]);

  return (
    <>
      <View
        el="main" className="App" flex justifyContentCenter alignItemsCenter
        psRelative wdHg="100%" bgCl="#09f"
        _mediaScrean={{
          dimensions: "max-width: 720px",
          style: { bgCl: "#003" }
        }}
        getRef={ref => (refEl = ref)}
      >
        <View
          el="h1" className="text" cl="#fff" ft="50px arial"ftBold
          hoverThis={{ cl: "#ddd" }}
        >
          Hello jsoft-react-view!
        </View>
      </View>
    </>
  );
}

export default App;
```

a little bit more organized:

```javascript
import React, { useEffect } from "react";
import View from "jsoft-react-view";

const style = {
    main: {
        flex: true,
        justifyContentCenter: true,
        alignItemsCenter: true,
        psRelative: true,
        wdHg: "100%",
        bgCl: "#09f",
        _mediaScrean: {
          dimensions: "max-width: 720px",
          style: { bgCl: "#003" }
        }
    },
    h1: {
        cl:"#fff",
        ft:"50px arial",
        ftBold: true,
        hoverThis: { cl: "#ddd" }
    }
}

function App() {
  let refEl = null;
  useEffect(() => {console.log(refEl);}, [refEl]);

  return (
    <>
      <View
        el="main" className="App" 
        {...style.main}
        getRef={ref => (refEl = ref)}
      >
        <View
          el="h1" className="text" {...style.h1}
        >
          Hello jsoft-react-view!
        </View>
      </View>
    </>
  );
}

export default App;
```

*The `View` has a `el` property that allows you to specify which `HTML` element to use. To find out which `HTML` elements are supported take a look at [`styled-components`](https://www.styled-components.com/).*

## CSS properties simplified
Properties that are not listed in the table can be added using the `style` property.*

*There are some properties that are not listed but it is directly supported by `Views` without changing their original normal `css` name.*

| Normal CSS Properties                                         	| jsoft-react-view             	| example                                                                                                                     	|
|---------------------------------------------------------------	|------------------------------	|-----------------------------------------------------------------------------------------------------------------------------	|
| `position`                                                    	| `ps`                         	| `<View ps="relative" />`                                                                                                    	|
| `position: relative;`                                         	| `psRelative: true;`          	| `<View psRelative />`                                                                                                       	|
| `position: absolute;`                                         	| `psAbsolute: true;`          	| `<View psAbsolute />`                                                                                                       	|
| `position: fixed;`                                            	| `psFixed: true`              	| `<View psFixed />`                                                                                                          	|
| `position: sticky;`                                           	| `psSticky: true`             	| `<View psSticky />`                                                                                                         	|
| `padding`                                                     	| `pd`                         	| `<View pd="10px" />`                                                                                                        	|
| `padding-top, padding-bottom`                                 	| `pdY`                        	| `<View pdY="6px" />`                                                                                                        	|
| `padding-left, padding-right`                                 	| `pdX`                        	| `<View pdX="8px" />`                                                                                                        	|
| `padding-top`                                                 	| `pdT`                        	| `<View pdT="1px" />`                                                                                                        	|
| `padding-left`                                                	| `pdL`                        	| `<View pdL="2px" />`                                                                                                        	|
| `padding-right`                                               	| `pdR`                        	| `<View pdR="3px" />`                                                                                                        	|
| `padding-bottom`                                              	| `pdB`                        	| `<View pdB="4px" />`                                                                                                        	|
| `margin`                                                      	| `mg`                         	| `<View mg="1px" />`                                                                                                         	|
| `margin-top, margin-bottom`                                   	| `mgY`                        	| `<View mgY="2px" />`                                                                                                        	|
| `margin-left, margin-right`                                   	| `mgX`                        	| `<View mgX="3px" />`                                                                                                        	|
| `margin-top`                                                  	| `mgT`                        	| `<View mgT="4px" />`                                                                                                        	|
| `margin-left`                                                 	| `mgL`                        	| `<View mgL="5px" />`                                                                                                        	|
| `margin-right`                                                	| `mgR`                        	| `<View mgR="6px" />`                                                                                                        	|
| `margin-bottom`                                               	| `mgB`                        	| `<View mgB="7px" />`                                                                                                        	|
| `border`                                                      	| `bd`                         	| `<View bd="1px" />`                                                                                                         	|
| `border-top, border-bottom`                                   	| `bdY`                        	| `<View bdY="2px" />`                                                                                                        	|
| `border-left, border-right`                                   	| `bdX`                        	| `<View bdX="3px" />`                                                                                                        	|
| `border-top`                                                  	| `bdT`                        	| `<View bdT="4px" />`                                                                                                        	|
| `border-left`                                                 	| `bdL`                        	| `<View bdL="5px" />`                                                                                                        	|
| `border-right`                                                	| `bdR`                        	| `<View bdR="6px" />`                                                                                                        	|
| `border-bottom`                                               	| `bdB`                        	| `<View bdB="7px" />`                                                                                                        	|
| `border-style`                                                	| `bdStyle`                    	| `<View bdStyle="solid" />`                                                                                                  	|
| `border-top-style, border-bottom-style`                       	| `bdYstyle`                   	| `<View bdYstyle="solid" />`                                                                                                 	|
| `border-left-style, border-right-style`                       	| `bdXstyle`                   	| `<View bdXstyle="solid" />`                                                                                                 	|
| `border-top-style`                                            	| `bdTstyle`                   	| `<View bdTstyle="solid" />`                                                                                                 	|
| `border-left-style`                                           	| `bdLstyle`                   	| `<View bdLstyle="solid" />`                                                                                                 	|
| `border-right-style`                                          	| `bdRstyle`                   	| `<View bdRstyle="solid" />`                                                                                                 	|
| `border-bottom-style`                                         	| `bdBstyle`                   	| `<View bdBstyle="solid" />`                                                                                                 	|
| `width`                                                       	| `wd`                         	| `<View wd="10px" />`                                                                                                        	|
| `max-width`                                                   	| `maxWd`                      	| `<View maxWd="10px" />`                                                                                                     	|
| `min-width`                                                   	| `minWd`                      	| `<View minWd="10px" />`                                                                                                     	|
| `width, min-width, max-width`                                 	| `solidWd`                    	| `<View solidWd="10px" />`                                                                                                   	|
| `height`                                                      	| `hg`                         	| `<View hg="10px" />`                                                                                                        	|
| `max-height`                                                  	| `maxHg`                      	| `<View maxHg="10px" />`                                                                                                     	|
| `min-height`                                                  	| `minHg`                      	| `<View minHg="10px" />`                                                                                                     	|
| `height, min-height, max-height`                              	| `solidHg`                    	| `<View solidHg="10px" />`                                                                                                   	|
| `width, height`                                               	| `wdHg`                       	| `<View wdHg="10px" />`                                                                                                      	|
| `width, height, min-width, min-height, max-width, max-height` 	| `dimensions`                 	| `<View dimensions="10px" />`                                                                                                	|
| `background`                                                  	| `bg`                         	| `<View bg="#09f url(...)" />`                                                                                               	|
| `background-color`                                            	| `bgCl`                       	| `<View bgCl="#09f" />`                                                                                                      	|
| `background-image`                                            	| `bgImg`                      	| `<View bgImg="url(...)" />`                                                                                                 	|
| `background-size`                                             	| `bgSize`                     	| `<View bgSize="cover" />`                                                                                                   	|
| `color`                                                       	| `cl`                         	| `<View cl="#09f" />`                                                                                                        	|
| `::placeholder`                                               	| `placeholder`                	| `<View placeholder={{cl: "green"}} />`                                                                                      	|
| `font`                                                        	| `ft`                         	| `<View ft="13px arial" />`                                                                                                  	|
| `font-weight: 100;`                                           	| `ftThin`                     	| `<View ftThin />`                                                                                                           	|
| `font-weight: 300;`                                           	| `ftLight`                    	| `<View ftLight />`                                                                                                          	|
| `font-weight: 400;`                                           	| `ftRegular`                  	| `<View ftRegular />`                                                                                                        	|
| `font-weight: 500;`                                           	| `ftMediun`                   	| `<View ftMediun />`                                                                                                         	|
| `font-weight: 700;`                                           	| `ftBold`                     	| `<View ftBold/>`                                                                                                            	|
| `font-size`                                                   	| `ftSize`                     	| `<View ftSize="20px" />`                                                                                                    	|
| `font-family`                                                 	| `ftFamily`                   	| `<View ftFamily="arial cursive" />`                                                                                         	|
| `line-height`                                                 	| `lineHg`                     	| `<View lineHg="30px" />`                                                                                                    	|
| `text-transform`                                              	| `txtTransform`               	| `<View txtTransform="scale(2)" />`                                                                                          	|
| `text-align`                                                  	| `txtAlign`                   	| `<View txtAlign="center" />`                                                                                                	|
| `text-decoration`                                             	| `txtDecoration`              	| `<View txtDecoration="none" />`                                                                                             	|
| `white-space`                                                 	| `whiteSpace`                 	| `<View whiteSpace="nowrap" />`                                                                                              	|
| `word-break`                                                  	| `wordBreak`                  	| `<View wordBreak="break-all" />`                                                                                            	|
| `list-style`                                                  	| `liStyle`                    	| `<View liStyle="square inside url("sqpurple.gif")" />`                                                                      	|
| `content`                                                     	| `elContent`                  	| `<View elContent="jsoft" />`                                                                                                	|
| `box-shadow`                                                  	| `shadow`                     	| `<View shadow="0 0 1px #000" />`                                                                                            	|
| `text-shadow`                                                 	| `txtShadow`                  	| `<View txtShadow="0 0 1px blue" />`                                                                                         	|
| `border-radius`                                               	| `radius`                     	| `<View radius="50%" />`                                                                                                     	|
| `columns`                                                     	| `cln`                        	| `<View cln="100px 3" />`                                                                                                    	|
| `column-count`                                                	| `clnCount`                   	| `<View clnCount="3" />`                                                                                                     	|
| `column-gap`                                                  	| `clnGap`                     	| `<View clnGap="30px" />`                                                                                                    	|
| `column-width`                                                	| `clWd`                       	| `<View clnWd="100px" />`                                                                                                    	|
| `column-break-inside, page-break-inside, break-inside`        	| `clnBreakIn`                 	| `<View clnBreakIn="auto" />`                                                                                                	|
| `z-index`                                                     	| `index`                      	| `<View index="-1" />`                                                                                                       	|
| `overflow: hidden; overflow-y: auto;`                         	| `scrollY`                    	| `<View scrollY />`                                                                                                          	|
| `overflow: hidden; overflow-x: auto;`                         	| `scrollX`                    	| `<View scrollX />`                                                                                                          	|
| `overflow: auto;`                                             	| `scroll`                     	| `<View scroll />`                                                                                                           	|
| `display: flex;`                                              	| `flex`                       	| `<View flex />`                                                                                                             	|
| `flex-direction`                                              	| `flexDirection`              	| `<View flexDirection="column" />`                                                                                           	|
| `flex-direction: row;`                                        	| `flexRow`                    	| `<View flexRow />`                                                                                                          	|
| `flex-direction: row-reverse;`                                	| `flexRowReverse`             	| `<View flexRowReverse />`                                                                                                   	|
| `flex-direction: column;`                                     	| `flexColumn`                 	| `<View flexColumn />`                                                                                                       	|
| `flex-direction: column-reverse;`                             	| `flexColumnReverse`          	| `<View flexColumnReverse />`                                                                                                	|
| `flex-wrap: wrap;`                                            	| `flexWrap`                   	| `<View flexWrap />`                                                                                                         	|
| `flex-wrap: wrap-reverse;`                                    	| `flexWrapReverse`            	| `<View flexWrapReverse />`                                                                                                  	|
| `flex-wrap: nowrap;`                                          	| `flexNowrap`                 	| `<View flexNowrap />`                                                                                                       	|
| `justify-content`                                             	| `justifyContent`             	| `<View justifyContent="space-between" />`                                                                                   	|
| `justify-content: flex-start;`                                	| `justifyContentStart`        	| `<View justifyContentStart />`                                                                                              	|
| `justify-content: flex-end;`                                  	| `justifyContentEnd`          	| `<View justifyContentEnd />`                                                                                                	|
| `justify-content: center;`                                    	| `justifyContentCenter`       	| `<View justifyContentCenter />`                                                                                             	|
| `justify-content: space-between;`                             	| `justifyContentBetween`      	| `<View justifyContentBetween />`                                                                                            	|
| `justify-content: space-around;`                              	| `justifyContentAround`       	| `<View justifyContentAround />`                                                                                             	|
| `justify-content: space-evenly;`                              	| `justifyContentEvenly`       	| `<View justifyContentEvenly />`                                                                                             	|
| `align-content`                                               	| `alignContent`               	| `<View alignContent="flex-end" />`                                                                                          	|
| `align-content: flex-start;`                                  	| `alignContentStart`          	| `<View alignContentStart/>`                                                                                                 	|
| `align-content: flex-end;`                                    	| `alignContentEnd`            	| `<View alignContentEnd />`                                                                                                  	|
| `align-content: center;`                                      	| `alignContentCenter`         	| `<View alignContentCenter />`                                                                                               	|
| `align-content: stretch;`                                     	| `alignContentStretch`        	| `<View alignContentStretch />`                                                                                              	|
| `align-content: baseline;`                                    	| `alignContentBaseline`       	| `<View alignContentBaseline />`                                                                                             	|
| `align-content: space-between;`                               	| `alignContentBetween`        	| `<View alignContentBetween />`                                                                                              	|
| `align-content: space-around;`                                	| `alignContentAround`         	| `<View alignContentAround />`                                                                                               	|
| `align-content: space-evenly;`                                	| `alignContentEvenly`         	| `<View alignContentEvenly />`                                                                                               	|
| `align-items`                                                 	| `alignItems`                 	| `<View alignItems="center" />`                                                                                              	|
| `align-items: flex-start;`                                    	| `alignItemsStart`            	| `<View alignItemsStart />`                                                                                                  	|
| `align-items: flex-end;`                                      	| `alignItemsEnd`              	| `<View alignItemsEnd />`                                                                                                    	|
| `align-items: center;`                                        	| `alignItemsCenter`           	| `<View alignItemsCenter />`                                                                                                 	|
| `align-items: stretch;`                                       	| `alignItemsStretch`          	| `<View alignItemsStretch />`                                                                                                	|
| `align-items: baseline;`                                      	| `alignItemsBaseline`         	| `<View alignItemsBaseline />`                                                                                               	|
| `align-items: space-between;`                                 	| `alignItemsBetween`          	| `<View alignItemsBetween />`                                                                                                	|
| `align-items: space-around;`                                  	| `alignItemsAround`           	| `<View alignItemsAround />`                                                                                                 	|
| `align-items: space-evenly;`                                  	| `alignItemsEvenly`           	| `<View alignItemsEvenly/>`                                                                                                  	|
| `flex-grow: 1;`                                               	| `flexGrow`                   	| `<View flexGrow />`                                                                                                         	|
| `align-self`                                                  	| `alignSelf`                  	| `<View alignSelf="center"/>`                                                                                                	|
| `:hover .something`                                           	| `hover, hoverEffectEl`       	| `<View hover={{cl: "#09f"}} hoverEffectEl=".something"><View el="span" className="something">Hello!</View></View>`          	|
| `:hover`                                                      	| `hoverThis`                  	| `<View hoverThis={{bg: "green"}} />`                                                                                        	|
| `:focus .something`                                           	| `focus, focusEffectEl`       	| `<View focus={{cl: "#09f"}} focusEffectEl=".something"><View el="span" className="something">Hello!</View></View>`          	|
| `:focus`                                                      	| `focusThis`                  	| `<View focusThis={{bg: "green"}} />`                                                                                        	|
| `:focus-within .something`                                    	| `focusWin, focusWinEffectEl` 	| `<View focusWin={{cl: "#09f"}} focusWinEffectEl=".something"><View el="span" className="something">Hello!</View></View>`    	|
| `:focus-within`                                               	| `focusWinThis`               	| `<View focusWinThis={{bg: "green"}} />`                                                                                     	|
| `:active .something`                                          	| `active, activeEffectEl`     	| `<View el="a" active={{cl: "#09f"}} activeEffectEl=".something"><View el="span" className="something">Hello!</View></View>` 	|
| `:active`                                                     	| `activeThis`                 	| `<View activeThis={{bg: "green"}} />`                                                                                       	|
| `::before`                                                    	| `elBefore`                   	| `<View elBefore={{bg: "blue"}} />`                                                                                          	|
| `::after`                                                     	| `elAfter`                    	| `<View elAfter={{bg: "red"}} />`                                                                                            	|
| `@media only screen and (min-width: 100px, max-width: 720px)` 	| `_mediaScrean`               	| `<View _mediaScrean={{dimensions: "min-width: 720px", style: {bg: "#09f"}}} />`                                             	|

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