import useForm from '../../../hooks/useForm'
import Form, { DrawingFormElements } from '../../../Components/Form'
import Btn from '../../../Components/common/Button'
import { storeInLocalStorage } from '../../../storage'
import clinicAppointment from '../../../assets/clinic-appointment-system.jpg'
import './login.css'
import { Iopject_Type } from '../../../@types'

const loginValues = {
  email: '',
  password: '',
  role:'doctor'

}

const handleLogin = (values:Iopject_Type) => {
    const userId=`${Math.random()}`
    storeInLocalStorage('userInfo',{id:userId,...values} )   
    values.role==='doctor'? window.location.href =`/doctor/${userId}/dashboard`: window.location.href =`/patient/${userId}/appointments`

  }

const Login = () => {
  
  const { handleChangeValue, handleSubmit, errors, valuesForm } = useForm(loginValues,handleLogin)
   

  return (
    <main style={{display:'flex',width:'100%',height:'100vh'}}>
     <img className='clinic-appointment-img' src={clinicAppointment} alt='login clinic appointment system' width={'50%'} />
     <Form 
      handleSubmit={handleSubmit}
      childern={<>
        <h2 className='title-form'><a href='/' > the Good Doctor</a></h2>
        <h3>welcome!</h3>
        <DrawingFormElements valuesForm={{email:valuesForm.email,password:valuesForm.password}} handleChangeValue={handleChangeValue} errors={errors}/>
        <select className='input' value={valuesForm.role}
            onChange={(e) => handleChangeValue('role', e.target.value)}>
            {['doctor','patient'].map((val: string) => <option value={val}>{val}</option>)}
        </select>
     
           <Btn  type={"submit"} name={'login'}/>

        </>
        }
    />
    
    </main>

  )
}

/*       
*/




export default Login