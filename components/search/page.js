const SearchBar = ({className, type, placeholder}) => {

    return (
        <input className={className} type={type} placeholder={placeholder}/>
    );
}

export default SearchBar;