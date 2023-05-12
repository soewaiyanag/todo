import Box from 'shared/Box';
import styled from 'styled-components';

const StyledFilter = styled(Box)`
  padding: 0; /* to remove padding from Box */
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  position: absolute;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    gap: 0.6rem;
    inset: 0;
    transform: translateY(4rem);
  }
`;

export default StyledFilter;
