
interface Iappointment{
id:string,
fullName: string,
name:string,
age:number,
gander:string,
mobileNumber:string,
date:string,
time:string,
status:'panding'|'completed'|'confirmed'


}

interface Iapp_State{
    theme:'light'|'dark',
    appointments:Ipatient[],
    targetPatient:Ipatient,
    dispatch:(action:Iaction)=>void
}

interface Ipatient{
    id:string,
    appointments:Iappointment[]
}


interface Iaction{
    type:string,
    payload?:any
}
type Iopject_Type=Record<string,any>

export type {
Iapp_State,
Iaction,
Iopject_Type,
Iappointment,
Ipatient,
}