import { useEffect, useMemo, useState } from 'react';

interface TerminalTyperState {
  typedText: string;
  isFinished: boolean;
}

const DEFAULT_SPEED_MS = 24;

export const useTerminalTyper = (
  lines: string[],
  active: boolean,
  speed = DEFAULT_SPEED_MS,
): TerminalTyperState => {
  const script = useMemo(() => lines.join('\n'), [lines]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    if (index >= script.length) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [active, index, script, speed]);

  return {
    typedText: active ? script.slice(0, index) : '',
    isFinished: active && index >= script.length,
  };
};
