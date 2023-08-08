import { style, keyframes } from '@vanilla-extract/css'

// Comment Loader
const loader = keyframes({
  '50%': { backgroundColor: '#eeeeee' },
  '100%': { backgroundColor: '#dddddd' }
})

export const commentLoader = style({
  gap: 8,
  display: 'flex',
  flexDirection: 'column'
})

export const commentLoaderTitle = style({
  height: 20,
  width: '40%',
  backgroundColor: '#dddddd',
  animation: `${loader} 1s infinite`
})

export const commentLoaderItem = style({
  height: 200,
  width: '100%',
  backgroundColor: '#dddddd',
  animation: `${loader} 1s infinite`
})
