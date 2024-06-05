const Badge = ({ category }) => {
    return (
        <div className='px-6 py-2 rounded-md bg-secondary text-font'>
            <p className='font-roboto text-sm'>{category}</p>
        </div>
    );
};

export default Badge;
