const express = require("express");
const cors = require("cors");
const route = require("./users/userRoute.js");

const port = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", route);

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

