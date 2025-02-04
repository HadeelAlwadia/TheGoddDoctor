interface Iuser_Auth{

}
interface Iapp_State{

}
interface Iaction{
    type:any,
    payload?:any
}
export type {
Iuser_Auth,
Iapp_State,
Iaction
}