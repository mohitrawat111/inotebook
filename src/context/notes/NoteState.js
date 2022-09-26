import React from "react";
import { useState } from "react";
import noteContext from "./noteContext";



const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "6329cb0e54794ec62da43bf2",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T14:15:42.229Z",
      "__v": 0
    },
    {
      "_id": "6329cb6c134b8b6d4e7ebf39",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T14:17:16.210Z",
      "__v": 0
    },
    {
      "_id": "6329cc1eecb9b2d1c0a56e7e",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T14:20:14.343Z",
      "__v": 0
    },
    {
      "_id": "6329ccf5c897dd3863d253d1",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T14:23:49.007Z",
      "__v": 0
    },
    {
      "_id": "6329cd23c897dd3863d253d4",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title1",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T14:24:35.026Z",
      "__v": 0
    },
    {
      "_id": "6329d020a85961ba77ee90b6",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title1",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T14:37:20.771Z",
      "__v": 0
    },
    {
      "_id": "6329d060a85961ba77ee90b8",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title1",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T14:38:24.675Z",
      "__v": 0
    },
    {
      "_id": "6329d7189f44c0bfa6dd4993",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title1",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T15:07:04.387Z",
      "__v": 0
    },
    {
      "_id": "6329dc3d576eddf70e4583e1",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "My title1",
      "description": "Please wakeup early",
      "tag": "personal",
      "date": "2022-09-20T15:29:01.392Z",
      "__v": 0
    },
    {
      "_id": "632bd1cec5ade9a3a772bbad",
      "user": "63293c9dd0133eb2a6008ea3",
      "title": "pizz and burger",
      "description": "chesse burst with coke",
      "tag": "cheatday",
      "date": "2022-09-22T03:09:02.061Z",
      "__v": 0
    }
  ]
  const [notes, setnotes] = useState(notesInitial)

  return (
    // <noteContext.Provider value={{ state, update }}> //Mordern javascript syntax
    <noteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </noteContext.Provider>

  )
}

export default NoteState;