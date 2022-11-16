import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { AllStatesContext } from "./AllStatesContext";

export function GeneralInfo() {
  const {generalInfo, setGeneralInfo} = useContext(AllStatesContext);

  function updateState(e) {
    setGeneralInfo({...generalInfo, [e.target.id]: e.target.value})
  }

  return (
    <Card>
      <Card.Header as="h5">General Information</Card.Header>
      <Card.Body>
        <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" id='name' value={generalInfo.name} onChange={updateState}/>
              <Form.Label>About you</Form.Label>
              <Form.Control type="text" id='description' value={generalInfo.description} onChange={updateState}/>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" id='email' value={generalInfo.email} onChange={updateState}/>
              <Form.Label>Phone number</Form.Label>
              <Form.Control type="number" id='phoneNumber' value={generalInfo.phoneNumber} onChange={updateState}/>
            </Form.Group>
          </Form>
      </Card.Body>
    </Card>
  );
}