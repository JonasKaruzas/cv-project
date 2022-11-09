import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export function WorkExperienceItem({experience}) {
  return (
    <Container>
      <Card.Body >
        <Row>
          <Col>
            <Card.Title>{experience.company}</Card.Title>
            <Card.Subtitle>{experience.position} - {experience.mainTask}</Card.Subtitle>
            <Card.Text>{experience.dateFrom} - {experience.dateTo}</Card.Text>
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <Button variant="outline-danger" size="sm" type="submit">X</Button>
          </Col>
        </Row>
      </Card.Body>
    </Container>
  )
}