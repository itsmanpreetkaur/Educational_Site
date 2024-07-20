import React from 'react'

const login = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary '>
    <div className='40-'>
    <form>
        <h3>Sign in</h3>
        <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter your email'  className='form-control'/>
        </div>
        <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter your Password'  className='form-control'/>
        </div>
        <div className='mb-2'>
            <input type='checkbox' className='custom control custom-checkbox' id='check' />
            <label htmlFor='check' className='custom-input-label'>
                Remember me
            </label>
        </div>
        <div className='d-grid'>
            <button className='btn btn-primary'>Sign in</button>
        </div>
    </form>
    </div>
    
      
    </div>
  )
}

export default login
