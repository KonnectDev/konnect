import axios from "axios";

export default axios.create({
    baseURL: "http://knect.nl/api/",
    responseType: "json"
});
