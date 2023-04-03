import "./BlogPost.css"

export const BlogPost = () => {
    return(
        <div className='blog-post'>
            <div className='post-wrapper'>
                <img className='blogImg'
                src='https://media.istockphoto.com/id/905689602/photo/vintage-old-office.jpg?b=1&s=170667a&w=0&k=20&c=DEyx7JJb5UOcJlNeF-QZh7VGsFYfqD3hO9Uk0W2-G2g='
                alt='old desktop, phone, calculator and papers on a table'/>
            <h1 className='post-title'>
                This is the blog title
                <div className='post-edit'>
                <i className="post-icons fa-solid fa-pen-to-square"></i>
                <i className="post-icons fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className='post-personal-info'>
                <span className='post-author'>Author: <b>Big Hero 6</b></span>
                <span className='post-date'> 1 hour ago</span>
                </div>
                <p className='post-desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
}