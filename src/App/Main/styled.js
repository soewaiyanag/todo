import styled from 'styled-components';

const StyledMain = styled.main`
  /* <Continer> */
  & > div {
    width: 100%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default StyledMain;
