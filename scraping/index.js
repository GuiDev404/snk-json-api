const get_html = require("./get_html");
const scraping_page = require("./scraping_page");
const { CATEGORY_HUMANS } = require('../utils/const');

for (const URL of CATEGORY_HUMANS) {
  get_html(URL)
    .then(scraping_page)
    .then(console.log)
    .catch(console.error); 
}

