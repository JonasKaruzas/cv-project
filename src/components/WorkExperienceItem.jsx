import '../styles/educationItem.css';
import pencil from '../images/pencil.svg';
import deleteImg from '../images/delete.svg';
import { AllStatesContext } from "./AllStatesContext";
import { useContext } from 'react';

export function WorkExperienceItem({experience}) {
  const {removeWorkExperienceItem, editWorkExperience} = useContext(AllStatesContext);
  return (
    <div className='item'>
      <div className="item-title">{experience.company}</div>
      <div className="item-info-container">
        <div className="item-info">{experience.position} - {experience.mainTask}</div>
        <div className="item-date">From: {experience.dateFrom}</div>
        <div className="item-date">{experience.currentlyWorkingHere ? '*Currently working here' : 'To: ' + experience.dateTo}</div>
      </div>
      <div className="buttons-container">
        <button onClick={() => removeWorkExperienceItem(experience.id)}><img alt='' src={deleteImg} /></button>
        <button onClick={() => editWorkExperience(experience.id)}><img alt='' src={pencil} /></button>
      </div>
    </div>
  )

}


