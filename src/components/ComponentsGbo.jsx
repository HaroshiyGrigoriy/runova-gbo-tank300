// src/components/ComponentsGbo.jsx
import React from 'react';
import '../styles/components_gbo.css';

import bmkImage   from '../assets/for_comp/bmk.jpg';
import nsbImage   from '../assets/for_comp/nasos.jpg';
import ngsImage   from '../assets/for_comp/nasos.jpg';
import ebuImage   from '../assets/for_comp/ebu.jpg';

export default function Components() {
  const items = [
    {
      img: bmkImage,
      title: 'БМК – блок мультиклапанный',
      desc:  'Смешивание и выбор топлива через штатные форсунки без потери давления.',
    },
    {
      img: nsbImage,
      title: 'НСБ – насосная станция бензина',
      desc:  'Обеспечивает мгновенный переход на бензин при любых нагрузках.',
    },
    {
      img: ngsImage,
      title: 'НГС – газовая насосная станция',
      desc:  'Забирает газ из баллона и подаёт под нужным давлением.',
    },
    {
      img: ebuImage,
      title: 'ЭБУ – электронный блок управления',
      desc:  'Управляет клапанами и насосами, калибруется под Tank 300.',
    },
  ];

  return (
   <section className="components-section">
      <div className="container">
        <h2 className="components__heading">Что входит в состав ГБО 6 поколения</h2>
        <p className="components__lead">
          Четыре ключевых узла, разработанных и откалиброванных специально для Tank 300
        </p>
        <ul className="components__grid">
          {items.map((it, i) => (
            <li
              key={i}
              className="components__card"
              style={{ backgroundImage: `url(${it.img})` }}
            >
              <div className="components__overlay" />
              <div className="components__body">
                <h3 className="components__title">{it.title}</h3>
                <p className="components__desc">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

