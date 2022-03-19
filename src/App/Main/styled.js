import styled from "styled-components";

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.main};
  min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight});

  & > div {
    transform: translateY(-200%);
  }
`;

export default StyledMain;
