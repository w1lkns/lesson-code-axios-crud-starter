const router = require("express").Router();
const { default: axios } = require("axios");

// Require and init the API Service
const ApiService = require("../services/api.service");
const apiSer = new ApiService();

// List characters from the API
router.get("/movie-characters/list", (req, res) => {
  apiSer
    .getAllCharacters()
    .then((response) => {
      res.render("pages/characters-list", 
      { characters: response.data });
    })
    .catch((error) => console.log(error));
});

// Render a form to create a new character - GET
router.get("/movie-characters/create", (req, res) => {
  res.render("pages/new-character-form");
});

// Submit info to create a new character - POST
router.post("/movie-characters/create", (req, res) => {
  const charInfo = req.body;

  apiSer
    .createCharacter(charInfo)
    .then((response) => {
      res.redirect("/movie-characters/list");
    })
    .catch((error) => console.log(error));
});

// Render a form to edit a character
router.get("/movie-characters/edit/:id", (req, res) => {
  const charInfo = req.params.id;

  apiSer
    .getOneCharacter(charInfo)
    .then((response) => {
      res.render("pages/edit-character-form", { character: response.data });
    })
    .catch((error) => console.log(error));
});

// Submit info to edit a character
router.post("/movie-characters/edit/:id", (req, res) => {
  const charId = req.params.id;
  const charInfo = req.body;

  apiSer
    .editCharacter(charId, charInfo)
    .then((response) => {
      res.redirect("/movie-characters/list");
    })
    .catch((error) => console.log(error));
});

// Delete character
router.get("/movie-characters/delete/:id", (req, res) => {
  const charId = req.params.id;

  apiSer
    .deleteCharacter(charId)
    .then((response) => {
      res.redirect(`/movie-characters/list`);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
