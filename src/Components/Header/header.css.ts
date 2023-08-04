import { style } from '@vanilla-extract/css'

export const header = style({
  padding: '32px',
  borderBottom: '1px solid #eeeeee'
})

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const heading = style({
  lineHeight: '1',
  color: '#374151',
  fontSize: '32px'
})

export const link = style({
  color: '#374151',
  textDecoration: 'none'
})
