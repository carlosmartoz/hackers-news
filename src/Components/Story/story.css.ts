import { style, styleVariants } from '@vanilla-extract/css'

// Story Container
export const container = style({
  gap: 4,
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  '@media': {
    'screen and (min-width: 425px)': {
      gap: 24,
      alignItems: 'center',
      flexDirection: 'row'
    }
  }
})

// Story Content
export const content = style({
  gap: 4,
  display: 'flex',
  alignSelf: 'flex-start',
  flexDirection: 'column'
})

// Story Content Title
export const title = style({
  fontSize: 18,
  lineHeight: 1.5,
  fontWeight: 500,
  fontFamily: 'Montserrat, sans-serif'
})

// Story Content Link
export const link = style({
  color: '#212529',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    color: '#084dde'
  },
  '::before': {
    top: 0,
    left: 0,
    zIndex: 0,
    content: '',
    width: '100%',
    height: '100%',
    display: 'block',
    position: 'absolute'
  }
})

// Story Content Text Base
export const textBase = style({
  gap: 4,
  fontSize: 14,
  lineHeight: 1.5,
  fontWeight: 400,
  display: 'flex',
  color: '#495057',
  alignItems: 'center',
  fontFamily: 'Montserrat, sans-serif'
})

// Story Content Text Variants
export const text = styleVariants({
  default: [textBase],
  link: [
    textBase,
    {
      zIndex: 1,
      textDecoration: 'none',
      alignSelf: 'flex-start',
      ':hover': {
        textDecoration: 'underline'
      }
    }
  ]
})

// Story Content Favorites
export const favorites = style({
  zIndex: 1,
  fontSize: 32,
  border: 'none',
  outline: 'none',
  color: '#d62828',
  cursor: 'pointer',
  background: 'none',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    transform: 'scale(1.1)'
  }
})
