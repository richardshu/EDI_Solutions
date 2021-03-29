import { Container } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <div className="About">
      <Container className="main-content">
        <div className="banner-text">
          <h1>Who we are.</h1>
          <h5>We're an LA-based team with over 15 years of experience.</h5>
        </div>

        <h1 className="section-title">What is EDI?</h1>
        <p>
          Electronic Data Interchange, or EDI, is the technology that allows
          businesses to transfer information such as purchase orders and
          invoices electronically. EDI is responsible for bridging the gap
          between small businesses and large retailers.
        </p>

        <hr />

        <h1 className="section-title">What We Do</h1>
        <p>
          EDI Solutions provides full-service EDI solutions, outsourcing, AS2
          setup, barcode label printing, UPC ticket printing, mapping, in-house
          accounting and EDI interface creation, custom programming, turn-key
          EDI systems, and consulting services specifically for{" "}
          <em>e-commerce</em> and <em>Electronic Data Interchange</em>{" "}
          applications. All EDI Solutions services are proven and guaranteed.
          With more than 15 years of industry experiences and a list of
          outstanding client references, we're ready to implement EDI
          immediately! Take control of your e-commerce and EDI needs on a
          budget.
        </p>
        <p>
          Each client of EDI Solutions has the same objective: implement EDI
          quickly with their trading partners so that orders can flow through
          smoothly. EDI Solutions has express access to all major retailers and
          is an approved EDI provider for most major retailers which is why
          we're usually able to set up your EDI in 1-3 days.
        </p>
        <p>
          There is no need to purchase any EDI software or additional computer
          hardware, have any EDI knowledge, deal with EDI setup and testing,
          tackle daily EDI transmission problems, monitor your EDI traffic
          daily, risk receiving huge chargebacks when you ship your goods, or
          hire EDI consultants and high-salaried EDI coordinators. All you need
          is an email address!
        </p>

        <hr />

        <h1 className="section-title">Our Mission</h1>
        <p>
          Our mission at EDI Solutions is to do whatever it takes to achieve
          your highest satisfaction.
        </p>
        <p>
          After all, our clients mean a lot to us, and they're often our biggest
          source of referral. We hope to continue serving new clients to built
          on our growing list of highly satisfied clients.
        </p>
        <p>
          Remember, EDI Solutions offers <strong>price guarantee</strong>:
          within 3 months of your EDI service, if a service fee is found lower
          elsewhere, we will match or beat it.
        </p>
      </Container>
    </div>
  );
}

export default About;
