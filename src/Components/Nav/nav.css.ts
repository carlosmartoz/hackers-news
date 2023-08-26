import { style, styleVariants } from '@vanilla-extract/css'

// Nav Menu
export const menu = style({
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  justifyContent: 'center'
})

// Nav Menu Item
export const item = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

// Nav Menu Item Base Link
export const baseLink = style({
  width: 120,
  height: 40,
  fontSize: 18,
  lineHeight: 1.5,
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  fontFamily: 'Montserrat, sans-serif',
  selectors: {
    'li:first-child > &': {
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4
    },
    'li:last-child > &': {
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4
    }
  }
})

// Nav Menu Item Link
export const link = styleVariants({
  base: [
    baseLink,
    {
      color: '#212529',
      border: '1px solid #adb5bd',
      selectors: {
        'li:first-child > &': {
          borderRightWidth: 0
        },
        'li:last-child > &': {
          borderLeftWidth: 0
        }
      }
    }
  ],
  active: [
    baseLink,
    {
      color: '#084dde',
      border: '1px solid #084dde',
      selectors: {
        'li:first-child > &': {
          borderRightWidth: 1
        },
        'li:last-child > &': {
          borderLeftWidth: 1
        }
      }
    }
  ]
})
