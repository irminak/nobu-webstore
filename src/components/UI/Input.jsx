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
    errorInputClass,
}) => {
    const inputClass =
        errors && touched
            ? 'border-2 border-[#E0E0E0] w-full p-2 sm:p-4 rounded-md sm:rounded-xl text-md sm:text-xl  outline-none border-[#E3170A] hover:border-contrast'
            : 'border-2 border-[#E0E0E0] w-full p-2 sm:p-4 rounded-md sm:rounded-xl text-md sm:text-xl outline-none hover:border-contrast hover:border-3 focus:border-contrast';
    return (
        <div className={`my-4 flex flex-col gap-1 sm:gap-4 ${className}`}>
            <label
                htmlFor={id}
                className='text-md sm:text-xl font-medium '
            >
                {label}
            </label>
            <input
                className={inputClass}
                value={value}
                onChange={onChange}
                id={id}
                type={type}
                placeholder={placeholder}
                onBlur={onBlur}
            />
            {errors && touched && (
                <p className='text-xs sm:text-base text-[#E3170A]'>{errors}</p>
            )}
        </div>
    );
};

export default Input;
