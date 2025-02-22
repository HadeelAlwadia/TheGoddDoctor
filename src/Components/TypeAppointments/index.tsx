import { AiFillContacts, AiOutlineContacts } from "react-icons/ai";
import { Iappointment } from "../../@types"
import { GrFormNextLink } from "react-icons/gr";
import doctorIcon from '../../assets/doctor-icon.jpg'
import './TypeAppointments.css'
interface ItypeAppointments{
    title:string,
    appointments:Iappointment[]
}
const TypeAppointments = ({type}:{type:ItypeAppointments}) => {
  return (
    <section className="type-appointments-countainer ">
    <section className="title-appoitments">
      <h4>{type.title === 'pandding appointments' ? <AiOutlineContacts color="blue" size={20} /> : <AiFillContacts color="blue" size={20} />}
        {type.title}</h4>
      <p>{type.appointments.length}petients</p>
    </section>
    {type.appointments?.map((appo: Iappointment) =>
      <section className="appointments-info">
        <img src={doctorIcon} alt='doctor image' className="doctor-dashboard-img" style={{ position: 'static' }} />
        <section>
          <h3>{appo.fullName}</h3>
          <p>Booking on {appo.date}</p>
        </section>
        <GrFormNextLink size={30} color="blue" style={{ marginLeft: '120px' }} />

      </section>
    )}
  </section>

  )}

export default TypeAppointments;
