import styled from "styled-components";
import shorts from "./short-static";
import shortFuncs from "./short-dynamic";

const generateMediaScreen = (prop, value) => {
  let style = prop.style || {},
    pureStyle = prop.pureStyle || "",
    mediaScreen = value.replace(/_dm_/g, prop.dimensions),
    css = generateStyle({
      ...style,
      pureStyle
    });
  return mediaScreen.replace(/_style_/g, css);
};

const generateStyle = props => {
  const regExp = /(_)?([a-z])+/gi;
  let keyProps = Object.keys(props).join("$"),
    settingStyle = keyProps.replace(regExp, val => {
      // static generation
      if (shorts[val]) {
        if (val === "pureStyle") return props[val];

        const regVal = /_val_/g;
        if (regVal.test(shorts[val]))
          return shorts[val].replace(regVal, props[val]) + ";";

        if (typeof props[val] === "boolean" && props[val])
          return shorts[val] + ";";
        return `${shorts[val]}:${props[val]};`;
      }

      // funcs generation
      if (shortFuncs[val]) {
        if (typeof props[val] === "object") {
          if (val === "that")
            return `${shortFuncs[val]}${props[val + "Query"] ||
              ""}{${generateStyle(props[val])}}`;

          if (val === "_mediaScreen") {
            if (Array.isArray(props[val])) {
              let resultMedia = "";
              props[val].forEach(element => {
                resultMedia += generateMediaScreen(element, shortFuncs[val]);
              });

              return resultMedia;
            } else return generateMediaScreen(props[val], shortFuncs[val]);
          }

          return `${shortFuncs[val]}${props[val + "Query"] || ""} ${props[
            val + "EffectEl"
          ] || ""}{${generateStyle(props[val])}}`;
        }
      }
      return "";
    });
  return settingStyle.replace(/\$*/g, "");
};

export const getEl = tag => {
  return styled[tag.toLowerCase()]`
    ${props => generateStyle(props)}
  `;
};

export default getEl;
