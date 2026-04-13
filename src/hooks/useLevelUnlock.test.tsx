import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useLevelUnlock } from './useLevelUnlock';

describe('useLevelUnlock', () => {
  it('unlocks level and reaches 100 progress', () => {
    vi.useFakeTimers();

    const performanceSpy = vi.spyOn(performance, 'now');
    let now = 0;
    performanceSpy.mockImplementation(() => now);

    const { result } = renderHook(() => useLevelUnlock());

    expect(result.current.isUnlocked).toBe(false);

    act(() => {
      result.current.startUnlock();
    });

    expect(result.current.isUnlocking).toBe(true);

    act(() => {
      now = 1600;
      vi.advanceTimersByTime(1600);
    });

    expect(result.current.unlockProgress).toBe(100);
    expect(result.current.isUnlocking).toBe(false);
    expect(result.current.isUnlocked).toBe(true);

    performanceSpy.mockRestore();
    vi.useRealTimers();
  });
});
