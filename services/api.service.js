const axios = require("axios");

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://ih-crud-api.herokuapp.com",
    });
  }

  getAllCharacters = () => {
    return this.api.get("/characters");
  };

  getOneCharacter = (characterId) => {
    return this.api.get(`/characters/${characterId}`);
  };

  createCharacter = (charInfo) => {
    return this.api.post(`/characters`, charInfo);
  };

  editCharacter = (charId, charInfo) => {
    return this.api.put(`/characters/${charId}`, charInfo);
  };

  deleteCharacter = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  };
}
module.exports = ApiService;
