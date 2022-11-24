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
import { EditEducationModal } from "./components/EditEducationModal";
import { EditWorkExperienceModal } from "./components/EditWorkExperienceModal";
import { AllStatesContext } from "./components/AllStatesContext";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/app.css";

import React, { useState } from "react";

const demoState = {
  demoGeneralInfo: {
    name: "Jonas Jonaitis",
    email: "jonas@jo.lt",
    phoneNumber: 866612345,
    description: "Front End developer",
  },
  demoEducationInfo: [
    {
      id: 1,
      schoolName: "VGTU",
      degree: "Masters",
      dateFrom: "2000-01-01",
      dateTo: "2004-12-31",
    },
    {
      id: 2,
      schoolName: "VGTU",
      degree: "Bachelor",
      dateFrom: "2005-02-02",
      dateTo: "2010-11-11",
    },
  ],
  demoWorkExperience: [
    {
      id: 1,
      company: "Maxima",
      position: "IT",
      mainTask: "Security",
      dateFrom: "2000-03-03",
      dateTo: "2004-04-04",
      currentlyWorkingHere: false,
    },
    {
      id: 2,
      company: "Lidl",
      position: "IT",
      mainTask: "Hacking",
      dateFrom: "2005-05-05",
      dateTo: "",
      currentlyWorkingHere: true,
    },
  ],
};

export function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phoneNumber: "", description: "" });
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [educationEditableItem, setEducationEditableItem] = useState();
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
    setEducationEditableItem(undefined);
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
    setWorkExperienceEditableItem();
    setShowEditModal(false);
  }

  function showDemo() {
    setGeneralInfo(demoState.demoGeneralInfo);
    setEducation(demoState.demoEducationInfo);
    setWorkExperience(demoState.demoWorkExperience);
  }

  async function getDemoFromFile() {
    const response = await fetch("http://localhost:5000");
    const json = await response.json();

    setGeneralInfo(json.demoGeneralInfo);
    setEducation(json.demoEducationInfo);
    setWorkExperience(json.demoWorkExperience);
  }

  const contextValues = {
    generalInfo,
    setGeneralInfo,
    education,
    setEducation,
    workExperience,
    setWorkExperience,
    educationEditableItem,
    workExperienceEditableItem,
    saveEditEducationItem,
    saveWorkExperienceItem,
    removeWorkExperienceItem,
    editWorkExperience,
    removeEducationItem,
    editEducationItem,
  };

  return (
    <>
      <AllStatesContext.Provider value={contextValues}>
        <Header />
        <Container>
          <Row>
            <Col sm={4}>
              <div className="main">
                <Row>
                  <Col>
                    <Button onClick={showDemo}>- Demo -</Button>
                    <Button style={{ float: "right" }} onClick={getDemoFromFile}>
                      ! Get from File !
                    </Button>
                  </Col>
                </Row>
                <GeneralInfo />
                <Education />
                <WorkExperience />
              </div>
            </Col>
            <Col sm={8}>
              {(Object.values(generalInfo).filter((item) => item).length !== 0 || workExperience.length !== 0 || education.length !== 0) && (
                <CvContainer>
                  {Object.values(generalInfo).filter((item) => item).length !== 0 && <GeneralInfoDisplay />}
                  {education.length !== 0 && (
                    <EducationDisplay>
                      {education.map((item) => (
                        <EducationItem key={item.id} education={item} />
                      ))}
                    </EducationDisplay>
                  )}
                  {workExperience.length !== 0 && (
                    <WorkExperienceDisplay>
                      {workExperience.map((item) => (
                        <WorkExperienceItem key={item.id} experience={item} />
                      ))}
                    </WorkExperienceDisplay>
                  )}
                </CvContainer>
              )}
            </Col>
          </Row>
        </Container>
        {showEditModal && educationEditableItem && <EditEducationModal />}
        {showEditModal && workExperienceEditableItem && <EditWorkExperienceModal />}
      </AllStatesContext.Provider>
    </>
  );
}
