import { useState, useEffect } from 'react';

interface useCountdownOptions {
  end?: number;
  onEnd?: () => any;
  customStartTrigger?: boolean;
}

export default function useCountdown(
  start: number,
  options: useCountdownOptions
): [number, boolean, () => any] {
  const [counter, setCounter] = useState(start);
  const [done, setDone] = useState(false);
  const [startTriggered, setStartTriggered] = useState(
    !options.customStartTrigger
  );

  const triggerStart = () => {
    setStartTriggered(true);
  };

  useEffect(() => {
    if (startTriggered) {
      const end = options.end || 0;
      if (counter > end) {
        setTimeout(() => setCounter((current) => current - 1), 1000);
      } else {
        setDone(true);
      }
    }
  }, [counter, options, startTriggered]);

  // for the onEnd function
  useEffect(() => {
    if (done) {
      if (options.onEnd) options.onEnd();
    }
  }, [done, options]);

  return [counter, done, triggerStart];
}
