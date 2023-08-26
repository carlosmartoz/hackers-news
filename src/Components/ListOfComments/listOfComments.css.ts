import { style } from '@vanilla-extract/css'

// Coments List
export const list = style({
  gap: 32,
  padding: 24,
  display: 'flex',
  listStyle: 'none',
  flexDirection: 'column',
  '@media': {
    'screen and (min-width: 425px)': {
      selectors: {
        'ul li > &': {
          padding: '0 24px'
        }
      }
    }
  },
  selectors: {
    'ul li > &': {
      gap: 8,
      padding: 0
    }
  }
})

// Coments List Item
export const item = style({
  gap: 8,
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Roboto, sans-serif'
})
