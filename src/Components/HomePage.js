import "./HomePage.css"
import {Header} from "./Header.js"
import { SideBar } from "./SideBar.js"
import { Posts } from "./Posts.js"

export const HomePage = () => {
    return (
        <>
        <Header />
        <div className='homepage'>
        <Posts />
        <SideBar />
        </div>
        </>
    )
}