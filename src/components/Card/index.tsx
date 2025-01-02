import { useState } from "react";
import Squares from "../Squares";
import styles from "./styles.module.scss";

const Card = () => {
  const [activeSquares, setActiveSquares] = useState<number[]>([]);

  const toggleSquare = (index: number) => {
    setActiveSquares((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getTodayIndex = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const diffTime = today.getTime() - startOfYear.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <article className={styles["card"]}>
      <h2 className={styles["card__title"]}>📚 Чтение книги</h2>
      <Squares
        className={styles["card__squares"]}
        activeSquares={activeSquares}
      />
      <button
        className={styles["card__button"]}
        type="button"
        onClick={() => toggleSquare(getTodayIndex())}
      >
        ✅ Выполнено
      </button>
    </article>
  );
};

export default Card;
