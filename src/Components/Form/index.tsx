import React, { ReactElement } from 'react'
import './form.css'
import { Iopject_Type } from '../../@types'

interface IdrawingInputElements {
    valuesForm: Iopject_Type,
    errors: Iopject_Type,
    handleChangeValue: (key: string, value: string) => void
}





export const DrawingFormElements = ({ valuesForm, handleChangeValue, errors }: IdrawingInputElements) =>
    Object.keys(valuesForm).map(key => typeof valuesForm[key] === 'object' ? <>
        <select className='input' value={valuesForm[key][2]}
            onChange={(e) => handleChangeValue(key, e.target.value)}>
            {valuesForm[key].map((val: string) => <option value={val}>{val}</option>)}
        </select>
    </> :
        <>
            <input
                className='input'
                value={valuesForm.value}
                type={key}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeValue(key, e.target.value)}
                placeholder={`your ${key}!`} />
            {errors[key] && <p className='error'>{errors[key]}</p>}

        </>)







const Form = ({ handleSubmit, childern }: { handleSubmit: (values: Iopject_Type) => void, childern: ReactElement }) => {
    return (
        <div className='form-Countainer'> 

        <form onSubmit={handleSubmit} className='form'>
                {childern}
        </form>
        </div>
    )
}

export default Form;
