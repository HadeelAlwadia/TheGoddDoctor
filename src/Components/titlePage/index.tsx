import Btn from "../common/Button"
import { Countainer } from "../common/Countainer"

interface ItitlePage{
    name:string,
}

const TitlePage = ({name}:ItitlePage) => {
  return (
    <Countainer width={'100%'}
    childern={<>
      <h1>All {name}</h1>
      <a href="./appointments/add">create Appointment</a>
    </>}
    style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 13px', }}
  >
  </Countainer>
  )
}




export default TitlePage
