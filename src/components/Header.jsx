import React from 'react'

export const Header = ({ mode }) => {
    return (
        <div className="container mt-4 text-center">
            <h1 style={{ color: mode === "light" ? "black" : "white" }}>
                TO-DO APPLICATION
            </h1>
            <h3 className='mt-4' style={{ color: mode === "light" ? "black" : "white" }}>
                Your daily task manager.
            </h3>
        </div>
    )
}
