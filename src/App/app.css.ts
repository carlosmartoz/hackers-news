import { style, globalStyle } from '@vanilla-extract/css'

// Globals
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
})

globalStyle('body', {
  backgroundColor: '#ffffff'
})

globalStyle('#root', {
  gap: 64,
  display: 'grid',
  placeItems: 'center'
})

// App
export const main = style({
  width: '100%',
  maxWidth: 1072,
  margin: '0 auto',
  padding: '0 24px'
})
