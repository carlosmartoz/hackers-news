import { style } from '@vanilla-extract/css'

// Comment
export const summary = style({
  paddingBottom: 4
})

export const small = style({
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 500,
  color: '#565454'
})

export const comment = style({
  gap: 8,
  fontSize: 14,
  lineHeight: 1.5,
  display: 'flex',
  fontWeight: 400,
  color: '#565454',
  flexDirection: 'column'
})
