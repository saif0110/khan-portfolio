
import './Header.css'
import Navbar from './Navbar.js';
import { useEffect, useState } from 'react';
export const Header = () => {

    const [open, setOpen] = useState(false);
    // const screen = window.innerWidth <= 768;
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        checkScreenSize(); // Call it initially to set the correct state
        window.addEventListener('resize', checkScreenSize); // Listen for window resize events

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const handleDrawer = () => {
        setOpen(prev => !prev);
    }
    return (
        <div className='headerContainer' >
            <div className='header'>
                <div className='logo-container'>
                    <div className='logo'>
                        <div id='pin'></div>
                        <div className='name'>TK</div>
                    </div>
                </div>
                {
                    isSmallScreen ? (
                        <>
                            <div className='drawer' hidden={!open}>
                                <Navbar />
                            </div>
                            <div className='menu-icon' onClick={handleDrawer}>
                                <div className='menu-line'></div>
                                <div className='menu-line'></div>
                                <div className='menu-line'></div>
                            </div>
                        </>
                    ) : (
                        <Navbar />
                    )
                }

            </div>
        </div>
    )
}