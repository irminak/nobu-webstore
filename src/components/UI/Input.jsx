const Input = ({ label, value, onChange, id, type, placeholder, onBlur }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={onChange}
                id={id}
                type={type}
                placeholder={placeholder}
                onBlur={onBlur}
            />
        </div>
    );
};

export default Input;
