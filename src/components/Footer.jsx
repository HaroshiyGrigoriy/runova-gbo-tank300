import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id="contacts">
      <div className="container footer__grid">

        {/* Левая колонка: бренд и миссия */}
        <div className="footer__brand">
          <h3 className="footer__logo">RUNOVA</h3>
          <p className="footer__tagline">
            ГБО 6 поколения: 100% работа на газе без вмешательства в двигатель.
          </p>
        </div>

        {/* Контакты */}
        <div className="footer__block">
          <h4 className="footer__title">Контакты</h4>
          <ul className="footer__list">
            <li>Марсель Сафиуллин</li>
            <li><a href="tel:+79373994000">+7 937 399‑40‑00</a></li>
            <li><a href="tel:+79154424443">+7 915 442‑44‑43</a></li>
            <li><a href="mailto:marsel87@mail.ru">marsel87@mail.ru</a></li>
            <li>Чебоксары / Москва</li>
          </ul>
        </div>

        {/* Установка */}
        <div className="footer__block">
          <h4 className="footer__title">Установка</h4>
          <ul className="footer__list">
            <li>Официальные СТО‑партнёры</li>
            <li>Калибровка под Tank 300</li>
            <li>Гарантийная поддержка</li>
            <li><button className="btn btn--accent btn--sm" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>Оставить заявку</button></li>
          </ul>
        </div>

        {/* Юридические ссылки */}
        <div className="footer__block">
          <h4 className="footer__title">Документы</h4>
          <ul className="footer__list">
            <li><a href="/privacy.html" target="_blank" rel="noopener noreferrer">Политика конфиденциальности</a></li>
            <li><a href="/cookies.html"  target="_blank" rel="noopener noreferrer">Политика cookies</a></li>
            <li><a href="/offer.pdf"     target="_blank" rel="noopener noreferrer">Публичная оферта</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-wrap">
          <span>© {new Date().getFullYear()} RUNOVA</span>
          <span>Сделано с ♥ в России</span>
        </div>
      </div>
    </footer>
  );
}