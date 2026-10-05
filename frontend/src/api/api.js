import axios from "axios"

const apiInstance = axios.create({
    baseURL: "https://api.kitek-pg.ru/api/feedback/",
    headers: {
        "Content-Type": "application/json",
    },
})
