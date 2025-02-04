import { storeInLocalStorage } from "../../storage"
import CONSTANTS from "../constants"

const reducer = (state: any, action: any) => {

  switch (action.type) {

    case 'toggleTheme': {
      const newTheme= state.theme === 'light' ? 'dark' : 'light' ;
            storeInLocalStorage('theme',newTheme)
      return { ...state,  theme: newTheme }

    }
    case CONSTANTS.START_GET_USER_INFO: {
      return {
        ...state,  userInfo: { data: null, loading: true, error: '' }
      }
    }
    case CONSTANTS.SUCCESS_GET_USER_INFO: {
      return {
        ...state, userInfo: { data: action.payload, loading: false, error: '' }
      }
    }
    case CONSTANTS.FAILED_GET_USER_INFO: {
      return {
        ...state, userInfo: { data: action.payload, loading: false, error: '' }
      }
    }
    case CONSTANTS.START_GET_REQUESTS_USER: {
      return {
        ...state, requestsUser: { data: null, loading: true, error: '' }
      }
    }
    case CONSTANTS.SUCCESS_GET_REQUESTS_USER: {
      return {
        ...state, requestsUser: { data: action.payload, loading: false, error: '' }
      }
    }
    case CONSTANTS.FAILED_GET_REQUESTS_USER: {
      return {
        ...state, requestsUser: { data: null, loading: false, error: action.payload }
      }

    }


    case CONSTANTS.START_GET_USERS_ADMIN: {
      return { ...state, usersAdmin: { data: null, loading: true, error: '' } }
    }
    case CONSTANTS.SUCCESS_GET_USERS_ADMIN: {
      return { ...state, usersAdmin: { data: action.payload, loading: false, error: '' } }

    }
    case CONSTANTS.FAILED_GET_USERS_ADMIN: {
      return {
        ...state, usersAdmin: { data: null, loading: false, error: action.payload }
      }
    }

    case CONSTANTS.START_GET_PRODUCTS_ADMIN: {
      return { ...state, productsAdmin: { data: null, loading: true, error: '' } }
    }
    case CONSTANTS.SUCCESS_GET_PRODUCTS_ADMIN: {
      return { ...state, productsAdmin: { data: action.payload, loading: false, error: '' } }

    }
    case CONSTANTS.FAILED_GET_PRODUCTS_ADMIN: {
      return {
        ...state, productsAdmin: { data: null, loading: false, error: action.payload }
      }
    }


      return state;

  }

}



export default reducer;