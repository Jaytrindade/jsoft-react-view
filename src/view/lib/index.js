import React, { useRef, useEffect } from "react";
import getEl from "./style";

const View = props => {
  let { el = "div", getRef, ...others } = props,
    elementRef = useRef();
  useEffect(() => {
    if (getRef) getRef(elementRef);
  }, [getRef]);

  if (el) {
    el = el.toLowerCase().split("");
    el[0] = el[0].toUpperCase();
    el = el.join("");
  }

  let Component = getEl(el);
  return (
    <Component ref={elementRef} {...others}>
      {others.children}
    </Component>
  );
};

export default View;
