import countries from "../assets/img/countries.png"
function Proyectos() {
  return (
    <section id="proyectos">
      <div className="container todo2">
        <div className="text">
          <h1 className="text">PROYECTOS</h1>
        </div>
        <div>
          <div>
            <div className="par-bot">
              <h3 className="text">Countries</h3>
              <p>Proyecto individual de soyHenry sobre todos los paises, que permite al usuario buscar el pais, poder filtrarlos por continentes, orden alfabetico, segun la cantidad de la poblancion de mayor a menor y de menor a mayor y poder crear actividades para el pais que elija el usuario y despues filtrar los paises que tienen una actividad</p>
              <a href=""><img src={countries} alt="" width={700} className="imagen-container2" /></a><br />
              <a href=""><button className="botones">Repositorio</button></a>
              <br />
            </div>
          </div>
          <div className="par-bot">
            <h3 className="text">XUL-SOLAR</h3>
            <p>MUSEO</p>
            <a href=""><button className="botones">Video</button></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proyectos