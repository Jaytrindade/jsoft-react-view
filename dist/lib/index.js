function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

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
  return React.createElement(
    Component,
    _extends(
      {
        ref: elementRef
      },
      others
    ),
    others.children
  );
};

export default View;
