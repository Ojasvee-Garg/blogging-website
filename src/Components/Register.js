import "./Register.css"
import {Link} from 'react-router-dom'

export const Register = () => {
    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm'>
                <label>Username</label>
                <input className='registerInput' type='text' placeholder='Enter username'/>
                <label >Email</label>
                <input className='registerInput' type='email' placeholder='user@xyz.com'/>
                <label>Password</label>
                <input className='registerInput' type='password' placeholder='*****'/>
                <label>Confirm Password</label>
                <input className='registerInput' type='password' placeholder='*****'/>
                <button className='registerMainButton'>Register</button>
            </form>
            <button className='registerLoginButton'>
            <Link className='link' to='/login'>Login</Link>
            </button>
        </div>
    )
}