const express = require("express");
const router = express.Router();
const login = require('../controllers/login');
const getCharacterById = require('../controllers/getCharacterById');
const { postFavorite,deleteFavorite } = require('../controllers/handleFavorites');


router.get("/character/:id", getCharacterById);
router.get("/login", login);
router.post("/fav", postFavorite);
router.delete("/fav/:id", deleteFavorite);


module.exports= router;