import './Header.css'
import logo from '../../../assets/logo.png'
import { userInfo } from '../../../storage';
import doctorIcon from '../../../assets/doctor-icon.jpg'
import patientIcon from '../../../assets/patient-icon.jpg'
const Header = () => {
  return (
      <header>
<section>
<h1 className='title-header' >
       <img src={logo} alt='clinic-appointments-app' height={30} width={30}/>
           <a href='/'>Doctris</a>
       
      </h1>
      {userInfo.id?<a href={userInfo.role?`/doctor/${userInfo.id}/dashboard`:`/patient/${userInfo.id}/dashboard`}>
        <img src={userInfo.role==='doctor'?`${doctorIcon}`:`${patientIcon}`} className='user-icon'    alt='doctor  image fpor clinic  appointments' />
        </a>:<a href='/auth/login'>login</a>}      
</section>
    
   
    </header>
  )
  
}

export default Header;
