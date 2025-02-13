import { useEffect, useState } from "react"
import { Countainer } from "../../Components/common/Countainer"
import Appointment from "../../Components/appointment"
import { getFromLocalStorage } from "../../storage"
import Chartt from "../../Components/chart"

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
        appointments.forEach((app)=>{
          ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].forEach((day,index)=>{
            if(day===''){
                
            } })
          })
      },[])

  return (
    <div>
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

  )
}

export default DashBoard
