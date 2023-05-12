import Filter from "components/Home/Filter/Filter";

const ActionBar = (props) => {
  const filterChangeHandler = (selectedStatus) => {
    props.onFilterSelection(selectedStatus);
  };

  return (
    <Filter selected={props.selected} onChangeFilter={filterChangeHandler} />
  );
};
export default ActionBar;
