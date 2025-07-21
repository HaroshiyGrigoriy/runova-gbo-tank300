import { useState, useEffect } from "react";
import "../styles/request.css";

export default function Request({ id = "request" }) {
  const [form, setForm]       = useState({ name: "", city: "", phone: "", comment: "" });
  const [touched, setTouched] = useState({});
  const [errors,  setErrors]  = useState({});
  const [sending, setSending] = useState(false);
  const [sent,    setSent]    = useState(false);

  /* ────────── helpers ────────── */
  const validate = f => {
    const e = {};
    if (!f.name.trim())                    e.name    = "Введите имя";
    if (!f.city.trim())                    e.city    = "Укажите город";
    if (!/^\+?\d[\d ()-]{8,}$/.test(f.phone)) e.phone = "Телефон некорректен";
    if (f.comment.length > 200)            e.comment = "Макс 200 симв.";
    return e;
  };
  useEffect(() => setErrors(validate(form)), [form]);

  const onChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const onBlur   = e => setTouched(t => ({ ...t, [e.target.name]: true }));

  const canSend  = !sending && Object.keys(errors).length === 0;

  const submit   = async e => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, city: true, phone: true, comment: true });
    if (Object.keys(errs).length) return;

    setSending(true);
    try {
      /* 👉 сюда подключите свой fetch/axios:
      await fetch("/api/lead", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({ ...form, source:"request-section" })
      });
      */
      await new Promise(r => setTimeout(r, 1200)); // имитация
      setSent(true);
    } catch {
      alert("Ошибка отправки. Попробуйте снова.");
    } finally {
      setSending(false);
    }
  };

  /* ────────── UI ────────── */
  return (
    <section id={id} className="request-section">
      <div className="container">
        {!sent ? (
          <div className="request-form-wrap">
            <h2 className="request-title">Оставить заявку</h2>
            <p className="request-lead">
              Полный <strong>отказ от бензина</strong> для&nbsp;Tank 300
            </p>

            <form className="request-form" onSubmit={submit} noValidate>
              {/* Имя */}
              <label className={`field ${touched.name && errors.name ? "error" : ""}`}>
                <span>Имя</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Иван"
                />
                {touched.name && errors.name && <em>{errors.name}</em>}
              </label>

              {/* Город */}
              <label className={`field ${touched.city && errors.city ? "error" : ""}`}>
                <span>Город</span>
                <input
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Москва"
                />
                {touched.city && errors.city && <em>{errors.city}</em>}
              </label>

              {/* Телефон */}
              <label className={`field ${touched.phone && errors.phone ? "error" : ""}`}>
                <span>Телефон</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="+7 9ХХ XXX‑XX‑XX"
                />
                {touched.phone && errors.phone && <em>{errors.phone}</em>}
              </label>

              {/* Комментарий */}
              <label className={`field ${touched.comment && errors.comment ? "error" : ""}`}>
                <span>Комментарий (необязательно)</span>
                <textarea
                  name="comment"
                  rows={3}
                  value={form.comment}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Марка / пробег / вопросы…"
                />
                {touched.comment && errors.comment && <em>{errors.comment}</em>}
              </label>

              <button
                type="submit"
                className="request-submit"
                disabled={!canSend}
              >
                {sending ? <span className="spinner" /> : "Отправить"}
              </button>

              <p className="privacy-note">
                Нажимая кнопку, вы&nbsp;соглашаетесь с&nbsp;обработкой персональных данных
              </p>
            </form>
          </div>
        ) : (
          <div className="request-success">
            <div className="request-success__icon">✅</div>
            <h2>Заявка отправлена</h2>
            <p>Мы свяжемся с&nbsp;вами в&nbsp;ближайшее время.</p>
            <button className="request-submit" onClick={() => setSent(false)}>
              Закрыть
            </button>
          </div>
        )}
      </div>
    </section>
  );
}