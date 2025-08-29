import '../../styles/sections/Hero.css'
import heroCover from "../../assets/img/hero-cover.jpg";

function Hero() {
    return (
        <>
            <section>
                <div className="hero">
                    <div className="hero__content">
                        <div className="hero__text">
                            <h1>Fracas</h1>
                            <h2>Still in the process of learning...</h2>
                        </div>
                        <div className="hero__content-image">
                            <img src={heroCover} alt="hero cover image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero