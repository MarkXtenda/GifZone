function HeroSection({display}) {
    return(
    <section id="hero">
        <h1>Welcome to My Gif Search Website</h1>
        <p className="hero-content">You can discover or search for gifs using search bar above.
        <br/>This window will disappear whenever you search for something or click dismiss.</p>
        <p id="copyright">Created by  &copy; Mark Kholodii, 2022</p>
        <div>
        <a href="https://github.com/MarkXtenda/GiphsWeb-React-App">Learn More</a>
        <a href="#" onClick={()=>display(false)}>Dismiss</a>
        </div>
    </section>
      );
}

export default HeroSection