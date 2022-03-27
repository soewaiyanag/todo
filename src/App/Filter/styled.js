import styled from 'styled-components';

const StyledFilter = styled.div`
  button {
    /* reset default styles */
    background-color: transparent;
    outline: none;
    border: none;
    /*  */
    cursor: pointer;
    font-family: ${({ theme }) => theme.font.family};
    color: ${({ theme }) => theme.colors.secText};
  }
`;

export default StyledFilter;
