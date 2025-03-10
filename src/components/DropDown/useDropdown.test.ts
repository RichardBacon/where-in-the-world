import { KeyboardEvent } from 'react'
import { renderHook, act } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import useDropdown from './useDropdown'

describe('useDropdown', () => {
  const options = ['Option 1', 'Option 2', 'Option 3']
  const onChange = vi.fn()

  it('initialises with closed state', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    expect(result.current.isOpen).toBe(false)
    expect(result.current.activeIndex).toBe(-1)
  })

  it('handles keyboard navigation', () => {
    const { result } = renderHook(
      () => useDropdown({ options, value: 'Option 1', onChange }), // Set initial value
    )

    // Open with arrow down
    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(result.current.isOpen).toBe(true)

    // Need to wait for useEffect
    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(result.current.activeIndex).toBe(1)
  })

  it('handles selection with Enter', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    // Open and set active index
    act(() => {
      result.current.setIsOpen(true)
    })

    // Need to manually set activeIndex since useEffect is async
    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    // Now try to select
    act(() => {
      result.current.handleKeyDown({
        key: 'Enter',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    expect(onChange).toHaveBeenCalledWith(options[0])
    expect(result.current.isOpen).toBe(false)
  })

  it('closes with Escape', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    act(() => {
      result.current.setIsOpen(true)
    })

    act(() => {
      result.current.handleKeyDown({
        key: 'Escape',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    expect(result.current.isOpen).toBe(false)
  })
})
