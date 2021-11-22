const chokidar = require('chokidar');
const fs = require('fs')
const { geoFromSVGFile, geoFromSVGXML } = require('./svg2geojson/lib/svg2geojson');

const cheerio = require('cheerio');

console.log("Looking for files to edit 🔍");

chokidar.watch('../svg', { ignoreInitial: true, awaitWriteFinish: { stabilityThreshold: 5000, pollInterval: 100 } }).on('add', (path) => {

    // Get Filename
    const filename = path.split("/").pop().split('.')[0];

    // Only pass non Null items
    if (path.match(/\.[0-9a-z]+$/i)){
        //Look for SVG
        if (path.match(/\.[0-9a-z]+$/i)[0] === ".svg"){
            console.log("✨ Found" + path + " to edit ")

            // Read Files
            const svgv = fs.readFileSync('./' + path, 'utf8')
            const tagv = fs.readFileSync( './tag.xml', 'utf8')

            // Load as XML
            const svg = cheerio.load(svgv, {xml:{normalizeWhitespace: false,}});

            // Get SVG 
            const id = "#" + svg('svg').attr().id.toString()

            // Append tag to svg
            svg('svg').prepend(tagv);
            
            // Create Path to save SVG and write file
            const p2sSVG = '../svg/' + filename + ".svg"
            fs.writeFileSync(p2sSVG, svg.html().toString(), "utf8")
            console.log("saving it here: " + p2sSVG);

            // Create geoJSON save path and convert to geoJSON


            geoFromSVGFile( p2sSVG, layer => {
                console.log(layer);
                let json = JSON.stringify(layer.geo); // Turn JS object into JSON string
                console.log(json);
                const xml2string = JSON.stringify(layer)
                const p2sXML = '../geoJSON/' + filename + ".geoJSON"
                fs.writeFileSync(p2sXML, xml2string, "utf8")

            });
            



         }else{
             
             // NO svg found
         }
         
    }

    //get file ext
  
});

// First run check if any in there