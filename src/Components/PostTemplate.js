import "./PostTemplate.css"

export const PostTemplate = () => {
    return (
        <div className="post">
          <img className='postImg'
            src='https://media.istockphoto.com/id/905689602/photo/vintage-old-office.jpg?b=1&s=170667a&w=0&k=20&c=DEyx7JJb5UOcJlNeF-QZh7VGsFYfqD3hO9Uk0W2-G2g='
            alt='old desktop, phone, calculator and papers on a table'/>
          <div className="post-info">
            <div>
              <span className="post-category">
                  Computers
              </span>
              <span className="post-category">
                  Laptops
              </span>
            </div>
            <span className="post-title">
                Lorem ipsum dolor sit amet
            </span>
            <hr />
            <span className="post-date">1 hour ago</span>
          </div>
          <p className="post-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
          </p>
        </div>
      );
}