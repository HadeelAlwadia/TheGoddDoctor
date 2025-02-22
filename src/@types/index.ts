interface Iuser_Auth{

}
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
type objectType =Record<string,string|number>

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
    type:any,
    payload?:any
}
type Iopject_Type=Record<string,any>

export type {
Iuser_Auth,
Iapp_State,
Iaction,
Iopject_Type,
Iappointment,
Ipatient,
objectType
}