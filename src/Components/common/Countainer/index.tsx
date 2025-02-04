import  { ReactElement, useContext } from 'react'
import { AppContext } from '../../../store'
import './countainer.css'

interface Icountainer{
  childern:ReactElement
  style?:any,
  width?:number|string,
  height?:number|string,
  flexDirection?:'column'|'row'

}
export const Countainer = ({childern,style,width,height,flexDirection}:Icountainer) => {
  const {theme}=useContext(AppContext)
  return (
    <section className={`countainer countainer-${theme}`}
     style={{...style,width,height,flexDirection}}>
    {childern}
    </section>
  )
}
