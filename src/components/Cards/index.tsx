import Card from "../Card";
import styles from "./styles.module.scss";

const Cards = () => {
  return (
    <section className={styles["cards"]}>
      <Card cardId="read-books" title="📚 Чтение книги" />
      <Card cardId="water" title="💧 Водный баланс" />
    </section>
  );
};

export default Cards;
