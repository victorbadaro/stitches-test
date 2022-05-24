import { createStitches } from "@stitches/react";

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
    })
  }
});