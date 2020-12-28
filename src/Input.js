function Input({className, onChange, placeholder, value, name, type}) {
    return (
        <div className={className}>
            <input onChange={(event) => onChange(event.target.value)} type={type} className='input'
                   placeholder={placeholder} value={value} name={name}/>
        </div>
    );
}

export default Input;
