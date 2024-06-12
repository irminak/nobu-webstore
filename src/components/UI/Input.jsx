const Input = ({
    label,
    value,
    onChange,
    id,
    type,
    placeholder,
    onBlur,
    errors,
    touched,
    className,
}) => {
    return (
        <div className={`my-4 flex flex-col gap-1 ${className}`}>
            <label
                htmlFor={id}
                className='text-md font-medium'
            >
                {label}
            </label>
            <input
                className='border-2 border-[#E0E0E0] w-full p-2 rounded-md text-md outline-none'
                value={value}
                onChange={onChange}
                id={id}
                type={type}
                placeholder={placeholder}
                onBlur={onBlur}
            />
            {errors && touched && <p className='text-xs'>{errors}</p>}
        </div>
    );
};

export default Input;
