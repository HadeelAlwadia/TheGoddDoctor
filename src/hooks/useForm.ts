import { useState } from "react"
import { Iopject_Type } from "../@types";
import { validateForm } from "../utils/validateForm";
type Iobject=Record<string,string>
interface IformData{
    valuesForm:Iobject
     handleChangeValue:(name:string,newValue:string)=>void
     handleSubmit:(values:Iobject)=>void
     errors:Iobject,
}


const useForm = (values: Iopject_Type, handleSubmitForm: (values: Iopject_Type) => void

):IformData => {

    const [valuesForm, setValuesForm] = useState(values);

    const [errors, setErrors] = useState({})

    //to handle Values Form
    const handleChangeValue = (name: string, newValue: string) => {
        setValuesForm({ ...valuesForm, [name]: newValue })

    }

    //to handleSubmit form
    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (!Object.keys(validateForm(valuesForm)).length) {
            handleSubmitForm(valuesForm as Iopject_Type)
            setErrors({})

        } else {
            setErrors(validateForm(valuesForm))

        }
    }

    return { valuesForm, handleChangeValue, handleSubmit, errors }
}

export default useForm;