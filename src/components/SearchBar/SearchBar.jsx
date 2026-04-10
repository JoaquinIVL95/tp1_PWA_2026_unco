import styles from "./SearchBar.module.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <span className={styles.icon}>🔍</span>
      <input
        type="text"
        placeholder="Buscar por título o director..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}