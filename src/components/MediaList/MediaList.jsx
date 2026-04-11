import styles from "./MediaList.module.css";
import MediaCard from "../MediaCard/MediaCard";

function MediaList() {
  const peliculas = [
    {
      id: 1,
      titulo: "Interstellar",
      director: "Christopher Nolan",
      anio: 2014,
      genero: "Ciencia Ficción",
      rating: 8.6,
      tipo: "pelicula",
      visto: false,
    },
    {
      id: 2,
      titulo: "Parasite",
      director: "Bong Joon-ho",
      anio: 2019,
      genero: "Drama",
      rating: 8.5,
      tipo: "pelicula",
      visto: false,
    },
    {
      id: 9,
      titulo: "Breaking Bad",
      director: "Vince Gilligan",
      anio: 2008,
      genero: "Drama",
      rating: 9.5,
      tipo: "pelicula",
      visto: true,
    },
    {
      id: 10,
      titulo: "Everything Everywhere All at Once",
      director: "Daniel Kwan",
      anio: 2022,
      genero: "Acción",
      rating: 7.8,
      tipo: "pelicula",
      visto: true,
    },
  ];

  const noVistas = peliculas.filter(p => !p.visto);
  const vistas = peliculas.filter(p => p.visto);

  return (
    <div className={styles.display}>
      
      <div className={styles.porVer}>
        Por ver
        {noVistas.length} items
        {noVistas.map(p => (
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
        ))}
      </div>

      <div className={styles.vistas}>
        Vistas
        {vistas.length} items
        {vistas.map(p => (
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
        ))}
      </div>

    </div>
  );
}

export default MediaList;