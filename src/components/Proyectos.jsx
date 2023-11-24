import countries from "../assets/img/countries.png"
import xul from "../assets/img/xul.jpg"
import flecha from "../assets/img/caret-abajo.png"
function Proyectos() {

  const skills = () => {
    const portfolioSection = document.getElementById("skills");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", duration: 1000 });
    }
  };

  return (
    <section id="proyectos" style={{ paddingTop: "20px" }}>
      <div className="container todo2">
        <div className="text2">
          <h1 className="text2">PROYECTOS</h1>
        </div>
        <div>
          <div>
            <div className="par-bot">
              <h3 className="text2">Countries</h3>
              <p className="parr2">Proyecto sobre todos los paises, que permite al usuario buscar el pais, poder filtrarlos por continentes, orden alfabetico, segun la cantidad de la poblancion de mayor a menor y de menor a mayor y poder crear actividades para el pais que elija el usuario y despues filtrar los paises que tienen una actividad
              </p><p className="parr2">Tecnoligias utilizadas:</p>
              <div className="tecnologias">
                <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>Javascript</span>
                <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>React</span>
                <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>Redux</span>
                <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>HTML</span>
                <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>CSS</span>
                <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>PostgreSQL</span>
                <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>Express</span>
                <span className="badge text-bg-primary">Node.js</span>
              </div><br />
              <a href="https://github.com/joaquin-espinosa733/PI_countries" target="__blank">
                <img src={countries} alt="" width={700} className="imagen-container2" />
              </a>
              <br />
              <a target="__blank" href="https://github.com/joaquin-espinosa733/PI_countries">
                <button className="botones">Repositorio</button>
              </a>
              <br />
            </div>
            <hr />
          </div>
          <div className="par-bot">
            <h3 className="text2">XUL-SOLAR</h3>
            <p className="parr2">SPA(single page aplication) en la que podes crear un usuario, recuperar contraseña, gestionar la reserva de actividades, realizar donaciones con mercado pago, investigar sobre Xul Solar, y gestionar todas las funcionalidades de la pagina con un perfil de administrador.</p><p className="parr2">Tecnoligias utilizadas:</p>
            <div className="tecnologias">
              <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>Javascript</span>
              <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>React</span>
              <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>Redux</span>
              <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>HTML</span>
              <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>CSS</span>
              <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>PostgreSQL</span>
              <span className="badge text-bg-primary" style={{ marginRight: "5px" }}>Express</span>
              <span className="badge text-bg-primary">Node.js</span>
            </div><br />
            <a href="https://www.youtube.com/watch?v=BGJdh_8pxvo" target="__blank">
              <img src={xul} alt="" width={700} className="imagen-container2" />
            </a>
            <br />
            <a href="https://www.youtube.com/watch?v=BGJdh_8pxvo" target="__blank"><button className="botones">Video</button></a>
          </div>
        </div>
        <br />
        <a href="#skills" onClick={skills}><img src={flecha} alt="" width={20} height={20} className="flecha2" /></a>
      </div>
      <br />
      <br />
      <br />
    </section>
  )
}

export default Proyectos