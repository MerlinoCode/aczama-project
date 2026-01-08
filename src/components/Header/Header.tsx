import { useState } from 'react';
import './Header.scss';
import Menu from '../../assets/icons/Menu';
import XCross from '../../assets/icons/XCross';

const Header: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [changeIconMenu, setChangeIconMenu] = useState(true)

    const handleShowNavbar = () => { setShowNavbar(!showNavbar) }
    const handleChangeIconMenu = () => { setChangeIconMenu(!changeIconMenu) }
    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-container">
                    <div className="menu-icon" onClick={() => { handleShowNavbar(); handleChangeIconMenu(); }}>
                        {
                            changeIconMenu ? <Menu w={90} h={90} /> : <XCross />
                        }
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li><a>Inicio</a></li>
                            <li><a>Biografía</a></li>
                            <li><a>El Libro</a></li>
                            <li><a>Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;