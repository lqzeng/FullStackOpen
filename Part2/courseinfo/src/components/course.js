import React from 'react'

const Header = ({ course }) => { 
	return(
	<div>
		<h1>{course}</h1> 
	</div>
	)
}

const Content = ({ parts }) => {
	return(
		<>
		{parts.map( ({name, exercises, id}) => (
		
			<Part key={id} name={name} exercises={exercises}/>
		
		))}
		</>
	)
}

const Total = ({ parts }) => {
	
	/* intialValue set to 0 */
	
	const totalsum = parts.reduce((accumulator, currentValue, index) => {
		
		console.log(accumulator, currentValue.exercises)
		
		return(accumulator+currentValue.exercises)
	},0)			
	
	return(
		<p>
			<b> total of {totalsum} exercises </b>
		</p>
	)
	
}


const Part = ({name, exercises}) => {
	return(
		<p>
			{name} {exercises}
		</p>
	)
}


const Course = ({ course }) => {
	
	
	return(
		<div>
		{/*easier to pass the direct properties of the object using dot notation*/}
		
		<Header course = {course.name}/>
		<Content parts={course.parts} />
		<Total parts={course.parts} /> 
		</div>
	)
}

export default Course