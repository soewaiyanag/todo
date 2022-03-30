import styled from 'styled-components';
import fontFamily from 'shared/font-family';

export const FooterText = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    margin-top: 7rem;
  }

  margin-top: 2.5rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  font-weight: 500;
  ${fontFamily};
  color: ${({ theme }) => theme.colors.secText};
`;

const StyledMain = styled.main`
  padding-top: 7rem;
  padding-bottom: 2rem;
`;

export default StyledMain;
