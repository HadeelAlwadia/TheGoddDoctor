import { useEffect, useState } from "react"
import { Countainer } from "../../Components/common/Countainer"
import Appointment from "../../Components/appointment"
import { getFromLocalStorage, userInfo } from "../../storage"
import Chartt from "../../Components/chart"
import doctorIcon from '../../assets/doctor-icon.jpg'
import systemImg from '../../assets/system-image.jpg'
import { AiOutlineContacts } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";


import './Dashboard.css'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import ApexChart from "../../Components/chart"
import getAppointmentsPerDay from "../../utils/GetAppointmentberDay"

const day=new Date()
console.log(`${day.getDay()}-${day.getMonth()}-${day.getFullYear()}`)


const DashBoard = () => {
  const [appointments,setAppointments]=useState([])
  const [pandingAppointments,setPandingAppointment]=useState([])
  const [confirmedAppointments,setConfirmAppointments]=useState([])
    const totalAppoitments=appointments.filter(appointment=>appointment.date==='2025-03-01').length
    const[numberOfAppoforDay,setNumberOfAppoforDay]=useState([0,4,1,0,3,0,0])

  useEffect(()=>{
    const arrayOfAppointments: any[] | ((prevState: never[]) => never[]) =[]
       getFromLocalStorage('appointments').forEach(patient=>patient.appointments.forEach(appointment=>arrayOfAppointments.push(appointment)))
        setAppointments(arrayOfAppointments)
        setPandingAppointment(arrayOfAppointments.filter(appointment=>appointment.status==='panding'))
        setConfirmAppointments(arrayOfAppointments.filter(appointment=>appointment.status==='confirmed'))
          setNumberOfAppoforDay(Object.values(getAppointmentsPerDay(appointments)) )
          
 
      },[])

  return (
   <section className="dashboard-countainer">
    <section className="dashboard-info">
  

    <section className="dashboard-info-1">
      <section  style={{background:'red',borderRadius:'15px' , marginBottom:'20px',height:'60%', position:'relative',backgroundImage:`url('https://doctris-landing.vercel.app/static/media/profile-bg.50c00f2ec3cc421e2ca4.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <img src={doctorIcon} alt='doctor image' className="doctor-dashboard-img"/>
      </section>
    <h2>Dr.clavin calro</h2>
    <p>total appoitments today:{totalAppoitments}</p>
      </section>
      <nav className="dashboard-info-2">
          <ul >
            <li><MdOutlineDashboardCustomize size={20} />
            <a href="/doctor">dashbord</a> </li>
            <li> <a href={`/doctor/${userInfo.id}/appointments`}><AiOutlineContacts size={20} />
            appointements</a> </li>
          </ul>
      </nav>

    </section>
    <section className="dashboard-appointments">
       
         <h2>dashbord</h2>
         <section className="chart">
          <ApexChart data={numberOfAppoforDay}/>
         </section>
         <section className="appointements-types">
         {
          [{title:'pandding appointments',appointments:pandingAppointments},{title:'completed appointment',appointments:confirmedAppointments}].map(type=>
          <section >
            <section className="title-appoitments">
            <h4>{type.title==='pandding appointments'? <AiOutlineContacts color="blue"  size={20}/>:<AiFillContacts color="blue"  size={20}/>}
            {type.title}</h4>
            <p>{type.appointments.length}petients</p>
              </section>
            {type.appointments?.map(appo=>
              <section className="appointments-info">
      <img src={doctorIcon} alt='doctor image' className="doctor-dashboard-img" style={{position:'static'}}/>
      <section>
        <h3>{appo.fullName}</h3>
        <p>Booking on {appo.date}</p>
                  </section>
                  <GrFormNextLink size={30} color="blue"  style={{marginLeft:'120px'}}/>

              </section>)}
          </section>

          )
          
            }
         </section>
    </section>
  </section>
  )
}

export default DashBoard
/*    <div>
      <p>Total appointments today:
      {totalAppoitments} </p>
      <link href=""></link>
      <Countainer childern={<>
        <h1>panding appointments</h1>
    
        {pandingAppointments.length?pandingAppointments.map(pdapp=><Appointment {...pdapp}/>):<>no have panding appointments</>}
        </>}/>
        <Countainer childern={<>
        <h1>confirm appointments</h1>

        {confirmedAppointments.length?confirmedAppointments.map(pdapp=><Appointment {...pdapp}/>):<>no have confirm appointments</>}
        </>}/>
        <div className="App">
      <h1>Appointments Per Day</h1>
    </div>
<Chartt numberOfAppoforDay={numberOfAppoforDay}/>
    </div>




        <img src={systemImg} alt="system image for doctrise app" className="system-dashboard-img"/>
        <img src={doctorIcon} alt='doctor image' className="doctor-dashboard-img"/>
        <h2>Dr.clavin calro</h2>
        <p>othopedic</p>
*/
