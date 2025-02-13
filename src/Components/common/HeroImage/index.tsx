import React from 'react'
import { Countainer } from '../Countainer'
import doctors from '../../../assets/doctors.jpg'
import { userInfo } from '../../../storage'
import logo from '../../../assets/logo.png'

import './HeroImage.css'
const HeroImage = () => {
  return (
    <section className='hero-image-containeer'>
       <img src={doctors}/>
       <section className='content-containeer'>
        <section style={{ flexDirection:'column',color:'white'}}>
        <img src={logo} alt='clinic-appointments-app' height={'30px'} width={'30px'}/>
        <h1>
    


Meet The
Best Doctor
</h1>
<p>
Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.

</p>
<a className='link-as-btn' href={userInfo.id?`/patient/${userInfo.id}/appointments/add`:`/auth/login`}>Make appointment</a>
        </section>
        <section className='more-detalies-containeer'>
{ [{icon:'',name:'',desc:''},{icon:'',name:'',desc:''},{icon:'',name:'',desc:''}].map(item=>
  <section>
             <h2>{item.name}</h2>
             <p>{item.desc}</p>
             <a href=''>read more ...</a>
        </section>)}
        </section>
     
       </section>

    </section>
  )
}

export default HeroImage
