import StyledFilter from './StyledFilter';
//FilterBtn is TodoFooterBtn (changed name for readability)
import FilterBtn from 'App/TodoFooterBtn/StyledTodoFooterBtn';
import capatalize from 'func/capitalize';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/filterSlice';

const filterKeys = ['all', 'active', 'completed'];

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  return (
    <StyledFilter>
      {filterKeys.map((filterKey) => (
        <FilterBtn
          isClickable
          isActive={filterKey === filter.key}
          key={'filter-' + filterKey}
          onClick={() => {
            dispatch(setFilter({ filterKey }));
          }}
        >
          {capatalize(filterKey)}
        </FilterBtn>
      ))}
    </StyledFilter>
  );
};

export default Filter;
