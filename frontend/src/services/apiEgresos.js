import axios from 'axios';

import { API, servisTokenConfig } from './apiServices';

export const insertEgreso = async (egreso) => {
    const response = await axios.post(API+'egresos/insert', egreso, servisTokenConfig);
    return response;
}

export const getEgresos = async () => {
    const response = await axios.get(API+'egresos/', servisTokenConfig);
    return response.data;
}

export const getEgresosId = async (id) => {
    const response = await axios.get(API+`egresos/${id}`, servisTokenConfig);
    return response.data;
}

export const setUpdateEgreso = async (egreso) => {
    const response = await axios.post(API+'egresos/update', egreso, servisTokenConfig);
    return response;
}

export const setDeleteEgreso = async (id, egreso) => {
    const response = await axios.post(API+`egresos/delete/${id}`, egreso, servisTokenConfig);
    return response;
}