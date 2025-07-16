import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Прозрачный текстовый блок слева */}
      <div className="absolute top-[25%] left-[20%] bg-black/0 p-6 rounded-xl max-w-xl  text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Высококачественные <br />
          альтернативные <br />
          топливные системы <br />
          и компоненты для<br />
          <span className="text-5xl text-yellow-400">ТВОЕГО TANK 300</span>
        </h1>
      </div>

      {/* Кнопка под текстом */}
      <div className="absolute top-[70%] left-[5%]">
        <a
          href="#apply"
          className="bg-gradient-to-r from-yellow-200 to-teal-200 text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Оставить заявку
        </a>
      </div>
    </section>
  );
}