import '../styles/educationItem.css';
import pencil from '../images/pencil.svg';
import deleteImg from '../images/delete.svg';

export function WorkExperienceItem({experience, removeWorkExperienceItem}) {
  return (
    <div className='item'>
      <div className="item-title">{experience.company}</div>
      <div className="item-info-container">
        <div className="item-info">{experience.position} - {experience.mainTask}</div>
        <div className="item-date">{experience.dateFrom} - {experience.currentlyWorkingHere ? 'Currently working here' : experience.dateTo}</div>
      </div>
      <div className="buttons-container">
        <button onClick={() => removeWorkExperienceItem(experience.id)} variant="outline-danger" size="sm" type="submit"><img src={deleteImg} /></button>
        <button onClick={() => removeWorkExperienceItem(experience.id)} variant="outline-danger" size="sm" type="submit"><img src={pencil} /></button>
      </div>
    </div>
  )

}


