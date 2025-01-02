import styles from "./styles.module.scss";

interface ISquares {
  activeSquares: number[];
  className?: string;
}

const Squares = ({ className, activeSquares }: ISquares) => {
  const getDaysOfYear = (year: number) => {
    const days: Date[] = [];
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      days.push(new Date(date));
    }

    return days;
  };

  const currentYear = new Date().getFullYear();
  const daysOfYear = getDaysOfYear(currentYear);

  return (
    <ul className={`${styles["squares"]} ${className}`}>
      {daysOfYear.map((date, index) => (
        <li className={styles["squares__square"]} key={index}>
          <button
            className={activeSquares.includes(index) ? styles["_active"] : ""}
            type="button"
            title={date.toDateString()}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default Squares;
