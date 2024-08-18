import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='px-4 lg:px-24 py-8 lg:pt-16 bg-primary text-silver'>
            <div className='py-4 text-center'>
                <NavLink to='/'>
                    <h1 className='font-tan text-2xl sm:text-4xl'>NOBU</h1>
                </NavLink>
            </div>
            <div className='py-4 lg:py-12 flex gap-4 sm:gap-8 text-3xl sm:text-4xl lg:justify-center'>
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
            <div className='py-4 sm:py-8 font-roboto uppercase font-light sm:text-2xl lg:text-lg'>
                <ul className='flex flex-col lg:flex-row gap-4 sm:gap-8 lg:justify-evenly'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hidden lg:block'>
                        <p>|</p>
                    </li>
                    <li>
                        <Link to='/inspirations'>Inspirations</Link>
                    </li>
                    <li className='hidden lg:block'>
                        <p>|</p>
                    </li>
                    <li>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </div>
            <div className='py-4 lg:pt-20 text-center font-roboto text-xs sm:text-lg lg:text-sm'>
                <p>© 2024 NOBU. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
