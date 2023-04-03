import "./BlogPage.css"
import { SideBar } from "./SideBar"
import { BlogPost } from "./BlogPost"

export const BlogPage = () => {
    return(
        <div className='blog-page'>
            <BlogPost />
            <SideBar />
        </div>
    )
}