import styles from "./Container.module.css";

const Container = ({ children, customClass }) => {
  return <div className={`${styles.container} ${customClass}`}>{children}</div>;
};

export default Container;
