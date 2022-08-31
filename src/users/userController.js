const userService = require("./userService.js");
const authService = require("../auth/authService.js");

const createController = async (req, res) => {
    const { name, username, email, password, avatar } = req.body;

    if(!name || !username || !email || !password || !avatar){
        return res.status(400).send({message: "informe todos os campos"});
    }

    const foundUser = await userService.findByEmailService(email);
    if(foundUser){
        return res.status(400).send({message: "O usuário já existe"});
    }

    const user = await userService.createService(req.body).catch(err => console.log(err.message));
    if(!user){
        return res.status(400).send({message: "Erro na criação do usuário"});
    }

    const token = authService.generateToken(user.id);

    return res.status(200).send({
        user: {
            id: user.id,
            name,
            username,
            email,
            avatar,
        },
        token
    });

};

const findAllController = async (_, res) => {
    const users = await userService.findAllService();
    if(users.length === 0){
        return res.status(400).send({message: "Não existe usúario cadastrado"});
    }
    return res.status(200).send(users);
}

module.exports = { createController, findAllController };