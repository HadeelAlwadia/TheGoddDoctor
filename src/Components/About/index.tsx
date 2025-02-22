import './About.css'
import aboutDoctor from '../../assets/about-doctor.png'
const About = () => {
  return (
    <section className='about-section sm-screen-countainer'>
        <img src={aboutDoctor} width={'100%'} height={'100%'}/>
        <section className='about-info'>
        <section >
         <h2>About Our Treatments
         </h2>
         <p>Great doctor if you need your family member to get effective immediate assistance, examination, emergency treatment or a simple consultation. Thank you.

         </p>
         <p>
         The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.

         </p>
         <a href='' className='link-as-btn'>read more</a>
     </section>
       
        </section>
      
       
    </section>
          
  )
}

export default About
