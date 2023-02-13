import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://react-my-burger-4b095-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
