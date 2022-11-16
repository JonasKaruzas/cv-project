import { useContext } from 'react';
import email from '../images/email.svg';
import phone from '../images/phone-in-talk.svg';
import '../styles/generalInfoDisplay.css'
import { AllStatesContext } from "./AllStatesContext";

export function GeneralInfoDisplay() {
  const {generalInfo} = useContext(AllStatesContext);
  return (
    <div className='header'>
      <div className='left'>
        <h2>{generalInfo.name}</h2> 
        <h4>{generalInfo.description}</h4> 
      </div>
      <div className='right'>
        {generalInfo.email && <div><img src={email} alt='' />{generalInfo.email}</div>}
        {generalInfo.phoneNumber && <div><img src={phone} alt="" />{generalInfo.phoneNumber}</div>}
      </div>
    </div>
  )
}