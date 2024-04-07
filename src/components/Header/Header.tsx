import './Header.css';
import {LocIcon} from "../../assets/Icons.tsx";

const Header = () => {
    return (
        <header>
            <div className='home-page'>
{/*
                <h1 className="banner-text">Cocoon Vuez Home</h1>
*/}
                <h1 className="banner-text banner-text-title">Your new home in El Nido <LocIcon/></h1>
            </div>
        </header>
    )
}

export default Header