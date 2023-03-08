import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger-builder-react-5fb28-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
