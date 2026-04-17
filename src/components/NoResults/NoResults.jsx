import styles from "./NoResults.module.css";

export default function NoResults() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>🔍 No se encontraron resultados para los filtros aplicados.</p>
      <p className={styles.subtitle}>Intentá cambiar o limpiar los filtros activos.</p>
    </div>
  );
}
