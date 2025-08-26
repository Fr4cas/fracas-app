import { useState } from 'react'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Hero />
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default Home