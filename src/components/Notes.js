import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
export const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setnotes } = context;
    return (
        <div className="row my-3">
            <h2>Your notes</h2>
            {notes.map((note) => {
                return <Noteitem key={note._id} note={note} />
            })}
        </div>
    )
}
