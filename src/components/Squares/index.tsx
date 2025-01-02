import { useState } from "react";
import styles from "./styles.module.scss";

interface ISquares {
  className?: string;
}

const Squares = ({ className }: ISquares) => {
  const [activeSquares, setActiveSquares] = useState<number[]>([]);

  const toggleSquare = (index: number) => {
    setActiveSquares((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <ul className={`${styles["squares"]} ${className}`}>
      {Array.from({ length: 365 }).map((_, index) => (
        <li className={styles["squares__square"]} key={index}>
          <button
            className={activeSquares.includes(index) ? styles["_active"] : ""}
            onClick={() => toggleSquare(index)}
            type="button"
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default Squares;
