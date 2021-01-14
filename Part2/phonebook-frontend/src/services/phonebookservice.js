import axios from 'axios'

//frontend and backend same address. remove server declaration
const baseUrl = 'api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const remove = (person) => {
    if (window.confirm(`Delete '${person.name}'?`))
        {
        const request = axios.delete(`${baseUrl}/${person.id}`)
        return request.then(response => response.data)
    }
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, remove, update}