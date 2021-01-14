
//same as import 
//const { json, response } = require('express')
const express = require('express')
const app = express()

app.use(express.json())

// morgan middleware
var morgan = require('morgan')

// create a token to log the POST requests
morgan.token('post', (req, res) => JSON.stringify(req.body))

// we want format of :method :url :status :res[content-length] - :response-time ms :data
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))

let persons = [

    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }

]

// generateId function
const generateId = () => {
    const maxId = persons.length>0
    ? Math.max(...persons.map(n => n.id))
    : 0
    return maxId+1
}

// API GET 
app.get('/', (request, response)=> {
    response.send('<h1>Hello World!</h1>')
})

// API GET persons
app.get('/api/persons', (request,response)=>{
    response.json(persons)
})

// API GET info
app.get('/info', (request, response)=> {
    response.send(`<p>Phonebook has info for ${persons.length} people</p> </p>${new Date()}</p>`)
})

// API GET id
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(persons => persons.id === id)
    if (person){
        response.json(person)
    } else{
        response.send('<p>error 404: person not found</p>')
        response.status(404).end()
    }
})

// API POST
app.post('/api/persons', (request, response)=> {
    const body = request.body

    // error check for name and number filled
    if (!body.name || !body.number){
        console.log("name or number missing")
        return response.status(400).json({
            error: 'body incomplete, please enter a name or number'
        })
    }

    // error check for name existing
    if(persons.map(n => n.name).includes(body.name))
    {
        //names = persons.map(n => n.name)
        //console.log(names)
        return response.status(400).json({
            error: 'name already exists in the phonebook'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)
    console.log(person)

    response.json(persons)
})

// HTTP DELETE
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.send(`delete request of person ${id} successful`)
    response.status(204).end()
})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)