import React, { useState } from 'react';
import Modal from './Modal';
import '../styles/hero.css';

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-text">
            Высококачественные альтернативные топливные системы и компоненты для твоего
            <br />
          </h1>
          <h2 className="hero-title">TANK 300</h2>
          <button className="btn-request-hero" onClick={handleOpen}>
            Оставить заявку
          </button>
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleClose} />}
    </section>
  );
};

export default Hero;