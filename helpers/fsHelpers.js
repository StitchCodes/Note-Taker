const fs = require('fs');
// GOOGLE UTIL PACKAGE 
const util = require('util');

const readFromFile = util.promisify(fs.readFile);


// FUNCTION TO WRITE TO FILE
const writeToFile = (path, data) =>
fs.writeFile(path, JSON.stringify(data), (err) =>
err? console.err(err) : console.info(`Data written to ${path}`)
);

// FUNCTION TO READ FROM FILE AND THEN WRITE TO THAT FILE
const readAppend = (content, path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err){
            console.log(err)
        } else {
            const parsData = JSON.parse(data);
            parsData.push(content);
            writeToFile(path, parsData);
        }
    })
};

module.exports = { readFromFile, writeToFile, readAppend};
