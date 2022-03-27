import StyledFilter from './styled';
import FilterBtn from 'App/TodoFooterBtn/styled';
//FilterBtn is TodoFooterBtn (changed name for readability)

const Filter = () => {
  return (
    <StyledFilter>
      <FilterBtn isClickable>All</FilterBtn>
      <FilterBtn isClickable>Active</FilterBtn>
      <FilterBtn isClickable>Completed</FilterBtn>
    </StyledFilter>
  );
};

export default Filter;
