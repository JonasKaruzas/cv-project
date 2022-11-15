import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export function GeneralInfo(props) {

  function updateState(e) {
    props.onChange({...props.value, [e.target.id]: e.target.value})
  }

  return (
    <Card>
      <Card.Header as="h5">General Information</Card.Header>
      <Card.Body>
        <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" id='name' value={props.value.name} onChange={updateState}/>
              <Form.Label>About you</Form.Label>
              <Form.Control type="text" id='description' value={props.value.description} onChange={updateState}/>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" id='email' value={props.value.email} onChange={updateState}/>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="number" id='phoneNumber' value={props.value.phoneNumber} onChange={updateState}/>
            </Form.Group>
          </Form>
      </Card.Body>
    </Card>
  );
}