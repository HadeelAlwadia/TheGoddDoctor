import { useContext } from 'react'
import Btn from '../../Components/common/Button'
import Form from '../../Components/Form'
import useForm from '../../hooks/useForm'
import { userInfo } from '../../storage'
import './Appointments.css'
import { AppContext } from '../../store'
import actions from '../../store/actions'
import { Iappointment } from '../../@types'



const addAppotValues = {
  id:`${Math.random()}`,
  fullName: '',
  age: '',
  mobileNumber: '',
  gander: 'male',
  time: '',
  date: '',
  descraption: ''

}

const CreateAppointment = () => {
  const {dispatch}=useContext(AppContext)
  const { handleChangeValue, handleSubmit, errors, valuesForm, handleErrorsForm } = useForm(addAppotValues, handleAddAppo)

//Appo specifec for appointment
function handleAddAppo (values: Record<string, string>) {
  alert('successe add appointment ,wait little hour to replay about you');
  dispatch(actions.addAppointments(values as unknown as Iappointment))
  setTimeout(() => window.location.href = `/patient/${userInfo.id}/appointments`, 3)

}

  return (
    <Form handleSubmit={handleSubmit}
      childern={
        <>
          <h1 className='title-form'>we will call you back!</h1>
          {
            [[{ name: 'fullName', type: 'text' }, { name: 'age', type: 'number' }]
              , [{ name: 'mobileNumber', type: 'text' }, { name: 'gander', type: 'select' }]
              , [{ name: 'date', type: 'date' }, { name: 'time', type: 'time' }]
            ].map(([item1, item2],index) =>
              <section className='input-countainer' key={String(index)}>
                <section>
                  <input value={valuesForm[item1.name]} onBlur={() => handleErrorsForm(item1.name)} type={item1.type} placeholder={`enter  your ${item1.name}!`} onChange={(e) => handleChangeValue(item1.name, e.target.value)} />
                  {errors[item1.name] && <p className='input-error'>{errors[item1.name]}</p>}
                </section>
                <section>
                  {
                    item2.type==='select'?<select onBlur={()=>handleErrorsForm(item2.name)} value={valuesForm.gander}
                    onChange={(e) => handleChangeValue('gander', e.target.value)}>
                    {['male', 'famle'].map((val: string) => <option key={val} value={val}>{val}</option>)}
                  </select>:<input value={valuesForm[item2.name]}    type={item2.type} placeholder={`enter your  ${item2.name}` }onBlur={() => handleErrorsForm(item2.name)} onChange={(e) => handleChangeValue(item2.name, e.target.value)} />
                  }
                 
                  {errors[item2.name] && <p className='input-error'>{errors[item2.name]}</p>}
                </section>
              </section>
            )

          }



          <section>
            <textarea style={{ width: '100%' }} placeholder='enter descraption' onBlur={() => handleErrorsForm('descraption')} onChange={(e) => handleChangeValue('descraption', e.target.value)} ></textarea>
            {errors.descraption && <p className='input-error'>{errors.descraption}</p>}
          </section>

          <Btn type={'submit'} name={'create appointment'} />

        </>



      } />
  )
}

export default CreateAppointment;


