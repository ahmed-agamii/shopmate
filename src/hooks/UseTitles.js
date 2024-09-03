import { useEffect } from "react";

export const UseTitles = (title) => {
  useEffect(() => {
    document.title = `${title} | Shopping Cart`;
  }, [title]);

  return null;
};
