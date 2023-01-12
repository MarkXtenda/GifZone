function Header() {
  
    return (
        <header>
        <form onChange={(e) => handleChange(e)}>
          <input name="search" onChange={(e) => { handleChange(e)}} ></input>
          <select name = "rating" onChange={(e) => { handleChange(e)}}>
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
          </select>
        </form>
      </header>
    );
  }
  
  export default Header;