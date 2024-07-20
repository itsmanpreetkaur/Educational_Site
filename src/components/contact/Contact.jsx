import React from "react"
import emailjs from "emailjs-com"
import Back from "../common/back/Back"
import "./Contact.css"
import Footer from "../common/footer/Footer"
const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.1306633094327!2d75.88886227432155!3d31.52057104713444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ae2def7777747%3A0xebe6207b9f0cd6da!2sI.K.Gujral%20Punjab%20Technical%20University%20Campus%20Hoshiarpur!5e0!3m2!1sen!2sin!4v1698744778521!5m2!1sen!2sin'
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_kcvja6q','template_kk2sy7o', e.target , 'eH27Xj2AmeVZkJIwS');
  }
  return (
    <>
    
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe title = "map" src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>IK Gujral Punjab Technical University , Hoshiarpur Campus</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>givethemwings@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91-1234567810</p>
              </div>
            </div>
         
            <form onSubmit={sendEmail}>
              <div className='flexSB'>
                <input type='text' name = 'username' placeholder='Name' autoComplete="off" required />
              </div>
              <input type='email' name ='Email' placeholder='Email' autoComplete="off"  required />
              <textarea placeholder="Create a message here..." name= 'message' cols='30' rows='10'  autoComplete="off"  required>
              </textarea>
              <button  type="submit" className= "primary-btn">Submit</button>
            </form>

            <h3>Follow us here</h3>
            <span>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
