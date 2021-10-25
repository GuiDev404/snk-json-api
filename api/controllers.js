const characters = require("../humans.json");
const controllers = {}

controllers.getTitans = (req, res) => {
  let titansCharacters = characters.filter((character) => {

    if(Array.isArray(character.especie)) {
      return character.especie.some(especie=> especie.indexOf('Titán') !== -1);
    }
    
    return character.especie.indexOf('Titán') !== -1;
  });

  res.json(titansCharacters);
}

controllers.getHumans = (req, res) => {
  let humansCharacters = characters.filter((character) => {
    if(Array.isArray(character.especie)) {
      return character.especie.some(especie=> {
        return especie.indexOf('Humano') !== -1
      });
    }
    
    return character.especie.indexOf('Humano') !== -1
  });

  res.json(humansCharacters);
}

controllers.getAll = (req, res) => {
  res.json(characters);
}

controllers.getBySearch =  (req, res) => {
  if (req.query.name) {
    const keyword_name = req.query.name.toLowerCase().trim();

    let charactersBySearch = characters.filter((character) =>
      character.name.toLowerCase().trim().indexOf(keyword_name) !== -1
    );

    res.json(charactersBySearch);
  }
}

controllers.getByID = (req, res) => {
  const id = req.params.id;

  const [ character ] = characters.filter((character) => character.id === id );
  res.json(character);
}

module.exports = controllers;