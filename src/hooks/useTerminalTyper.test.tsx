import { renderHook, act } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useTerminalTyper } from './useTerminalTyper';

describe('useTerminalTyper', () => {
  it('types characters over time only when active', () => {
    vi.useFakeTimers();

    const { result, rerender } = renderHook(
      ({ active }) => useTerminalTyper(['hello'], active, 20),
      { initialProps: { active: false } },
    );

    expect(result.current.typedText).toBe('');
    expect(result.current.isFinished).toBe(false);

    act(() => {
      rerender({ active: true });
      vi.advanceTimersByTime(20);
    });

    act(() => {
      vi.runAllTimers();
    });
    expect(result.current.typedText).toBe('h');
    expect(result.current.isFinished).toBe(false);

    vi.useRealTimers();
  });
});
