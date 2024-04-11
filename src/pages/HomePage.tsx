import Footer from "../components/Footer/Footer.tsx";
import Main from "../components/Sections/Main.tsx";
import Header from "../components/Header/Header.tsx";
import "./homePage.css"
import Banner from "../components/Banner.tsx";

const HomePage = () => {
    return (
        <div className={"home home-container"}>
            <Banner/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default HomePage;