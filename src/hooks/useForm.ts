import { useState } from "react"
import { validateForm } from "../utils";
import { typeObject } from "../@types";



const useForm = (values: typeObject, handleSubmitForm: (values: typeObject) => void

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
            handleSubmitForm(valuesForm as typeObject)
            setError({})


        } else {
            setError(validateForm(valuesForm))

        }
    }

    return { valuesForm, handleChangeValue, handleSubmit, errors }
}

export default useForm;