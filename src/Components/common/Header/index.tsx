import './Header.css'
import logo from '../../../assets/logo.png'
import { removeFromLocalStorage, userInfo } from '../../../storage';
import doctorIcon from '../../../assets/doctor-icon.jpg'
import patientIcon from '../../../assets/patient-icon.jpg'
import { useState } from 'react';

let  handleLogout=()=>{
  removeFromLocalStorage('userInfo')
  setTimeout(()=>window.location.href='/auth/login',1)
}


const Header = () => {
 const [openNav,setOpenNav] =useState<boolean>(false)
  return (
    <header>
      <section>
        <h1 className='title-header' >
          <img src={logo} alt='clinic-appointments-app' height={30} width={30} />
          <a href='/'>Doctris</a>

        </h1>
        {userInfo.id ?
        
         <section className={`user-list` } onClick={()=>setOpenNav(!openNav)}>
             <img src={userInfo.role === 'doctor' ? `${doctorIcon}` : `${patientIcon}`} className='user-icon' alt='doctor  image fpor clinic  appointments' />
          <nav className={`nav-display-${ openNav}`} >
            <ul>
              <li>
                <a href={`/doctor/${userInfo.id}/dashboard`}>dashbord</a>
              </li>  
              <li>
              <a href={`/${userInfo.role}/${userInfo.id}/appointments`}>appointments</a>
                </li>
                <li  className='logout' onClick={handleLogout}>logout
              </li>
            </ul>
            
          </nav>
         </section>
       
    
         : <a href='/auth/login'>login</a>}
      </section>


    </header>
  )

}

export default Header;
