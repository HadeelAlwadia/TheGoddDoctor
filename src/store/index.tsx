import  { createContext, ReactElement, useEffect, useReducer } from 'react';
import { getFromLocalStorage } from '../storage';
import { Iaction, Iapp_State } from '../@types';
import reducer from './reducer';
import actions from './actions';


export const initialState:Iapp_State = {
     theme: getFromLocalStorage('theme') || 'light',
     appointments:[],
     targetAppointments:[],
    dispatch:(action:Iaction)=>{console.log(action)}
};



export const AppContext = createContext(initialState);


  const AppProvider = ({children}:{children:ReactElement}) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
         

  useEffect(()=>{
      dispatch(actions.initialAppointments())
      },[])



  return (
     <AppContext.Provider value={{...appState,dispatch}}>
       {children}
     </AppContext.Provider>
  );
};



export default AppProvider;


