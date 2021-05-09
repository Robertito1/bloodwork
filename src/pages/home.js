import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <div>
                <Link to="/donate">Donate Blood</Link>
            </div>
            <div>
                <Link to="/request">Request Blood</Link>
            </div>
        </div>
    )
}

export default Home
