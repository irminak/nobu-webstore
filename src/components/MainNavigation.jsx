// import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoClose, IoCartOutline } from 'react-icons/io5';
import { useContext, useState } from 'react';
import DrawerMenu from './DrawerMenu';
import { NavLink } from 'react-router-dom';
import CartContext from '../store/CartContext';

const MainNavigation = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const { items } = useContext(CartContext);

    const toggleMenu = (state) => {
        setMenuIsActive(state);
    };

    return (
        <>
            <section className='px-4 sm:px-8 h-[70px] sm:h-[90px] w-screen fixed flex items-center justify-between bg-[#ffffffee] z-10'>
                <NavLink
                    to='/'
                    onClick={() => setMenuIsActive(false)}
                >
                    <h1 className='relative top-1 font-tan text-font text-2xl sm:text-4xl'>
                        NOBU
                    </h1>
                </NavLink>
                <div className='flex gap-4 sm:gap-8 text-3xl sm:text-4xl text-font'>
                    <div
                        className='cursor-pointer'
                        onClick={() => setMenuIsActive(!menuIsActive)}
                    >
                        {menuIsActive ? <IoClose /> : <FiMenu />}
                    </div>

                    <NavLink
                        to='/cart'
                        className='cursor-pointer relative'
                    >
                        <IoCartOutline />
                        {items.length !== 0 && items.length < 10 ? (
                            <div className=' bg-contrast w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] absolute rounded-full -top-1 -right-1 flex items-center justify-center'>
                                <p className='text-font font-roboto text-[10px] sm:text-[12px] leading-[18px] sm:leading-[20pxpx]'>
                                    {items.length}
                                </p>
                            </div>
                        ) : (
                            items.length !== 0 &&
                            items.length > 9 && (
                                <div className=' bg-contrast w-[16px] h-[16px] absolute rounded-full -top-1 -right-1 flex items-center justify-center'>
                                    <p className='text-font font-roboto text-[10px] leading-[18px]'>
                                        9+
                                    </p>
                                </div>
                            )
                        )}
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
