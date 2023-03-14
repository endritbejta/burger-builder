import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burgerbuildernew-ad1e3-default-rtdb.europe-west1.firebasedatabase.app/",
});

export default instance;
