const express = require("express");
const router = express.Router();
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const getCharacterById = require('../controllers/getCharacterById');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav')


router.get("/character/:id", getCharacterById);
router.post("/login", postUser);
router.get("/login", login);
//router.get("/logOut", logOut);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);


module.exports= router;
