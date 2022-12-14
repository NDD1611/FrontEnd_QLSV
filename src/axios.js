
import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

instance.interceptors.response.use(
    (response) => {
        const { data } = response;
        return response.data
    }
);

export default instance;