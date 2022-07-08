import { useEffect, useState } from "react";

export function useDyanmicTitle(title) {
  const [dynamicValue, setDynamicValue] = useState("default");

  useEffect(() => {
    document.title = `${title} -${dynamicValue}`;
  }, [dynamicValue]);

  return setDynamicValue;
}
