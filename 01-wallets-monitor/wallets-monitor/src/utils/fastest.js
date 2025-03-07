import axios from 'axios';

export async function saveData(data) {
    const response = await axios.post(`${process.env.FASTEST_HOST}/v1/tool/tsdb/create`, data)
    return response.data;
}