const { readdirSync, readFileSync, writeFileSync } = require('fs')

// Specify below which folder to format:
let folder = "./test/";

let returnNewJSON = (folder) => {
  let files = readdirSync(folder);

  files.map((file) => {
    let filePath = folder + file;
    replaceContent(filePath);
  });
};

function replaceContent(original) {
  try {

    let data = JSON.parse(readFileSync(original, 'utf8'));
    let newContent = JSON.stringify(formatJSON(data));
    console.log(newContent);
    writeFileSync(original, newContent);

  } catch (err) {
    console.error(err)
  }
}

function formatJSON(originalFile) {
  return originalFile.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.content }),
  { [originalFile[0].name]: originalFile[0].content });
}

exports.formatter = returnNewJSON(folder);
