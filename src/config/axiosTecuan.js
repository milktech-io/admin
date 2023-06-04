import axios from 'axios';

const axiosTecuan= axios.create({
    baseURL : process.env.REACT_APP_TOKEN_TECUAN,
    headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
    }
});

export default axiosTecuan;
