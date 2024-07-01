/* eslint-disable react/prop-types */
const Button = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            type='submit'
            className='flex w-full items-center justify-center rounded-md sm:rounded-xl border border-transparent bg-contrast px-8 py-3 sm:py-6 text-lg sm:text-3xl font-futura uppercase font-normal text-white hover:bg-[#F2A602] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
            {text}
        </button>
    );
};

export default Button;
