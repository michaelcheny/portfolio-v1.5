import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const outsideClickHandler = (event) => {
      if (!domNode.current.contains(event.target)) handler();
    };
    document.addEventListener("click", outsideClickHandler);
    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  });
  return domNode;
};
