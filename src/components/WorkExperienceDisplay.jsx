import '../styles/workExperienceDisplay.css';
import briefcase from '../images/briefcase.svg'

export function WorkExperienceDisplay({children}) {
  return (
    <div className='WorkExperienceDisplay'>
      <div><img src={briefcase} alt=''/><span>Work Experience</span></div>
      {children}
    </div>
  )
}
