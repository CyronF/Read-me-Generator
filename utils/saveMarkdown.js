const fs = require('fs/promises');

const saveMarkdown = (str) => {
    const fileName = "markDown_" + Date.now() + ".md"
    return new Promise(function(resolve, reject){
        fs.writeFile(fileName, str)
    .then(function() {
        resolve(fileName);
    })
    .catch(console.log)   
    })
};



module.exports = saveMarkdown
