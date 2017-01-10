const fs = require('fs');
const file = './file.json';

const jsonToCSV = () => {
  let csv = [];
  const json = JSON.parse(fs.readFileSync(file, 'utf8'));
  if(typeof json === 'object') {
    Object.keys(json).forEach((key) => {
      json[key]
    }); 
  } else {

  }
};

jsonToCSV();

