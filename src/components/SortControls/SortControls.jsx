import { useState } from "react";
import styles from "./SortControls.module.css";

function SortControls({ onSort, onAdd }) {
  const [sortOption, setSortOption] = useState("");

  const handleSort = (value) => {
    setSortOption(value);

    if (!value) {
      onSort(null, null);
      return;
    }

    const [criterio, orden] = value.split("-");

    const map = {
      year: "anio",
      rating: "rating",
    };

    onSort(map[criterio], orden);
  };

  return (
    <div className={styles.controlsBar}>
      <select
        className={styles.sortSelect}
        value={sortOption}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="">Ordenar</option>
        <option value="year-asc">Año ↑</option>
        <option value="year-desc">Año ↓</option>
        <option value="rating-asc">Rating ↑</option>
        <option value="rating-desc">Rating ↓</option>
      </select>

      <button className={styles.addButton} onClick={onAdd}>
        <span className={styles.plus}>+</span>
        Agregar
      </button>
    </div>
  );
}

export default SortControls;
