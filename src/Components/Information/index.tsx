import React from 'react'
import Card from '../common/Card'
import doctors from '../../assets/doctors1.jpg'
const Information = () => {
  return (
    <section style={{background:''}}>
      <img src={doctors} />
      <section >
{        [{},{},{}].map(item=><Card img={''} data={{name:''}} action={''}/>)
}      </section>
    </section>
  )
}

export default Information
