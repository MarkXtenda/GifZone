function HeroSection({display}) {
    return(
    <section id="hero">
        <h1>Welcome to My Giph Search Website</h1>
        <p>You can discover or search for giphs using search bar above.
        <br/>This window will disappear whenever you search for something or click dismiss.</p>
        <div>
        <a href="https://github.com/MarkXtenda/GiphsWeb-React-App">Learn More</a>
        <a href="#" onClick={()=>display(false)}>Dismiss</a>
        </div>
    </section>
      );
}

export default HeroSection