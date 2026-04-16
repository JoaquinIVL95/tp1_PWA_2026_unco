import { useState, useEffect } from "react";
import { seedData } from "../../data/seedData";

import Titulo from "../../components/Titulo/Titulo";
import Counter from "../../components/Counter/Counter";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filters from "../../components/Filters/Filters";
import SortControls from "../../components/SortControls/SortControls";
import MediaList from "../../components/MediaList/MediaList";
import MediaForm from "../../components/MediaForm/MediaForm";

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
    const confirmacion = window.confirm(
      "¿Seguro que querés eliminar este item?",
    );

    if (!confirmacion) return;

    setItems((prev) => prev.filter((item) => item.id !== id));
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
  const handleEdit = (id) => {
    const item = items.find((i) => i.id === id);
    setSelectedItem(item);
    setIsFormOpen(true);
  }

  useEffect(() => {
    localStorage.setItem("media", JSON.stringify(items));
  }, [items]);

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#f1f5f9",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <Titulo text="🎬 Gestor de Películas y Series" level={1} />
          <span style={{ fontSize: "14px", color: "#64748b" }}>
            Tu lista personal de películas y series favoritas
          </span>
        </div>
        <Counter items={items} />
      </header>

      {/* CONTROLS BAR */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          padding: "12px 40px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <SearchBar value={busqueda} onChange={setBusqueda} />
        <Filters
          genero={genero}
          setGenero={setGenero}
          tipo={tipo}
          setTipo={setTipo}
        />
        <SortControls onSort={handleSort} onAdd={handleOpenForm} />
      </div>
      {/* Formulario Modal */}
      {isFormOpen && (
        <MediaForm onClose={handleCloseForm} onSave={handleSave} initialData={selectedItem}/>
      )}

      {/* CONTENT */}
      <div style={{ padding: "28px 40px" }}>
        <MediaList
          item={sortedItems}
          onToggleVisto={toggleVisto}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}
