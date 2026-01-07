import { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo"><a href="/">Teresa Aczama</a></h1>
                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/about">Acerca de</a></li>
                        <li><a href="/about">Libros publicados</a></li>
                        <li><a href="/contact">Contacto</a></li>
                    </ul>
                </nav>
                <button className={`header__toggle ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;