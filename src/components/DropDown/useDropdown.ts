import { useState, useEffect } from 'react'

interface UseDropdownProps {
  options: string[]
  value: string
  onChange: (value: string) => void
}

const useDropdown = ({ options, value, onChange }: UseDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const selectedIndex = options.findIndex((option) => option === value)

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(selectedIndex)
    } else {
      setActiveIndex(-1)
    }
  }, [isOpen, selectedIndex])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        if (!isOpen) {
          setIsOpen(true)
        } else if (activeIndex >= 0) {
          onChange(options[activeIndex])
          setIsOpen(false)
        }
        e.preventDefault()
        break
      case 'Escape':
        setIsOpen(false)
        e.preventDefault()
        break
      case 'Tab':
        if (isOpen) {
          e.preventDefault()
        }
        break
      case 'ArrowDown':
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setActiveIndex((prev) => (prev + 1) % options.length)
        }
        e.preventDefault()
        break
      case 'ArrowUp':
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setActiveIndex((prev) => (prev - 1 + options.length) % options.length)
        }
        e.preventDefault()
        break
    }
  }

  return {
    isOpen,
    setIsOpen,
    activeIndex,
    handleKeyDown,
  }
}

export default useDropdown
