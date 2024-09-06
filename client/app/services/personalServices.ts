//Este archivo hace los metodos del crud

import axios from 'axios';

const API_URL = 'https://staging.duxsoftware.com.ar/api/personal';

export const getPersonal = async (sector: number, limit: number, page: number) =>{
    const response = await axios.get(`${API_URL}?sector=${sector}&_limit=${limit}&_page=${page}`)
    return response.data;
}

export const createPersonal = async(personalData: { usuario: string; sector: number }) => {
    const response =await axios.post(API_URL, personalData)
    return response.data;
}