import React, { useState, useEffect } from 'react'
import axios from'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
	
	// initial value passed in from props 
	const [notes, setNotes] = useState([])
	
	const [newNote, setNewNote] = useState ( 'write new note here' )
	
	const [showAll, setShowAll] = useState(true)

    //chained method 
    //event handler promise.then 
    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    },[])
        
        
    console.log('render', notes.length, 'notes')

    const toggleImportanceOf = (id) => {

        // array find method to find the note we want to modify, and then assign it to note variable
        const note = notes.find(n => n.id === id)

        // create a new object, which is a copy (...) and the important property gets inverted from its 
        // previous value 
        const changedNote = { ...note, important: !note.important }

        // new array is created conditionally, so that if note.id !== id is true, we copy the item from 
        // the old array into the new array. if false, then the note object returned by the server is 
        // added to the array instead.
        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note=> note.id !== id ? note: returnedNote))
            })
            .catch(error => {
                alert(
                    `the note '${note.content}' was already deleted from the server`
                )
                setNotes(notes.filter(n => n.id !== id))
            })

    }

    // event handler addNote
    const addNote = (event) => {
        //event.preventDefault prevents the refresh of page
        event.preventDefault()

        const noteObject = {
            content: newNote,
            date: new Date(),
            important: Math.random() < 0.5,
            id: notes.length + 1
        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            })

    }



    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }
   
	const notesToShow = showAll
	? notes
	: notes.filter(note => note.important)
	
	return (
		<div>
			<h1> Notes </h1>
			<div>
				<button onClick={() => setShowAll(!showAll)}>
					show {showAll ? 'important' : 'all'}
				</button>
			</div>
			
			<ul>
			    {notesToShow.map( (note,i) =>
                    <Note
                        key={i}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
			    )}
			</ul>
			
			<form onSubmit = {addNote}>
				<input 
					value = {newNote}
					onChange = {handleNoteChange}
				/>
				<button type = "submit">save</button>
			</form>
		</div>
	)
}

export default App