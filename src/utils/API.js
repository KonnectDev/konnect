import axios from "axios";

export default axios.create({
    baseURL: "http://35.187.9.64/public/api/",
    responseType: "json"

});
