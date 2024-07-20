import React from "react"
import Heading from "../../common/heading/Heading";
import "./Hero.css"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO OUR PLATFORM' title='Best Online Education Expertise' />
            <p>“The earlier you start working on something, the earlier you will see results.”</p>
            <div className='button'>
            <Link to ="/resources">
            <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </Link>
              <button >
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero