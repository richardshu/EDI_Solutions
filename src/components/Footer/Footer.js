import { Container } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <Container>
        <div>&copy; 2021 EDI Solutions Corp.</div>
        <div>
          <a href="mailto:info@edisolutions.com">info@edisolutions.com</a>
        </div>
        <div>+1 (909) 861-1188</div>
      </Container>
    </div>
  );
}

export default Footer;
