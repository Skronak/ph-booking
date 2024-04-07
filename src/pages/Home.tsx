import Footer from "../components/Footer/Footer.tsx";
import Main from "../components/Content/Main.tsx";
import Header from "../components/Header/Header.tsx";
import "./home.css"
import Banner from "../components/Banner.tsx";

const Home = () => {
    return (
        <div className={"home home-container"}>
            <Banner/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home