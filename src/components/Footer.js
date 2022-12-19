import twitter from "./img/twitter-sign.png"
import instagram from "./img/instagram.png"
import github from "./img/github.png"

export default function Info() {
    return(
        <footer>
            <a  href="https://twitter.com/NitheeshRaaja"><img src={twitter} className="footer--img" alt="Twitter"/></a>
            <a  href="https://www.instagram.com/iamnitheesh_/"><img src={instagram} className="footer--img" alt="Instagram"/></a>
            <a  href="https://github.com/Madraceee"><img src={github} className="footer--img" alt="Github"/></a>
        </footer>
    )
}