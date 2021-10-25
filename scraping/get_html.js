const util = require('util');
const exec = util.promisify(require('child_process').exec);
const cheerio = require('cheerio');

async function get_html (URL) {
  try {
    const { stdout: rawHtml, stderr } = await exec(`curl ${URL}`);
    // console.log('stderr: ', stderr);

    return cheerio.load(rawHtml);
  } catch (error){
    if(error.message.startsWith('Command failed: curl')){
      console.log('URL no valida');
    }
  }
}

module.exports = get_html;