require('dotenv').config();
const Promise = require("bluebird");
const Spreadsheet = require("google-spreadsheet");
const { SPREADSHEET_ID, PORT } = require("./config");
const googleSheetsDocument = Promise.promisifyAll(new Spreadsheet(SPREADSHEET_ID));
const http = require('http');
const url = require('url');

http.createServer(async (req, res) => {
  const query = url.parse(req.url, true).query;  
  const rows = await main(query.limit, query.offset);
  res.writeHead(200, {"Content-Type": "application/json"});  
  res.end(JSON.stringify(rows));
}).listen(PORT, "localhost" ,  () => {
  console.log(`\n[\x1b[34m${(new Date).toLocaleTimeString()}\x1b[37m] \x1b[34mListening on port: ${PORT}\n`);
});


/**
 * Gets info about the spreadsheet and returns the rows selected.
 * @param {Number} limit 
 * @param {Number} offset 
 */
async function main(limit = 10, offset = 1) {
  try {
    const info = await getInfoAboutSpreadSheet();
    const sheet = Promise.promisifyAll(info.worksheets[0]);
    return sheet.getRowsAsync({ offset, limit });
  } catch (error) {
    console.log(error);
  }
}

/**
 * Gets information about sheet, getting the title for example
 * And required for getting the sheets in the googleSheetsDocument
 */
async function getInfoAboutSpreadSheet() {
  try {
    return googleSheetsDocument.getInfoAsync();
  } catch (error) {
    console.log("Get information error", error);
  }
}

