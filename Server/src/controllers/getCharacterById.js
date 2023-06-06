const axios = require('axios');
const { response } = require('express');
const URL = "https://rickandmortyapi.com/api/character/";


const  getCharacterById = async (req,res) => {
    try {
        const {id} = req.params;
        const response = await axios.get(URL + id);
        const {status,name,species,origin,image,gender} = response.data;
        const character= {id,status,name,species,origin,image,gender};
        
        return name
        ? res.status(200).json(character)
        : res.status(404).send('Not found');
       
    } catch (error) {
        return res.status(500).send(error.message);
    };

    
};

module.exports = getCharacterById;

// const getCharacterById = (req,res) => {
//     const { id } = req.params;
//     axios
//         .get(URL + id)
//         .then(response => response.data)
//         .then( data => {
//             const character= {
//                 id: data.id,                    // tambien se puede hacer con destructuring
//                 status: data.status,
//                 name: data.name,
//                 species: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 gender: data.gender
//             };

//             if(character.name) {
//                 return res.status(200).json(character)
//             } else {                                            // TODO: condicionar con ternarios despues
//                 return res.status(404).send('Not found');
//             }; 
//         })
//         .catch( error => {return res.status(500).send(error.message) } )
// };


// module.exports =  getCharacterById ;
