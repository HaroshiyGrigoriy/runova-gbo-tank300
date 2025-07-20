import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../styles/compatibility.css';
import iconGdi from '../assets/oil.svg';
import iconNoMod from '../assets/no_mod.svg';
import iconAllSupport from '../assets/support.svg';

// Подготовим данные
import IconGdi        from '../assets/oil.svg';
import IconNoMod      from '../assets/no_mod.svg';
import IconAllSupport from '../assets/support.svg';

const items = [
  { icon: IconGdi,       title: 'GDI & TCI',      text: 'Работаем с любыми современными двигателями прямого впрыска без откатов на бензин.' },
  { icon: IconNoMod,     title: 'Ноль вмешательств', text: 'Никаких сверлений, переходников или перенастроек — просто ставим и едем.' },
  { icon: IconAllSupport,title: 'Полный комплект',  text: 'Клапаны, насосы, ЭБУ уже откалиброваны под Tank 300 и готовы к установке.' },
];

// Регистрируем модули в SwiperCore
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

export default function Compatibility() {
  return (
    <section className="compat-coverflow">
      <div className="container">
        <h2 className="compat-coverflow__title">
          Совместимо с GDI и TCI — там, где другие не справляются
        </h2>

        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          navigation
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          className="compat-coverflow__swiper"
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx} className="compat-coverflow__slide">
              <div className="compat-coverflow__card">
                <div className="compat-coverflow__icon-box">
                  <img src={item.icon} alt="" className="compat-coverflow__icon" />
                </div>
                <h3 className="compat-coverflow__card-title">{item.title}</h3>
                <p className="compat-coverflow__card-text">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}