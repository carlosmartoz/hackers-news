import { style } from '@vanilla-extract/css'

// Not Found Title
export const title = style({
  fontSize: 18,
  lineHeight: 1.5,
  fontWeight: 500,
  color: '#212529',
  textAlign: 'center',
  fontFamily: 'Montserrat, sans-serif'
})

// Not Found Button
export const button = style({
  fontSize: 16,
  borderRadius: 4,
  lineHeight: 1.5,
  fontWeight: 500,
  outline: 'none',
  color: '#212529',
  cursor: 'pointer',
  background: 'none',
  alignSelf: 'center',
  padding: '12px 32px',
  textDecoration: 'none',
  border: '1px solid #ced4da',
  transition: 'all 0.2s ease-in-out',
  fontFamily: 'Montserrat, sans-serif',
  ':hover': {
    color: '#084dde',
    borderColor: '#084dde'
  }
})
