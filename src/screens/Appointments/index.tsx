
import Table from '../../Components/Table';
import DashBoardInfo from '../../Components/DashBoardInfo';
import { AppContext } from '../../store';
import { userInfo } from '../../storage';
import { useContext, useEffect, useState } from 'react';
import PopUp from '../../Components/PopUp';

const Appointments = () => {
  const { appointments, targetPatient } = useContext(AppContext);
  const [listOfAppointments,setListOfAppointments]=useState([])
 // const listOfAppointments: any[] = [];
  
  const [isOpen, setIsOpen] = useState(false);
  const [idOfTargetAppointment,setIdOfTargetAppointment]=useState('')
  const [typeOfPopUp,setTypeOfPopUp]=useState('view')
  let [targetAppoitment,setTargetAppointment]=useState({
    id: '',
    fullName: '',
    name: '',
    age: 0,
    gander: '',
    mobileNumber: '',
    date: '',
    time: '',
    status: 'panding'
})
 
console.log(listOfAppointments)

useEffect(()=>{
  const newAppointments: any[]=[]
  appointments.forEach(patient => patient.appointments.forEach(appo => {
    if(appo.id===idOfTargetAppointment){
      setTargetAppointment({...appo,patientId:patient.id})
    }
    newAppointments.push({...appo,patientId:patient.id});
  }))
  setListOfAppointments([...newAppointments])

},[appointments,targetAppoitment,idOfTargetAppointment])

  const handleOpenPopUp = () => setIsOpen(!isOpen)
  const handleGetId=(id:string)=>setIdOfTargetAppointment(id)

  
const handleChangeType=(type:string)=>setTypeOfPopUp(type)

  return (
    <section className="dashboard-countainer">
      <PopUp  data={targetAppoitment} handleOpenPopUp={handleOpenPopUp} isOben={isOpen} typeOfPopUp={typeOfPopUp} />
      {userInfo.role === 'doctor' && <DashBoardInfo />}
      <section className="dashboard-appointments">
        <section className='title-appointments'>
          <h1>all appointments</h1>
          <a href={`/${userInfo.role}/${userInfo.id}/appointments/add`} className='link-as-btn' >make appointments</a>
        </section>
          <Table
           data={userInfo.role === 'doctor' ? listOfAppointments : targetPatient.appointments}
            actionsFun={{handleOpenPopUp,handleGetId,handleChangeType}}
          />

      </section>


    </section>


  )


}

export default Appointments;

























