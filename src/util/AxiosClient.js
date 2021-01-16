import Axios from "axios";


const AxiosClient = Axios.create();

AxiosClient.defaults.baseURL = 'http://localhost:5000';
AxiosClient.defaults.headers.post['Content-Type'] = 'application/json';

export default AxiosClient;
