import styled from 'styled-components';

const StyledHeader = styled.header`
  position: absolute;
  inset: 0 0 auto 0;
  z-index: -10;
  background-image: url(${({ theme }) => theme.images.headerBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30%;
  min-height: ${({ theme }) => theme.sizes.headerHeight};

  /* Container === div */
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 3rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      color: white;
      letter-spacing: 10px;
    }
  }
`;

export default StyledHeader;
