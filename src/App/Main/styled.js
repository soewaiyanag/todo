import styled from "styled-components";

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.main};
  min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  /* <Continer> */
  & > div {
    width: 100%;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default StyledMain;
