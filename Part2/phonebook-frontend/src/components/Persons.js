import React from 'react'
import Person from './Person'

const Persons = ({filter, persons, removePerson}) => {

    return (
            // returns an array from the map parameters (which is a function)
            // that returns a call to the Person component
        persons.map(person => 
            <div key = {person.id}>
                   <Person key={person.name} person={person} filter={filter} /> {' '}
                   <button value={person.id} onClick={removePerson}> delete </button>
            </div>
        )   
    )
}
export default Persons