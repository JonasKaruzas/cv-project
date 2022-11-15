import '../styles/educationItem.css';
import pencil from '../images/pencil.svg';
import deleteImg from '../images/delete.svg';


export function EducationItem({education, removeEducationItem, editEducationItem}) {
  return (
    <div className='item'>
      <div className="item-title">{education.schoolName}</div>
      <div className="item-info-container">
        <div className="item-info">{education.degree}</div>
        <div className="item-date">{education.dateFrom} - {education.dateTo}</div>
      </div>
      <div className="buttons-container">
        <button onClick={() => removeEducationItem(education.id)}><img alt='' src={deleteImg} /></button>
        <button onClick={() => editEducationItem(education.id)}><img alt='' src={pencil} /></button>
      </div>
    </div>
  )
}