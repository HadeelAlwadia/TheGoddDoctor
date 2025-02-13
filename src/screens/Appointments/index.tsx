
import { SetStateAction, useEffect, useState } from 'react'
import { Countainer } from '../../Components/common/Countainer';
import TitlePage from '../../Components/titlePage';
import Appointment from '../../Components/appointment';
import { userInfo } from '../../storage';
import { useSearchParams } from 'react-router-dom';

const Appointments = () => {
  const [patientAppointments,setPatientAppointments]=useState([])
  const [params, setParams] = useSearchParams();
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [appointments,setAppointments]=useState([])
   console.log(filteredList)

  useEffect(()=>{
    const query = params.get('q') || '';
    const status = params.get('status');

    if (status === '') {
      setFilteredList(appointments);

    } else if (status === 'panding') {
             setFilteredList(appointments.filter(app=>app.status==='panding'))
    }else if(status==='confirmed'){
      setFilteredList(appointments.filter(app=>app.status==='confirmed'))

    }else if(status==='compleled'){
      setFilteredList(appointments.filter(app=>app.status==='compleled'))
    }
    if (query) {
      setFilteredList(appointments.filter(app => app.fullName.toLowerCase().includes(query.toLowerCase())));
    } else {
      setFilteredList(appointments);
    }

  },[params])



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
    const appointments= JSON.parse(localStorage.getItem('appointments')||'[]')
    const targetPatient=appointments.find((patient:any)=>patient.id===userInfo.id)
    setPatientAppointments(targetPatient?targetPatient.appointments:[])
    const appointmentsCollections: SetStateAction<any[]>=[]
    appointments.forEach((patient:any)=> patient.appointments.forEach((appo:any)=>appointmentsCollections.push(appo)))
    setAppointments(appointmentsCollections)
    setFilteredList(appointmentsCollections)
  

  },[])
  
  
  return (
  
       <>
       {
        userInfo.role==='patient'? 
        <main style={{padding:'15px 20px',height:'100vh'}}>
        <TitlePage name={'appointments'} />
               <Countainer 
               flexDirection='row'
                 childern={
                   <>
                     {
                     patientAppointments.length ? patientAppointments.map((appointment: any) => <Appointment key={appointment.id} {...appointment}/>) : 
                     <img src={''} alt='no have item' height={'80vh'} />
                     }
                   </>}
               />

  </main>:
  <>
   
    <div className="filter">
        <input type="search" placeholder="Search" onChange={handleSearch} value={params.get('q') || ''} />
        <select value={params.get('status') || 'all'} onChange={handleStatusFilter}>
        {['all','panding','completed','confirmed'].map(value=> <option value={value}>{value}</option>      )       } 
  
        </select>
        </div> 
        <Countainer 
               flexDirection='row'
                 childern={
                   <>
                     {
                     filteredList.length ? filteredList.map((appo: any) =>
                    <Appointment key={`${Math.random()}`} {...appo}/>)
                     : 
                     <img src={''} alt='no have item' height={'80vh'} />
                     }
                   </>}
               />


  </>
       }
       </>

)
          

}

export default Appointments
