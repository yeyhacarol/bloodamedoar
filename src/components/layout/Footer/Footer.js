import styles from "./Footer.module.css";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className={styles.follow_us}>
        <p>Nos siga nas redes sociais.</p>
        <div className={styles.social_media}>
          <IoLogoFacebook size={30} />
          <IoLogoInstagram size={30} />
          <IoLogoTwitter size={30} />
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Blood - AmeDoar</p>
        <p>Todos os direitos reservados. &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
