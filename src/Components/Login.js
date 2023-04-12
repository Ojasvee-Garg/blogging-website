import "./Login.css"
import {Link} from 'react-router-dom'

export const Login = () => {
    return (
        <div className='login'>
            <span className='loginTitle'>LOGIN</span>
            <form className='loginForm'>
                <label >Email</label>
                <input className='loginInput' type='email' placeholder='user@xyz.com'/>
                <label>Password</label>
                <input className='loginInput' type='password'/>
                <button className='loginButton'>LOGIN</button>
            </form>
            <button className='registerButton'>
            <Link className='link' to='/register'>Register</Link>
            </button>
        </div>
    )
}