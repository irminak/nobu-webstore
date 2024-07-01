import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='px-4 py-8 bg-primary text-silver'>
            <div className='py-4 text-center'>
                <NavLink to='/'>
                    <h1 className='font-tan text-2xl sm:text-4xl'>NOBU</h1>
                </NavLink>
            </div>
            <div className='py-4 flex gap-4 sm:gap-8 text-3xl sm:text-4xl'>
                <a
                    href=''
                    id=''
                >
                    <FaFacebook />
                </a>
                <a
                    href=''
                    id=''
                >
                    <FaInstagram />
                </a>
                <a
                    href=''
                    id=''
                >
                    <FaTiktok />
                </a>
            </div>
            <div className='py-4 sm:py-8 font-roboto uppercase font-light sm:text-2xl'>
                <ul className='flex flex-col gap-4 sm:gap-8'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/inspirations'>Inspirations</Link>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </div>
            <div className='py-4 text-center font-roboto text-xs sm:text-lg'>
                <p>© 2024 NOBU. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
