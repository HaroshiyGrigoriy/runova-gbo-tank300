import { useState } from "react";
import Modal from "./Modal";
import "../index.css";

export default function Header() {
  /* ======= СТЕЙТЫ ======= */
  const [menuOpen, setMenuOpen]   = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">

          {/* Логотип */}
          <div className="logo"><a href="#">RUNOVA</a></div>

          {/* Burger (видим только < 767 px) */}
          <button
            className={`burger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            <span></span>
          </button>

          {/* Навигация */}
          <nav className={`navigation ${menuOpen ? "open" : ""}`}>
            <ul className="nav-list" onClick={() => setMenuOpen(false)}>
              <li><a href="#about">О нас</a></li>
              <li><a href="#gbo">О ГБО</a></li>
              <li><a href="#advantages">Преимущества</a></li>
            </ul>

            <button className="btn-request" onClick={() => setShowModal(true)}>
              Оставить заявку
            </button>
          </nav>
        </div>
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </header>
  );
}