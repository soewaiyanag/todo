import StyledFilter from './styled';
//FilterBtn is TodoFooterBtn (changed name for readability)
import FilterBtn from 'App/TodoFooterBtn/styled';
import capatalize from 'javascripts/capitalize';
import { useDispatch, useSelector } from 'react-redux';

const filterNames = ['all', 'active', 'completed'];

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  return (
    <StyledFilter>
      {filterNames.map((filterName) => (
        <FilterBtn
          isActive={filterName === filter.filter}
          isClickable
          key={'filter-' + filterName}
        >
          {capatalize(filterName)}
        </FilterBtn>
      ))}
    </StyledFilter>
  );
};

export default Filter;
