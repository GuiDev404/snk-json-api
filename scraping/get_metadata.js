const arrayOrEmptyString = require("../utils/arrayOrEmptyString");
const { REFERENCES_REGEX } = require("../utils/const");

async function get_metadata($, selector) {
  try {
    const result = $(selector)
      .map((_, ele) => {
        const data = $(ele).find(".pi-data-value");
        const containsBr = data.html().includes("<br>");

        if (containsBr) {
          if (data.html().includes("sup")) {
            return $(data)
              .not(".reference")
              .text()
              .split(REFERENCES_REGEX)
              .filter(Boolean);
          } else if (data.html().includes("img")) {
            return $(data)
              .find("a")
              .map((_, ele) => $(ele).text())
              .toArray();
          } else {
            return $(data).html().split("<br>");
          }
        }

        const anchors = $(data).find("ul li");

        if (anchors.length) {
          const anchorsText = anchors.map((_, ele) => $(ele).text().trim()).toArray();
          return anchorsText;
        }

        return $(data).text();
    }).toArray();

    const resultado = result.map((ele) => ele.trim().replace(REFERENCES_REGEX, "")); 
    return resultado ? arrayOrEmptyString(resultado) : '';
  } catch (error) {
    console.error(error);
  }
}

module.exports = get_metadata;