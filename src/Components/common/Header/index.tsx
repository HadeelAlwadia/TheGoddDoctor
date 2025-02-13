import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../assets/logo.png'
const Header = () => {
  return (
      <header>

       <h1 className='title-header' >
       <img src={logo} alt='clinic-appointments-app' height={30} width={30}/>
           <a href='/'>Doctris</a>
         
      </h1>
    </header>
  )
}

export default Header;
