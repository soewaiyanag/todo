import styled from 'styled-components';
import fontFamily from 'shared/font-family';

const StyledFooter = styled.span`
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

export default StyledFooter;
