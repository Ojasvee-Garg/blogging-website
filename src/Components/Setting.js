import "./Setting.css"
import { SideBar } from "./SideBar"

export const Setting = () => {
    return(
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <div className='settingsUpdateTitle'>Update Your Account</div>
                    <div className='settingsDeleteTitle'>Delete Account</div>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className='settingsProfilePic'>
                        <img
                        src='https://media.istockphoto.com/id/905689602/photo/vintage-old-office.jpg?b=1&s=170667a&w=0&k=20&c=DEyx7JJb5UOcJlNeF-QZh7VGsFYfqD3hO9Uk0W2-G2g='
                        alt='old desktop, phone, calculator and papers on a table'
                        />
                        <label htmlFor="fileInput">
                        <i className=" settingsProfilePicIcon fa-solid fa-user-pen"/>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Your Name'/>
                    <label>Email</label>
                    <input type='email' placeholder='email@xyz.com'/>
                    <label>Password</label>
                    <input type='password'/>
                    <label>Confirm Password</label>
                    <input type='password'/>
                    <button className='settingsUpdate'>Update</button>
                </form>
            </div>
            <SideBar />
        
        </div>
    )
}