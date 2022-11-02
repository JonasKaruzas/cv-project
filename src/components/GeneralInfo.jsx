import Form from 'react-bootstrap/Form';

export function GeneralInfo(props) {
  return (
  <div>
  <h3>General Information</h3>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" placeholder="Jonas Jonaitis" />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="jonas@jo.lt" />
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="866612345" />
      </Form.Group>
    </Form>
  </div>
  );
}