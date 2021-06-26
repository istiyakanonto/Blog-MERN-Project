import "./Home.css"
import Header from "../../Header/Header"
import Sidebar from "../../Sidebar/Sidebar"
import Posts from "../../Posts/Posts"
export default function Home() {
    return (
        <>
        <Header></Header>
        <div className="home">
        <Posts></Posts>
            <Sidebar></Sidebar>
           
            
        </div>
        </>
    )
}
