import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <div >
      <Header />
      <Hero />
      <div className="!bg-red-500 !text-white p-4 text-xl">Проверка Tailwind</div>
    </div>
  );
}