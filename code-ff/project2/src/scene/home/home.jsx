import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Form from "../../components/Form/Form"

export default function Home() {
    return(
        <>
            <div className="home-page">
                <img src="/images/bg-main-desktop.png" alt="background-desktop" />
                <div className="content">
                    <Navbar/>
                    <Form />
                </div>
            </div>
        </>
    )
}