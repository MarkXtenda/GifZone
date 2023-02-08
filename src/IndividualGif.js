function IndividualGif({heroSection, gif}) {
    if (gif) {
        return(
            <section style={{paddingTop: !heroSection ? "81px" : "0px"}}>
                <h2>{gif.title}</h2>
                <img src={gif.images.original.url} alt=''></img>
                <h4>Author username: {gif.username}</h4>
                <h5>Added on: {gif.trending_datetime.replaceAll('-', "/")}</h5>
            </section>
        )
    } else {
        return(
            <section style={{paddingTop: !heroSection ? "81px" : "0px"}}><h2>Nothing to Show</h2></section>
        )
    }
}

export default IndividualGif