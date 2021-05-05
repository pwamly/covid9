"use strict";
require("dotenv").config();
import axios from "axios";

let instance;
let BASE_URL;

BASE_URL = process.env.BASE_URL;

const defaultOptions = {
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
};
if (!instance) {
    instance = axios.create(defaultOptions);
    instance.interceptors.request.use(function(config) {
        return config;
    });

    instance.interceptors.response.use(
        function(response) {
            return response;
        },
        function(error) {
            return Promise.reject(error);
        }
    );
}

export default instance;