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
    return data ? JSON.parse(data) : [];
  });
  const [busqueda, setBusqueda] = useState("");
  const [genero, setGenero] = useState("Todos");
  const [tipo, setTipo] = useState("todos");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };
  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const toggleVisto = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, visto: !item.visto } : item,
      ),
    );
  };
  const handleSave = (nuevoItem) => {
    const itemConId = {
      ...nuevoItem,
      id: Date.now(),
    };
    setItems([itemConId, ...items]);
    setIsFormOpen(false);
  };

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
        <SortControls items={items} onSort={setItems} onAdd={handleOpenForm} />
      </div>
      {/* Formulario Modal */}
      {isFormOpen && (
        <MediaForm onClose={handleCloseForm} onSave={handleSave} />
      )}

      {/* CONTENT */}
      <div style={{ padding: "28px 40px" }}>
        <MediaList item={items} onToggleVisto={toggleVisto} />
      </div>
    </div>
  );
}
