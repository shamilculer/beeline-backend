// :todo: Add rate limiting

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware"
import services from "./constants/services";
dotenv.config();

const app = express()

const corsOptions = {
    origin: "*",
    credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser())

const routes = [
    {
        path: "/api/user/",
        target: services.user,
        changeOrigin: true,
        pathRewrite: { "^/api/user/": "" },
    },
]

routes.forEach((route) => {
    app.use(route.path, createProxyMiddleware({
        target: route.target,
        changeOrigin: route.changeOrigin,
        pathRewrite: route.pathRewrite,
        secure: false,
    }))
})


app.get('/', (req, res) => {
    res.send({ status: "online" })
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log("[Service :: API Gateway] Listening on port " + port))