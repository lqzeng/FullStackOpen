import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Display components
const Statistic = props => <div>{props.text} {props.value} {props.end}</div>

// Statistics component
const Statistics = (props) => {
	
	console.log(props)
	
	if (props.feedback[0] === 0){
		return (
		<div> No feedback given </div>
		)
	}
	
	return(
	<table>
		<tbody>
			<tr> 
			<td> <Statistic text = 'good'/> </td> 
			<td> <Statistic value = {props.feedback[1]} /> </td>
			</tr>
			
			<tr>
			<td><Statistic text = 'neutral'/></td>
			<td><Statistic value = {props.feedback[2]} /></td>
			</tr>
			
			<tr>
			<td><Statistic text = 'bad' /></td>
			<td><Statistic value = {props.feedback[3]} /></td>
			</tr>
			
			<tr>
			<td><Statistic text = 'all' /></td>
			<td><Statistic value = {props.feedback[4]} /></td>
			</tr>
			
			<tr>
			<td><Statistic text = 'average' /></td>
			<td><Statistic value = {props.feedback[5]} /></td>
			</tr>
			
			<tr>
			<td><Statistic text = 'positive' /></td>
			<td><Statistic value = {props.feedback[6]} end = '%' /></td>
			</tr>
		
		</tbody>
	</table>
	)
	
}


// Button component to handle clicks

const Button = ({onClick, text}) => (
	<button onClick = {onClick}>
		{text}
	</button>
)
	

const App = () => {
  // save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [allClicks, setAll] = useState(0)
	
	const all = good + neutral + bad
	const average = (good + neutral*0 + bad* -1)/all
	const positive = (good/all)*100 
	
	
	const handleGoodClick = () => {
		setGood(good + 1)
		setAll(allClicks + 1)
	}

	const handleNeutralClick = () => {
		setNeutral(neutral + 1)
		setAll(allClicks + 1)
	}

	const handleBadClick = () => {
		setBad(bad + 1)
		setAll(allClicks + 1)
	}
	
	const feedback = [allClicks, good, neutral, bad, all, average, positive]
	
	return (
		<div>
		<h1> give feedback </h1>
		<Button onClick = {handleGoodClick} text = 'good' />
		<Button onClick = {handleNeutralClick} text = 'neutral' />
		<Button onClick = {handleBadClick} text = 'bad' />
		
		<h1> statistics </h1>
		
		<Statistics feedback = {feedback} />
		
		</div>
		
			
	)
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)