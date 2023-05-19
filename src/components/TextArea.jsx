
import React, { useState } from 'react';


const TextArea = (props) => {

    const [text, setText] = useState("")
    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    return (
        <div className="form-floating" >
            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Add a task" id="floatingTextarea" style={{ borderColor: "black", backgroundColor: props.mode === "light" ? "white" : "lightgrey", height: "75px" }}></textarea>
            <button onClick={() => (text ? props.handleOnClick(text) : null)} className={`btn ${props.mode === "light" ? "btn-dark" : "btn-light"} mt-3 mb-4`}>Add</button>
        </div>

    )
}

export default TextArea
