import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#333',
    color: '#fff',

    '& a': {
      textDecoration: 'none',
      color: 'inherit'
    },

    '& button': {
      cursor: 'pointer'
    }
  }
});