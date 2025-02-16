
import doctors from '../../assets/doctors.jpg'
import { userInfo } from '../../storage'
import logo from '../../assets/logo.png'
import { FaUserDoctor } from "react-icons/fa6";
import { FaHeartbeat } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";

import './HeroImage.css'
const HeroImage = () => {
  return (
    <section className='hero-image-countainer'>
      <img src={doctors} />
      <section className='content-countainer'>
        <section  className='content-countainer-1' 
         >
          <img src={logo} alt='clinic-appointments-app' height={'30px'} width={'30px'} />
          <h1 className='title-page'>
            Meet The
            Best Doctor
          </h1>
          <p>
            Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.

          </p>
          <a className='link-as-btn' href={userInfo.id ? `/patient/${userInfo.id}/appointments/add` : `/auth/login`}>Make appointment</a>
        </section>

        <section className='more-detalies-countainer'>
          {[{ icon: 'heart', name: 'Emergency Cases', desc: 'This is required when, for example, the is not yet available. Dummy text is also known as.' },
           { icon: 'doctortimetable', name: 'Doctors Timetable', desc: 'This is required when, for example, the is not yet available. Dummy text is also known as' }, 
           { icon: 'time', name: 'Opening Hours', desc: 'sunday from 5 to 8 ,statraday from 4 to 7' }].map(item =>
            <section >
               {
                item.icon==='time'?<IoIosTimer size={30} color='blue'/>:item.icon==='heart'?<FaHeartbeat size={30} color='blue'/>:<FaUserDoctor size={30} color='blue'/>
               }
              <h2>{item.name}</h2>
              <p>{item.desc}</p>

              <a href='' style={{color:'blue'}}>read more ...</a>
            </section>)}
        </section>

      </section>

    </section>
  )
}

export default HeroImage
