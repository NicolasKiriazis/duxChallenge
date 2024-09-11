//Cosas necesarias: importar e instalar axios 
//consumir la api vamos a declararla en @/config/Api
//filtrar la api
import axios from "axios"
import { ApiUsers } from "../config/api"

const URL = ApiUsers.urlUsers

export const userServices = {
// Estos metodos del objeto los hacemos con Axios, en donde se va a crear el CRUD

//METODO GET: Trae todos los usuarios 

getUsers: async () => {
    try {
        const response = await axios.get(`${URL}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
}
