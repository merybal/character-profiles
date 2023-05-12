import { Link } from "react-router-dom";

import Filter from "components/Home/Filter/Filter";

import styles from "components/Home/ActionBar/ActionBar.module.scss";

const ActionBar = (props) => {
  const filterChangeHandler = (selectedStatus) => {
    props.onFilterSelection(selectedStatus);
  };

  return (
    <div className={styles["action-bar"]}>
      <Link to="/add-character" className={styles.button}>
        + ADD NEW
      </Link>
      <Filter selected={props.selected} onChangeFilter={filterChangeHandler} />
    </div>
  );
};
export default ActionBar;
