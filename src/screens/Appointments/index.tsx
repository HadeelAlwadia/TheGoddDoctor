
import Table from '../../Components/Table';
import DashBoardInfo from '../../Components/DashBoardInfo';
import { AppContext } from '../../store';
import { userInfo } from '../../storage';
import { useContext, useEffect, useState } from 'react';
import PopUp from '../../Components/PopUp';
import { useSearchParams } from 'react-router-dom';
import { Iappointment } from '../../@types';

const Appointments = () => {
  const { appointments, targetPatient } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  const [targetAppointmentId,setTargetAppointmentId]=useState('')
  const [typeOfPopUp,setTypeOfPopUp]=useState('view')
  const [params, setParams] = useSearchParams();
  const [listOfAppointments,setListOfAppointments]=useState<any[]>([])
 const [filteredList, setFilteredList] = useState<any[]>([]);
  let [targetAppoitment,setTargetAppointment]=useState({
    patientId:'',
    id: '',
    fullName: '',
    name: '',
    age: 0,
    gander: '',
    mobileNumber: '',
    date: '',
    time: '',
    status: ''
})



const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  const query = event.target.value;
  if (query.length) {
    params.set('q', query);
  } else {
    params.delete('q');
  }
  setParams(params);
}


const handleStatusFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const v = event.target.value;
  if (v === 'all') {
    params.delete('status');
  } else {
    params.set('status', v);
  }
  setParams(params);
}


 


useEffect(()=>{
  const query = params.get('q') || '';
  const status = params.get('status');
  if (query) {
    setFilteredList(listOfAppointments.filter((appo:Iappointment) => appo.fullName.toLowerCase().includes(query.toLowerCase())));
  } else {
    setFilteredList(listOfAppointments);
  }

   status === 'panding'? setFilteredList(listOfAppointments.filter((appo:Iappointment) => appo.status === 'panding')):status==='completed'?    setFilteredList(listOfAppointments.filter((appo:Iappointment) => appo.status ==='completed'))
   :    setFilteredList(listOfAppointments.filter((appo:Iappointment) => appo.status ==='confirmed'));


   const newAppointments: any[]=[]
    if(!status){
      appointments.forEach(patient => patient.appointments.forEach(appo => {
        if(appo.id===targetAppointmentId){
          setTargetAppointment({...appo,patientId:patient.id})
        }
        newAppointments.push({...appo,patientId:patient.id});
      }))
      setListOfAppointments([...newAppointments])
      setFilteredList(listOfAppointments)
    }


},[params ,appointments,targetAppoitment,targetAppointmentId])

  const handleOpenPopUp = () => setIsOpen(!isOpen)
  const handleGetId=(id:string)=>setTargetAppointmentId(id)
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
        <section style={{display:'flex',justifyContent:'space-between',marginBottom:'20px'}}>
          <input className='search' value={params.get('q')|| ''} placeholder='what you are looking?' onChange={handleSearch}/>
          <select onChange={handleStatusFilter} className='status-select'>
            {['all','panding','completed','confirmed'].map(value=><option value={value}>{value}</option>)}
          </select>
        </section>
          <Table
           data={userInfo.role === 'doctor' ? filteredList : targetPatient.appointments}
            actionsFun={{handleOpenPopUp,handleGetId,handleChangeType}}
          />
      </section>


    </section>


  )


}

export default Appointments;

























