import styled from 'styled-components';
import transition from './transition';
import fontFamily from './font-family';

const Box = styled.div`
  ${fontFamily}
  ${transition}
  background-color: ${({ theme }) => theme.colors.box};
  padding: 1rem;
`;

export default Box;
