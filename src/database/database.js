const mongoose = require("mongoose");

const dataBaseConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database conectado"))
    .catch((err) =>
      console.log(`Erro ao conectar com o banco de dados. Err: ${err}`)
    );
};

module.exports = dataBaseConnect;