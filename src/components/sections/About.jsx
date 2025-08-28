import '../../styles/sections/About.css'

function About() {
    return (
        <section>
            <div className='about__info'>
                <h2>Hello, I'm Fracas!</h2>
                <p>Currently a university student learning programming, I enjoy playing games and basically anything anime. Below you'll find more information about me.</p>
            </div>
            <div className="about__stats">
                <ul>
                    <li>current status: Online...</li>
                    <li>location: ...</li>
                    <li>hours played: ...</li>
                    <li>currently listening to...</li>
                    <li>set up: ...</li>
                </ul>
            </div>
            <div className="about__links">
                <ul>
                    <li>discord</li>
                    <li>spotify</li>
                    <li>github</li>
                </ul>
            </div>
        </section>

    )
}

export default About