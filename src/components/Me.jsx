function Me() {
    const inicioHome = () => {
        const portfolioSection = document.getElementById("sobremi");
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", duration: 1000 });
        }
    };

    const proyectos = () => {
        const portfolioSection = document.getElementById("proyectos");
        if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest", duration: 1000 });
        }
    };

    return (
        <section id="me">
            <div className=" container centrar">
                <div>
                    <h1 className="animate-text tamaño">Hola, soy <span className="spanes">Joaquin Espinosa</span> <br />Desarrollador Full Stack en Javascript</h1>
                    <div className="container-botones animate-text">
                        <button className="botones" onClick={inicioHome}>Ver más</button>
                        <button className=" botones" onClick={proyectos}>Proyectos</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Me