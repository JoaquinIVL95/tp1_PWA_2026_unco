import styles from "./ConfirmDialog.module.css";

export default function ConfirmDialog({ titulo, onConfirm, onCancel }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <p className={styles.message}>
          ¿Seguro que querés eliminar <strong>"{titulo}"</strong>?
        </p>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onCancel}>
            Cancelar
          </button>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
