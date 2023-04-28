import "./search-box-styles.css";

const SearchBox = ({className,onSearchChange,placeholder}) => {
        return(
        <input
            className= {`search-box ${className}`}
            type = "search"
            onChange={onSearchChange}
            placeholder={placeholder} />
        )
}

export default SearchBox;