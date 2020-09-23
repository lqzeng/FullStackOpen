import React from 'react'
import Note from './components/Note'

const App = ({ notes}) => {
	return (
		<div>
			<h1> Notes </h1>
			<u1>
			{notes.map((note) =>
				<Note key={note.id} note={note} />
			)}
			</u1>
		</div>
	)
}

export default App