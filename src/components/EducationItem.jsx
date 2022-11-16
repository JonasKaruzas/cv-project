import '../styles/educationItem.css';
import pencil from '../images/pencil.svg';
import deleteImg from '../images/delete.svg';
import { AllStatesContext } from "./AllStatesContext";
import { useContext } from 'react';

export function EducationItem({education}) {
  const {removeEducationItem, editEducationItem} = useContext(AllStatesContext);
  return (
    <div className='item'>
      <div className="item-title">{education.schoolName}</div>
      <div className="item-info-container">
        <div className="item-info">{education.degree}</div>
        <div className="item-date">From: {education.dateFrom}</div>
        <div className="item-date">To: {education.dateTo}</div>
      </div>
      <div className="buttons-container">
        <button onClick={() => removeEducationItem(education.id)}><img alt='' src={deleteImg} /></button>
        <button onClick={() => editEducationItem(education.id)}><img alt='' src={pencil} /></button>
      </div>
    </div>
  )
}