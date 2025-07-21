import './styles/reset.css'
import './styles/base.css'
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/about';
import Tech from './components/Tech';
import Compatibility from './components/Compatibility';
import Components from './components/ComponentsGbo';
import Economy from './components/Economy';
import Request from './components/Request';



export default function App() {
  return (
    <div >
      <Header />
      <Hero />
      <About />
      <Tech/>
      <Compatibility/>
      <Components/>
      <Economy>
      </Economy>
      <Request></Request>
     </div>
  );
}