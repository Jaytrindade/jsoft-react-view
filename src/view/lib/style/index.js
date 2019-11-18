import styled from "styled-components";

const defaultElemenst = props => {
  let render = "";
  if (props.pureStyle) render += props.pureStyle;
  if (props.ps) render += `position: ${props.ps};`;
  if (props.psRelative) render += `position: relative;`;
  if (props.psAbsolute) render += `position: relative;`;
  if (props.psFixed) render += `position: fixed;`;
  if (props.psSticky) render += `position: sticky;`;
  if (props.pd) render += `padding: ${props.pd};`;
  if (props.pdY)
    render += `padding-top: ${props.pdY}; padding-bottom: ${props.pdY};`;
  if (props.pdX)
    render += `padding-left: ${props.pdX}; padding-right: ${props.pdX};`;
  if (props.pdT) render += `padding-top: ${props.pdT};`;
  if (props.pdL) render += `padding-left: ${props.pdL};`;
  if (props.pdR) render += `padding-right: ${props.pdR};`;
  if (props.pdB) render += `padding-bottom: ${props.pdB};`;
  if (props.mg) render += `margin: ${props.mg};`;
  if (props.mgY)
    render += `margin-top: ${props.mgY}; margin-bottom: ${props.mgY};`;
  if (props.mgX)
    render += `margin-left: ${props.mgX}; margin-right: ${props.mgX};`;
  if (props.mgT) render += `margin-top: ${props.mgT};`;
  if (props.mgL) render += `margin-left: ${props.mgL};`;
  if (props.mgR) render += `margin-right: ${props.mgR};`;
  if (props.mgB) render += `margin-bottom: ${props.mgB};`;
  if (props.bd) render += `border: ${props.bd};`;
  if (props.bdCl) render += `border-color: ${props.bdCl};`;
  if (props.bdWd) render += `border-width: ${props.bdWd};`;
  if (props.bdY)
    render += `border-top: ${props.bdY}; border-bottom: ${props.bdY};`;
  if (props.bdX)
    render += `border-left: ${props.bdX}; border-right: ${props.bdX};`;
  if (props.bdT) render += `border-top: ${props.bdT};`;
  if (props.bdL) render += `border-left: ${props.bdL};`;
  if (props.bdR) render += `border-right: ${props.bdR};`;
  if (props.bdB) render += `border-bottom: ${props.bdB};`;
  if (props.bdStyle) render += `border-style: ${props.bdStyle};`;
  if (props.bdYstyle)
    render += `border-top-style: ${props.bdYstyle};border-bottom-style: ${props.bdYstyle};`;
  if (props.bdXstyle)
    render += `border-left-style: ${props.bdXstyle};border-right-style: ${props.bdXstyle};`;
  if (props.bdTstyle) render += `border-top-style: ${props.bdTstyle};`;
  if (props.bdLstyle) render += `border-left-style: ${props.bdLstyle};`;
  if (props.bdRstyle) render += `border-right-style: ${props.bdRstyle};`;
  if (props.bdBstyle) render += `border-bottom-style: ${props.bdBstyle};`;
  if (props.wd) render += `width: ${props.wd};`;
  if (props.maxWd) render += `max-width: ${props.maxWd};`;
  if (props.minWd) render += `min-width: ${props.minWd};`;
  if (props.solidWd)
    render += `width: ${props.solidWd};min-width: ${props.solidWd}; max-width: ${props.solidWd};`;
  if (props.hg) render += `height: ${props.hg};`;
  if (props.maxHg) render += `max-height: ${props.maxHg};`;
  if (props.minHg) render += `min-height: ${props.minHg};`;
  if (props.solidHg)
    render += `height: ${props.solidWd};min-height: ${props.solidWd}; max-height: ${props.solidWd};`;
  if (props.wdHg) render += `width: ${props.wdHg}; height: ${props.wdHg};`;
  if (props.dimensions)
    render += `width: ${props.dimensions}; min-width: ${props.dimensions}; height: ${props.dimensions}; min-height: ${props.dimensions};`;
  if (props.bg) render += `background: ${props.bg};`;
  if (props.bgCl) render += `background-color: ${props.bgCl};`;
  if (props.bgImg) render += `background-color: ${props.bgImg};`;
  if (props.bgSize) render += `background-size: ${props.bgSize};`;
  if (props.top) render += `top: ${props.top};`;
  if (props.left) render += `left: ${props.left};`;
  if (props.right) render += `right: ${props.right};`;
  if (props.bottom) render += `bottom: ${props.bottom};`;
  if (props.cursor) render += `cursor: ${props.cursor};`;
  if (props.cl) render += `color: ${props.cl};`;
  if (props.placeholderStyle)
    render += `
    &::placeholder {${defaultElemenst(props.placeholderStyle)}}
    &:-ms-input-placeholder {${defaultElemenst(props.placeholderStyle)}}
    &::-ms-input-placeholder {${defaultElemenst(props.placeholderStyle)}}
  `;
  if (props.ft) render += `font: ${props.ft};`;
  if (props.ftThin) render += `font-weight: 100;`;
  if (props.ftLight) render += `font-weight: 300;`;
  if (props.ftRegular) render += `font-weight: 400;`;
  if (props.ftMediun) render += `font-weight: 500;`;
  if (props.ftBold) render += `font-weight: 700;`;
  if (props.ftSize) render += `font-size: ${props.ftSize};`;
  if (props.ftFamily) render += `font-family: ${props.ftFamily};`;
  if (props.lineHg) render += `line-height: ${props.lineHg};`;
  if (props.txtTransform) render += `text-transform: ${props.txtTransform};`;
  if (props.txtAlign) render += `text-align: ${props.txtAlign};`;
  if (props.txtDecoration) render += `text-decoration: ${props.txtDecoration};`;
  if (props.whiteSpace) render += `white-space: ${props.whiteSpace};`;
  if (props.wordBreak) render += `word-break: ${props.wordBreak};`;
  if (props.liStyle) render += `list-style: ${props.liStyle};`;
  if (props.elContent) render += `content: ${props.elContent || ""};`;
  if (props.transition) render += `transition: ${props.transition};`;
  if (props.shadow) render += `box-shadow: ${props.shadow};`;
  if (props.txtShadow) render += `text-shadow: ${props.txtShadow};`;
  if (props.radius) render += `border-radius: ${props.radius};`;
  if (props.transform) render += `transform: ${props.transform};`;
  if (props.display) render += `display: ${props.display};`;
  if (props.cln) render += `columns: ${props.cln};`;
  if (props.clnCount) render += `column-count: ${props.clnCount};`;
  if (props.clnGap) render += `column-gap: ${props.clnGap};`;
  if (props.clnWd) render += `column-width: ${props.clnWd};`;
  if (props.clnBreakIn)
    render += `
      column-break-inside: ${props.clnBreakIn};
      page-break-inside: ${props.clnBreakIn};
      break-inside: ${props.clnBreakIn};
    `;
  if (props.float) render += `float: ${props.float};`;
  if (props.resize) render += `resize: ${props.resize};`;
  if (props.opacity) render += `opacity: ${props.opacity};`;
  if (props.index) render += ` z-index: ${props.index};`;
  if (props.scrollY) render += `overflow: hidden; overflow-y: auto;`;
  if (props.scrollX) render += `overflow: hidden; overflow-x: auto;`;
  if (props.scroll) render += `overflow: auto;`;
  if (props.flex) render += `display: flex;`;
  if (props.flexDirection) render += `flex-direction: ${props.flexDirection};`;
  if (props.flexRow) render += `flex-direction: row;`;
  if (props.flexRowReverse) render += `flex-direction: row-reverse;`;
  if (props.flexColumn) render += `flex-direction: column;`;
  if (props.flexColumnReverse) render += `flex-direction: column-reverse;`;
  if (props.flexWrap) render += `flex-wrap: wrap;`;
  if (props.flexWrapReverse) render += `flex-wrap: wrap-reverse;`;
  if (props.flexNowrap) render += `flex-wrap: nowrap;`;
  if (props.justifyContent)
    render += `justify-content: ${props.justifyContent};`;
  if (props.justifyContentStart) render += `justify-content: flex-start;`;
  if (props.justifyContentEnd) render += `justify-content: flex-end;`;
  if (props.justifyContentCenter) render += `justify-content: center;`;
  if (props.justifyContentBetween) render += `justify-content: space-between;`;
  if (props.justifyContentAround) render += `justify-content: space-around;`;
  if (props.justifyContentEvenly) render += `justify-content: space-evenly;`;
  if (props.alignContent) render += `align-content: ${props.alignContent};`;
  if (props.alignContentStart) render += `align-content: flex-start;`;
  if (props.alignContentEnd) render += `align-content: flex-end;`;
  if (props.alignContentCenter) render += `align-content: center;`;
  if (props.alignContentStretch) render += `align-content: stretch;`;
  if (props.alignContentBaseline) render += `align-content: baseline;`;
  if (props.alignContentBetween) render += `align-content: space-between;`;
  if (props.alignContentAround) render += `align-content: space-around;`;
  if (props.alignContentEvenly) render += `align-content: space-evenly;`;
  if (props.alignItems) render += `align-items: ${props.alignItems};`;
  if (props.alignItemsStart) render += `align-items: flex-start;`;
  if (props.alignItemsEnd) render += `align-items: flex-end;`;
  if (props.alignItemsCenter) render += `align-items: center;`;
  if (props.alignItemsStretch) render += `align-items: stretch;`;
  if (props.alignItemsBaseline) render += `align-items: baseline;`;
  if (props.alignItemsBetween) render += `align-items: space-between;`;
  if (props.alignItemsAround) render += `align-items: space-around;`;
  if (props.alignItemsEvenly) render += `align-items: space-evenly;`;
  if (props.flexGrow) render += `flex-grow: 1;`;
  if (props.alignSelf) render += `align-self: ${props.alignSelf};`;
  if (props.grid) render += `grid: ${props.grid};`;
  if (props.hover)
    render += `&:hover ${props.hoverEffectEl || ""}{${defaultElemenst(
      props.hover
    )}}`;
  if (props.hoverThis) render += `&:hover{${defaultElemenst(props.hoverThis)}}`;
  if (props.focus)
    render += `&:focus ${props.focusEffectEl || ""}{${defaultElemenst(
      props.focus
    )}}`;
  if (props.focusThis) render += `&:focus{${defaultElemenst(props.focusThis)}}`;
  if (props.focusWin)
    render += `&:focus-within ${props.focusWinEffectEl || ""}{${defaultElemenst(
      props.focusWin
    )}}`;
  if (props.focusWinThis)
    render += `&:focus-within {${defaultElemenst(props.focusWinThis)}}`;
  if (props.active)
    render += `&:active ${props.activeEffectEl || ""}{${defaultElemenst(
      props.active
    )}}`;
  if (props.activeThis) render += `&:active {${defaultElemenst(props.active)}}`;
  if (props.elBefore) render += `&::before{${defaultElemenst(props.elBefore)}}`;
  if (props.elAfter) render += `&::after{${defaultElemenst(props.elAfter)}}`;
  if (props._mediaScrean) {
    if (Array.isArray(props._mediaScrean)) {
      if (props._mediaScrean.length > 0) {
        for (const element of props._mediaScrean) {
          render += `@media only screen and (${
            element.dimensions
          }){${defaultElemenst(element.style)}${
            element.pureStyle ? element.pureStyle : ""
          }}`;
        }
      }
    } else
      render += `@media only screen and (${
        props._mediaScrean.dimensions
      }){${defaultElemenst(props._mediaScrean.style)}${
        props._mediaScrean.pureStyle ? props._mediaScrean.pureStyle : ""
      }}`;
  }

  return render.trim();
};

export const getEl = tag => {
  return styled[tag.toLowerCase()]`
    ${props => defaultElemenst(props)}
  `;
};
export default getEl;
