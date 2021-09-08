import { useState, useCallback } from "react";
export const useAction = (listStudent) => {
  const [position, setPosition] = useState(0);

  const increase = useCallback(() => {
    if (position !== listStudent.length - 1) setPosition(position + 1);
    else setPosition(0);
  }, [position]);
  const decrease = useCallback(() => {
    if (position !== 0) setPosition(position - 1);
    else setPosition(listStudent.length - 1);
  }, [position]);

  return [position, { increase, decrease }];
};