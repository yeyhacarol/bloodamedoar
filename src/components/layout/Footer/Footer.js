import styles from "./Footer.module.css";

const Footer = ({ customClass, customized }) => {
  return (
    <footer className={customClass}>
      <div className={`${styles.copyright} ${customized}`}>
        <p>Blood - AmeDoar</p>
        <p>Todos os direitos reservados. &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
