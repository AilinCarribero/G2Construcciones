import axios from 'axios';

import { API, servisTokenConfig } from './apiServices';

export const getProyectos = async () => {
    const response = await axios.get(API+'proyectos/', servisTokenConfig );
    return response.data;
}

export const insertProyecto = async (proyecto) => {
    const response = await axios.post(API+'proyectos/insert', proyecto, servisTokenConfig)
    return response;
}

export const setUpdateProyecto = async (proyecto) => {
    const response = await axios.post(API+'proyectos/update', proyecto, servisTokenConfig);
    return response;
}