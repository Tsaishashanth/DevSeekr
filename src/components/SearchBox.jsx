 function SearchBox({
    //destructing the props objects  
    query, 
    setQuery,
    handleSearch,
 }) {
    return (
        <div className="search">
            <div className="type">
                <input
                type="text"
                placeholder="Search Questions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                //onchange(event handler)=> updated the value everytime when user clicks
                />
            </div>

            <div className="button">
                <button onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    );
 }

 export default SearchBox;