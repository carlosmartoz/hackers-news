import { style, styleVariants, keyframes } from '@vanilla-extract/css'

// Styles for the Stories section
export const section = style({
  gap: 64,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

// Styles for the grid layout
export const grid = style({
  gap: 24,
  display: 'grid',
  listStyle: 'none',
  gridTemplateColumns: '1fr',
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr'
    }
  }
})

// Styles for individual items within the grid
export const item = style({
  padding: 24,
  display: 'flex',
  borderRadius: 4,
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #ced4da'
})

// Styles for the "Load more" base button
export const baseButton = style({
  fontSize: 16,
  borderRadius: 4,
  lineHeight: 1.5,
  fontWeight: 500,
  outline: 'none',
  display: 'flex',
  color: '#212529',
  cursor: 'pointer',
  background: 'none',
  alignSelf: 'center',
  padding: '12px 32px',
  border: '1px solid #ced4da',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    color: '#084dde',
    borderColor: '#084dde'
  }
})

// Styles for the "Load more" buttons
export const button = styleVariants({
  base: [baseButton],
  loading: [
    baseButton,
    {
      color: '#084dde',
      borderColor: '#084dde'
    }
  ]
})

// Rotate animation keyframes
const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

// Use of Rotate animation for loading
export const loading = style({
  animation: `${rotate} 2s linear infinite`
})
