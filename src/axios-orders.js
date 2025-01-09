
import axios from "axios";
const instance =axios.create({
    baseURL: 'https://my-burger-react-app-3573e-default-rtdb.firebaseio.com/'
});

export default instance;