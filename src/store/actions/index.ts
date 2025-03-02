import { Iaction, Iappointment } from "../../@types"
import CONSTANTS from "../constants"


const actions={
 initialAppointments:()=>({type:CONSTANTS.INITIAL_APPOINTMENTS}),
 addAppointments:(appointments:Iappointment):Iaction=>({type:CONSTANTS.ADD_APPOINTMENTS,payload:appointments}),
 editAppointment:(appointment:any):Iaction=>({type:CONSTANTS.EDIT_APPOINTMENT,payload:appointment}),
 deleteAppointment:(appoId:string,patientId:string):Iaction=>({type:CONSTANTS.DELETE_APPOINTMENT,payload:{appoId,patientId}})
}
export default actions

