const SearchBar = ({className, type, placeholder}) => {

    return (
        <input class={className} type={type} placeholder={placeholder}/>
    );
}

export default SearchBar;