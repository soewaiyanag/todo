import styled from 'styled-components';
import fontFamily from 'shared/font-family';

export const FooterText = styled.span`
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    margin-top: 7rem;
  }

  margin-top: 2.8rem;
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secText};
  ${fontFamily};
`;

const StyledMain = styled.main`
  padding-top: 9.2rem;
  padding-bottom: 2rem;
`;

export default StyledMain;
