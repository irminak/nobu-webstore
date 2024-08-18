/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { backgroundImages } from '../data/headers';

const InspirationCard = ({
    width,
    shape,
    text,
    category,
    bg,
    position,
    color,
}) => {
    const backgroundImage = backgroundImages[bg] || null;
    const linkPath = category ? `/products/category/${category}` : '/products';

    return (
        <Link
            to={linkPath}
            className={`group w-full cursor-pointer ${width} `}
        >
            <div
                className={`bg-no-repeat bg-cover bg-center rounded-xl ${shape} ${
                    !backgroundImage && `bg-${color} `
                }`}
                style={backgroundImage ? { backgroundImage } : {}}
            >
                <div
                    className={`p-4 sm:p-8 w-full flex rounded-xl bg-[#2e2e2e30] lg:hover:bg-[#2e2e2e00]  ${shape} ${position}`}
                >
                    <h2 className='text-3xl sm:text-6xl lg:text-5xl font-medium text-silver font-futura lowercase'>
                        {text}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default InspirationCard;
