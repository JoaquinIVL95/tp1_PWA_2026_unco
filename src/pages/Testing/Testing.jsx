import { useState } from 'react'
import { seedData } from '../../data/seedData'

import Titulo from '../../components/Titulo/Titulo'
import Counter from '../../components/Counter/Counter'
import SearchBar from '../../components/SearchBar/SearchBar'
import Filters from '../../components/Filters/Filters'
import SortControls from '../../components/SortControls/SortControls'
import MediaForm from '../../components/MediaForm/MediaForm'
import MediaCard from '../../components/MediaCard/MediaCard'
import MediaList from '../../components/MediaList/MediaList'

export default function Testing() {
  const [items] = useState(seedData)
  const [busqueda, setBusqueda] = useState('')
  const [genero, setGenero] = useState('Todos')
  const [tipo, setTipo] = useState('todos')
  const [mostrarForm, setMostrarForm] = useState(false)

  const section = {
    padding: '24px 40px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  }

  const label = {
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#94a3b8',
    letterSpacing: '0.05em',
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: '#f1f5f9', minHeight: '100vh' }}>

      <div style={{ background: '#4f46e5', color: '#fff', padding: '12px 40px', fontSize: '13px', fontWeight: 600 }}>
        🧪 Página de Testing — no es parte de la app
      </div>

      {/* TITULO */}
      <div style={section}>
        <span style={label}>Titulo</span>
        <Titulo text="🎬 Gestor de Películas y Series" level={1} size="xl" />
        <Titulo text="Subtítulo mediano" level={2} size="md" />
        <Titulo text="Texto pequeño" level={3} size="sm" />
      </div>

      {/* COUNTER */}
      <div style={section}>
        <span style={label}>Counter</span>
        <Counter items={items} />
      </div>

      {/* SEARCHBAR */}
      <div style={section}>
        <span style={label}>SearchBar</span>
        <SearchBar value={busqueda} onChange={setBusqueda} />
        <span style={{ fontSize: '12px', color: '#64748b' }}>Valor actual: "{busqueda}"</span>
      </div>

      {/* FILTERS */}
      <div style={section}>
        <span style={label}>Filters</span>
        <Filters genero={genero} setGenero={setGenero} tipo={tipo} setTipo={setTipo} />
        <span style={{ fontSize: '12px', color: '#64748b' }}>Género: {genero} · Tipo: {tipo}</span>
      </div>

      {/* SORT CONTROLS */}
      <div style={section}>
        <span style={label}>SortControls</span>
        <SortControls />
      </div>

      {/* MEDIA FORM */}
      <div style={section}>
        <span style={label}>MediaForm</span>
        <button
          onClick={() => setMostrarForm(!mostrarForm)}
          style={{ width: 'fit-content', padding: '8px 16px', background: '#4f46e5', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '13px' }}
        >
          {mostrarForm ? 'Ocultar form' : 'Mostrar form'}
        </button>
        {mostrarForm && (
          <MediaForm
            onClose={() => setMostrarForm(false)}
            onSave={(data) => { console.log('onSave:', data); setMostrarForm(false) }}
          />
        )}
      </div>

      {/* MEDIA CARD */}
      <div style={section}>
        <span style={label}>MediaCard</span>
        <div style={{ maxWidth: '400px' }}>
          <MediaCard item={seedData[0]} />
        </div>
      </div>

      {/* MEDIA LIST */}
      <div style={section}>
        <span style={label}>MediaList</span>
        <MediaList items={items} />
      </div>

    </div>
  )
}
