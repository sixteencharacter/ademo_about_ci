import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';
import {describe , it , expect} from "vitest"

describe('useCounter', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment the count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  // ...existing code...
  it('should set count using setVal', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(10);
    });
    act(()=>{
      result.current.increment()
    });
    expect(result.current.count).toBe(10);
  });

  it('should increment after setVal', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(()=>{
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });
});
