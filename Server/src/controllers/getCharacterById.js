const axios = require('axios');
const { response } = require('express');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharacterById = (req,res) => {
    const { id } = req.params;
    axios
        .get(URL + id)
        .then(response => response.data)
        .then( data => {
            const character= {
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender
            };

            if(!character) {
              return res.status(404).send('Not found');
            } else {
                res.json(character)
            }; 
        })
        .catch( error => {res.status(500).send(error.message) } )
};


module.exports =  getCharacterById ;



// const axios = require('axios');


// const getCharacterById = (res,id) => {
//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(data => {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 species:data.species,
//                 origin: data.origin,  //*paso el objeto entero
//                 image: data.image,
//                 status: data.status
//             }
//             res
//                 .writeHead(200, {'Content-Type':'application/json'} )
//                 .end( JSON.stringify(character) )
//         })
//         .catch(error =>
//             res
//                 .writeHead(500, {'Content-Type': 'text/plain'} )
//                 .end(error.message) 
//             )
// };

// module.exports = getCharacterById;