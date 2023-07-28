import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input type="text" placeholder='Enter Your Username...'/>
            <label>Email</label>
            <input type="email" placeholder='Enter Your Email...'/>
            <label>Password</label>
            <input type="password" placeholder='Password'/>
            <button className='registerButton'>Register</button>
        </form>
        <button className='registerLogButton'>
        <Link className='link' to="/login">Login</Link>
        </button>
    </div>
  )
}
