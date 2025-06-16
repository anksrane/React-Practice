import React from 'react'
import { useWindowWidth } from "../hooks/useWindowWidth";

function Customhook() {
    const width=useWindowWidth();

    return (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
            <h2>Window width:</h2>
            <p style={{ fontSize: '1.5rem' }}>{width}px</p>
        </div>
    )
}

export default Customhook
