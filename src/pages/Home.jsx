import { useState } from 'react'
import About from '../components/About'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Hobby from '../components/Hobby'
import Footer from '../components/Footer'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
                <About />
                <Hobby />
            </main>

            <Footer />
        </>
    )
}

export default Home