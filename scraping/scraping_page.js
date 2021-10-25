const { v4: uuid4 } = require('uuid');
const get_html = require("./get_html");
const writeJson = require("../utils/writeJson");
const get_metadata = require("./get_metadata");
const { BASE_URL,SELECTORES_METADATAS, CONTENT_BLACK_LIST } = require('../utils/const');

function get_pages($) {
  const characters = $('.category-page__member-link');

  const charactersPages = characters.map(function (i, character) {
    return { 
      url: BASE_URL+$(this).attr('href'), // ex: /es/wiki/Alcalde_de_Stohess
      name: $(this).text() 
    }
  }).toArray();
  
  return charactersPages;
}

async function get_humans(pages) {
  const characters = [];

  for (const page of pages) {
    const isCategory = page.name.startsWith('Categoría:');
    const isLiveAction = page.name.includes('Live-Action');
    
    if(!(isCategory || isLiveAction)){
      const $page = await get_html(page.url);
      
      const [kanji_japones, romaji, genero, especie, estado, afiliacion] =
        await Promise.all(
          SELECTORES_METADATAS.map((selector) => get_metadata($page, selector))
        );

      const emptyArray = (arr)=> arr && Array.isArray(arr) && !arr.length;
      const imgsThumb = $page(".pi-image-thumbnail").attr('srcset');
      
      const content = $page('.page-content p').toArray()
        .map(p=> $page(p).text())
        .filter((content, idx)=> Boolean(content) && !CONTENT_BLACK_LIST.some(n=> content.includes(n)) && idx < 4);

      const character = {
        ...page,
        id: uuid4(),
        kanji_japones, romaji,
        content: content,
        imgs: imgsThumb && !emptyArray(imgsThumb.split(' ')) ? imgsThumb.split(' ').filter(ele=> isNaN(parseInt(ele))) : '',
        genero, especie, estado, afiliacion
      };

      console.log(`Scrapeando al personaje: ${page.name}`);

      characters.push(character);
    }
  
  }

  return characters;
}

async function scraping_page($html) {
  const pages = get_pages($html);

  const characters_humans = await get_humans(pages);
  writeJson('humans.json', characters_humans);
}

module.exports = scraping_page;