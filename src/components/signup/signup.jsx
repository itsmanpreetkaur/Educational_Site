import React from 'react'
import Back from "../common/back/Back";
import Footer from "../common/footer/Footer"
import "./signup.css";
import checklist from "./Checklist.jpg";
const signup = () => {
  return (
    <>
      <Back title="Let's start your journey" />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          <img src={checklist} alt=" " />
          </div>
          <div className='right row'>
           <h1>Begin your journey!!</h1>
             <form>
              <div className='flexSB'>
                <input type='text' name = 'username' placeholder='Enter your Name' autoComplete="off" required />
              </div>
              <input type='email' name ='Email' placeholder='Enter your email' autoComplete="off"  required />
              <input type='password' name ='Password' placeholder='Enter your password' autoComplete="off"  required />
              <button  type="submit" className=" primary-btn">Create account</button>
            </form>

          </div>
        </div>
      </section>
      <Footer /> 
    </>
  )
}

export default signup
