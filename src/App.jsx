import './App.scss';
import Me from './components/Me';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';

function App() {


  return (
    <>
      <div className=' count'>
        <Me />
        <SobreMi />
        <Proyectos />
      </div>
    </>
  )
}

export default App
