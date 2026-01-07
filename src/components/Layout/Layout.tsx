import type { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss'

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
    <body id="layout">
        <Header />
            <main className="main-content">
                {children}
            </main>
        <Footer/>
    </body>
    );
};

export default Layout;