"use client";

import { useEffect, useState } from "react";

export function useCountUp(
  target: number,
  active: boolean,
  duration = 1200,
  prefersReducedMotion = false,
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || !active) {
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, prefersReducedMotion, target]);

  if (prefersReducedMotion) {
    return target;
  }

  if (!active) {
    return 0;
  }

  return value;
}
