// import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';
import DrawerMenu from './DrawerMenu';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    const toggleMenu = (state) => {
        setMenuIsActive(state);
    };

    return (
        <>
            <section className='h-[70px] bg-white border-b-2  border-b-primary w-screen flex fixed items-center justify-between px-2 z-10'>
                <NavLink
                    to='/'
                    onClick={() => setMenuIsActive(false)}
                >
                    <img
                        className='h-[60px]'
                        src={logo}
                        alt='logo'
                    />
                </NavLink>
                <div
                    className='text-3xl text-font cursor-pointer'
                    onClick={() => setMenuIsActive(!menuIsActive)}
                >
                    <FiMenu />
                </div>
            </section>
            <DrawerMenu
                isOpen={menuIsActive}
                toggleMenu={toggleMenu}
            />
        </>
    );
};

export default MainNavigation;
