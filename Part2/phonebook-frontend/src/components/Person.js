import React from 'react'

const Person = ({filter, person}) => {
 
    return (
        person.name.includes(filter) ? <span>{person.name} {person.number} </span> : <span> </span>
    )

}

export default Person