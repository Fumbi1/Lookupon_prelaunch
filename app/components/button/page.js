const Button = ({value, className, onClick}) => {
    return (
        <button class={className} onClick={onClick}>{value}</button>
    );
}

export default Button;