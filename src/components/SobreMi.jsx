import { useEffect, useState } from "react";
import yo from "../assets/img/youp.jpeg";

function SobreMi() {

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const sobremiSection = document.getElementById("sobremi");
            const h1Element = document.querySelector("#sobremi h1.text");
            const imageContainer = document.querySelector("#sobremi img.imagen-container");
            const parrafos = document.querySelectorAll("#sobremi .parr");
            const buttons = document.querySelectorAll("#sobremi .botones2");

            if (sobremiSection && h1Element && !hasAnimated) {
                const sobremiTop = sobremiSection.offsetTop;
                if (scrollY > sobremiTop - window.innerHeight + 100) {
                    sobremiSection.classList.add("scroll-activo");
                    h1Element.classList.add("animate-text");
                    imageContainer.classList.add("animate-imagen");
                    parrafos.forEach((paragraph) => {
                        paragraph.classList.add("animate-text2");
                    });
                    buttons.forEach((button) => {
                        button.classList.add("animate-text2");
                    });
                    setHasAnimated(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [hasAnimated]);




    return (
        <section id="sobremi">
            <div className="container todo">
                <div className="text animate-text">
                    <h1 className="text">ACERCA DE MI</h1>
                </div>
                <div className="content">
                    <div className="imagen-container">
                        <img src={yo} alt="yo" width={300} height={400} className="imagen-container" />
                    </div>
                    <div className="par-bot">
                        <p className="parr">
                            Soy un desarrollador web Full-Stack apasionado con una trayectoria desde mi infancia. <br /> Mi curiosidad por la tecnología me llevó a descubrir la programación, y desde entonces,<br /> he estado inmerso en el mundo del desarrollo web.
                        </p>
                        <p className="parr">
                            Estoy comprometido con mi crecimiento profesional continuo,<br /> y siempre estoy en busca de oportunidades para enfrentar desafíos más grandes<br /> y emocionantes en el mundo del desarrollo web backEnd,FrontEnd o FullStack.
                        </p>
                        <div className="botones-container">
                            <a target="__blank" href="https://www.linkedin.com/in/joaquin-espinosa/"><button type="button" className="botones2">Linkedin</button></a><br /><br />
                            <a target="__blank" href="https://drive.google.com/file/d/1U1sk4PK6bzXH7fag3fyhhbV_cVbDHagj/view?usp=sharing"><button className="botones2" style={{ width: "150px" }}>Descargar CV</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SobreMi;
