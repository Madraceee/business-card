import cardPhoto from "./img/cardPhoto.png"
import email from "./img/email.png"
import linkedin from "./img/linkedin.png"

export default function Info() {
    return(
        <div className="info-container">
            <img src={cardPhoto} className="info--photo" alt="profile-pic" />
            <h3 className="info--name">Nitheesh Raaja R</h3>
            <h5 className="info--role">Blockchain Developer</h5>
            <h6 className="info--website"><a className="links" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">iamnitheesh.dev</a></h6> 
            <div className="info--links">
                <div className="info--links-box info--links-email">
                    <img src={email} alt="email-logo" className="info--links-logo" />
                    <a className="links" href="nitheeshraaja@gmail.com">Email</a>
                </div>
                <div className="info--links-box info--links-linkdin">
                    <img src={linkedin} alt="linkdin-logo" className="info--links-logo"/>
                    <a className="links" href="https://www.linkedin.com/in/nitheeshraajar/">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}