import  { createContext, useReducer } from 'react';
import reducer from './reducer';
import { getFromLocalStorage } from '../storage';
import { Iaction, Iapp_State } from '../@types';


export const initialState:Iapp_State = {
   theme: getFromLocalStorage('theme') || 'dark',
   
    dispatch:(action:Iaction)=>{console.log(action)}
};



export const AppContext = createContext(initialState);


  const AppProvider = ({children}:{children:any}) => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
     <AppContext.Provider value={{...appState,dispatch}}>
       {children}
     </AppContext.Provider>
  );
};



export default AppProvider;


