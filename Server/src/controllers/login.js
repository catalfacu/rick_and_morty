const [{email,password}] = require('../utils/users');


const login = (req,res) => {
    // console.log(email);
    // console.log(password);
const { mail, pass } = req.query;

if( email === mail && password === Number(pass) ) {
    res.status(200).json( {access: 'true'} );
} else {
    res.status(200).json( {access: 'false'} );
}
};

module.exports= login;