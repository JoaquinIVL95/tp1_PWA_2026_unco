import styles from './Counter.module.css'

function Counter({items}) {
  const porVer = items.filter(i => !i.visto)
  const vistas = items.filter(i => i.visto)

  const contarGenero =(lista)=> {
    return lista.reduce((acc, item)=> {
      acc[item.genero] = (acc[item.genero] || 0 )+ 1
      return acc
    },{})
  }
  
  const generoPorVer = contarGenero(porVer)
  const generoVistas = contarGenero(vistas)

  const peliculasPorVer = porVer.filter(i => i.tipo === "Película").length
  const seriesPorVer = porVer.filter(i => i.tipo === "Serie").length

  const peliculasVistas = vistas.filter(i => i.tipo === "Película").length
  const seriesVistas = vistas.filter(i => i.tipo ==="Serie").length




  return (
    <div className={styles.badges}>

      <div className={styles.badge} style={{ backgroundColor: '#fffbeb', color: '#f59e0b'
  }}>
        <span className={styles.dot} style={{ backgroundColor: '#f59e0b' }}></span>
        <span>Por Ver: {porVer.length}</span>
      </div>

      <div className={styles.badge} style={{ backgroundColor: '#ecfdf5', color: '#10b981'
  }}>
        <span className={styles.dot} style={{ backgroundColor: '#10b981' }}></span>
        <span>Vistas: {vistas.length}</span>
      </div>

    </div>
  )
}

export default Counter
