import Home from "./pages/Home.tsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    )
}

export default App