import { Iaction, Iappointment } from "../../@types"
import CONSTANTS from "../constants"


const actions={
 initialAppointments:()=>({type:CONSTANTS.INITIAL_APPOINTMENTS}),
 addAppointments:(appointments:Iappointment):Iaction=>({type:CONSTANTS.ADD_APPOINTMENTS,payload:appointments}),
 editeAppointment:(appointment:Iappointment):Iaction=>({type:CONSTANTS.EDITE_APPOINTMENT,payload:appointment}),
 deleteAppointment:(idOfAppointment:string):Iaction=>({type:CONSTANTS.DELETE_APPOINTMENT,payload:idOfAppointment})
}
export default actions

