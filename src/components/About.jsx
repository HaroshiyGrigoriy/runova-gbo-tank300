import '../index.css';
import aboutImage from '../assets/about.jpg'; // Добавь своё фото

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="about__intro">
          <h2 className="about__title">RUNOVA — лидеры в технологии ГБО</h2>
          <p className="about__lead">
            Мы создаём решения, которые позволяют полностью отказаться от бензина. Наша технология — будущее уже сегодня.
          </p>
        </div>

        <div className="about__main">
          <div className="about__description">
            <p>
              RUNOVA — команда инженеров и предпринимателей, разрабатывающая передовые решения в сфере автогазового оборудования. Наш флагманский продукт — уникальная <strong>система ГБО 6 поколения для Tank 300</strong>. 
            </p>
            <p>
              Мы единственные в России, кто обеспечивает работу бензиновых двигателей на 100% сжиженном газе без каких-либо конструктивных изменений мотора.
            </p>
            <p>
              За плечами — более <strong>300 успешных тестов на автомобилях с моторами GDI</strong> и глубокий практический опыт, позволяющий нашим клиентам навсегда забыть о бензине.
            </p>
          </div>
          <div className="about__visual">
            <img src={aboutImage} alt="RUNOVA технология ГБО 6 поколения" />
          </div>
        </div>

        <div className="about__features">
          <div className="feature-card">
            <div className="feature-card__icon">⚙️</div>
            <h3 className="feature-card__title">ГБО 6 Поколения</h3>
            <p className="feature-card__desc">Самое современное решение на рынке</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">🔬</div>
            <h3 className="feature-card__title">300+ Тестов</h3>
            <p className="feature-card__desc">Тщательные испытания на двигателях GDI</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">🛡️</div>
            <h3 className="feature-card__title">Безопасность</h3>
            <p className="feature-card__desc">Никакого вмешательства в конструкцию двигателя</p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon">♻️</div>
            <h3 className="feature-card__title">100% Газ</h3>
            <p className="feature-card__desc">Полный отказ от бензина, максимум экономии</p>
          </div>
        </div>

      </div>
    </section>
  );
}