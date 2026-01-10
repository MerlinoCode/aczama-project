import { useState } from 'react';
import './Header.scss';
import Menu from '../../assets/icons/Menu';
import XCross from '../../assets/icons/XCross';
import { NavLink } from 'react-router-dom';

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
                            <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/" className={({ isActive }) => (isActive ? "active-link" : "") }>Inicio</NavLink>
                            <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/biography" className={({ isActive }) => (isActive ? "active-link" : "") }>Biografía</NavLink>
                            <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/book" className={({ isActive }) => (isActive ? "active-link" : "") }>El Libro</NavLink>
                            <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/course" className={({ isActive }) => (isActive ? "active-link" : "") }>Curso</NavLink>
                            <NavLink onClick={() => { handleShowNavbar(); handleChangeIconMenu();}} to="/contact" className={({ isActive }) => (isActive ? "active-link" : "") }>Contacto</NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;