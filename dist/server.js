"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let users = [];
app.get("/users", (req, res) => {
    res.json(users);
});
app.post("/users", (req, res) => {
    const user = { id: Date.now(), ...req.body };
    users.push(user);
    res.json(user);
});
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    users = users.map(u => u.id === id ? { ...u, ...req.body } : u);
    res.json({});
});
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    users = users.filter(u => u.id !== id);
    res.json({});
});
app.listen(process.env.PORT || 10000, () => {
    console.log("server running on 10000");
});
