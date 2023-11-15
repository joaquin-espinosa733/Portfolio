import './App.scss';
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
      </div>
    </>
  )
}

export default App
