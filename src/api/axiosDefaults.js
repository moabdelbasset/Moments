import axios from "axios";

axios.defaults.baseURL = 'https://my-rest-api-app-ada2446ada54.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;