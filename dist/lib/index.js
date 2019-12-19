function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useRef, useEffect } from "react";
import getEl from "./style";

const View = props => {
  let {
    el = "div",
    getRef,
    ...others
  } = props,
      elementRef = useRef();
  el = el.trim();
  useEffect(() => {
    if (getRef) getRef(elementRef);
  }, [getRef]);
  let Component = null;
  if (!el) Component = getEl("div");else if (el !== "VIEW_NULL") Component = getEl(el);
  return Component ? React.createElement(Component, _extends({
    ref: elementRef
  }, others), others.children) : Component;
};

export default View;