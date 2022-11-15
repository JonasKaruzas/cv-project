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
import { EditModal } from "./components/EditModal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/app.css";

import { useState } from "react";

const demoGeneralInfo = {
  name: "Jonas Jonaitis",
  email: "jonas@jo.lt",
  phoneNumber: 866612345,
  description: "Front End developer",
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
  const [educationEditableItem, setEducationEditableItem] = useState();
  const [workExperience, setWorkExperience] = useState(demoWorkExperience);
  const [workExperienceEditableItem, setWorkExperienceEditableItem] = useState();
  const [showEditModal, setShowEditModal] = useState(false);

  function removeEducationItem(id) {
    setEducation(education.filter((item) => item.id !== id));
  }

  function removeWorkExperienceItem(id) {
    setWorkExperience(workExperience.filter((item) => item.id !== id));
  }

  function editEducationItem(id) {
    const item = education.find((item) => item.id === id);
    setEducationEditableItem(item);
    setShowEditModal(true);
  }

  function saveEditEducationItem(item) {
    const indexOfEditableItem = education.findIndex((edu) => edu.id === educationEditableItem.id);
    const newEducationState = [...education];
    newEducationState[indexOfEditableItem] = item;
    setEducation(newEducationState);
    setShowEditModal(false);
  }

  function editWorkExperience(id) {
    const item = workExperience.find((item) => item.id === id);
    setWorkExperienceEditableItem(item);
    setShowEditModal(true);
  }

  function saveWorkExperienceItem(item) {
    const indexOfEditableItem = workExperience.findIndex((edu) => edu.id === workExperienceEditableItem.id);
    const newWorkExperienceState = [...workExperience];
    newWorkExperienceState[indexOfEditableItem] = item;
    setWorkExperience(newWorkExperienceState);
    setShowEditModal(false);
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={4}>
            <div className="main">
              <GeneralInfo value={generalInfo} onChange={setGeneralInfo} />
              <Education education={education} setEducation={setEducation} />
              <WorkExperience workExperience={workExperience} setWorkExperience={setWorkExperience} />
            </div>
          </Col>
          <Col sm={8}>
            <CvContainer>
              <GeneralInfoDisplay generalInfo={generalInfo} />
              {education.length !== 0 && (
                <EducationDisplay>
                  {education.map((item) => (
                    <EducationItem key={item.id} education={item} removeEducationItem={removeEducationItem} editEducationItem={editEducationItem} />
                  ))}
                </EducationDisplay>
              )}
              {workExperience.length !== 0 && (
                <WorkExperienceDisplay>
                  {workExperience.map((item) => (
                    <WorkExperienceItem
                      key={item.id}
                      experience={item}
                      removeWorkExperienceItem={removeWorkExperienceItem}
                      editWorkExperience={editWorkExperience}
                    />
                  ))}
                </WorkExperienceDisplay>
              )}
            </CvContainer>
          </Col>
        </Row>
      </Container>
      {showEditModal && (
        <EditModal setShowEditModal={setShowEditModal} educationEditableItem={educationEditableItem} saveEditEducationItem={saveEditEducationItem} />
      )}
    </>
  );
}
