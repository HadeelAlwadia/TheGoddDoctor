
interface Icard{
  img:string,data:Record<string,string>,actions:Record<string,()=>{}>
}
const Card = ({img,data,actions}:Icard) => {
  return (
    <section>
        {img&&<img src={img}/>}
        {Object.values(data).map((item,index)=><p key={(index)}>item</p>)}
    </section>
  )
}

export default Card
