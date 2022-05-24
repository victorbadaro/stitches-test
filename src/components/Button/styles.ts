import { styled } from '../../styles/utils';

export const Container = styled('button', {
  padding: '8px 16px',
  border: 'none',
  borderRadius: '9999px',
  transparentBackground: '#fff 0.1',
  transition: 'background-color 200ms',

  '&:hover': {
    backgroundColor: 'LightGray'
  }
});