"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
(0, mongoose_1.connect)(config_1.MONGO).then(() => {
    console.log("MONGO connected");
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
app.get('/', (req, res) => {
    res.send("hello");
});
app.listen(config_1.PORT, () => {
    console.log(`Server running on port ${config_1.PORT}`);
});
