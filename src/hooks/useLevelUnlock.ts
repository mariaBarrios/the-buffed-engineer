import { useCallback, useEffect, useRef, useState } from 'react';

interface UnlockState {
  isUnlocked: boolean;
  isUnlocking: boolean;
  unlockProgress: number;
  startUnlock: () => void;
}

const UNLOCK_DURATION_MS = 1400;
const TICK_MS = 16;

export const useLevelUnlock = (): UnlockState => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [unlockProgress, setUnlockProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startUnlock = useCallback(() => {
    if (isUnlocked || isUnlocking) {
      return;
    }

    const startedAt = performance.now();
    setIsUnlocking(true);
    setUnlockProgress(0);

    timerRef.current = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      const nextProgress = Math.min(100, Math.round((elapsed / UNLOCK_DURATION_MS) * 100));
      setUnlockProgress(nextProgress);

      if (nextProgress >= 100) {
        if (timerRef.current !== null) {
          window.clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setIsUnlocking(false);
        setIsUnlocked(true);
      }
    }, TICK_MS);
  }, [isUnlocked, isUnlocking]);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  return { isUnlocked, isUnlocking, unlockProgress, startUnlock };
};
