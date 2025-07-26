import {useState} from "react";
import Modal from "./components/Modal";

import './styles/reset.css'



import './styles/base.css'
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tech from './components/Tech';
import Compatibility from './components/Compatibility';
import Components from './components/ComponentsGbo';
import Economy from './components/Economy';
import Request from './components/Request';
import Footer from "./components/Footer";



export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);  
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  
  return (
    <div >
      <Header />
      <Hero />
      <About />
      <Tech onRequest={handleOpen}/>
      <Compatibility/>
      <Components/>
      <Economy onRequest={handleOpen}>
      </Economy>
      <Request></Request>
      <Footer></Footer>
      {isModalOpen && <Modal onClose={handleClose} />}
     </div>
      
  );
}