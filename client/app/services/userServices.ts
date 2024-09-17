//Cosas necesarias: importar e instalar axios 
//consumir la api vamos a declararla en @/config/Api
//filtrar la api
import axios from "axios"
import { ApiUsers } from "../config/api"

const URL = ApiUsers.urlUsers

export const userServices = {
// Estos metodos del objeto los hacemos con Axios, en donde se va a crear el CRUD

//METODO GET: Trae todos los usuarios del sector 1000 y filtras el paginado recibiendo limit y page por parametros

getUsers: async () => {
    try {
        const response = await axios.get(`${URL}?sector=1000`)
        return response.data

    } catch (error) {
        console.log(error)
    }
},


//METODO GET: Trae un solo usuario

getOneUser: async (id:string) =>{
    try {
        const response = await axios.get(`${URL}/personal/${id}`)
        return response.data
    } catch (error) {
        console.log
    }
},

//METODO POST: Recibe un objeto, viene del formulario, es un objeto y hay que tiparlo 

postUser: async (data: {}) => {
    try {
        const post = await axios.post(`${URL}`, data)
        console.log( `Prueba de que funciona bien ${data}`)
        return post.data
    } catch (error) {
        console.log(error)
    }
},

//METODO PUT: Recibe un objeto, viene de formulario y edita 

putUser: async (id: string, data: {}) => {

    try {
        const response = await axios.put(`${URL}/${id}`, data)
        return response.data
        console.log(data)
    } catch (error) {
        console.log(error)
    }

},

//METODO DELETE: Borra un objeto 

deleteUser: async(id: string) => {
    try {
        const response = await axios.delete(`${URL}/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

}
