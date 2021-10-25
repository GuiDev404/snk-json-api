const fs = require('fs').promises;
const path = require('path');

async function exists (path) {  
  try {
    await fs.access(path)
    return true
  } catch {
    return false
  }
}

async function write(pathname, data) {
  return fs.writeFile(pathname, JSON.stringify(data, null, 2), { encoding: 'utf-8' });
}

async function writeJson(filename, data) {
  const pathname = path.resolve(__dirname, '../', filename);

  try {
    const existFile = await exists(pathname);
    
    if(existFile){
      let dataWrited = await fs.readFile(pathname, { encoding: 'utf-8' })
      const appendData = JSON.parse(dataWrited).concat(data);

      await write(pathname, appendData);
    } else {
      await write(pathname, data)
    }

  } catch (error) {
    console.log(error);
  }
}

module.exports = writeJson;