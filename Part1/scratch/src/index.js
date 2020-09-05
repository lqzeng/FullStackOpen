import React, {useState} from 'react'
import ReactDOM from 'react-dom'

/*
const App = (props) => {
	
	// component for display
	// destructured to one line
	const Display = ({counter}) => <div>{counter}</div>

	
	//component for button
	const Button = ({handleClick, text}) => (
			<button onClick={handleClick}>
				{text}
			</button>
		)
		

	const [counter, setCounter] = useState(0)
	
	const increaseByOne = () => setCounter(counter+1)
	const decreaseByOne = () => setCounter(counter-1)
	
	const setToZero = () => setCounter(0)
	
	return (
	<div>
		<Display counter={counter}/>
		<Button 
			handleClick={increaseByOne}
			text='plus' 
		/>
		<Button 
			handleClick={setToZero}
			text='zero' 
		/>
		<Button 
			handleClick={decreaseByOne}
			text='minus' 
		/>	

	</div>
	)
}

*/

/*
const History = (props) => {
	if (props.allClicks.length === 0) {
		return (
		<div>
			the app is used by pressing the buttons
		</div>
		)
	}
	
	return (
		<div>
			button press history: {props.allClicks.join(' ')}
		</div>
		)
}

const Button = ({ onClick, text}) =>(
	<button onClick = {onClick}>
		{text}
	</button>
	)

const App = (props) => {
	const [left, setLeft] = useState(0)
	const [right,setRight] = useState(0)
	const [allClicks, setAll] = useState([])
		
		
	const handleLeftClick = () => {
		setAll(allClicks.concat('L'))
		setLeft(left+1)
	}
	
	const handleRightClick = () => {
		setAll(allClicks.concat('R'))
		setRight(right+1)
	}
	
	
  return (
    <div>
      <div>
	  {left}
	  <Button onClick={handleLeftClick} text = 'left'/>
	  <Button onClick={handleRightClick} text = 'right'/>
      {right}
	  <History allClicks = {allClicks} />
      </div>
    </div>
  )
}

*/

const Display = props => <div>{props.value}</div>

// extract Button into its own component

const Button = (props) => (
	<button onClick = {props.handleClick}>
		{props.text}
	</button>
	)
	

const App = props => {
	
	const [value,setValue] = useState(10)
	
	const setToValue = (newValue) => {
		console.log('inside setToValue, setting: ',value)
		setValue(newValue)
	}
	
	return (
		<div>
			<Display value = {value} />
			<Button handleClick = {() => setToValue(1000)} text = 'thousand' />
			<Button handleClick = {() => setToValue(0)} text = 'reset' />
			<Button handleClick = {() => setToValue(value+1)} text = 'increment' />
			
		</div>
	)
}
			
ReactDOM.render(
	<App />, 
	document.getElementById('root')
)