import React, { useState } from 'react'
import TextArea from './TextArea'



export const Tasks = ({ tasks, handleOnClick, checkboxes, setCheckboxes, mode }) => {


    const handleInputChange = (e, checkboxId) => {
        const { checked } = e.target;
        if (checked === true) {
            document.getElementById(checkboxId).style.textDecorationLine = "line-through"
        }
        else {
            document.getElementById(checkboxId).style.textDecorationLine = "none"
        }

        setCheckboxes((prevCheckboxes) => {
            const updatedCheckboxes = [...prevCheckboxes];
            const checkboxIndex = updatedCheckboxes.findIndex(
                (checkbox) => checkbox.id === checkboxId
            );

            if (checkboxIndex !== -1) {
                updatedCheckboxes[checkboxIndex] = {
                    ...updatedCheckboxes[checkboxIndex],
                    checked: checked,
                };
            }

            return updatedCheckboxes;
        });
    };

    return (

        <div className="container">
            <h5 className='mt-5' style={{ color: mode === "light" ? "black" : "white" }}>Tasks</h5>
            <div className="container">
                {
                    tasks.map((element) => {
                        return <div key={element.id} className="container" style={{ color: mode === "light" ? "black" : "white" }}>
                            {tasks.length != 0 ?
                                <h5><input onChange={(e) => handleInputChange(e, element.id)} className="form-check-input" checked={checkboxes.checked} type="checkbox" /> <span id={element.id}>{element.task}</span></h5> : <h4>Enter a task</h4>}
                        </div>
                    })

                }
            </div>
            <div className="container mt-5">
                <h4 style={{ color: mode === "light" ? "black" : "white" }}>Enter your task:</h4>
                <TextArea handleOnClick={handleOnClick} mode={mode} />
            </div>
        </div>
    )
}

