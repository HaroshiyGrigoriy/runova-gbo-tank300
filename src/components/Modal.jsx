import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ onClose }) => {
  const [form, setForm] = useState({ name: "", city: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {!submitted ? (
          <div className="form-wrapper">
            <h2>Оставить заявку</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Город"
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
                required
              />
              <input
                type="tel"
                placeholder="Телефон"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
                required
              />
              <button type="submit">Отправить</button>
            </form>
          </div>
        ) : (
          <div className="success-message">
            ✅ Заявка отправлена! Мы скоро свяжемся с вами.
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
