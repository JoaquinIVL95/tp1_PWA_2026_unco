import { useState, useEffect } from "react";
import styles from "./MediaForm.module.css";
import { X, ChevronDown } from "lucide-react";

const initialState = {
  titulo: "",
  director: "",
  anio: "",
  genero: "",
  rating: "",
  tipo: "pelicula",
};


export default function MediaForm({ onClose, onSave, initialData }) {
  const [form, setForm] = useState(initialData || initialState);

useEffect(() => {
    setForm(initialData || initialState);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleTipoChange = (tipo) => {
    setForm({ ...form, tipo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (  <div className={styles.overlay}>
    <div className={styles.modal}>
      {/* HEADER */}
      <div className={styles.modalHeader}>
        <h2 className={styles.title}>Agregar / Editar</h2>
        <button className={styles.closeBtn} onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      {/* BODY */}
      <form className={styles.formBody} onSubmit={handleSubmit}>
        
        {/* TITULO */}
        <div className={styles.formField}>
          <label>Título *</label>
          <input
            name="titulo"
            placeholder="Ej: Breaking Bad"
            value={form.titulo}
            onChange={handleChange}
            required
          />
        </div>

        {/* DIRECTOR */}
        <div className={styles.formField}>
          <label>Director *</label>
          <input
            name="director"
            placeholder="Ej: Vince Gilligan"
            value={form.director}
            onChange={handleChange}
            required
          />
        </div>

        {/* AÑO */}
        <div className={styles.formField}>
          <label>Año *</label>
          <input
            name="anio"
            type="number"
            placeholder="Ej: 2008"
            value={form.anio}
            onChange={handleChange}
            required
          />
        </div>

        {/* GENERO */}
        <div className={styles.formField}>
          <label>Género</label>
          <div className={styles.selectWrapper}>
            <select
              name="genero"
              value={form.genero}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option>Drama</option>
              <option>Acción</option>
              <option>Comedia</option>
              <option>Terror</option>
            </select>
            <ChevronDown size={16} className={styles.icon} />
          </div>
        </div>

        {/* RATING */}
        <div className={styles.formField}>
          <label>Rating 1-10</label>
          <span className={styles.helper}>Entre 1 y 10</span>
          <input
            name="rating"
            type="number"
            min="1"
            max="10"
            placeholder="Ej: 9"
            value={form.rating}
            onChange={handleChange}
          />
        </div>

        {/* TIPO */}
        <div className={styles.formField}>
          <label>Tipo</label>
          <div className={styles.radioPills}>
            <button
              type="button"
              className={`${styles.pill} ${
                form.tipo === "pelicula" ? styles.active : ""
              }`}
              onClick={() => handleTipoChange("pelicula")}
            >
              Película
            </button>

            <button
              type="button"
              className={`${styles.pill} ${
                form.tipo === "serie" ? styles.active : ""
              }`}
              onClick={() => handleTipoChange("serie")}
            >
              Serie
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className={styles.modalFooter}>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={onClose}
          >
            Cancelar
          </button>

          <button type="submit" className={styles.saveBtn}>
            Guardar
          </button>
        </div>
      </form>
    </div> </div>
  );
}