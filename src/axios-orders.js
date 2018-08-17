import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-a24d6.firebaseio.com/'
});

export default instance;