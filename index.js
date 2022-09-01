require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoDb = require("./src/database/database.js");
const route = require("./src/users/userRoute.js");
const auth = require("./src/auth/authRoute.js");
const tweetsRoute = require("./src/tweets/tweetsRoute.js");

const port = process.env.port || 3001;
const app = express();

mongoDb();
app.use(express.json());
app.use(cors());

app.use("/users", route);
app.use("/auth", auth);
app.use("/tweets", tweetsRoute);

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

