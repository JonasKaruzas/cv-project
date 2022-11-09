import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Education(props) {
  return (
    <Card>
      <Card.Header as="h5">Education</Card.Header>
      <Card.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>School name</Form.Label>
              <Form.Control type="text" placeholder="Super gimnazija" />
              <Form.Label>Degree</Form.Label>
              <Form.Control type="text" placeholder="Science" />
              <Form.Label>Date of study</Form.Label>
              <Form.Control type="number" placeholder="2022" />
            </Form.Group>
            <Button variant="primary" type="submit">Add</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
