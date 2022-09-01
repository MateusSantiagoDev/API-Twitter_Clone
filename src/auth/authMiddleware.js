require("dotenv").config();
const jwt = require("jsonwebtoken");
const { findByIdUserservice } = require("../users/userService.js");

module.exports = (req, res, next) => {
    const autHeaders = req.headers.authorization
    if(!autHeaders){
        return res.status(401).send({message: "O token não foi informado"});
    }

    const parts = autHeaders.split(" "); /* ["Bearer", "jbacrcdnoihsxbyasij"] */
    if(parts.length !== 2){
        return res.status(401).send({message: "token invalido"});
    }

    const [scheme, token] = parts // // desconstruindo o parts
    
    if(!/^Bearer^/i.test(scheme)){
        return res.status(401).send({message: "token mal formatado"})
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        const user = await findByIdUserservice(decoded.id);

        if(err || !user || !user.id){
            return res.status(401).send({message: "token invalido"})
        }

        req.userId = user.id;
        return next();
        
    });
   
};