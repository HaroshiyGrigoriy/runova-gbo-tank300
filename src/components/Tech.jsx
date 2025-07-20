import React, { useState } from 'react';
import '../styles/techSection.css';
import Modal from './Modal';

import OnlyGas from '../assets/OnlyGas.png';
import TankGdi from '../assets/tang_gdi.jpg';
import GdiMotors from '../assets/gdi_motors.jpg';
import TankNight from '../assets/tank_night.jpg';
import TankMorning from '../assets/tank_morning.png';
import Night from '../assets/night.jpg';
// Добавь свои картинки в папку assets и замени пути ниже:
const SLIDES = [
  {
    image:OnlyGas,
    title: '100% работа на газе',
    desc: 'Полный отказ от бензина — максимальная экономия и экологичность.',
  },
  {
    image: TankGdi,
    title: 'Интеграция без вмешательства',
    desc: 'Встраивается в штатную топливную систему без модификаций двигателя.',
  },
  {
    image: GdiMotors,
    title: 'Поддержка GDI и TCI',
    desc: 'Совместимость с современными моторами прямого впрыска и турбированными инжекторами.',
  },
  {
    image: TankNight,
    title: 'Адаптация под Tank 300',
    desc: 'Учет всех инженерных особенностей для идеальной интеграции.',
  },
  {
    image: TankMorning,
    title: 'Холодный старт до –30 °C',
    desc: 'Надежный запуск даже в суровых морозах.',
  },
  {
    image: Night,
    title: 'Увеличение ресурса двигателя',
    desc: 'Чище сгорание — меньше износа, больше пробега.',
  },
];

export default function Tech({ onRequest }) {
 const [isModalOpen, setModalOpen] = useState(false);
  
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
  

  const [index, setIndex] = useState(0);
  const last = SLIDES.length - 1;

  const prev = () => setIndex(i => (i === 0 ? last : i - 1));
  const next = () => setIndex(i => (i === last ? 0 : i + 1));

  return (
    <section className="tech-slider">
      <div className='container'>
      <div className="tech-slider__header container">
        <h2 className="tech-slider__title">ГБО 6 поколения RuNova</h2>
        <p className="tech-slider__lead">
          Инновационное решение для полного отказа от бензина без изменения конструкции двигателя
        </p>
      </div>

      <div className="tech-slider__viewport">
        <div
          className="tech-slider__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <div
              key={i}
              className="tech-slider__slide"
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="tech-slider__overlay" />
              <div className="tech-slider__content container">
                <h3 className="tech-slider__slide-title">{s.title}</h3>
                <p className="tech-slider__slide-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="tech-slider__arrow tech-slider__arrow--prev" onClick={prev}>
          ‹
        </button>
        <button className="tech-slider__arrow tech-slider__arrow--next" onClick={next}>
          ›
        </button>
      </div>

      <div className="tech-slider__cta">
       <button className="btn-request" onClick={handleOpen}>
            Оставить заявку
          </button>
      </div>
      </div>
       {isModalOpen && <Modal onClose={handleClose} />}
    </section>
  );
}