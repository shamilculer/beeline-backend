import express from "express";
import "dotenv/config";
// import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./config/db";
import authRoutes from "./routes/auth.routes"
import errorHandler from "./middleware/errorHandler";

const app = express()

app.use(cookieParser())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        status: "User service is running"
    })
})

app.use('/auth', authRoutes)

app.use(errorHandler)

const port = process.env.PORT || 3001
const startServer = async () => {
    try {
        await connectDb()
        app.listen(port, () => console.log("[Service :: User] Server is running on port " + port))
    } catch (error) {
        console.error("[Service :: User] Error starting server", error)
    }
}

startServer()