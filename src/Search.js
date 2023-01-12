function Search({search, rating}) {
    if (search.length > 0) {
        return (
            <section>
                Search
                <p>{search}</p>
                <p>{rating}</p>
            </section>
        );
    } else {
        return (
            <section>
            </section>
        );
    }
  }
  
  export default Search;