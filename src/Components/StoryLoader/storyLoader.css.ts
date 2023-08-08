import { style, keyframes } from '@vanilla-extract/css'

// StoryLoader
const loader = keyframes({
  '50%': { backgroundColor: '#eeeeee' },
  '100%': { backgroundColor: '#dddddd' }
})

export const storyLoader = style({
  gap: 4,
  display: 'flex',
  flexDirection: 'column'
})

export const storyLoaderTitle = style({
  height: 21,
  width: '100%',
  backgroundColor: '#dddddd',
  animation: `${loader} 1s infinite`
})

export const storyLoaderItems = style({
  height: 18,
  width: '50%',
  backgroundColor: '#dddddd',
  animation: `${loader} 1s infinite`
})
