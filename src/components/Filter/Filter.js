import styles from "./Filter.module.css";

import Input from "../../components/form/Input/Input";

const Filter = ({ type, placeholder, handleOnChange, name, value }) => {
  return (
    <div className={styles.filter}>
      <Input
        type={type}
        custom={styles.custom_input}
        placeholder={placeholder}
        handleOnChange={handleOnChange}
        name={name}
        value={value}
      />
    </div>
  );
};

export default Filter;
