import { useState, useCallback } from "react";

export const useBoolean = (initialValue = false) => {
  const [value, set] = useState<boolean>(initialValue);

  const on = useCallback(() => set(true), [set]);
  const off = useCallback(() => set(false), [set]);
  const toggle = useCallback(() => set((state) => !state), [set]);

  return [value, { on, off, toggle, set }];
};
