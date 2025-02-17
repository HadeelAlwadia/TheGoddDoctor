import { useContext,  useState } from "react"
import doctorIcon from '../../assets/doctor-icon.jpg'
import { AiOutlineContacts } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import ApexChart from "../../Components/chart"
import DashBoardInfo from "../../Components/DashBoardInfo"
import './Dashboard.css'
import { AppContext } from "../../store";
import { Iappointment } from "../../@types";


const DashBoard = () => {
  const { appointments } = useContext(AppContext)
  const pandingAppointments: Iappointment[] =[]
  const confirmedAppointments: Iappointment[] = []

  appointments.forEach(patient=>patient.appointments.forEach(appo=>appo.status==='panding'?pandingAppointments.push(appo):confirmedAppointments.push(appo)))

  const [numberOfAppoforDay, setNumberOfAppoforDay] = useState([0, 4, 1, 0, 3, 0, 0])

  return (
    <section className="dashboard-countainer">
      <DashBoardInfo />
      <section className="dashboard-appointments">

        <h2>dashbord</h2>
        <section className="chart">
          <ApexChart data={numberOfAppoforDay} />
        </section>
        <section className="appointements-types">
          {
            [{ title: 'pandding appointments', appointments: pandingAppointments }, { title: 'completed appointment', appointments: confirmedAppointments }].map(type =>
              <section >
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

