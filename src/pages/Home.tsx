import Footer from "../components/Footer/Footer.tsx";
import Container from "react-bootstrap/Container";
import Header from "../components/HeaderMain/Header/Header.tsx";
import Content from "../components/Content/Content.tsx";

const Home = () => {
  return (
    <div>
      <Container>
        <Header/>
        <Content/>
        <Footer/>
      </Container>
    </div>
  )
}

export default Home