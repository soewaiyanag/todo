import styled from 'styled-components';
import transition from './transition';
import fontFamily from './font-family';

const Box = styled.div`
  ${fontFamily}
  ${transition}
  border-top-left-radius: ${({ theme }) => theme.sizes.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.sizes.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.sizes.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.sizes.borderRadius};
  background-color: ${({ theme }) => theme.colors.box};
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
`;

export default Box;
