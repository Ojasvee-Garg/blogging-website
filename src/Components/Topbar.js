import "./Topbar.css"
import {Link} from 'react-router-dom'

export const Topbar = () => {
    const user = true;
    return (
        <div className='top'>
            <div className='top-left'>
            <i className="top-icon fa-brands fa-facebook"/>
            <i className="top-icon fa-brands fa-twitter"></i>
            <i className="top-icon fa-brands fa-instagram"></i>
            <i className="top-icon fa-brands fa-telegram"></i>
            </div>

            <div className='top-center'>
                <ul className='top-list'>
                    <li className='top-item'>
                        <Link className='link' to='/'>Home</Link>
                    </li>
                    <li className='top-item'>
                    <Link className='link' to='/'>About</Link>
                    </li>
                    <li className='top-item'>
                    <Link className='link' to='/write'>Write</Link>
                    </li>
                    <li className='top-item'>
                    <Link className='link' to='/'>Contact</Link>
                    </li>
                    <li className='top-item'>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>

            <div className='top-right'>
                { user ? (
                    <img className='top-img' src='https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1438704698248-TWKUDI932Y2VXOXNAUCJ/Writing.jpg' alt='ink pen writing on a paper'/>
                ) : (
                    <ul className='top-list'>
                    <li className='top-item'>
                    <Link className='link' to='/login'>Login</Link>
                    </li>
                    <li className='top-item'>
                    <Link className='link' to='/register'>Register</Link>
                    </li>
                    </ul>
                )}
                <i className="top-search fa-solid fa-magnifying-glass" />
            </div>
        </div>
    )
}