// import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoClose, IoCartOutline } from 'react-icons/io5';
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
            <section className='px-4 h-[70px] w-screen fixed flex items-center justify-between bg-[#ffffffee] z-10'>
                <NavLink
                    to='/'
                    onClick={() => setMenuIsActive(false)}
                >
                    <h1 className='relative top-1 font-tan text-font text-2xl'>
                        NOBU
                    </h1>
                </NavLink>
                <div className='flex gap-4 text-3xl text-font'>
                    <div
                        className='cursor-pointer'
                        onClick={() => setMenuIsActive(!menuIsActive)}
                    >
                        {menuIsActive ? <IoClose /> : <FiMenu />}
                    </div>
                    <NavLink
                        to='/cart'
                        className='cursor-pointer'
                    >
                        <IoCartOutline />
                    </NavLink>
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
