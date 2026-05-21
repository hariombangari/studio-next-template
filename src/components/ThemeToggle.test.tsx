import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from './ThemeToggle'

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('ThemeToggle', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    // Remove dark class from document
    document.documentElement.classList.remove('dark')
  })

  it('renders with light theme by default', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /switch to dark theme/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-pressed', 'false')
  })

  it('toggles to dark theme when clicked', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /switch to dark theme/i })
    
    fireEvent.click(button)
    
    expect(button).toHaveAttribute('aria-label', 'Switch to light theme')
    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme-preference')).toBe('dark')
  })

  it('toggles back to light theme when clicked twice', () => {
    render(<ThemeToggle />)
    const button = screen.getByRole('button', { name: /switch to dark theme/i })
    
    fireEvent.click(button)
    fireEvent.click(button)
    
    expect(button).toHaveAttribute('aria-label', 'Switch to dark theme')
    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme-preference')).toBe('light')
  })

  it('respects custom storage key', () => {
    render(<ThemeToggle storageKey="custom-theme" />)
    const button = screen.getByRole('button', { name: /switch to dark theme/i })
    
    fireEvent.click(button)
    
    expect(localStorage.getItem('custom-theme')).toBe('dark')
    expect(localStorage.getItem('theme-preference')).toBeNull()
  })

  it('accepts custom className', () => {
    render(<ThemeToggle className="custom-class" />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('theme-toggle', 'custom-class')
  })
})
