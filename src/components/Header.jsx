import React, { useState } from 'react';
import Modal from './Modal';
import '../index.css';
export default function Header() {

   const [isModalOpen, setModalOpen] = useState(false);
  
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
  

  return (
<header className="site-header">

  <div className="container">
    
  
    <div className="header-content">
      
  
      <div className="logo">
        <a href="#">RUNOVA</a>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          <li><a href="#about">О нас</a></li>
          <li><a href="#gbo">О ГБО</a></li>
          <li><a href="#advantages">Преимущества</a></li>
        </ul>
            <button className="btn-request" onClick={handleOpen}>
            Оставить заявку
          </button>
      </nav>
    </div>
  </div>
  {isModalOpen && <Modal onClose={handleClose} />}
</header>
  );
}