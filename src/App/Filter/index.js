import StyledFilter from './styled';
import FilterBtn from 'App/TodoFooterBtn/styled';
//FilterBtn is TodoFooterBtn (changed name for readability)

const Filter = () => {
  return (
    <StyledFilter>
      <FilterBtn>All</FilterBtn>
      <FilterBtn>Active</FilterBtn>
      <FilterBtn>Completed</FilterBtn>
    </StyledFilter>
  );
};

export default Filter;
