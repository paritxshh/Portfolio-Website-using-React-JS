export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Paritosh Mathur</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack React</span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">Enthusiastic and motivated fresh graduate with a dual passion for Machine Learning Engineering and Front-End Development.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
    ;
}
