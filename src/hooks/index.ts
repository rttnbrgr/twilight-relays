import React from "react";

// via [Josh Comeau](https://www.joshwcomeau.com/snippets/react-hooks/use-toggle/)
export default function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle] as const;
}
