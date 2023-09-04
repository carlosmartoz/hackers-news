import { style, styleVariants, keyframes } from '@vanilla-extract/css'

// Define animation keyframes
const background = keyframes({
  '50%': { backgroundColor: '#e9ecef' },
  '100%': { backgroundColor: '#dee2e6' }
})

// Styles for the StoryLoader component
export const loader = style({
  gap: 8,
  display: 'flex',
  flexDirection: 'column'
})

// Base style for loader items
export const loaderItemBase = style({
  height: 18,
  backgroundColor: '#dee2e6',
  animation: `${background} 1s infinite`
})

// Variants of loader items with different widths
export const loaderItem = styleVariants({
  giant: [
    loaderItemBase,
    {
      height: 200,
      width: '100%'
    }
  ],
  large: [
    loaderItemBase,
    {
      width: '100%'
    }
  ],
  medium: [
    loaderItemBase,
    {
      width: '50%'
    }
  ],
  small: [
    loaderItemBase,
    {
      width: '35%'
    }
  ]
})
