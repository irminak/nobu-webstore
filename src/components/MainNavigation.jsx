import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
