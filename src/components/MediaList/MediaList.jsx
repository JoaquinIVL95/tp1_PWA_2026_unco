import styles from "./MediaList.module.css";
import MediaCard from "../MediaCard/MediaCard";

function MediaList({item}) {

  const noVistas = item.filter(p => !p.visto);
  const vistas = item.filter(p => p.visto);

  return (
    <div className={styles.display}>
      
      <div className={styles.porVer}>
        <div className={styles.datosPorVer}><h3>Por ver</h3>
        <div className={styles.items}>{noVistas.length} items </div></div>
        {noVistas.length === 0? (
          <div className={styles.emptyPorVer}>
            No tenes contenido por ver.
          </div>
        ) : (
        noVistas.map(p => (
          <MediaCard
            key={p.id}
            titulo={p.titulo}
            director={p.director}
            anio={p.anio}
            genero={p.genero}
            rating={p.rating}
            tipo={p.tipo}
            visto={p.visto}
          />
        )))}
      </div>

      <div className={styles.vistas}>
        <div className={styles.datosVista}><h3>Vistas</h3>
        <div className={styles.items}>{vistas.length} items </div></div>
        {vistas.length===0? (
          <div className={styles.emptyVistas}>
            No tenes contenido visto.
          </div>
        ) : (
        vistas.map(p => (
          <MediaCard
            key={p.id}
            titulo={p.titulo}
            director={p.director}
            anio={p.anio}
            genero={p.genero}
            rating={p.rating}
            tipo={p.tipo}
            visto={p.visto}
          />
        )))}
      </div>

    </div>
  );
}

export default MediaList;