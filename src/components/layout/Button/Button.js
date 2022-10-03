import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ action, link, customClass }) => {
  return (
    <Link className={`${styles.button} ${customClass}`} to={link}>
      {action}
    </Link>
  );
};

export default Button;
