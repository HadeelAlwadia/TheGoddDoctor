interface Itypography{
  size?:string,
  name:string
}
const Typography = ({size,name}:Itypography) => {
  return (
    <p style={{fontSize:size}}>  
     {name} 
    </p>
  )
}

export default Typography
