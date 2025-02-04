import { useContext, useEffect } from "react"
import API_PRO from "../api"
import { AppContext } from "../store"
import actions from "../store/actions"
import { AxiosError } from "axios"
import {  typeActionKeys, typeAppStateKeys } from "../@types"

export default function useFetch(url: string, nameData:string ) {
    const { dispatch } = useContext(AppContext)
    const data =useContext(AppContext)[nameData as typeAppStateKeys ]
    

    useEffect(() => {
        (
            async function () {
                try {
                    dispatch(actions[nameData as typeActionKeys].start())

                    const response = await API_PRO.get(url)
                    dispatch(actions[nameData as typeActionKeys].success(response.data))
                } catch (err:AxiosError|any) {
                    dispatch(actions[nameData as typeActionKeys].failed(err.response.massage))
                    
                }
            }
        )()
    }, [])


    return data

}



