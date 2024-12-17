import styles from "./Cell.module.css";

type CellProps = {
  letter: string;
};

const Cell = ({ letter }: CellProps) => {
  return <div className={styles.cell}>{letter}</div>;
};

export default Cell;
