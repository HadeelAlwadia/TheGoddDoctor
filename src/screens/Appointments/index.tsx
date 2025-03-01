
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
  const [targetAppointmentId, setTargetAppointmentId] = useState('')
  const [typeOfPopUp, setTypeOfPopUp] = useState('view')
  const [params, setParams] = useSearchParams();
  const [filteredList, setFilteredList] = useState<any[]>([]);
  let [targetAppoitment, setTargetAppointment] = useState({
    patientId: '',
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
  useEffect(() => {
    const query = params.get('q') || '';
    const status = params.get('status');

    const newAppointments: any[] = []
    appointments.forEach(patient => patient.appointments.forEach(appo => {
      newAppointments.push({ ...appo, patientId: patient.id });
    }))


if(status&&query){
  switch(status){
    case 'panding': {
      setFilteredList(
        newAppointments.filter((appo: Iappointment) => appo.status==='panding'&& appo.fullName.toLowerCase().includes(query.toLowerCase()))
      );
      break;
    }
    case 'completed': {
      setFilteredList(
        newAppointments.filter((appo: Iappointment) => appo.status==='completed'&& appo.fullName.toLowerCase().includes(query.toLowerCase()))
      );
      break;
    }
    case 'confirmed': {
      setFilteredList(
        newAppointments.filter((appo: Iappointment) => appo.status==='confirmed'&& appo.fullName.toLowerCase().includes(query.toLowerCase()))
      );
      break;
    }
   
    default :[]
  }



}else if(status&&!query){

  switch(status){
    case 'panding': {
      setFilteredList(
        newAppointments.filter((appo: Iappointment) => appo.status==='panding')
      );
      break;
    }
    case 'completed': {
      setFilteredList(
        newAppointments.filter((appo: Iappointment) => appo.status==='completed')
      );
      break;
    }
    case 'confirmed': {
      setFilteredList(
        newAppointments.filter((appo: Iappointment) => appo.status==='confirmed')
      );
      break;
    }
   
    default :[]}


}else if(!status&&query){
setFilteredList(    newAppointments.filter((appo: Iappointment) => appo.fullName.toLowerCase().includes(query.toLowerCase()))
)

}else if(!status&&!query){
      setFilteredList([...newAppointments])}




  }, [params, appointments])

  useEffect(() => {
    setTargetAppointment({ ...filteredList.find(appo => appo.id === targetAppointmentId) })
  }, [targetAppointmentId])

  const handleOpenPopUp = () => setIsOpen(!isOpen)
  const handleGetId = (id: string) => setTargetAppointmentId(id)
  const handleChangeType = (type: string) => setTypeOfPopUp(type)

  return (
    <section className="dashboard-countainer">
      <PopUp data={targetAppoitment} handleOpenPopUp={handleOpenPopUp} isOben={isOpen} typeOfPopUp={typeOfPopUp} />
      {userInfo.role === 'doctor' && <DashBoardInfo />}
      <section className="dashboard-appointments">
        <section className='title-appointments'>
          <h1>all appointments</h1>
          <a href={userInfo.id ? `/${userInfo.role}/${userInfo.id}/appointments/add` : '/auth/login'} className='link-as-btn' >make appointments</a>
        </section>
        {userInfo.role === 'doctor' && <section style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <input className='search' value={params.get('q') || ''} placeholder='search by patient name..?' onChange={handleSearch} />
          <select onChange={handleStatusFilter} className='status-select'>
            {['all', 'panding', 'completed', 'confirmed'].map(value => <option value={value}>{value}</option>)}
          </select>
        </section>}
        <Table
          data={userInfo.role === 'doctor' ? filteredList : targetPatient.appointments}
          actionsFun={{ handleOpenPopUp, handleGetId, handleChangeType }}
        />
      </section>


    </section>


  )


}

export default Appointments;

























