import "./Header.css"

export const Header = () => {
    return(
        <div className='header'>
            <div className='header-titles'>
                <span className='header-title-small'>React Js</span>
                <span className='header-title-large'>Blog</span>
            </div>
            <img className='headerImg' src='https://wallpapers.com/images/featured/17qc5hleao79zezt.jpg'
             alt='Vector image of a phone and speaker on a plain background'></img>
        </div>
    )
}