import Footer from "../components/Footer/Footer.tsx";
import Container from "react-bootstrap/Container";
import Content from "../components/Content/Content.tsx";
import Header from "../components/Header/Header.tsx";
import "./home.css"

const Home = () => {
    return (
        <>
            <Header/>
            <Container fluid="md">
                <Content/>
            </Container>
            <Footer/>
        </>
    )
}

export default Home