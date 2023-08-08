import { style } from '@vanilla-extract/css'

// Header
export const header = style({
  padding: 32,
  width: '100%',
  fontWeight: 500,
  borderBottom: '1px solid #dddddd',
  fontFamily: 'Cinzel Decorative, cursive'
})

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const heading = style({
  fontSize: 32,
  lineHeight: 1
})

export const link = style({
  color: '#081b33',
  textDecoration: 'none'
})
