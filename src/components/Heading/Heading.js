import styles from "./Heading.module.css";

const Heading = ({ heading }) => {
  return (
    <header>
      <h1>{heading}</h1>
      <div className={styles.line}></div>
    </header>
  );
};

export default Heading;
