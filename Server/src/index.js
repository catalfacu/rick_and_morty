
const server = require('./app');
const PORT = 3001;
//importo instancia de sequeliza
const {conn} = require('./DB_connection');

conn.sync({force: true})
   .then(()=> {
      server.listen(PORT, () => {
         console.log(('Server raised in port:' + PORT));
      });
   })
   .catch(error => console.log(error.message));

