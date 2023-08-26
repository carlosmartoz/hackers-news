import { style } from '@vanilla-extract/css'

// Header
export const header = style({
  padding: 32,
  width: '100%',
  borderBottom: '1px solid #dee2e6'
})

// Header Nav
export const nav = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

// Header Nav Title
export const title = style({
  fontSize: 32,
  lineHeight: 1,
  fontWeight: 400,
  fontFamily: 'Lora, serif',
  textTransform: 'uppercase'
})

// Header Nav Title Link
export const link = style({
  color: '#212529',
  textDecoration: 'none'
})
