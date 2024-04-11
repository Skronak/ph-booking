import './Header.css';
import {LocIcon} from "../../assets/Icons.tsx";
import {useTranslation} from "react-i18next";

const Header = () => {
  const [t] = useTranslation();

  return (
        <header>
            <div className='home-page'>
                <h1 className="banner-text banner-text-title">{t("banner.title")} <LocIcon/></h1>
            </div>
        </header>
    )
}

export default Header