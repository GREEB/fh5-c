const chokidar = require('chokidar');
const fs = require('fs')
const { geoFromSVGFile } = require('./svg2geojson/lib/svg2geojson');
const cheerio = require('cheerio');

console.log("Looking for files to edit 🔍");

chokidar.watch('../svg', { ignoreInitial: true, awaitWriteFinish: { stabilityThreshold: 5000, pollInterval: 100 } }).on('add', (path) => {
    const filename = path.split("/").pop().split('.')[0];  // Get Filename
    if (path.match(/\.[0-9a-z]+$/i)) { // Only pass non Null items
        if (path.match(/\.[0-9a-z]+$/i)[0] === ".svg") { // Look for SVG
            console.log("✨ Found" + path + " to edit ")
            const svgv = fs.readFileSync('./' + path, 'utf8') // Read Files
            const tagv = fs.readFileSync('./tag.xml', 'utf8') // Read Files
            const svg = cheerio.load(svgv, { xml: { normalizeWhitespace: false, } }) // Load as XML
            const id = `# ${svg('svg').attr().id.toString()}` // Get SVG id
            svg('svg').prepend(tagv) // Append tag to svg
            const p2sSVG = `../svg/${filename}.svg` // Create Path to save SVG and write file
            fs.writeFileSync(p2sSVG, svg.html().toString(), "utf8") // Write File

            console.log(`🖼 saving svg here: ${p2sSVG}`);
            console.log(`🌎 Creating geoJSON`);
            geoFromSVGFile( p2sSVG, layers => {
                layers.forEach( layer => {
                    const xml2string = JSON.stringify(layer)
                    const p2sgJSON = `../geoJSON/${filename}-${layer.name}.geoJSON`
                    fs.writeFileSync(p2sgJSON, xml2string, "utf8") // Write File
                    console.log(`📁 saving geoJSON layer ${layer.name} here: ${p2sgJSON}`);
                });

            }, {layers:true, precision:8} );
            
           


            // // One Layer
            // geoFromSVGFile(p2sSVG, layer => { // Create geoJSON save path and convert to geoJSON
            //     const xml2string = JSON.stringify(layer)
            //     const p2sXML = '../geoJSON/' + filename + ".geoJSON"
            //     fs.writeFileSync(p2sXML, xml2string, "utf8") // Write File
            // });

            
        }
    }
});