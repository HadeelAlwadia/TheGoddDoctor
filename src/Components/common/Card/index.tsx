
const Card = ({img,data,action}) => {
  return (
    <section>
        {img&&<img src={img}/>}
        {Object.values(data).map(item=><p>item</p>)}
    </section>
  )
}

export default Card
