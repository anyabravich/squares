import Card from "../Card";
import styles from "./styles.module.scss";

const Cards = () => {
  return (
    <section className={styles["cards"]}>
      <Card cardId="read-books" />
      <Card cardId="1000-hours" />
    </section>
  );
};

export default Cards;
