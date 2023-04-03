import "./SideBar.css"

export const SideBar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar-items'>
                <span className='sidebar-title'>About Me!</span>
                <img className='sidebarImg' src='https://media.istockphoto.com/id/519589235/vector/vintage-style-technology.jpg?s=612x612&w=0&k=20&c=hAu5UlYLCICBRYiEogaYpdjQRW3H4MSaoLu6imr6b-g=' 
                alt='Chanel perfume, vintage tea-cup, pearl necklace on a table'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                </div>
                <div className='sidebar-items'>
                <span className='sidebar-title'>Categories</span>
                <ul className='sidebar-list'>
                    <li className='sidebar-list-item'>Tech</li>
                    <li className='sidebar-list-item'>Luxury</li>
                    <li className='sidebar-list-item'>Music</li>
                    <li className='sidebar-list-item'>Reviews</li>
                    <li className='sidebar-list-item'>Finance</li>
                    <li className='sidebar-list-item'>Health</li>
                </ul>
                </div>
                <div className='sidebar-items'>
                <span className='sidebar-title'>Follow Me!</span>
                <div className='sidebar-social'>
                    <i className="sidebar-social-item fa-brands fa-facebook"/>
                    <i className="sidebar-social-item fa-brands fa-twitter"></i>
                    <i className="sidebar-social-item fa-brands fa-instagram"></i>
                    <i className="sidebar-social-item fa-brands fa-telegram"></i>
            </div>
                </div>
            
        </div>
    )
}