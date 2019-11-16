import styled from "styled-components";

const defaultElemenst = props => {
  let render = "";
  if (props.ps) render += ` position: ${props.ps};`;
  if (props.pd) render += ` padding: ${props.pd};`;
  if (props.mg) render += ` margin: ${props.mg};`;
  if (props.bd) render += ` border: ${props.bd};`;
  if (props["bd-cl"]) render += ` border-color: ${props["bd-cl"]};`;
  if (props["bd-wd"]) render += ` border-width: ${props["bd-wd"]};`;
  if (props["bd-style"]) render += ` border-style: ${props["bd-style"]};`;
  if (props["bd-t"]) render += ` border-top: ${props["bd-t"]};`;
  if (props["bd-l"]) render += ` border-left: ${props["bd-l"]};`;
  if (props["bd-r"]) render += ` border-right: ${props["bd-r"]};`;
  if (props["bd-b"]) render += ` border-bottom: ${props["bd-b"]};`;
  if (props["pd-t"]) render += ` padding-top: ${props["pd-t"]};`;
  if (props["pd-l"]) render += ` padding-left: ${props["pd-l"]};`;
  if (props["pd-r"]) render += ` padding-right: ${props["pd-r"]};`;
  if (props["pd-b"]) render += ` padding-bottom: ${props["bd-b"]};`;
  if (props["mg-t"]) render += ` margin-top: ${props["mg-t"]};`;
  if (props["mg-l"]) render += ` margin-left: ${props["mg-l"]};`;
  if (props["mg-r"]) render += ` margin-right: ${props["mg-r"]};`;
  if (props["mg-b"]) render += ` margin-bottom: ${props["mg-b"]};`;
  if (props.wd) render += ` width: ${props.wd};`;
  if (props["max-wd"]) render += ` max-width: ${props["max-wd"]};`;
  if (props["min-wd"]) render += ` min-width: ${props["min-wd"]};`;
  if (props.hg) render += ` height: ${props.hg};`;
  if (props["max-hg"]) render += ` max-height: ${props["max-hg"]};`;
  if (props["min-hg"]) render += ` min-height: ${props["min-hg"]};`;
  if (props["dimensions"]) render += ` width: ${props["dimensions"]}; height: ${props["dimensions"]}; min-width: ${props["dimensions"]}; min-height: ${props["dimensions"]};`;
  if (props.bg) render += ` background: ${props.bg};`;
  if (props["bg-size"]) render += ` background-size: ${props["bg-size"]};`;
  if (props.top) render += ` top: ${props.top};`;
  if (props.left) render += ` left: ${props.left};`;
  if (props.right) render += ` right: ${props.right};`;
  if (props.bottom) render += ` bottom: ${props.bottom};`;
  if (props.cursor) render += ` cursor: ${props.cursor};`;
  if (props.cl) render += `color: ${props.cl};`;
  if (props["placeholder-style"]) render += `
    &::placeholder {${defaultElemenst(props["placeholder-style"])}}
    &:-ms-input-placeholder {${defaultElemenst(props["placeholder-style"])}}
    &::-ms-input-placeholder {${defaultElemenst(props["placeholder-style"])}}
  `;
  if (props["ft"]) render += `font: ${props["ft"]};`;
  if (props["ft-size"]) render += `font-size: ${props["ft-size"]};`;
  if (props["line-hg"]) render += `line-height: ${props["line-hg"]};`;
  if (props["txt-transform"]) render += `text-transform: ${props["txt-transform"]};`;
  if (props["txt-align"]) render += `text-align: ${props["txt-align"]};`;
  if (props["txt-decoration"]) render += `text-decoration: ${props["txt-decoration"]};`;
  if (props["white-space"]) render += `white-space: ${props["white-space"]};`;
  if (props["word-break"]) render += `word-break: ${props["word-break"]};`;
  if (props["li-style"]) render += `list-style: ${props["li-style"]};`;
  if (props["el-content"]) render += `content: ${props["el-content"] || ""};`;
  if (props.transition) render += `
    -webkit-transition: ${props.transition};
    -o-transition: ${props.transition};
    -moz-transition: ${props.transition};
    transition: ${props.transition};
    `;
  if (props.shadow) render += `
    -webkit-box-shadow: ${props.shadow};
    box-shadow: ${props.shadow};
    `;
  if (props["txt-shadow"]) render += `
    text-shadow: ${props["txt-shadow"]};
    `;
  if (props.radius) render += `
    -webkit-border-radius: ${props.radius};
    border-radius: ${props.radius};
    `;
  if (props["transform"]) render += `transform: ${props["transform"]};`;
  if (props.display) render += `
    display: ${props.display};
    `;
  if (props["cln-count"]) render += `
    -webkit-column-count: ${props["cln-count"]};
    -moz-column-count: ${props["cln-count"]};
    column-count: ${props["cln-count"]};
    `;
  if (props["cln-gap"]) render += `
    -webkit-column-gap: ${props["cln-gap"]};
    -moz-column-gap: ${props["cln-gap"]};
    column-gap: ${props["cln-gap"]};
    `;
  if (props["cln-wd"]) render += `
    -webkit-column-width: ${props["cln-wd"]};
    -moz-column-width: ${props["cln-wd"]};
    column-width: ${props["cln-wd"]};
    `;
  if (props["cln-break-inside"]) render += `
    -webkit-column-break-inside: ${props["cln-break-inside"]};
    -moz-column-break-inside: ${props["cln-break-inside"]};
    column-break-inside: ${props["cln-break-inside"]};
    -webkit-page-break-inside: ${props["cln-break-inside"]};
    -moz-page-break-inside: ${props["cln-break-inside"]};
    page-break-inside: ${props["cln-break-inside"]};
    -webkit-break-inside: ${props["cln-break-inside"]};
    -moz-break-inside: ${props["cln-break-inside"]};
    break-inside: ${props["cln-break-inside"]};
    `;
  if (props["float"]) render += `
    float: ${props["float"]};
    `;
  if (props.resize) render += `
    -webkit-resize: ${props.resize};
    resize: ${props.resize};
    `;
  if (props.opacity) render += ` opacity: ${props.opacity};`;
  if (props.index) render += ` z-index: ${props.index};`;
  if (props.hover) render += ` &:hover ${props["hover-affect-el"] || ""}{${defaultElemenst(props.hover)}}`;
  if (props.focus) render += ` &:focus ${props["focus-affect-el"] || ""}{${defaultElemenst(props.focus)}}`;
  if (props["focus-within"]) render += ` &:focus-within ${props["focus-within-affect-el"] || ""}{${defaultElemenst(props["focus-within"])}}`;
  if (props["active"]) render += ` &:active ${props["active-affect-el"] || ""}{${defaultElemenst(props["active"])}}`;
  if (props["el-before"]) render += `&::before{${defaultElemenst(props["el-before"])}}`;
  if (props["el-after"]) render += `&::after{${defaultElemenst(props["el-after"])}}`;
  return render;
};

export const getEl = tag => {
  return styled[tag.toLowerCase()]`
    ${props => defaultElemenst(props)}
  `;
};
export default getEl;