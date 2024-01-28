import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/contacts/filterSlice";
import { selectFilter } from "../../redux/contacts/contactsSelectors";
import { Input } from "./Filter.styled";
import { ChangeEvent } from "react";
import { AppDispatch } from "../../redux/store";
import { t } from "i18next";

const Filter: React.FC = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    (dispatch as AppDispatch)(updateFilter(e.target.value));
  };

  return (
    <label>
      {t("contactPage.text")}
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
