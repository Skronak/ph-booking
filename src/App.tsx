import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PaiementPage from "./pages/PaiementPage.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/paiement" element={<PaiementPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App