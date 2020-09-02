import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	console.log(props)
	return (
		<div>
			<h1>
				{props.course.name}
			</h1>
		</div>
	)
}

const Content = (props) => {
	console.log(props)
	return (
	<div>
		<p>{props.parts[0].name} </p>
		<p>{props.parts[1].name}</p>
		<p>{props.parts[2].name}</p>
	</div>
	)
}

const Total = (props) => {
	console.log(props)
	return(
	<div>
		<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
	</div>
	)
}

const App = () => {
			
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name:'Fundamentals of React',
				exercises: 10
			},
			{
				name:'Using props to pass data',
				exercises: 7
			}, 
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}
	

	return (
		<div>
			
			<Header course={course} />
			
			<Content parts = {course.parts}/>
			<Total parts = {course.parts}/>
		</div>
		
		/*
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
	  
	  */
	
	
	)
}

ReactDOM.render(<App />, document.getElementById('root'))