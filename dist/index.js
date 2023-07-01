"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// THIS LINE CONNECTS FILES TOGETHER
app.use(express_1.default.static('dist'));
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/index.html');
    console.log('whatever');
});
app.get('/about', (req, res) => {
    res.sendFile(process.cwd() + '/about.html');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
