import axios from 'axios';
axios.defaults.baseURL = 'https://sekai-api.onrender.com'
const token = localStorage.getItem('token')
axios.defaults.headers = {'Authorization': `Bearer ${token}`}
export default axios;