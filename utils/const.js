const BASE_URL = 'https://shingeki-no-kyojin.fandom.com';
const CATEGORY_HUMANS = [
  `${BASE_URL}/es/wiki/Categor%C3%ADa:Humanos`, // first part
  `${BASE_URL}/es/wiki/Categor%C3%ADa:Humanos?from=Sayram` // seconds part
];

const SELECTORES_METADATAS = [
  '[data-source="Japonés"], [data-source="Kanji"]',
  '[data-source="Rōmaji"]',
  '[data-source="Genero"]',
  '[data-source="Especie"]',
  '[data-source="Estado"]',
  '[data-source="Afiliación"]',
];

const REFERENCES_REGEX = /\[[0-9]\]/;

const CONTENT_BLACK_LIST = [
  'Este artículo es un esbozo y como tal necesita ser expandido. Por favor, ayuda a Ataque a los Titanes Wiki ampliándolo.\n', 
  "Este articulo o sección incluye contenido que NO pertenece a la historia oficial, por lo que no se considera canónico, ni tiene desarrollo en la trama de la misma.\n",
  'Para buscar otros términos con el mismo nombre',
  'Para otros términos con el mismo nombre',
  'Este artículo tiene información esencial pero está incompleto.',
  'No confundir con',
  'Este articulo trata sobre'
 ];

module.exports = {
  BASE_URL,
  CATEGORY_HUMANS,
  SELECTORES_METADATAS,
  REFERENCES_REGEX,
  CONTENT_BLACK_LIST
}