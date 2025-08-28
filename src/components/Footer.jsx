import '../styles/Footer.css'
import githubLogo from "../assets/logos/github-white.svg"

function Footer() {
    return (
            <footer className="footer">
                <ul>
                    <li><a href="https://github.com/Fr4cas" target='_blank' rel='noopener noreferrer'><img src={githubLogo} alt="GitHub" className='logo'/></a></li>
                </ul>
            </footer>
    )
}

export default Footer