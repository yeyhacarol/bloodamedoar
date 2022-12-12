import Select from "react-select";

import { MdErrorOutline } from "react-icons/md";

import style from "./Selection.module.css";

const Selection = ({
  isMulti,
  closeMenuOnSelect,
  placeholder,
  width = "clamp(260px, 50vw, 450px);",
  error,
  errorMessage,
  name,
  message,
  options,
  handleOnChange,
  value,
  onFocus,
  label,
  custom,
  customized,
}) => {
  const styles = {
    control: (styles) => {
      return {
        ...styles,
        width: width,
        minHeight: "clamp(45px, 10vw, 55px);",
        fontSize: "clamp(0.8rem, 2vw, 1rem);",
      };
    },
    singleValue: (styles) => {
      return {
        ...styles,
        width: "93%",
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: "rgba(0, 0, 0, 0.6)",
        fontFamily: "var(--font)",
        fontSize: "clamp(0.8rem, 2vw, 1rem);",
        fontWeight: 400,
      };
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "rgba(217, 107, 107, 0.3)",
      };
    },
    multiValueRemove: (styles) => {
      return {
        ...styles,
        cursor: "pointer",
        ":hover": {
          color: "#000",
        },
      };
    },
    noOptionsMessage: (styles) => {
      return {
        ...styles,
        fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
      };
    },
    option: (styles) => {
      return {
        ...styles,
        fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
      };
    },
  };

  return (
    <div className={`${style.select_container} ${customized}`}>
      <label>{label}</label>
      <Select
        className={custom}
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
        placeholder={placeholder}
        name={name}
        width={width}
        styles={styles}
        value={value}
        theme={(theme) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary25: "#EEEEEE",
            primary: "var(--red)",
          },
        })}
        options={options}
        noOptionsMessage={() => message}
        onFocus={onFocus}
        onChange={(value) => handleOnChange(value, name)}
      />
      {error && (
        <span className={style.error_message}>
          <MdErrorOutline size={20} /> {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Selection;
