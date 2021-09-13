/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

interface useCountdownOptions {
  end?: number;
  onEnd?: () => any;
}

export default function useCountdown(
  start: number,
  options: useCountdownOptions
): [number, boolean] {
  const [counter, setCounter] = useState(start);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const end = options.end || 0;
    if (counter > end) {
      setTimeout(() => setCounter((current) => current - 1), 1000);
    } else {
      setDone(true);
    }
  }, [counter]);

  useEffect(() => {
    if (done) {
      if (options.onEnd) options.onEnd();
    }
  }, [done]);

  return [counter, done];
}
