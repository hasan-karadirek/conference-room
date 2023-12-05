import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import workspaceIcon from "../images/ab1.png"
import eventspaceIcon from "../images/ab3.png"
import accommodationIcon from "../images/ab2.png"
function ServiceCards() {
  return (
    <div className="service-cards" >
    <Card className="service-card" >
      <Card.Img variant="top" src={eventspaceIcon} className="service-card-image"/>
      <Card.Body>
        <Card.Title>Meeting Rooms</Card.Title>
        <br/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <br/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className="service-card" >
    <Card.Img variant="top" src={workspaceIcon} className="service-card-image"/>
    <Card.Body>
      <Card.Title>Workspace</Card.Title>
      <br/>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <br/>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card className="service-card" >
  <Card.Img variant="top" src={accommodationIcon} className="service-card-image"/>
  <Card.Body>
    <Card.Title>Accommodation</Card.Title>
    <br/>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <br/>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  );
}

export default ServiceCards;