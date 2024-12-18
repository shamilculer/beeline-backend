import dotenv from "dotenv";
dotenv.config();

const services = {
    user: process.env.USER_SERVICE_URL
}

export default services;