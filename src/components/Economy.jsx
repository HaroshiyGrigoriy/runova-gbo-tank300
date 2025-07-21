import React, { useState, useMemo } from 'react';
import '../styles/economy.css';

export default function Economy({ onRequest }) {
  const [form, setForm] = useState({
    distance: 35000,
    consumption: 13,
    priceBenz: 62,
    priceGas: 31,
    gasFactor: 1.12,
    systemCost: 120000
  });

  const update = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: parseFloat(value) }));
  };

  const calc = useMemo(() => {
    const { distance, consumption, priceBenz, priceGas, gasFactor, systemCost } = form;

    const costPerKmBenz = (consumption / 100) * priceBenz;
    const costPerKmGas  = (consumption * gasFactor / 100) * priceGas;

    const yearlyBenz = distance * costPerKmBenz;
    const yearlyGas  = distance * costPerKmGas;
    const savingYear = yearlyBenz - yearlyGas;
    const savingMonth = savingYear / 12;
    const paybackMonths = savingMonth > 0 ? systemCost / savingMonth : null;
    const fiveYears = savingYear * 5;
    const percentEconomy = yearlyBenz > 0 ? (savingYear / yearlyBenz) * 100 : 0;

    // Нормируем для прогресс-бара (допустим макс разумный предел окупаемости 24 мес.)
    const paybackNorm = paybackMonths ? Math.min(1, paybackMonths / 24) : 0;

    return {
      costPerKmBenz,
      costPerKmGas, 
      yearlyBenz,
      yearlyGas,
      savingYear,
      savingMonth,
      paybackMonths,
      fiveYears,
      percentEconomy,
      paybackNorm
    };
  }, [form]);

  const f  = n => n.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
  const f2 = n => n.toLocaleString('ru-RU', { maximumFractionDigits: 2 });

  return (
    <section id="economy" className="economy">
      <div className="container economy__wrap">

        {/* HERO блока экономии */}
        <div className="economy-hero">
          <div className="economy-hero__left">
            <h2 className="economy-hero__title">
              Экономия, которую видно
            </h2>
            <p className="economy-hero__lead">
              100% работа на газе = меньше расходов на каждый километр. Никаких скрытых бензиновых “хвостов”.
            </p>
            <div className="economy-hero__stat">
              <span>Годовая экономия</span>
              <strong>{f(calc.savingYear)} ₽</strong>
              <em>≈ {f(calc.savingMonth)} ₽ / месяц</em>
            </div>
            <div className="economy-hero__actions">
              <button className="economy__btn" onClick={onRequest}>Получить установку</button>
            </div>
          </div>
          <div className="economy-hero__right">
            <div className="economy-kpi-grid">
              <div className="kpi">
                <span className="kpi__label">1 км бензин</span>
                <span className="kpi__value">{f2(calc.costPerKmBenz)} ₽</span>
              </div>
              <div className="kpi kpi--accent">
                <span className="kpi__label">1 км газ</span>
                <span className="kpi__value">{f2(calc.costPerKmGas)} ₽</span>
              </div>
              <div className="kpi">
                <span className="kpi__label">% экономии</span>
                <span className="kpi__value">{calc.percentEconomy.toFixed(1)}%</span>
              </div>
              <div className="kpi">
                <span className="kpi__label">5 лет выгода</span>
                <span className="kpi__value">{f(calc.fiveYears)} ₽</span>
              </div>
            </div>

            <div className="payback">
              <div className="payback__top">
                <span>Окупаемость</span>
                <span>
                  {calc.paybackMonths
                    ? `${calc.paybackMonths.toFixed(1)} мес.`
                    : '—'}
                </span>
              </div>
              <div className="payback__bar">
                <div
                  className="payback__fill"
                  style={{ width: `${calc.paybackNorm * 100}%` }}
                />
              </div>
              <div className="payback__hint">
                (ориентир: всё что ≤12 мес — очень быстро)
              </div>
            </div>
          </div>
        </div>

        {/* Почему газ (карточки) */}
        <div className="economy-reasons">
          <div className="reason">
            <h4>Газ в 1.7–2.0 раза дешевле</h4>
            <p>Даже с +10–15% к расходу итог ниже на 35–45%.</p>
          </div>
          <div className="reason">
            <h4>100% отказ от бензина</h4>
            <p>Нет скрытых долей бензина как у ГБО 4.</p>
          </div>
            <div className="reason">
            <h4>Чем больше пробег</h4>
            <p>Тем быстрее окупаемость, рост выгоды геометрический.</p>
          </div>
          <div className="reason">
            <h4>Рост цен — твой плюс</h4>
            <p>Разница между топливами = твоя прибавка.</p>
          </div>
        </div>

        {/* Формула (свёрнутая панель) */}
        <details className="formula-box">
          <summary>Показать формулы расчёта</summary>
          <pre>{`Cost_benz = S * (Cb / 100) * Pb
Cost_gas  = S * (Cb * k / 100) * Pg
Saving_year = Cost_benz - Cost_gas
Payback = SystemCost / (Saving_year / 12)`}</pre>
          <p className="formula-box__note">
            S – пробег; Cb – расход бензина; k – коэф. расхода газа; Pb/Pg – цены; SystemCost – стоимость системы.
          </p>
        </details>

        {/* Форма + Результаты */}
        <div className="economy-calc-block">
          <div className="economy-calc-block__form">
            <h3>Свой сценарий</h3>
            <form onSubmit={e => e.preventDefault()} className="calc-form">
              <label>
                Пробег / год (км)
                <input name="distance" type="number" value={form.distance} onChange={update}/>
              </label>
              <label>
                Расход бензина (л/100)
                <input name="consumption" type="number" step="0.1" value={form.consumption} onChange={update}/>
              </label>
              <label>
                Цена бензина (₽/л)
                <input name="priceBenz" type="number" step="0.1" value={form.priceBenz} onChange={update}/>
              </label>
              <label>
                Цена газа (₽/л)
                <input name="priceGas" type="number" step="0.1" value={form.priceGas} onChange={update}/>
              </label>
              <label>
                Коэф. газа
                <select name="gasFactor" value={form.gasFactor} onChange={update}>
                  <option value={1.10}>1.10</option>
                  <option value={1.12}>1.12</option>
                  <option value={1.15}>1.15</option>
                </select>
              </label>
              <label>
                Стоимость системы (₽)
                <input name="systemCost" type="number" value={form.systemCost} onChange={update}/>
              </label>
              <label>
                Твоя годовая экономия
              </label>
              
            </form>
          </div>

          <div className="economy-calc-block__result">
            <h3>Результаты</h3>
            <ul className="result-list">
              <li><span>1 км бензин</span><strong>{f2(calc.costPerKmBenz)} ₽</strong></li>
              <li><span>1 км газ</span><strong>{f2(calc.costPerKmGas)} ₽</strong></li>
              <li><span>Экономия / год</span><strong>{f(calc.savingYear)} ₽</strong></li>
              <li><span>Экономия / месяц</span><strong>{f(calc.savingMonth)} ₽</strong></li>
              <li><span>5 лет экономии</span><strong>{f(calc.fiveYears)} ₽</strong></li>
              <li><span>% экономии</span><strong>{calc.percentEconomy.toFixed(1)}%</strong></li>
              <li><span>Окупаемость</span><strong>{calc.paybackMonths ? calc.paybackMonths.toFixed(1) + ' мес.' : '—'}</strong></li>
            </ul>
            <button className="economy__btn economy__btn--small" onClick={onRequest}>
              Хочу такую же экономию
            </button>
          </div>
        </div>

        {/* Экология + ресурс */}
        <div className="eco-benefits">
          <div className="eco-benefits__item">
            <h4>CO₂ ↓</h4>
            <p>До 10–15% меньше углерода на км.</p>
          </div>
          <div className="eco-benefits__item">
            <h4>Чище камеру</h4>
            <p>Нет сажи — меньше нагара.</p>
          </div>
          <div className="eco-benefits__item">
            <h4>NOx ↓</h4>
            <p>Ниже температура горения.</p>
          </div>
          <div className="eco-benefits__item">
            <h4>Ресурс ↑</h4>
            <p>Мотор дольше в стабильных параметрах.</p>
          </div>
        </div>

        {/* Финальный CTA */}
        <div className="economy-final-cta">
          <p>Готов проверить на своём маршруте?</p>
          <button className="economy__btn" onClick={onRequest}>Оставить заявку</button>
        </div>

      </div>
    </section>
  );
}
