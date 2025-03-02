import { Iaction, Iapp_State, Ipatient } from "../../@types";
import { getFromLocalStorage, storeInLocalStorage, userInfo } from "../../storage"
import CONSTANTS from "../constants";




const reducer=(state:Iapp_State,{type,payload}:Iaction)=>{
    switch(type){
          
      case CONSTANTS.INITIAL_APPOINTMENTS:{
          const appointments=getFromLocalStorage('appointments')||[];
          const targetPatient=appointments.find((patient:Ipatient)=> patient.id===userInfo.id )||{id:userInfo.id,appointments:[]};
      return {...state,appointments:appointments,targetPatient:targetPatient}
    }

    case CONSTANTS.ADD_APPOINTMENTS:{
      const {appointments} = state
      const targetPatient = appointments.find((patient: Ipatient) => patient.id === userInfo.id) || { id: userInfo.id, appointments: [] }
       const newTargetAppointments= [...targetPatient.appointments, { ...payload, status: 'panding' }]
      const newAppointments=[...(appointments.filter((patient: any) => patient.id !== targetPatient.id)), { id: targetPatient.id, appointments:newTargetAppointments }]
      storeInLocalStorage('appointments', newAppointments)
    return {...state,appointments:newAppointments,targetPatient:targetPatient}
    }


    case CONSTANTS.EDIT_APPOINTMENT:{
      const {appointments} = state
      const targetPatient = appointments.find((patient: Ipatient) => patient.id === payload.patientId) || { id: payload.patientId, appointments: [] }
      const newTargetAppointments= [...targetPatient.appointments.filter(appo=>appo.id!==payload.id),payload]
      const newAppointments=[...(appointments.filter((patient: any) => patient.id !== payload.patientId)), { id: targetPatient.id, appointments:newTargetAppointments }]
      storeInLocalStorage('appointments', newAppointments)

      return {...state,appointments:newAppointments,targetPatient:targetPatient}
    }

    case CONSTANTS.DELETE_APPOINTMENT:{
      const {appointments} = state
      const targetPatient = appointments.find((patient: Ipatient) => patient.id === payload.patientId) || { id: payload.patientId, appointments: [] }
      const newTargetAppointments= targetPatient.appointments.filter(appo=>appo.id!==payload.appoId)
      const newAppointments=[...(appointments.filter((patient: any) => patient.id !== payload.patientId)), { id: targetPatient.id, appointments:newTargetAppointments }]
      storeInLocalStorage('appointments', newAppointments)
      return {...state,appointments:newAppointments,targetPatient:targetPatient}
    }
      default:  return state;

    }
     
  }
    


export default reducer;