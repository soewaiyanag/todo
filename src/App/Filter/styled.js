import Box from 'shared/Box';
import styled from 'styled-components';

const StyledFilter = styled(Box)`
  padding: 0; /* to remove padding from Box */
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    position: absolute;
    z-index: 10;
    inset: 0;
    transform: translateY(4rem);
  }
`;

export default StyledFilter;
