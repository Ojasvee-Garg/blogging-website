import "./Topbar.css"

export const Topbar = () => {
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
                    <li className='top-item'>Home</li>
                    <li className='top-item'>About</li>
                    <li className='top-item'>Write</li>
                    <li className='top-item'>Contact</li>
                    <li className='top-item'>Logout</li>
                </ul>
            </div>

            <div className='top-right'>
                <img className='top-img' src='https://images.squarespace-cdn.com/content/v1/537cad0be4b02cb9fe04985f/1438704698248-TWKUDI932Y2VXOXNAUCJ/Writing.jpg' alt='ink pen writing on a paper'></img>
                <i className="top-search fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}