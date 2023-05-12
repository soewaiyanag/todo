import styled from 'styled-components';
import fontFamily from 'shared/font-family';

const StyledHeader = styled.header`
  position: absolute;
  inset: 0 0 auto 0;
  z-index: 0;
  background-image: url(${({ theme }) => theme.images.headerBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  min-height: ${({ theme }) => theme.sizes.headerHeight};

  /* Container === div */
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 4rem;

    h1 {
      font-size: 2.3rem;
      font-weight: 700;
      color: white;
      letter-spacing: 12px;
      line-height: 1.3;
      ${fontFamily}
    }
  }
`;

export default StyledHeader;
