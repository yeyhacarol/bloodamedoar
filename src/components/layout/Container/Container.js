import styles from "./Container.module.css";

const Container = ({ title, children, customClass }) => {
  return (
    <div className={`${styles.container} ${customClass}`}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Container;
