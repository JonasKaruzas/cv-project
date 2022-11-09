import { Education } from "./components/EducationForm";
import { GeneralInfo } from "./components/GeneralInfoForm";
import { WorkExperience } from "./components/WorkExperienceForm";
import { Header } from "./components/Header";
import { CvContainer } from "./components/CvContainer";
import { GeneralInfoDisplay } from "./components/GeneralInfoDisplay";
import { EducationDisplay } from "./components/EducationDisplay";
import { EducationItem } from "./components/EducationItem";
import { WorkExperienceDisplay } from "./components/WorkExperienceDisplay";
import { WorkExperienceItem } from "./components/WorkExperienceItem";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/app.css";

import { useState } from "react";

const demoGeneralInfo = {
  firstName: "Jonas",
  lastName: "Jonaitis",
  email: "jonas@jo.lt",
  phoneNumber: 866612345,
};

const demoEducationInfo = [
  {
    id: 1,
    schoolName: "VGTU",
    degree: "Masters",
    dateFrom: 2000,
    dateTo: 2004,
  },
  {
    id: 2,
    schoolName: "VGTU",
    degree: "Bachelor",
    dateFrom: 2005,
    dateTo: 2010,
  },
];

const demoWorkExperience = [
  {
    id: 1,
    company: "Maxima",
    position: "IT",
    mainTask: "Security",
    dateFrom: 2000,
    dateTo: 2004,
  },
  {
    id: 2,
    company: "Lidl",
    position: "IT",
    mainTask: "Hacking",
    dateFrom: 2005,
    dateTo: 2010,
  },
];

export function App() {
  const [generalInfo, setGeneralInfo] = useState(demoGeneralInfo);
  const [education, setEducation] = useState(demoEducationInfo);
  const [workExperience, setWorkExperience] = useState(demoWorkExperience);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <div className="main">
              <GeneralInfo />
              <Education />
              <WorkExperience />
            </div>
          </Col>
          <Col>
            <CvContainer>
              <GeneralInfoDisplay generalInfo={generalInfo} />
              <EducationDisplay>
                {education.map((item) => (
                  <EducationItem key={item.id} education={item} />
                ))}
              </EducationDisplay>
              <WorkExperienceDisplay>
                {workExperience.map((item) => (
                  <WorkExperienceItem key={item.id} experience={item} />
                ))}
              </WorkExperienceDisplay>
            </CvContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
}
