

import Table from '../../Components/Table';
import DashBoardInfo from '../../Components/DashBoardInfo';
import { AppContext } from '../../store';
import { userInfo } from '../../storage';
import { useContext } from 'react';
import { Iappointment } from '../../@types';
import PopUp from '../../Components/PopUp';



const Appointments = () => {
const {appointments,targetAppointments} =useContext(AppContext)
const listOfAppointments:Iappointment[]=[]
appointments.forEach(patient=>patient.appointments.forEach(appo=>listOfAppointments.push(appo)))
   
  return (
  
    <section className="dashboard-countainer">
{     userInfo.role==='doctor' && <DashBoardInfo/>
}    <section className="dashboard-appointments">
      <section className='title-appointments'>
        <h1>all appointments</h1>
        <a href={ `/${userInfo.role}/${userInfo.id}/appointments/add`} className='link-as-btn' >make appointments</a>
      </section>
      <section className='appointments-table'>
      <Table data={userInfo.role==='doctor'? listOfAppointments:targetAppointments} />
      </section>

      </section>

      </section> 
       
        
  )
 

}

export default Appointments;





















/*
  const [params, setParams] = useSearchParams();
  const [filteredList, setFilteredList] = useState<any[]>([]);


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

*/
/*       {
        userInfo.role==='patient'? 
        <main style={{padding:'15px 20px',height:'100vh'}}>
        <TitlePage name={'appointments'} />
               <Countainer 
               flexDirection='row'
                 childern={
                   <>
                     {
                     targetAppointments.length ? patientAppointments.map((appointment: any) => <Appointment key={appointment.id} {...appointment}/>) : 
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
         */
