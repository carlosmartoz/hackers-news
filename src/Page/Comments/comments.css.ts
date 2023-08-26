import { style } from '@vanilla-extract/css'

// Comments Section
export const section = style({
  padding: '0 0 64px 0'
})

// Comments Article
export const article = style({
  display: 'flex',
  borderRadius: 8,
  flexDirection: 'column',
  justifyContent: 'center',
  border: '1px solid #ced4da'
})

// Comments Article Header
export const header = style({
  gap: 8,
  display: 'flex',
  flexDirection: 'column',
  padding: '24px 24px 0 24px'
})

// Comments Article Top Content
export const top = style({
  gap: 24,
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row'
    }
  }
})

// Comments Article Back
export const back = style({
  gap: 4,
  fontSize: 18,
  border: 'none',
  display: 'flex',
  outline: 'none',
  fontWeight: 500,
  lineHeight: 1.5,
  color: '#6c757d',
  cursor: 'pointer',
  background: 'none',
  alignItems: 'center',
  textDecoration: 'none',
  transition: 'all 0.2s ease-in-out',
  fontFamily: 'Montserrat, sans-serif',
  ':hover': {
    color: '#212529'
  }
})

// Comments Article Title
export const title = style({
  fontSize: 18,
  lineHeight: 1.5,
  fontWeight: 500,
  color: '#212529',
  fontFamily: 'Montserrat, sans-serif'
})

// Comments Article Divider
export const divider = style({
  borderColor: '#ced4da'
})

// Comments Article Content
export const content = style({
  padding: 24
})
