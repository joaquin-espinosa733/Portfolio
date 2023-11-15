import yo from "../assets/img/me.jpeg";

function SobreMi() {
    return (
        <section id="sobremi">
            <div className="container todo">
                <div className="text">
                    <h1 className="text">ACERCA DE MI</h1>
                </div>
                <div className="content">
                    <div className="imagen-container">
                        <img src={yo} alt="yo" width={300} height={450} className="imagen" />
                    </div>
                    <div className="par-bot">
                        <p className="parr">
                            Soy un desarrollador web Full-Stack apasionado con una trayectoria desde mi infancia. <br /> Mi curiosidad por la tecnología me llevó a descubrir la programación, y desde entonces,<br /> he estado inmerso en el mundo del desarrollo web.
                        </p>
                        <p className="parr">
                            Estoy comprometido con mi crecimiento profesional continuo,<br /> y siempre estoy en busca de oportunidades para enfrentar desafíos más grandes<br /> y emocionantes en el mundo del desarrollo web backEnd,FrontEnd o FullStack.
                        </p>
                        <div>
                            <a target="__blank" href="https://www.linkedin.com/in/joaquin-espinosa/"><button type="button" className="botones2">Linkedin</button></a><br /><br />
                            <a target="__blank" href="https://drive.google.com/file/d/1IVlYdURUl6MNEap3uFOeIQPK69tUvXN1/view?usp=sharing"><button className="botones2" style={{ width: "150px" }}>Descargar CV</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
