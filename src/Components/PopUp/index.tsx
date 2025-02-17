import { Iappointment } from '../../@types'
import './PopUp.css'
const PopUp = ({data}:{data:Iappointment}) => {
  return (
    <section className='pop-up'>
      <h1>{data.fullName}</h1>
    </section>
  )
}

export default PopUp
