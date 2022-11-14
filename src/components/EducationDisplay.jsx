import '../styles/educationDisplay.css';
import school from '../images/school.svg';

export function EducationDisplay({children}) {
  return (
    <div className='EducationDisplay'>
      <div><img src={school} alt=''/><span>Education</span></div>
      {children}
    </div>
  )
}
