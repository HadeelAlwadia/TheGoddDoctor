import { Iaction, Iapp_State, Iappointment, Ipatient } from "../../@types";
import { getFromLocalStorage, storeInLocalStorage, userInfo } from "../../storage"
import CONSTANTS from "../constants";




const reducer=(state:Iapp_State,{type,payload}:Iaction)=>{
    switch(type){
          
      case CONSTANTS.INITIAL_APPOINTMENTS:{
          const appointments=getFromLocalStorage('appointments')||[];
          const targetPatient=appointments.find((patient:Ipatient)=> patient.id===userInfo.id );
          const targetAppointments:Iappointment[]=targetPatient?targetPatient.appointments:[]
    
      return {...state,appointments:appointments,targetAppointments:targetAppointments}
    }

    case CONSTANTS.ADD_APPOINTMENTS:{
      const {appointments} = state
      const targetPatient = appointments.find((patient: Ipatient) => patient.id === userInfo.id) || { id: userInfo.id, appointments: [] }
       const newTargetAppointments= [...targetPatient.appointments, { ...payload, status: 'panding' }]
      const newAppointments=[...(appointments.filter((patient: any) => patient.id !== targetPatient.id)), { id: targetPatient.id, appointments:newTargetAppointments }]
      storeInLocalStorage('appointments', newAppointments)

  
    return {...state,appointments:newAppointments,targetAppointment:newTargetAppointments}
    }


    case CONSTANTS.EDITE_APPOINTMENT:{
      const {appointments} = state
      const targetPatient = appointments.find((patient: Ipatient) => patient.id === userInfo.id) || { id: userInfo.id, appointments: [] }
       const newTargetAppointments= [...targetPatient.appointments.filter(appo=>appo.id!==payload),payload]
      const newAppointments=[...(appointments.filter((patient: any) => patient.id !== targetPatient.id)), { id: targetPatient.id, appointments:newTargetAppointments }]
      storeInLocalStorage('appointments', newAppointments)

      return {...state,appointments:newAppointments,targetAppointment:newTargetAppointments}
    }

    case CONSTANTS.DELETE_APPOINTMENT:{
      const {appointments} = state
      const targetPatient = appointments.find((patient: Ipatient) => patient.id === userInfo.id) || { id: userInfo.id, appointments: [] }
       const newTargetAppointments= [...targetPatient.appointments.filter(appo=>appo.id!==payload)]
      const newAppointments=[...(appointments.filter((patient: any) => patient.id !== targetPatient.id)), { id: targetPatient.id, appointments:newTargetAppointments }]
      
      storeInLocalStorage('appointments', newAppointments)


      return {...state,appointments:newAppointments,targetAppointment:newTargetAppointments}
    }
      default:  return state;

    }
     
  }
    


export default reducer;