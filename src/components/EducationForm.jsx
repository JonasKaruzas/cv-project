import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export function Education(props) {
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
    const maxId = props.education.map(item => item.id).sort((a,b) => a - b)[props.education.length -1];
    props.setEducation([...props.education, {...form, id:maxId + 1}])
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
              <Form.Label>Date from</Form.Label>
              <Form.Control type="number" id='dateFrom' value={form.dateFrom} onChange={updateState}/>
              <Form.Label>Date to</Form.Label>
              <Form.Control type="number" id='dateTo' value={form.dateTo} onChange={updateState}/>
            </Form.Group>
            <Button variant="primary" type="submit">Add</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
