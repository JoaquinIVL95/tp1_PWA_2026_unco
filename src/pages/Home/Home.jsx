import { useState } from 'react'
import { seedData } from '../../data/seedData'
import Titulo from '../../components/Titulo/Titulo'
import Counter from '../../components/Counter/Counter'
import styles from './Home.module.css'

function Home() {
  const [items, setItems] = useState(seedData)

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.hdrLeft}>
          <Titulo text="🎬 Gestor de Películas y Series" level={1} size="xl" />
          <p className={styles.hdrSub}>Tu lista personal de películas y series favoritas</p>
        </div>
        <Counter items={items} />
      </header>
    </div>
  )
}

export default Home
