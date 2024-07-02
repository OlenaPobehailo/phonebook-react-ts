import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { t } from "i18next";
import { updateFilter } from "redux/contacts/filterSlice";
import { selectFilter } from "redux/contacts/contactsSelectors";
import { AppDispatch } from "redux/store";
import { Input } from "./Filter.styled";

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
