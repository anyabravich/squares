import Squares from "../Squares";
import styles from "./styles.module.scss";

const Card = () => {
  return (
    <article className={styles["card"]}>
      <h2 className={styles["card__title"]}>📚 Чтение книги</h2>
      <Squares className={styles["card__squares"]} />
      <button className={styles["card__button"]} type="button">
        ✅ Выполнено
      </button>
    </article>
  );
};

export default Card;
