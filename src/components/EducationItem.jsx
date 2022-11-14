import '../styles/educationItem.css';
import pencil from '../images/pencil.svg';
import deleteImg from '../images/delete.svg';


export function EducationItem({education, removeEducationItem}) {
  return (
    <div className='item'>
      <div className="item-title">{education.schoolName}</div>
      <div className="item-info-container">
        <div className="item-info">{education.degree}</div>
        <div className="item-date">{education.dateFrom} - {education.dateTo}</div>
      </div>
      <div className="buttons-container">
        <button onClick={() => removeEducationItem(education.id)} variant="outline-danger" size="sm" type="submit"><img src={deleteImg} /></button>
        <button onClick={() => removeEducationItem(education.id)} variant="outline-danger" size="sm" type="submit"><img src={pencil} /></button>
      </div>
    </div>
  )
}