import styled from 'styled-components';
import fontFamily from 'shared/font-family';

const StyledMain = styled.main`
  /* <Continer> */
  & > div {
    width: 100%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
    & > span {
      margin-top: 2.5rem;
      margin-bottom: 4rem;
      display: flex;
      justify-content: center;
      font-weight: 500;
      ${fontFamily};
      color: ${({ theme }) => theme.colors.secText};
    }
  }
`;

export default StyledMain;
