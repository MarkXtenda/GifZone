function Header({search, rating, data, handleChange, handleSubmit}) {
    
    return (
        <header>
          <a href="/"><h1>Giphy Clone</h1></a>
        <form onSubmit={(e) => {handleSubmit(e)}}>
          <input name="search"></input>
          <select name = "rating" >
            <option value="g">G</option>
            <option value="pg">PG</option>
            <option value="pg-13">PG-13</option>
            <option value="r">R</option>
          </select>
          <button type="submit">find</button>
        </form>
      </header>
    );
  }
  
  export default Header;