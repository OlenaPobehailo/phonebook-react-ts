import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/contacts/filterSlice';
import { selectFilter } from '../../redux/contacts/contactsSelectors';
import { Input } from './Filter.styled';

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
