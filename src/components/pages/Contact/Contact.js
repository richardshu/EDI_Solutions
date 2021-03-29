import { Container } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <Container className="main-content">
        <div className="banner-text">
          <h1>
            Say hello. <span className="hand-emoji">👋</span>
          </h1>
          <h5>We'll get you up and running in no time.</h5>
        </div>

        <h1>Phone</h1>
        <p>+1 (909) 861-1188</p>

        <hr />

        <h1>Email</h1>
        <p>
          <a href="mailto:info@edisolutions.com">info@edisolutions.com</a>
        </p>

        <hr />

        <h1>Location</h1>
        <p>Diamond Bar, CA, USA (Los Angeles area)</p>
      </Container>
    </div>
  );
}

export default Contact;
