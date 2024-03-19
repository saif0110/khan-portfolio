import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'} className={({ isActive, isPending }) => {
                            return isActive ? 'active' : 'pending'
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'about'} className={({ isActive, isPending }) => {
                            return isActive ? 'active' : 'pending'
                        }}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'skills'} className={({ isActive, isPending }) => {
                            return isActive ? 'active' : 'pending'
                        }}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to={'education'} className={({ isActive, isPending }) => {
                            return isActive ? 'active' : 'pending'
                        }}>Education</NavLink>
                    </li>
                    <li>
                        <NavLink to={'work'} className={({ isActive, isPending }) => {
                            return isActive ? 'active' : 'pending'
                        }}>Work</NavLink>
                    </li>
                    <li>
                        <NavLink to={'contact'} className={({ isActive, isPending }) => {
                            return isActive ? 'active' : 'pending'
                        }}>Contact</NavLink>
                    </li>
                    <li>
                        <button id='subscribe' onClick={() => {
                            navigate('subscribe')
                        }}>Subscribe</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;