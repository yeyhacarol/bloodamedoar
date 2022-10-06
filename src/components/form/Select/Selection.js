import Select from "react-select";

const Selection = ({
  isMulti,
  closeMenuOnSelect,
  placeholder,
  width = " clamp(260px, 55vw, 450px);",
  name,
  message,
  options,
  onChange,
}) => {
  const styles = {
    container: (styles) => {
      return {
        ...styles,
        width: width,
        marginBottom: "25px",
      };
    },
    control: (styles) => {
      return {
        ...styles,
        width: width,
        minHeight: "clamp(45px, 10vw, 55px);",
        fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        color: "rgba(0, 0, 0, 0.6)",
        fontFamily: "var(--font)",
        fontSize: "clamp(0.75rem, 2vw, 1.125rem)",
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
    <Select
      isMulti={isMulti}
      closeMenuOnSelect={closeMenuOnSelect}
      placeholder={placeholder}
      name={name}
      width={width}
      styles={styles}
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
      onChange={onChange}
    />
  );
};

export default Selection;
