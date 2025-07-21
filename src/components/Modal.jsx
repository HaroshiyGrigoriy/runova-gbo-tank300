import React, { useEffect, useState, useRef } from "react";
import "./Modal.css";

export default function Modal({ onClose, source = "default" }) {
  const [form, setForm] = useState({
    name: "",
    city: "",
    phone: "",
    comment: ""
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);

  // Фокус на первое поле
  useEffect(() => {
    const first = containerRef.current?.querySelector("input[name='name']");
    if (first) first.focus();
  }, []);

  // Esc закрытие
  useEffect(() => {
    const esc = e => e.key === "Escape" && !sending && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [sending, onClose]);

  // Клик по фону
  const handleOverlayClick = e => {
    if (e.target === overlayRef.current && !sending) {
      onClose();
    }
  };

  // Валидация
  const validate = (f = form) => {
    const errs = {};
    if (!f.name.trim()) errs.name = "Введите имя";
    if (!f.city.trim()) errs.city = "Укажите город";
    if (!/^\+?\d[\d\s\-()]{9,}$/.test(f.phone.trim())) errs.phone = "Телефон некорректен";
    if (f.comment.length > 200) errs.comment = "Максимум 200 символов";
    return errs;
  };

  useEffect(() => {
    setErrors(validate());
  }, [form]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleBlur = e => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  };

  const canSubmit = Object.keys(errors).length === 0 && !sending;

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setTouched({ name: true, city: true, phone: true, comment: true });
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    try {
      // ИМИТАЦИЯ запроса: замени на реальную отправку
      // Пример:
      // await fetch("/api/lead", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ ...form, source })
      // });

      await new Promise(r => setTimeout(r, 1200));
      setSent(true);
    } catch (e) {
      alert("Ошибка отправки. Попробуйте ещё раз.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      className="modal-overlay modal-fade-in"
      ref={overlayRef}
      onMouseDown={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div className={`modal-shell ${sent ? "modal-shell--sent" : ""}`} ref={containerRef}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Закрыть"
          disabled={sending}
        >
          ✕
        </button>

        {!sent && (
          <div className="modal-grid">
            <div className="modal-visual">
              <div className="modal-visual__layer" />
              <div className="modal-visual__caption">
                <h3>ГБО 6 поколения</h3>
                <p>Полный отказ от бензина для Tank 300</p>
              </div>
            </div>

            <div className="modal-form-wrap">
              <h2 className="modal-title">Оставить заявку</h2>
              <p className="modal-sub">
                Заполни форму — мы перезвоним и рассчитаем экономию под твой пробег.
              </p>

              <form onSubmit={handleSubmit} className="modal-form" noValidate>
                <div className={`field ${touched.name && errors.name ? "field--error" : ""}`}>
                  <label>Имя</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Иван"
                  />
                  {touched.name && errors.name && (
                    <span className="field__error">{errors.name}</span>
                  )}
                </div>

                <div className={`field ${touched.city && errors.city ? "field--error" : ""}`}>
                  <label>Город</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Москва"
                  />
                  {touched.city && errors.city && (
                    <span className="field__error">{errors.city}</span>
                  )}
                </div>

                <div className={`field ${touched.phone && errors.phone ? "field--error" : ""}`}>
                  <label>Телефон</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+7 9XX XXX XX XX"
                  />
                  {touched.phone && errors.phone && (
                    <span className="field__error">{errors.phone}</span>
                  )}
                </div>

                <div className={`field ${touched.comment && errors.comment ? "field--error" : ""}`}>
                  <label>Комментарий (необязательно)</label>
                  <textarea
                    name="comment"
                    rows={3}
                    value={form.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Марка / пробег / вопросы…"
                  />
                  {touched.comment && errors.comment && (
                    <span className="field__error">{errors.comment}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="modal-submit"
                  disabled={!canSubmit}
                >
                  {sending ? (
                    <span className="spinner" />
                  ) : (
                    "Отправить"
                  )}
                </button>

                <div className="privacy-note">
                  Нажимая кнопку, вы соглашаетесь с обработкой данных.
                </div>
              </form>
            </div>
          </div>
        )}

        {sent && (
          <div className="modal-success">
            <div className="modal-success__icon">✅</div>
            <h2>Заявка отправлена</h2>
            <p>
              Мы свяжемся с тобой в ближайшее время.  
              Пока можешь продолжить изучать преимущества системы.
            </p>
            <button className="modal-submit" onClick={onClose}>
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
