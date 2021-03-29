import { Container, Table } from "react-bootstrap";
import "./Clients.css";

function Clients() {
  return (
    <div className="Clients">
      <Container className="main-content">
        <div className="banner-text">
          <h1>Join the family.</h1>
          <h5>
            We serve everyone from Fortune 500 companies to small businesses.
          </h5>
        </div>

        <h1 className="section-title">Our Clients</h1>
        <p>
          EDI Solutions provides a myriad of EDI solutions and services
          including consulting services and software solutions to businesses,
          governments, and commerce. Our clientele range from Fortune 500
          companies to small businesses. We have implemented EDI systems and
          other related software in the following industries:
        </p>
        <Table striped bordered>
          <tbody>
            <tr>
              <td>
                Aluminum, packaging, aerospace, energy, and transportation
              </td>
              <td>Ice cream distributors</td>
            </tr>
            <tr>
              <td>Automobile parts suppliers to GM/Ford/Chrysler</td>
              <td>Information technologies</td>
            </tr>
            <tr>
              <td>Baby product manufacturers</td>
              <td>Insurance companies</td>
            </tr>
            <tr>
              <td>Cable manufacturers</td>
              <td>Mortgage lenders</td>
            </tr>
            <tr>
              <td>Computer makers</td>
              <td>Movie studios</td>
            </tr>
            <tr>
              <td>Computer software distributors</td>
              <td>Office products manufacturers</td>
            </tr>
            <tr>
              <td>Fashion apparels</td>
              <td>Pharmaceuticals</td>
            </tr>
            <tr>
              <td>Food and candy distributors</td>
              <td>Plastic bag manufacturers</td>
            </tr>
            <tr>
              <td>Footwear</td>
              <td>Sports equipment distributors</td>
            </tr>
            <tr>
              <td>Furniture makers</td>
              <td>Telecommunication companies</td>
            </tr>
            <tr>
              <td>Gifts</td>
              <td>Toy manufacturers</td>
            </tr>
            <tr>
              <td>Healthcare services</td>
              <td>Trucking</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Clients;
