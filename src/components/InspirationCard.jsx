/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

const InspirationCard = ({ shape, text, link, bg, position }) => {
    return (
        <NavLink
            to={link}
            className='w-full cursor-pointer'
        >
            <div
                className={`bg-no-repeat bg-cover bg-center rounded-xl ${shape} ${bg}`}
            >
                <div
                    className={`p-4 w-full flex rounded-xl bg-[#2e2e2e30] ${shape} ${position}`}
                >
                    <h2 className='text-3xl font-medium text-silver font-futura lowercase'>
                        {text}
                    </h2>
                </div>
            </div>
        </NavLink>
    );
};

export default InspirationCard;
