import React from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

    return (
        // <noteContext.Provider value={{ state, update }}> //Mordern javascript syntax
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>

    )
}

export default NoteState;