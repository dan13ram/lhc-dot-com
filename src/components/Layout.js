import React, { useRef, useState, useLayoutEffect } from 'react';
import SEO from './SEO';
import Footer from './Footer';
import Navbar from './Navbar';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Layout = ({ children }) => {
    const { title } = useSiteMetadata();
    const [showTop, shouldShowTop] = useState(false);
    const pageRef = useRef(null);
    const footerRef = useRef(null);
    useLayoutEffect(() => {
        function updateFooter() {
            const mainHeight =
                pageRef.current.offsetHeight + footerRef.current.offsetHeight;
            if (window.innerHeight < mainHeight) {
                shouldShowTop(true);
            } else {
                shouldShowTop(false);
            }
        }
        window.addEventListener('resize', updateFooter);
        updateFooter();
        return () => window.removeEventListener('resize', updateFooter);
    }, [children]);

    return (
        <div className="layout">
            <SEO title={title} titleTemplate={title} />
            <Navbar title={title} />
            <main className="main">
                <div className="pageContainer" id="top" ref={pageRef}>
                    {children}
                </div>
                <Footer title={title} showTop={showTop} setRef={footerRef} />
            </main>
        </div>
    );
};

export default Layout;
