import '../styles/editModal.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from 'react';
import { AllStatesContext } from "./AllStatesContext";
import { useContext } from 'react';

export function EditWorkExperienceModal() {
  const {workExperienceEditableItem, saveWorkExperienceItem} = useContext(AllStatesContext);

  const [form, setForm] = useState(workExperienceEditableItem);
  const [currentlyWorkingChecked, setCurrentlyWorkingChecked] = useState(workExperienceEditableItem.currentlyWorkingHere);

  function updateState(e) {
    setForm({...form, [e.target.id]: e.target.value})
  }

  function updateFormWithCheck(e) {
    console.log(form);
    console.log(e.target);
    setCurrentlyWorkingChecked(e.target.checked)
    setForm({...form, currentlyWorkingHere: currentlyWorkingChecked})
    console.log(form);
  }

  function submitForm(e) {
    e.preventDefault();
    saveWorkExperienceItem(form);
    // setCurrentlyWorkingChecked(false);
  }

  return (
    <div className="editModal">
      <Card className='modalCard'>
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
              <Row>
                <Col>
                  <Form.Label>Start date</Form.Label>
                  <Form.Control type="date" id='dateFrom' value={form.dateFrom} onChange={updateState}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>End date</Form.Label>
                  <Form.Control type="date" id='dateTo' value={form.dateTo} onChange={updateState} disabled={currentlyWorkingChecked}/>
                </Col>
                <Col className='d-flex align-items-end my-1'>
                  <Form.Check checked={currentlyWorkingChecked} onChange={updateFormWithCheck} type="checkbox" label="Currently working here" />
                </Col>
              </Row>
            </Form.Group>
            <Button variant="primary" type="submit">SAVE</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
