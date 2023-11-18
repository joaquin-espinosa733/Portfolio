import {
    SiJavascript,
    SiPostgresql,
    SiSequelize,
    SiTypescript,
    SiExpress,
    SiReact,
    SiRedux,
    SiCss3,
    SiHtml5,
    SiSass,
    SiBootstrap,
    SiNodedotjs
} from "react-icons/si";


function Skills() {
    return (
        <section id="skills" className="scroll-activo">
            <div className="container todo">
                <div className="text animate-text">
                    <h1 className="text">SKILLS</h1>
                </div>
                <div>
                    <h1 className="text3">Back end</h1>
                    <div style={{ fontSize: "2rem" }} className="container-icons">
                        <div className="iconss">
                            <SiJavascript className="iconss" style={{ marginLeft: "29px" }} />
                            <p className="parr">Javascript</p>
                        </div>
                        <div className="iconss">
                            <SiTypescript className="iconss" style={{ marginLeft: "33px" }} />
                            <p className="parr">Typescript</p>
                        </div>
                        <div className="iconss">
                            <SiPostgresql className="iconss" style={{ marginLeft: "33px" }} />
                            <p className="parr">PostgreSQL</p>
                        </div>
                        <div className="iconss">
                            <SiSequelize className="iconss" style={{ marginLeft: "26px" }} />
                            <p className="parr">Sequelize</p>
                        </div>
                        <div className="iconss">
                            <SiExpress className="iconss" style={{ marginLeft: "16px" }} />
                            <p className="parr">Express</p>
                        </div>
                        <div className="iconss">
                            <SiNodedotjs style={{ marginLeft: "16px" }} />
                            <p className="parr">Node.js</p>
                        </div>
                    </div>
                </div>
                <br />
                <div>
                    <h1 className="text3">Front End</h1>
                    <div style={{ fontSize: "2rem" }} className="container-icons">
                        <div className="iconss" >
                            <SiReact className="iconss" style={{ marginLeft: "10px" }} />
                            <p className="parr">React</p>
                        </div>
                        <div className="iconss" >
                            <SiRedux className="iconss" style={{ marginLeft: "10px" }} />
                            <p className="parr">Redux</p>
                        </div>
                        <div className="iconss" >
                            <SiCss3 />
                            <p className="parr">Css</p>
                        </div>
                        <div className="iconss" >
                            <SiHtml5 className="iconss" style={{ marginLeft: "10px" }} />
                            <p className="parr">HTML</p>
                        </div>
                        <div className="iconss" >
                            <SiSass className="iconss" style={{ marginLeft: "4px" }} />
                            <p className="parr">Sass</p>
                        </div>
                        <div className="iconss" >
                            <SiBootstrap className="iconss" style={{ marginLeft: "24px" }} />
                            <p className="parr">Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills