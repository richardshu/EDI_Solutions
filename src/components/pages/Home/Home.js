import { Card, Container } from "react-bootstrap";

import { PortfolioData } from "../../../data/home_portfolio.js";
import { ServicesData } from "../../../data/home_services.js";

import FixingBugsImage from "../../../images/icons/fixing-bugs.svg";
import CreditCardImage from "../../../images/icons/credit-card.svg";
import SetupImage from "../../../images/icons/setup.svg";

import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Container className="main-content">
        <div className="banner-text">
          <h1>Solutions for EDI</h1>
          <h5>
            Your complete electronic data interchange system can be up and
            running in 1-3 days.
          </h5>
        </div>

        <section className="top-section">
          <h1 className="section-title center">
            Trusted by your favorite brands
          </h1>
          <div className="portfolio">
            {PortfolioData.map((company, key) => {
              return (
                <div key={key} className="portfolio-company">
                  <span className="portfolio-helper"></span>
                  <a target="_blank" rel="noreferrer" href={company.url}>
                    <img
                      key={key}
                      src={
                        require(`../../../images/portfolio/${company.name}`)
                          .default
                      }
                      alt={company.name}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </Container>

      <section className="bg2">
        <Container>
          <h1 className="section-title center">
            No code, no software, no hardware
          </h1>
          <p className="section-title-caption center">
            All you need is an email address!
          </p>

          <div className="hook hook-responsive">
            <p>
              Our service is{" "}
              <strong>NOT an incomplete web-based EDI solution</strong> offered
              by most providers that requires you to login, learn, and do the
              work yourself.
            </p>
            <img src={FixingBugsImage} alt="fixing bugs" />
          </div>

          <div className="hook">
            <img src={CreditCardImage} alt="credit card" />
            <p>
              We rapidly implement your EDI at an affordable price point. Fully
              managed, completely hands-off, and full service EDI solutions with
              costs as low as partial EDI services like a web-based EDI.
            </p>
          </div>

          <div className="hook hook-responsive">
            <p>
              We are an approved third-party EDI service provider for major
              retailers. We provide express EDI setup with most major retailers
              within 1-3 days.
            </p>
            <img src={SetupImage} alt="setup" />
          </div>
        </Container>
      </section>

      <Container>
        <section>
          <h1 className="section-title center">
            A fully integrated suite of EDI services
          </h1>
          <p className="section-title-caption center">
            No matter what your role is, EDI Solutions helps you offload the
            most tedious parts of your job.
          </p>
          <div className="services">
            {ServicesData.map((service, key) => {
              return (
                <Card key={key} className={service.cName}>
                  <Card.Img
                    variant="top"
                    src={
                      require(`../../../images/icons/${service.icon}`).default
                    }
                  />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </section>
      </Container>

      <div className="highlight">
        <Container className="main-content">
          <h1 className="section-title center">Price Guarantee</h1>
          <h4 className="center">
            If a service fee is found lower elsewhere, we will match or beat it
          </h4>
        </Container>
      </div>
    </div>
  );
}

export default Home;
