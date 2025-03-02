import { useContext, useState } from 'react'
import Btn from '../common/Button'
import './PopUp.css'
import { AppContext } from '../../store'
import actions from '../../store/actions'
import { IoCloseSharp } from "react-icons/io5";
import doctorIcon from '../../assets/doctor-icon.jpg'
import { Iappointment } from '../../@types'

interface IpopUp {
  data: Iappointment
  handleOpenPopUp: () => void,
  isOben: boolean,
  typeOfPopUp: string,
}


const PopUp = ({ data, handleOpenPopUp, isOben, typeOfPopUp }: IpopUp) => {
  console.log(data)
  const { dispatch } = useContext(AppContext);
  const [newStatus, setNewStatus] = useState(data.status)

  const handleChangeStatus = (value: 'panding' | 'confirmed' | 'completed') => {
    setNewStatus(value)
  }
  const handleEditAppointment = () => {
    const newAppointment = { ...data, status: newStatus }
    dispatch(actions.editAppointment(newAppointment))
    handleOpenPopUp()
  }

  return (
    <section className={`pop-up popUp-display-${isOben}`}>
      <section className='title-appointment'>
        <h2>Appointment Detail
        </h2>
        <IoCloseSharp onClick={handleOpenPopUp} size={30} />
      </section>
      <h2>
        <img src={doctorIcon} width={'60px'} height={'60px'} style={{ borderRadius: '50%', margin: 'auto' }} />
      </h2>
      <section className='detailes-appointment'>
        <section>
          <h2>name:<mark>{data.fullName}</mark></h2>
          <h2>age:<mark>{data.age}</mark></h2>
        </section>
        <section>
          <h2>gander:<mark>{data.gander}</mark></h2>
          <h2>moblie:<mark>{data.mobileNumber}</mark></h2>

        </section>
        <section>
          {typeOfPopUp === 'edit' ? <select onChange={(e) => { handleChangeStatus(e.target.value as 'completed' | 'confirmed' | 'panding') }}>
            {['panding', 'completed', 'confirmed'].map(status => <option>{status}</option>)
            }     </select> : <h2>status:<mark>{data.status}</mark></h2>}
          <h2>time:<mark>{data.time}</mark></h2>

        </section>

      </section>
      {typeOfPopUp === 'edit' && <Btn type={'button'} name={'edit status'} handleClick={handleEditAppointment} />
      }  </section>
  )
}


export default PopUp;
