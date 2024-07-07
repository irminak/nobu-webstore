import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const DrawerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div
            className={`fixed bg-white lg:bg-transparent opacity-90  w-4/6 sm:w-1/2 lg:w-auto right-0 top-[70px] sm:top-[89px] lg:top-0 lg:left-[200px] lg:right-[200px] h-screen lg:h-[90px] transform transition-transform duration-300 z-10 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <ul className='uppercase lg:flex lg:items-center lg:h-[90px] list-none font-futura text-xl sm:text-4xl lg:text-xl text-font text-center'>
                <li className='p-6 sm:p-10 border-b-2 lg:border-none border-primary'>
                    <NavLink
                        onClick={() => toggleMenu(false)}
                        to='/inspirations'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary duration-300 hover:text-contrast'
                                : 'text-font duration-300 hover:text-contrast'
                        }
                        end
                    >
                        Inspirations
                    </NavLink>
                </li>
                <li className='p-6 sm:p-10 border-b-2 lg:border-none border-primary'>
                    <NavLink
                        onClick={() => toggleMenu(false)}
                        to='/products'
                        className={({ isActive }) =>
                            isActive
                                ? 'text-primary duration-300 hover:text-contrast '
                                : 'text-font duration-300 hover:text-contrast '
                        }
                        end
                    >
                        Products
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default DrawerMenu;
