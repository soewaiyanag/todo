import styled from 'styled-components';
import fontFamily from 'shared/font-family';

const StyledFilter = styled.div`
  button {
    ${fontFamily}
    color: ${({ theme }) => theme.colors.secText};
    cursor: pointer;
    /* reset default styles */
    background-color: transparent;
    outline: none;
    border: none;
  }
`;

export default StyledFilter;
