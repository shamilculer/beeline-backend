"use strict";
// :todo: Add rate limiting
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const services_1 = __importDefault(require("./constants/services"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const corsOptions = {
    origin: "*",
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
const routes = [
    {
        path: "/api/user/",
        target: services_1.default.user,
        changeOrigin: true,
        pathRewrite: { "^/api/user/": "" },
    },
];
routes.forEach((route) => {
    app.use(route.path, (0, http_proxy_middleware_1.createProxyMiddleware)({
        target: route.target,
        changeOrigin: route.changeOrigin,
        pathRewrite: route.pathRewrite,
        secure: false,
    }));
});
app.get('/', (req, res) => {
    res.send({ status: "online" });
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log("[Service :: API Gateway] Listening on port " + port));
