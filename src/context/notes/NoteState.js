import React from "react";
import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Mohit",
        "class": "1b"
    }
    const [state, setstate] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setstate({
                "name": "Anu",
                "class": "2A"
            })
        }, 1000);
    }
    return (
        // <noteContext.Provider value={{ state, update }}> //Mordern javascript syntax
        <noteContext.Provider value={{ state: state, update: update }}>
            {props.children}
        </noteContext.Provider>

    )
}

export default NoteState;