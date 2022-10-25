import IconLogo from "../../../components/logo/IconLogo/IconLogo";
import styles from "./RecoverPassword.module.css";
import Heading from "../../../components/Heading/Heading";
import bloobers from "../../../assets/bloobs/bloobers.svg";


const RecoverPassword = () =>{

    return (
        
            <div className={styles.container_recover_password}>
                    <div className={styles.logo}>
                    <IconLogo />
                    </div>

                    <div>
                    <Heading heading=" Alterar senha " />
                    </div>

            </div>
        
        
        
        );
        
    

}

export default RecoverPassword;