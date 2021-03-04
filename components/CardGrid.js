import styles from 'styles/CardGrid.module.css';

export default function CardGrid({children}) {
  return (
    <div className={styles.cardgrid}>
      { children}
    </div>
  );
}
