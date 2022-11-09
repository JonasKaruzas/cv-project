import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export function EducationItem({education}) {
  return (
    <Container>
      <Card.Body >
        <Row>
          <Col>
            <Card.Title>{education.schoolName}</Card.Title>
            <Card.Subtitle>{education.degree}</Card.Subtitle>
            <Card.Text>{education.dateFrom} - {education.dateTo}</Card.Text>
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            <Button variant="outline-danger" size="sm" type="submit">X</Button>
          </Col>
        </Row>
      </Card.Body>
    </Container>
  )
}