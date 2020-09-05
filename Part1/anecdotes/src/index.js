import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const DisplayVotes = props => <div>has {props.value} votes</div>

const Button = ({onClick, text}) => (
	<button onClick = {onClick}>
		{text}
	</button>
	)


const App = (props) => {
	
	const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
	const [selected, setSelected] = useState(0)
	

	const handleVoteClick = () => {
		
		const votescopy = [...votes] 
		
		// increment the votes object by 1
		
		votescopy.[selected] +=1
		
		setVotes(votescopy)
	}
		
	const handleNextClick = () => {
		setSelected(Math.floor(Math.random() * 5))
	}
	
	const getMax = () => {
		
		//console.log('inside getMax')
		const index = votes.indexOf(Math.max(...votes))
		
		//console.log(index)
		return(index)
	}

	return (
    
    <div>
		<h1> Anecdote of the day </h1>
		{props.anecdotes[selected]}
	
	<div> <DisplayVotes value = {votes[selected]} /> </div>
	<div> <Button onClick = {handleVoteClick} text = 'vote'/> 
		  <Button onClick = {handleNextClick} text = 'next anecdote' /> </div>
	
		<h1> Anecdote with most votes </h1>
		{props.anecdotes[getMax()]}
		<div> <DisplayVotes value = {votes[getMax()]} /> </div>
    
	</div>
	)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)