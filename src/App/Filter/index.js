import StyledFilter from './styled';
import FilterBtn from 'App/TodoFooterBtn/styled';
import capatalize from 'javascripts/capitalize';
//FilterBtn is TodoFooterBtn (changed name for readability)

const filters = ['all', 'active', 'completed'];

const Filter = () => {
  return (
    <StyledFilter>
      {filters.map((filter) => (
        <FilterBtn isClickable key={'filter' + filter}>
          {capatalize(filter)}
        </FilterBtn>
      ))}
    </StyledFilter>
  );
};

export default Filter;
