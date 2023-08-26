import { style, globalStyle } from '@vanilla-extract/css'

// Comment Summary
export const summary = style({
  paddingBottom: 4
})

// Comment Small
export const small = style({
  fontSize: 16,
  lineHeight: 1.5,
  fontWeight: 500,
  color: '#212529',
  fontFamily: 'Montserrat, sans-serif'
})

// Coment Text
export const comment = style({
  gap: 8,
  fontSize: 14,
  lineHeight: 1.5,
  display: 'flex',
  fontWeight: 400,
  color: '#495057',
  flexDirection: 'column',
  fontFamily: 'Lora, serif'
})

// Coment Element p Responsive
globalStyle(`${comment} p`, {
  display: 'grid',
  overflow: 'hidden'
})

// Coment Element a Responsive
globalStyle(`${comment} a`, {
  display: 'grid',
  overflow: 'hidden'
})

// Coment Element i Responsive
globalStyle(`${comment} i`, {
  display: 'grid',
  overflow: 'hidden'
})
