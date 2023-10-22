import React from "react"
// import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1> GIVE THEM WINGS</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Keep Growing and Keep Learning!!!!</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3> &nbsp; &nbsp; &nbsp; Explore</h3>
            <ul>
              <li><i class="fa fa-home"></i> Home</li>
              <li><i class="fa-solid fa-code"></i> About</li>
              <li><i class='fas fa-book-open'></i> Resources</li>
              <li><i class="material-icons">&#xe7fe;</i> Contact us</li>
            </ul>
          </div>
          <div className='box link'>
          <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                {/* <i className='fa fa-map-marker'></i> */}
                Roop Nagar, Hoshiarpur, Punjab
              </li>
              <li>
                {/* <i className='fa fa-phone-alt'></i> */}
                +91-1234567810
              </li>
              <li>givethemwings@gmail.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer