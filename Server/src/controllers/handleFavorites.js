let myFavorites = [];

const postFavorite = (req,res) => {
    const character = req.body;
    myFavorites.push(character);
    res.json(myFavorites);
};

const deleteFavorite = (req,res) => {
    const { id } = req.params;

    const filteredFavorites = myFavorites.filter( char => { char.id !== Number(id) } );
    
    res.json(filteredFavorites);
};

module.exports= { postFavorite , deleteFavorite };