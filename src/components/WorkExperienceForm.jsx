import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function WorkExperience(props) {
  return (
    <Card>
      <Card.Header as="h5">Work Experience</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Company name</Form.Label>
            <Form.Control type="text" placeholder="LRT" />
            <Form.Label>Position title</Form.Label>
            <Form.Control type="text" placeholder="Operatorius" />
            <Form.Label>Main task of job</Form.Label>
            <Form.Control type="number" placeholder="Filmuoti" />
            <Form.Label>Start date</Form.Label>
            <Form.Control type="number" placeholder="2020" />
            <Form.Label>End date</Form.Label>
            <Form.Control type="number" placeholder="2022" />
          </Form.Group>
          <Button variant="primary" type="submit">Add</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
