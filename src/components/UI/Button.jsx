const Button = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            type='submit'
            className='flex w-full items-center justify-center rounded-md border border-transparent bg-contrast px-8 py-3 text-lg font-futura uppercase font-normal text-white hover:bg-[#F2A602] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
            Add to cart
        </button>
    );
};

export default Button;
