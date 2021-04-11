import axios from "axios";

const instance =  axios.create({
    baseURL: 'https://burger-tutorial-c90f3-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;
