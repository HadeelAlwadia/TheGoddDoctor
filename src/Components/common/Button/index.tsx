import './button.css'
interface Ibtn{
    type:"submit" | "reset" | "button" | undefined,
    name:string,
    theme?:'dark'|'light',
    handleClick?:()=>void
}
const Btn = ({type,name,theme,handleClick}:Ibtn) => {
  return (
    <button type={type} className={`btn btn-${theme} btn-${theme}`} onClick={handleClick}>
      {name}
    </button>
  )
}

export default Btn