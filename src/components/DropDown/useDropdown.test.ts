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

  it('handles space key to open dropdown', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    act(() => {
      result.current.handleKeyDown({
        key: ' ',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('handles tab key when dropdown is open', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    act(() => {
      result.current.setIsOpen(true)
    })

    act(() => {
      result.current.handleKeyDown({
        key: 'Tab',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('handles tab key when dropdown is closed', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    act(() => {
      result.current.handleKeyDown({
        key: 'Tab',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('handles arrow down key to open dropdown', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('handles arrow up key to open dropdown', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowUp',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

    expect(result.current.isOpen).toBe(true)
  })

  it('handles keyboard navigation', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: 'Option 1', onChange }),
    )

    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(result.current.activeIndex).toBe(1)

    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(result.current.activeIndex).toBe(2)

    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowUp',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })
    expect(result.current.activeIndex).toBe(1)
  })

  it('handles selection with Enter', () => {
    const { result } = renderHook(() =>
      useDropdown({ options, value: '', onChange }),
    )

    act(() => {
      result.current.setIsOpen(true)
    })

    act(() => {
      result.current.handleKeyDown({
        key: 'ArrowDown',
        preventDefault: vi.fn(),
      } as unknown as KeyboardEvent)
    })

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
