import { styled } from '@stitches/react';

export const Container = styled('button', {
  padding: '8px 16px',
  border: 'none',
  borderRadius: '9999px',
  backgroundColor: 'Gainsboro',
  transition: 'background-color 200ms',

  '&:hover': {
    backgroundColor: 'LightGray'
  }
});