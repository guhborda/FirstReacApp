import axios from 'axios';

const api = axios.create({baseURK:'https://rocketseat-node.herokuapp.com/api'
});
export default api;