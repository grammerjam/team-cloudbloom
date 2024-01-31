import "./home.css"
import Navbar from "../../components/Navbar/Navbar"
import Form from "../../components/Form/Form"

export default function Home() {
    return(
        <>
            <img src="/images/bg-main-desktop.png" alt="background-desktop" />
            <Navbar/>
            <Form />
        </>
    )
}