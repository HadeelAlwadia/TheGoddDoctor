import { MdOutlineDashboardCustomize } from "react-icons/md"
import { userInfo } from "../../storage"
import { AiOutlineContacts } from "react-icons/ai"
import doctorIcon from '../../assets/doctor-icon.jpg'
import systemImg from '../../assets/system-image.jpg'
import { useContext } from "react"
import { AppContext } from "../../store"

const DashBoardInfo = () => {
    const {appointments} =useContext(AppContext)
    let totalAppoitments=0
    appointments.forEach((patient)=>patient.appointments.forEach(appo=>appo.date==='2025-03-01'?totalAppoitments++:null))

  return (
    <section className="dashboard-info">
    <section className="dashboard-info-1">
      <section  style={{background:'red',borderRadius:'15px' , marginBottom:'20px',height:'60%', position:'relative',backgroundImage:`url(${systemImg})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <img src={doctorIcon} alt='doctor image' className="doctor-dashboard-img"/>
      </section>
    <h2>Dr.clavin calro</h2>
    <p>total appoitments today:{totalAppoitments}</p>
      </section>
      
      <nav className="dashboard-info-2">
          <ul >
            <li><MdOutlineDashboardCustomize size={20} />
            <a href={`/doctor/${userInfo.id}/dashboard`}>dashbord</a> </li>
            <li> <a href={`/doctor/${userInfo.id}/appointments`}><AiOutlineContacts size={20} />
            appointements</a> </li>
          </ul>
      </nav>

    </section>
  )
}

export default DashBoardInfo
