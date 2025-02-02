import React, { useEffect, useCallback } from "react";
import { createFirework } from './createFirework'

const DEFAULT_COLORS = ["#f59342", '#f5e942', '#f54242'];
export interface FireworkOptions {

  count?: number
  duration?: number
  size?: number
  range?: number,
  colors?: Array<string>,
  randomColor?: boolean
}


export default function useFireWork(ref: React.RefObject<HTMLElement>, options: FireworkOptions = {}) {

  const { count = 30, duration = 1500, size = 6, range = 200, colors = DEFAULT_COLORS, randomColor = false } = options;

  const setupFirework = useCallback((e) => {
    const { clientX: x, clientY: y } = e;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < count; i++) {
      createFirework(x, y, duration, size, range, colors, randomColor);
    }
  }, [count, duration, size, range, colors, randomColor])

  useEffect(() => {
    const ele = ref?.current
    ele?.addEventListener('click', setupFirework)
    return () => {
      ele?.removeEventListener('click', setupFirework)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
