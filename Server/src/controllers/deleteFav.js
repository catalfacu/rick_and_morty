const {Favorite} = require('../DB_connection');

async function deleteFav(req,res) {
    try {
    const {id} = req.params;
        await Favorite.destroy( {where: { id } } );
        const allFavorites = await Favorite.findAll();
    return res.json(allFavorites);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


module.exports= deleteFav;