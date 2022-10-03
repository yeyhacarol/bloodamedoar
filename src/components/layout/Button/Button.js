import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ action, link }) => {
  return (
    <Link className={styles.button} to={link}>
      {action}
    </Link>
  );
};

export default Button;
