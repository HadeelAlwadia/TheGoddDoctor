import Btn from '../../Components/common/Button'
import Form from '../../Components/Form'
import useForm from '../../hooks/useForm'
import { userInfo } from '../../storage'
import './Appointments.css'



const addAppotValues={
fullName:'',
age:'',
mobileNumber:'',
gander:'male',
time:'',
date:'',
descraption:''

}

 const handleAddAppo=(values:Record<string,string>)=>{
      alert('successe add appointment ,wait little hour to replay about you');
       const appointments=localStorage.getItem('appointments')?JSON.parse(localStorage.getItem('appointments')||'') :[];
        const targetAppointment=appointments.find((patient:any)=>patient.id===userInfo.id)||{id:userInfo.id,appointments:[]}
       console.log(targetAppointment)
      localStorage.setItem('appointments', JSON.stringify([...(appointments.filter((patient:any)=>patient.id!==targetAppointment.id)),{id:targetAppointment.id,appointments:[...targetAppointment.appointments,{...values,status:'panding'}]}]))
      setTimeout(()=> window.location.href=`/patient/${userInfo.id}/appointments`  ,3)

}

const CreateAppointment = () => {
  const { handleChangeValue, handleSubmit, errors, valuesForm } = useForm(addAppotValues,handleAddAppo)

  return (
   <main  className="add-appointment-countainer">
    <Form handleSubmit={handleSubmit}
     childern={

      <>
       <h1>we call you bake!</h1>
       <section >
       <input id='name' value={valuesForm.fullName}  type='text' placeholder='enter  your full name!' onChange={(e)=>handleChangeValue('fullName',e.target.value)}/>
        <input value={valuesForm.age}   type='number' placeholder='enter your age!' onChange={(e)=>handleChangeValue('age',e.target.value)}/>
      </section>
      <section>
        <input   type='text' placeholder='your mobile number!' onChange={(e)=>handleChangeValue('mobileNumber',e.target.value)}/>
        <select  value={valuesForm.gander}
            onChange={(e) => handleChangeValue('gander', e.target.value)}>
            {['male','fmale'].map((val: string) => <option key={val} value={val}>{val}</option>)}
        </select>
        </section>
      <section>
        <input   type='date' placeholder='your date!' onChange={(e)=>handleChangeValue('date',e.target.value)}/>
        <input   type='time' placeholder='enter time!' onChange={(e)=>handleChangeValue('time',e.target.value)}/>
      </section>
      <textarea placeholder='enter descraption' onChange={(e)=>handleChangeValue('descraption',e.target.value)} ></textarea>
      
      <Btn type={'submit'} name={'create appointment'}/>

      </>
     


     } />
    </main>
  )
}

export default CreateAppointment
