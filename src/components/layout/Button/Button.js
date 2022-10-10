import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ action, link, id, customClass, onClick }) => {
  return (
    <Link
      className={`${styles.button} ${customClass}`}
      id={id}
      to={link}
      onClick={onClick}
    >
      {action}
    </Link>
  );
};

export default Button;
