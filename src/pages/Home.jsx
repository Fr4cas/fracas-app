import { useState } from 'react'
import About from '../components/sections/About'
import Hero from "../components/sections/Hero"
import Navbar from "../components/layouts/Navbar"
import Hobby from '../components/sections/Hobby'
import Footer from '../components/layouts/Footer'

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