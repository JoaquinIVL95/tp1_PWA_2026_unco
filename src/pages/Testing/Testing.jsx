import { useState, useEffect } from "react";
import { seedData } from "../../data/seedData";
import styles from "./Testing.module.css";

import Titulo from "../../components/Titulo/Titulo";
import Counter from "../../components/Counter/Counter";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import SortControls from "../../components/SortControls/SortControls";
import MediaList from "../../components/MediaList/MediaList";
import MediaForm from "../../components/MediaForm/MediaForm";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog.jsx"

export default function Testing() {
  const [items, setItems] = useState(() => {
    const data = localStorage.getItem("media");
    const parsed = data ? JSON.parse(data) : null;

    return parsed && parsed.length > 0 ? parsed : seedData;
  });
  const [busqueda, setBusqueda] = useState("");
  const [genero, setGenero] = useState("Todos");
  const [tipo, setTipo] = useState("todos");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemEliminar, setItemEliminar] = useState(null)

  const handleOpenForm = () => {
    setSelectedItem(null);
    setIsFormOpen(true);
  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  //feature para ordenamiento
  const [sortConfig, setSortConfig] = useState({
    criterio: null,
    orden: null,
  });

  const handleSort = (criterio, orden) => {
    setSortConfig({ criterio, orden });
  };

  const sortedItems = [...items].sort((a, b) => {
    if (!sortConfig.criterio) return 0;

    const { criterio, orden } = sortConfig;

    const valA = Number(a[criterio]);
    const valB = Number(b[criterio]);

    return orden === "asc" ? valA - valB : valB - valA;
  });

  
  //feature para ver si la serie/pelicula está vista
  const toggleVisto = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, visto: !item.visto } : item,
      ),
    );
  };
  const handleDelete = (id) => {
    setItemEliminar(id)
  };
const handleSave = (nuevoItem) => {
  if (nuevoItem.id) {
    // edita si encuentra el id
    setItems((prev) =>
      prev.map((item) =>
        item.id === nuevoItem.id ? nuevoItem : item
      )
    );
  } else {
    // sino existe el id crea uno nuevo
    const itemConId = {
      ...nuevoItem,
      id: Date.now(),
    };

    setItems((prev) => [itemConId, ...prev]);
  }

  setIsFormOpen(false);
};
  const handleConfirmDelete= () =>{ setItems(items.filter(i => i.id !== itemEliminar))
  setItemEliminar(null)
  }
  const handleEdit = (id) => {
    const item = items.find((i) => i.id === id);
    setSelectedItem(item);
    setIsFormOpen(true);
  }

  const hayFiltros = busqueda !== "" || genero !== "Todos" || tipo !== "todos";

  const itemsFiltrados =sortedItems.filter(f => (f.titulo.toLowerCase().includes(busqueda.toLowerCase()) 
    || f.director.toLowerCase().includes(busqueda.toLowerCase()))
    && (genero === "Todos" ? true : f.genero === genero)
    && (tipo === "todos" ? true : f.tipo === tipo))

  useEffect(() => {
    localStorage.setItem("media", JSON.stringify(items));
  }, [items]);

  return (
    <div className={styles.page}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Titulo text="🎬 Gestor de Películas y Series" level={1} />
          <span className={styles.subtitle}>
            Tu lista personal de películas y series favoritas
          </span>
        </div>
        <Counter items={items} />
      </header>

      {/* CONTROLS BAR */}
      <div className={styles.controlsBar}>
        <SearchBar value={busqueda} onChange={setBusqueda} />
        <Filters
          genero={genero}
          setGenero={setGenero}
          tipo={tipo}
          setTipo={setTipo}
          items={items}
          hayFiltros={hayFiltros}
          onLimpiar={() => {
            setBusqueda("");
            setGenero("Todos");
            setTipo("todos");
          }}
        />
        <SortControls onSort={handleSort} onAdd={handleOpenForm} />
      </div>

      {/* Formulario Modal */}
      {isFormOpen && (
        <MediaForm onClose={handleCloseForm} onSave={handleSave} initialData={selectedItem}/>
      )}
      {/* Confirmar eliminación */}
      {itemEliminar && (
        <ConfirmDialog
          titulo={items.find(i => i.id === itemEliminar)?.titulo}
          onConfirm={handleConfirmDelete}
          onCancel={() => setItemEliminar(null)}
        />
      )}

      {/* CONTENT */}
      <div className={styles.content}>
        <MediaList
          item={itemsFiltrados}
          onToggleVisto={toggleVisto}
          onDelete={handleDelete}
          onEdit={handleEdit}
          hayFiltros={hayFiltros}
        />
      </div>
    </div>
  );
}
