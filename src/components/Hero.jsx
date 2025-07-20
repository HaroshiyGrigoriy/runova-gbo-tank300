import React, { useState } from 'react';
import Modal from './Modal';
import '../index.css';

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-text">
            Высококачественные альтернативные топливные системы и компоненты для
            <br />
            <span className="highlight">ТВОЕГО</span>
          </h1>
          <h2 className="hero-title">TANK 300</h2>
          <button className="btn-request" onClick={handleOpen}>
            Оставить заявку
          </button>
        </div>
      </div>

      {isModalOpen && <Modal onClose={handleClose} />}
    </section>
  );
};

export default Hero;