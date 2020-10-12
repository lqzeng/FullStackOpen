import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import phonebookService from './services/phonebookservice'

//inline footer
const Footer = () => {
    const footerStyle = {
        color: 'grey',
        fontStyle: 'italic',
        fontSize: 12
    }
    return (
        <div style={footerStyle}>
            <br />
            <em>Lucas Zeng</em>
        </div>
    )
}


const App = () => {

    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')

    const [newNumber, setNewNumber] = useState('')

    const [newFilter, setNewFilter] = useState('')

    const [message, setMessage] = useState(null)

    const [messageType, setMessageType] = useState(null)


    useEffect(() => {
        phonebookService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    },[])


    //event handler for newName
    const addInfo = (event) => {

        event.preventDefault()

        // check for name existing
        for (var i = 0; i<persons.length; i++){

            if (newName.toUpperCase() === persons[i].name.toUpperCase()) {
                if (window.confirm(`${newName} is already in the phonebook, replace old number with new one?`))
                {   
                    //object copy with a new number
                    const changedPerson = { ...persons[i], number:  newNumber }

                    //updates the person with the new object
                    phonebookService
                        .update(persons[i].id, changedPerson)

                        //set new person array
                        .then(returnedObject => {
                            setPersons(persons.map(changedPerson => changedPerson.id !== persons.id ? changedPerson : returnedObject))
                        })
                        
                }

                setNewName('')
                setNewNumber('')

                console.log(persons)
                //end function early
                return
            }
        }

        // check for non-numeric number
        if (isNaN(newNumber)) {
            window.alert(`Please enter numbers only in the number field`)
            return
        }

        const personObject = {
            name: newName,
            number: newNumber
            }

        phonebookService
            .create(personObject)
            .then(returnedObject => {
                //concat this new personObject to the person array
                setPersons(persons.concat(returnedObject))
                setMessageType('success')
                setMessage(`Added ${personObject.name} to phonebook`)
                setTimeout(() => {
                    setMessageType(null)
                    setMessage(null)
                }, 5000)

                //setNewName reset the value of the controlled input element
                setNewName('')
                setNewNumber('')
            })
    }


    const removePerson = (event) => {
        event.preventDefault()

        const id = parseInt(event.target.value)

        const personToDelete = persons.find(p => p.id === id)

        console.log("person to delete", personToDelete)

        phonebookService
            .remove(personToDelete)
            .catch(error => {
                setMessageType('error')
                setMessage(`the person '${personToDelete.name}' was already deleted from server `             
                )
                setTimeout(() => {
                    setMessageType(null)
                    setMessage(null)                   
                },3000)
                setPersons(persons.filter(personToDelete => personToDelete.id !== id))
            })
            setPersons(persons.filter(personToDelete => personToDelete.id !== id))
    }
            

    const handleNameChange = (event) => {
        console.log("newName changed " + event.target.value)
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log("newNumber changed " + event.target.value)
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        console.log("newFilter changed " + event.target.value)
        setNewFilter(event.target.value)
    }


    return (
        <div>
            <h1>Phonebook</h1>

            <Notification message={message} messageType={messageType} />
            <Filter value={newFilter} onChange={handleFilterChange} />     

            <h2>add a new person</h2>

            <PersonForm
                onSubmit={addInfo}
                newName={newName}
                handleNameChange={handleNameChange}
                newNumber={newNumber}
                handleNumberChange={handleNumberChange} />

            <h2>Numbers</h2>

            <Persons persons={persons} filter={newFilter} removePerson={removePerson} />

            <Footer/>
        </div>
  )
}

export default App