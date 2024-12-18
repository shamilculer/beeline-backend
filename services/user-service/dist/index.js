"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
// import cors from "cors";
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = __importDefault(require("./config/db"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send({
        status: "User service is running"
    });
});
app.use('/auth', auth_routes_1.default);
app.use(errorHandler_1.default);
const port = process.env.PORT || 3001;
const startServer = async () => {
    try {
        await (0, db_1.default)();
        app.listen(port, () => console.log("[Service :: User] Server is running on port " + port));
    }
    catch (error) {
        console.error("[Service :: User] Error starting server", error);
    }
};
startServer();
