import { Education } from "./components/Education";
import { GeneralInfo } from "./components/GeneralInfo";
import { WorkExperience } from "./components/WorkExperience";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./styles/app.css";

export function App() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="main">
            <GeneralInfo>Name email phone number</GeneralInfo>
            <Education>School name Title of study date of stydy</Education>
            <WorkExperience>Company name Position title main task of job date from date until</WorkExperience>
          </div>
        </Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
  );
}
