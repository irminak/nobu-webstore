import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const DrawerMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div
            className={`fixed bg-white opacity-90 w-4/6 sm:w-1/2 top-[70px] sm:top-[89px] right-0 h-screen transform transition-transform duration-300 z-10 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <ul className='uppercase list-none font-futura text-xl sm:text-4xl text-font text-center'>
                <li className='p-6 sm:p-10 border-b-2 border-primary'>
                    <NavLink
                        onClick={() => toggleMenu(false)}
                        to='/inspirations'
                        className={({ isActive }) => (isActive ? 'a' : 'b')}
                        end
                    >
                        Inspirations
                    </NavLink>
                </li>
                <li className='p-6 sm:p-10 border-b-2 border-primary'>
                    <NavLink
                        onClick={() => toggleMenu(false)}
                        to='/products'
                        className={({ isActive }) => (isActive ? 'a' : 'b')}
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
