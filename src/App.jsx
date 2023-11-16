import './App.scss';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Me from './components/Me';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';
import SobreMi from './components/SobreMi';

function App() {


  return (
    <>
      <div className=' count'>
        <Me />
        <SobreMi />
        <Proyectos />
        <Skills />
        <Contacto />
        <Footer />
      </div>
    </>
  )
}

export default App
