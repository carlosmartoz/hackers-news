import { style } from '@vanilla-extract/css'

export const commentList = style({
  gap: 32,
  padding: 24,
  display: 'flex',
  listStyle: 'none',
  flexDirection: 'column',
  selectors: {
    'ul li > &': {
      gap: 8,
      padding: '0 24px'
    }
  }
})

export const commentListItem = style({
  gap: 8,
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Roboto, sans-serif'
})
