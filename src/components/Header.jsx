import "../styles/Header.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return(
    <div className="header">
      <div className="name">
        <p>Opoku Eric</p>
        <Link to="/content" className="link">Link</Link>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <FontAwesomeIcon icon={faHippo} className="icon" />

        </div>
      <div className="menu">
        <p>Introduction</p>
        <p>About Me</p>
        <p>Project</p>
        <p>Contact</p>
      </div>
      <div className="cv">
        <p>Download</p>
      </div>
    </div>
  )
}
