import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export function WorkExperience(props) {
  const initialFormState = {
    company: "",
    position: "",
    mainTask: "",
    dateFrom: "",
    dateTo: "",
  };

  const [form, setForm] = useState(initialFormState);

  function updateState(e) {
    setForm({...form, [e.target.id]: e.target.value})
  }

  function submitForm(e) {
    e.preventDefault();
    const maxId = props.workExperience.map(item => item.id).sort((a,b) => a - b)[props.workExperience.length -1];
    props.setWorkExperience([...props.workExperience, {...form, id:maxId + 1}])
    setForm(initialFormState)
  }

  return (
    <Card>
      <Card.Header as="h5">Work Experience</Card.Header>
      <Card.Body>
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3">
            <Form.Label>Company name</Form.Label>
            <Form.Control type="text" id='company' value={form.company} onChange={updateState}/>
            <Form.Label>Position title</Form.Label>
            <Form.Control type="text" id='position' value={form.position} onChange={updateState}/>
            <Form.Label>Main task of job</Form.Label>
            <Form.Control type="text" id='mainTask' value={form.mainTask} onChange={updateState}/>
            <Form.Label>Start date</Form.Label>
            <Form.Control type="number" id='dateFrom' value={form.dateFrom} onChange={updateState}/>
            <Form.Label>End date</Form.Label>
            <Form.Control type="number" id='dateTo' value={form.dateTo} onChange={updateState}/>
          </Form.Group>
          <Button variant="primary" type="submit">Add</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
