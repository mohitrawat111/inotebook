import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";



const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setnotes] = useState(notesInitial)

  //GET  all Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyOTNjOWRkMDEzM2ViMmE2MDA4ZWEzIn0sImlhdCI6MTY2MzY4NjA4OH0.V9oAwjlHG_wo7ZJsYZ3nGlF4F2KfrnqyZXjMIK0OvHU'
      }

    });
    const json = await response.json();
    console.log(json)
    setnotes(json)


  }

  //Add a note
  const addNote = async (title, description, tag) => {
    //TODO:API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyOTNjOWRkMDEzM2ViMmE2MDA4ZWEzIn0sImlhdCI6MTY2MzY4NjA4OH0.V9oAwjlHG_wo7ZJsYZ3nGlF4F2KfrnqyZXjMIK0OvHU'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);

    console.log("Adding a new note");
    const note = {
      "_id": "632bd1cec5ade9a3a772bbadww1",
      "user": "63293c9dd0133eb2a6008ea345",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-10-22T03:09:02.061Z",
      "__v": 0

    }
    setnotes(notes.concat(note));

  }
  //Delete a note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyOTNjOWRkMDEzM2ViMmE2MDA4ZWEzIn0sImlhdCI6MTY2MzY4NjA4OH0.V9oAwjlHG_wo7ZJsYZ3nGlF4F2KfrnqyZXjMIK0OvHU'
      },

    });
    const json = await response.json();
    console.log(json);
    console.log("Deleting the node with id" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    console.log(newNotes);
    setnotes(newNotes);
  }
  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyOTNjOWRkMDEzM2ViMmE2MDA4ZWEzIn0sImlhdCI6MTY2MzY4NjA4OH0.V9oAwjlHG_wo7ZJsYZ3nGlF4F2KfrnqyZXjMIK0OvHU'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json)
    //to update the front end we can also use:-
    // getNotes();
    //or
    //logic to edit in client 
    let newNotes = JSON.parse(JSON.stringify(notes))
    // let newNotes = notes.slice();
    //Reason why we are writing let newnote=JSON.Parse(JSON.stringify(notes))  is  ....  He just want to have a copy of notes to newnote for that he can just write let newnote=note  , but what happens is we want page to render after updating the values , so that we can see the change in UI . But if you just use newnote=note react cant identify that there is some change happening so it will not render the page so , if we write as harry bhai said , react can observe the change or else we can simply write let newnote=notes.slice()   . 
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      setnotes(newNotes);
    }

  }
  return (
    // <noteContext.Provider value={{ state, update }}> //Mordern javascript syntax
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>

  )
}

export default NoteState;