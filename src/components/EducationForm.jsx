import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import { AllStatesContext } from "./AllStatesContext";
import { useContext } from 'react';

export function Education() {
  const {education, setEducation} = useContext(AllStatesContext);

  const initialFormState = {
      schoolName: "",
      degree: "",
      dateFrom: "",
      dateTo: "",
    };

  const [form, setForm] = useState(initialFormState);

  function updateState(e) {
    setForm({...form, [e.target.id]: e.target.value})
  }

  function submitForm(e) {
    e.preventDefault();
    const maxId = !education.length ? 0 : education.map(item => item.id).sort((a,b) => a - b)[education.length -1];
    setEducation([...education, {...form, id:maxId + 1}])
    setForm(initialFormState)
  }

  return (
    <Card>
      <Card.Header as="h5">Education</Card.Header>
      <Card.Body>
        <Form onSubmit={submitForm}>
            <Form.Group className="mb-3">
              <Form.Label>School name</Form.Label>
              <Form.Control type="text" id='schoolName' value={form.schoolName} onChange={updateState}/>
              <Form.Label>Degree</Form.Label>
              <Form.Control type="text" id='degree' value={form.degree} onChange={updateState}/>
              <Row>
                <Col>
                  <Form.Label>Date from</Form.Label>
                  <Form.Control type="date" id='dateFrom' value={form.dateFrom} onChange={updateState}/>
                </Col>
                <Col>
                  <Form.Label>Date to</Form.Label>
                  <Form.Control type="date" id='dateTo' value={form.dateTo} onChange={updateState}/>
                </Col>
              </Row>
            </Form.Group>
            <Button variant="primary" type="submit">Add</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
