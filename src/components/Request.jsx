import { useState } from "react";
import "../styles/request.css";

export default function RequestSection({ onSuccess = () => {} }) {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  const change = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    // TODO: валидация → отправка
    // await fetch("/api/lead", { … });
    setSent(true);
    onSuccess();
  };

  return (
    <section id="request" className="request">
      <div className="container">
        <h2 className="request__title">Оставить заявку</h2>

        {!sent ? (
          <form className="request__form" onSubmit={submit}>
            <input
              name="name"
              placeholder="Имя"
              value={form.name}
              onChange={change}
              required
            />
            <input
              name="phone"
              placeholder="Телефон"
              value={form.phone}
              onChange={change}
              required
            />
            <textarea
              name="comment"
              rows="3"
              placeholder="Комментарий (необязательно)"
              value={form.comment}
              onChange={change}
            />
            <button className="request__btn">Отправить</button>
            <small className="request__note">
              Нажимая кнопку, вы соглашаетесь с&nbsp;обработкой персональных данных
            </small>
          </form>
        ) : (
          <div className="request__success">
            ✅ Заявка отправлена! <br /> Мы свяжемся с вами в ближайшее время.
          </div>
        )}
      </div>
    </section>
  );
}