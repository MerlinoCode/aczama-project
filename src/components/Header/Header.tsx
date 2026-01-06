import './Header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <h1 className="logo"><a href="/">Teresa Aczama</a></h1>
                <nav className="nav">
                    <ul>
                        <li><a href="/about">Acerca de</a></li>
                        <li><a href="/about">Libros publicados</a></li>
                        <li><a href="/contact">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;