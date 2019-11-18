import React, { useRef, useEffect } from "react";
import getEl from "./style";

const View = props => {
  let { el = "div", getRef, ...others } = props,
    elementRef = useRef();
  el = el.trim();
  useEffect(() => {
    if (getRef) getRef(elementRef);
  }, [getRef]);
  let Component = null;
  if (!el) Component = getEl("div");
  else if (el !== "VIEW_NULL") Component = getEl(el);

  return Component ? (
    <Component ref={elementRef} {...others}>
      {others.children}
    </Component>
  ) : (
    Component
  );
};

export default View;
