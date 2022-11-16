import styles from "./Filter.module.css";

import Input from "../../components/form/Input/Input";
import { BsSearch } from "react-icons/bs";

const Filter = ({ type, placeholder }) => {
  return (
    <div className={styles.filter}>
      <Input
        type={type}
        custom={styles.custom_input}
        placeholder={placeholder}
      />
      <div className={styles.search}>
        <BsSearch size={30} />
      </div>
    </div>
  );
};

export default Filter;
