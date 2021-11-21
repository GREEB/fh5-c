### SVG TO GEOJSON
![Adobe Illustrator](https://img.shields.io/badge/Illustrator%2023.1-%23FF9A00.svg?style=for-the-badge&logo=adobeillustrator&logoColor=white)

Illustrator - Object - Path - Clean up

Add Lines below directly in SVG tag root

````
<MetaInfo xmlns="http://www.prognoz.ru"><Geo>
  <GeoItem X="2148" Y="1435" Longitude="0.1" Latitude="-0.1" />
  <GeoItem X="0" Y="0" Longitude="-0.2" Latitude="0.1" />
</Geo></MetaInfo>
````

https://github.com/Phrogz/svg2geojson
```
$ npm install -g svg2geojson
$ svg2geojson file.svg          # Writes file.geojson
$ svg2geojson file.svg --layers # Writes file.geojson, file-layer1Name.geojson, …
# See svg2geojson --help for more parameters
```