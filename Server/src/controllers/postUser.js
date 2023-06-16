const {User} = require('../DB_connection');

async function postUser(req,res){
    try {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).send("Faltan datos");
    }
    const newUser = await User.findOrCreate( { where: {email,password} } );
    return res.json(newUser);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


module.exports = postUser;