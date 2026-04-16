import styles from "./MediaCard.module.css"

function MediaCard({
  id,
  titulo = "Titulo",
  director = "Director",
  anio ="Año",
  genero = "Género",
  rating = "Rating",
  tipo = "pelicula",
  visto =true,
  onToggleVisto,

}) {
  return <div className={styles.card}>
    <div className={styles.row1}>
      <span>{titulo}</span>
      <span className={ tipo === "pelicula"
      ? styles.badgePelicula
      : styles.badgeSerie}> {tipo}</span>
    </div>
    <div className={styles.rowMuted}> 🎬 {director} </div>
    <div className={styles.rowMuted}> {anio} - {genero} </div>
    <div className={styles.rating}> ⭐ {rating} </div>
    <div className={styles.actions}>
    {visto? 
    (<div className={styles.vista}>
      <button type="button" onClick={() => onToggleVisto(id)}>Mover a por ver</button>
      </div>
    ):
    (<div className={styles.porVer}>
      <button type="button" onClick={() => onToggleVisto(id)}>Marcar como vista</button>
    </div>

    )}
    <div className={styles.spacer}></div>

    <button type="button" className={styles.editar}>✏️</button>
    <button type="button" className={styles.eliminar}>🗑️</button></div>

    </div>
}

export default MediaCard