import Footer from "../components/Footer/Footer.tsx";
import Container from "react-bootstrap/Container";
import Content from "../components/Content/Content.tsx";
import Header from "../components/Header/Header.tsx";

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