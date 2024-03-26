import './HeaderMain.css';
import Header from "./Header/Header.tsx";
import Container from 'react-bootstrap/esm/Container';
import Content from "../Content/Content.tsx";

const HeaderMain = () => {
  return (
    <div className='h_main'>
      <Container>
      <Header/>
      <Content/>
      </Container>
    </div>
  )
}

export default HeaderMain