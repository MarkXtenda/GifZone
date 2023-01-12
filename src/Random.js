function Random({rating, array}) {
  
    return (
        <section>
            Random
            <p>{rating}</p>
            <p>{array.map((image, id) => <img key={id} src={image} style={{ height: "100px", width: "100px" }}></img>)}</p>
        </section>
    );
  }
  
  export default Random;