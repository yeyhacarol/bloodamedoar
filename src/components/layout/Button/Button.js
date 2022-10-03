import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ action, link, id, customClass }) => {
  return (
    <Link className={`${styles.button} ${customClass}`} id={id} to={link}>
      {action}
    </Link>
  );
};

export default Button;
