const {User} = require('../DB_connection');

async function login(req,res) {
    try {
    const {email, password} = req.query;
    
    if(email && password){
    const user = await User.findOne( {where:  {email}  } );
    console.log(user);
    if(!user) return res.status(404).send("Usuario no encontrado");
    if(user.password !== password) return res.status(403).send("Contraseña incorrecta");
    return res.json( { access: true } )
    }
    return res.status(400).send("Faltan datos");
    } catch (error) {
     return res.status(500).send(error.message);   
    }

};

module.exports = login;

// const users = require('../utils/users');


// const login = (req,res) => {

// const { email, password } = req.query;
// let access = false;

// users.forEach(user => {
//     user.email === email && user.password === password
//     ? access = true
//     : null;
// })
// return res.status(200).json({ access })
// };

// const logOut = (req,res) => {
//     let notAccess = false;
//     return res.status(200).json({ notAccess });
// };


// module.exports= {login, logOut};