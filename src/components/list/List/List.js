import styles from "./List.module.css";

import Container from "../../layout/Container/Container";
import ListItem from "../ListItem/ListItem";

const List = () => {
  return (
    <Container title="Hemocentros" customClass={styles.container}>
      <div className={styles.list_content}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </Container>
  );
};

export default List;
