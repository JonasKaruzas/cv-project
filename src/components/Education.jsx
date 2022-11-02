import Form from 'react-bootstrap/Form';

export function Education(props) {
  return (
    <div>
    <h3>Education</h3>
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>School name</Form.Label>
          <Form.Control type="text" placeholder="Super gimnazija" />
          <Form.Label>Title of study</Form.Label>
          <Form.Control type="text" placeholder="Science" />
          <Form.Label>Date of study</Form.Label>
          <Form.Control type="number" placeholder="2022" />
        </Form.Group>
      </Form>
    </div>
  );
}
