interface Iuser_Auth{

}
interface Iapp_State{
    theme:'light'|'dark',
    dispatch:(action:Iaction)=>void

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
Iopject_Type
}