import { createStitches } from '@stitches/react';
import { rgba } from 'polished';

export const { styled, css } = createStitches({
  utils: {
    // Abbreviated margin properties
    m: (value) => ({
      margin: value
    }),
    mt: (value) => ({
      marginTop: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginRight: value,
      marginLeft: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),

    // A property for applying width and height together
    size: (value) => ({
      width: value,
      height: value
    }),

    // Abbreviated border-radius property
    br: (value) => ({
      borderRadius: value
    }),

    // A similar rgba function that accepts hexadecimals values
    transparentBackground: (value) => {
      const [color, opacity] = String(value).split(' ');

      return {
        backgroundColor: rgba(color, Number(opacity))
      };
    }
  }
});