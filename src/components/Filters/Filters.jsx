import styles from "./Filters.module.css";

const generos = [
  "Todos",
  "Acción",
  "Drama",
  "Comedia",
  "Terror",
  "Ciencia Ficción",
  "Animación",
  "Documental",
  "Otro",
];



export default function Filters({
  genero,
  setGenero,
  tipo,
  setTipo,
  items,
  hayFiltros,
  onLimpiar,
}) {
const generosDisponibles = ["Todos", ...new Set(items.map(i => i.genero))]

  return (
    <div className={styles.container}>
      
      {/* GENRE SELECT */}
      <div className={styles.genreSelect}>
        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          className={styles.select}
        >
          {generosDisponibles.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <span className={styles.chevron}>▾</span>
      </div>

      {/* TYPE SEGMENTED */}
      <div className={styles.segmented}>
        <button
          className={`${styles.segmentBtn} ${
            tipo === "todos" ? styles.active : ""
          }`}
          onClick={() => setTipo("todos")}
        >
          Todos
        </button>

        <button
          className={`${styles.segmentBtn} ${
            tipo === "pelicula" ? styles.active : ""
          }`}
          onClick={() => setTipo("pelicula")}
        >
          Película
        </button>

        <button
          className={`${styles.segmentBtn} ${
            tipo === "serie" ? styles.active : ""
          }`}
          onClick={() => setTipo("serie")}
        >
          Serie
        </button>
      </div>

      {/* LIMPIAR FILTROS */}
      {hayFiltros && (
        <button className={styles.clearBtn} onClick={onLimpiar}>
          Limpiar filtros
        </button>
      )}

    </div>
  );
}
