import { useContext,  useState } from "react"
import ApexChart from "../../Components/chart"
import DashBoardInfo from "../../Components/DashBoardInfo"
import './Dashboard.css'
import { AppContext } from "../../store";
import { Iappointment } from "../../@types";
import TypeAppointments from "../../Components/TypeAppointments";


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
        <section className="appointements-types sm-screen-countainer">
          {
            [{ title: 'pandding appointments', appointments: pandingAppointments }, { title: 'completed appointment', appointments: confirmedAppointments }].map(type =>
             <TypeAppointments type={type}/>

            )

          }
        </section>
      </section>
    </section>
  )
}

export default DashBoard

