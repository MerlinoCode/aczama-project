import type { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss'

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
    <section id="layout">
            <Header />
                <main className="main-content">
                    {children}
                </main>
            <Footer/>
    </section>
    );
};

export default Layout;