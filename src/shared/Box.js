import styled from 'styled-components';
import transition from './transition';

const Box = styled.div`
  ${transition}
  font-family: ${({ theme }) => theme.font.family};
  background-color: ${({ theme }) => theme.colors.box};
  padding: 1rem;
`;

export default Box;
