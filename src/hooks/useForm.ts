import { useState } from "react"
import { validateForm } from "../utils";
import { Iopject_Type } from "../@types";



const useForm = (values: Iopject_Type, handleSubmitForm: (values: Iopject_Type) => void

) => {

    const [valuesForm, setValuesForm] = useState(values);

    const [errors, setError] = useState({})
    //to handle Values Form
    const handleChangeValue = (name: string, newValue: string) => {
        setValuesForm({ ...valuesForm, [name]: newValue })

    }

    //to handleSubmit form
    const handleSubmit = (e: any) => {
        e.preventDefault()

        if (!Object.keys(validateForm(valuesForm)).length) {
            handleSubmitForm(valuesForm as Iopject_Type)
            setError({})


        } else {
            setError(validateForm(valuesForm))

        }
    }

    return { valuesForm, handleChangeValue, handleSubmit, errors }
}

export default useForm;