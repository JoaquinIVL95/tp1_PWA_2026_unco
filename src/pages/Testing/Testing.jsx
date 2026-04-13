import { useState } from 'react'
import { seedData } from '../../data/seedData'

import Titulo from '../../components/Titulo/Titulo'
import Counter from '../../components/Counter/Counter'
import SearchBar from '../../components/SearchBar/SearchBar'
import Filters from '../../components/Filters/Filters'
import SortControls from '../../components/SortControls/SortControls'
import MediaList from '../../components/MediaList/MediaList'

export default function Testing() {
  const [items, setItems] = useState(seedData)
  const [busqueda, setBusqueda] = useState('')
  const [genero, setGenero] = useState('Todos')
  const [tipo, setTipo] = useState('todos')

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#f1f5f9', minHeight: '100vh' }}>

      {/* HEADER */}
      <header style={{
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Titulo text="🎬 Gestor de Películas y Series" level={1} />
          <span style={{ fontSize: '14px', color: '#64748b' }}>
            Tu lista personal de películas y series favoritas
          </span>
        </div>
        <Counter items={items} />
      </header>

      {/* CONTROLS BAR */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '12px 40px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <SearchBar value={busqueda} onChange={setBusqueda} />
        <Filters genero={genero} setGenero={setGenero} tipo={tipo} setTipo={setTipo} />
        <SortControls items={items} onSort={setItems} />
      </div>

      {/* CONTENT */}
      <div style={{ padding: '28px 40px' }}>
        <MediaList item={items} />
      </div>

    </div>
  )
}
