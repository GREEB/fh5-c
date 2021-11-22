import chokidar from "chokidar"
import fs from "fs"
import * as cheerio from 'cheerio';
// One-liner for current directory
console.log("Looking for files to edit 🔍");

chokidar.watch('../svg', {
    ignoreInitial: true,
    awaitWriteFinish: {
        stabilityThreshold: 5000,
        pollInterval: 100
      }
}).on('add', (path) => {

    if (path.match(/\.[0-9a-z]+$/i)){
        if (path.match(/\.[0-9a-z]+$/i)[0] === ".svg"){
            console.log("✨ Found" + path + " to edit ")
            const svgv = fs.readFileSync('./' + path, 'utf8')
            const tagv = fs.readFileSync( './tag.xml', 'utf8')
            const svg = cheerio.load(svgv, {xml:{normalizeWhitespace: false,}});
            const id = "#" + svg('svg').attr().id.toString()
            svg('svg').prepend(tagv);
            const path2save = '../svg/' + path.split('/').pop()
            fs.writeFileSync(path2save, svg.html().toString(), "utf8")
            console.log("saving it here: " + path2save);

         }else{
             
             // NO svg found
         }
         
    }

    //get file ext
  
});

// First run check if any in there