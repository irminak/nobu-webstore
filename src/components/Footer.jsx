import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='px-4 lg:px-[300px] xl:px-[400px] 2xl:px-[600px] py-8 lg:pt-16 bg-primary text-silver '>
            <div className='py-4 text-center'>
                <NavLink to='/'>
                    <h1 className='font-tan text-2xl sm:text-4xl'>NOBU</h1>
                </NavLink>
            </div>
            <div className='py-4 lg:py-12 flex gap-4 sm:gap-8 text-3xl sm:text-4xl lg:justify-center'>
                <a
                    className='hover:text-[#ccc] duration-300'
                    href=''
                    id=''
                >
                    <FaFacebook />
                </a>
                <a
                    className='hover:text-[#ccc] duration-300'
                    href=''
                    id=''
                >
                    <FaInstagram />
                </a>
                <a
                    className='hover:text-[#ccc] duration-300'
                    href=''
                    id=''
                >
                    <FaTiktok />
                </a>
            </div>
            <div className='py-4 sm:py-8 font-roboto uppercase font-light sm:text-2xl lg:text-lg'>
                <ul className='flex flex-col lg:flex-row gap-4 sm:gap-8 lg:justify-evenly'>
                    <li className='hover:text-[#ccc] duration-300'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='hidden lg:block'>
                        <p>|</p>
                    </li>
                    <li className='hover:text-[#ccc] duration-300'>
                        <Link to='/inspirations'>Inspirations</Link>
                    </li>
                    <li className='hidden lg:block'>
                        <p>|</p>
                    </li>
                    <li className='hover:text-[#ccc] duration-300'>
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
