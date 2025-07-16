export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[103px] bg-[#121212]/40 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-8">
        {/* Лого слева */}
        <div className="text-white text-2xl font-bold">RuNova</div>

        {/* Навигация справа */}
        <nav className="flex gap-4">
          <a href="#about" className="bg-[#353432]/25 text-white px-6 py-2 rounded-[20px] text-lg font-semibold hover:bg-[#353432]/50">О нас</a>
          <a href="#gbo" className="bg-[#353432]/25 text-white px-6 py-2 rounded-[20px] text-lg font-semibold hover:bg-[#353432]/50">О ГБО</a>
        
          <a href="#benefits" className="bg-[#353432]/25 text-white px-6 py-2 rounded-[20px] text-lg font-semibold hover:bg-[#353432]/50">Преимущества</a>
          <a href="#apply" className="bg-[#353432]/25 text-white px-6 py-2 rounded-[20px] text-lg font-semibold hover:bg-[#353432]/50">Оставить заявку</a>
        </nav>
      </div>
    </header>
  );
}