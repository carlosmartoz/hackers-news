import { style } from '@vanilla-extract/css'

// Stories
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

export const item = style({
  padding: 24,
  display: 'flex',
  borderRadius: 8,
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #b1b1b1'
})
