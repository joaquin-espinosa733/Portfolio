import flechaArriba from "../assets/img/flecha-hacia-arriba.png";
import { FaGithub, FaLinkedin, FaTiktok } from "react-icons/fa";

function Footer() {
    const iconStyle = {
        color: "black",
    };

    return (
        <footer className="container-footer">
            <div className="container todo3">
                <a href="#"><img src={flechaArriba} alt="" width={30} className="flecha"/></a>
                <br />
                <div style={{ fontSize: "40px" }}>
                    <a
                        target="__blank"
                        href="https://github.com/joaquin-espinosa733">
                        <FaGithub style={{ ...iconStyle, marginRight: "50px" }} />
                    </a>
                    <a
                        target="__blank"
                        href="https://www.linkedin.com/in/joaquin-espinosa/">
                        <FaLinkedin style={{ ...iconStyle, marginRight: "50px" }}/>
                    </a>
                    <a
                        target="__blank"
                        href="https://www.tiktok.com/@joaquin__esp?is_from_webapp=1&sender_device=pc">
                        <FaTiktok style={iconStyle}/>
                    </a>
                </div>
                <div>
                    <hr className="custom-hr" />
                </div>
                <p>© 2023 - Developed by Joaquin Ezequiel Espinosa</p>
            </div>
        </footer>
    );
}

export default Footer;
