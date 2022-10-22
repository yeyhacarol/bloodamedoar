import Input from "../../../../../components/form/Input/Input"
import Container from "../../../../../components/layout/Container/Container"
import styles from "./Campaign.module.css"

const Campaign = () => {
    return (
        <form className={styles.campaign}>
            <Container title="Campanha">
                <div className={styles.content}>
                    <Input type="file" />
                    <Input placeholder="Frase de efeito" />
                    <Input placeholder="Nome da campanha" />
                </div>
            </Container>
        </form>
    )
}

export default Campaign