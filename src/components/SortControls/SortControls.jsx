import { useState } from "react";
import styles from "./SortControls.module.css";

function SortControls({ items, onSort, onAdd }) {
  const [sortOption, setSortOption] = useState("");

  const handleSort = (value) => {
    setSortOption(value);
    console.log("ANTES:", items);

    let sorted = [...items];

    switch (value) {
      case "year-asc":
        sorted.sort((a, b) => a.anio - b.anio);
        break;
      case "year-desc":
        sorted.sort((a, b) => b.anio - a.anio);
        break;
      case "rating-asc":
        sorted.sort((a, b) => a.rating - b.rating);
        break;
      case "rating-desc":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    console.log("DESPUÉS:", sorted);
    onSort(sorted);
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
      Agregar película / serie
    </button>
    </div>
  );
}

export default SortControls;