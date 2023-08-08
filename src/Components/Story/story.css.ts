import { style } from '@vanilla-extract/css'

// Story
export const storyContent = style({
  gap: 4,
  display: 'flex',
  flexDirection: 'column'
})

export const storyTitle = style({
  fontSize: 18,
  lineHeight: 1.5,
  fontWeight: 500,
  fontFamily: 'Roboto, sans-serif'
})

export const storyLink = style({
  color: '#565454',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline'
  }
})

export const storyInformation = style({
  gap: 4,
  fontSize: 12,
  lineHeight: 1.5,
  display: 'flex',
  fontWeight: 400,
  color: '#565454',
  alignItems: 'center',
  fontFamily: 'Roboto, sans-serif'
})

export const storyInformationLink = style({
  gap: 4,
  fontSize: 12,
  lineHeight: 1.5,
  display: 'flex',
  fontWeight: 400,
  color: '#565454',
  alignItems: 'center',
  textDecoration: 'none',
  fontFamily: 'Roboto, sans-serif',
  ':hover': {
    textDecoration: 'underline'
  }
})
