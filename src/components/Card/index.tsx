import { useState, useEffect } from "react";
import Squares from "../Squares";
import styles from "./styles.module.scss";

interface ICard {
  cardId: string;
}

const Card = ({ cardId }: ICard) => {
  const [activeSquares, setActiveSquares] = useState<number[]>(() => {
    const saved = localStorage.getItem(`activeSquares-${cardId}`);
    return saved ? JSON.parse(saved) : [];
  });

  const saveToLocalStorage = (newActiveSquares: number[]) => {
    localStorage.setItem(
      `activeSquares-${cardId}`,
      JSON.stringify(newActiveSquares)
    );
  };

  const toggleSquare = (index: number) => {
    setActiveSquares((prev) => {
      const updated = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];
      saveToLocalStorage(updated);
      return updated;
    });
  };

  const getTodayIndex = () => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const diffTime = today.getTime() - startOfYear.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    const saved = localStorage.getItem(`activeSquares-${cardId}`);
    if (saved) {
      setActiveSquares(JSON.parse(saved));
    }
  }, [cardId]);

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
