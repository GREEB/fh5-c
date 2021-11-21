# FH5-Cartography
Make FH5 map into a real map. Done manually..., also known as a "fantasy map", google has not really the answers for this one, after a lot of searching i found this method worked for me, writing down stuff so i dont forget, other ways may be possible.

#### Current Progress

21/11

![Artboard 1](https://user-images.githubusercontent.com/1221769/142762755-3c3aa68a-9f67-4e6e-b374-201e92351fa4.png)


20/11
![image](https://user-images.githubusercontent.com/1221769/142715173-7ee2f695-2b71-40aa-972b-56766d50ec63.png)

19/11
![](https://i.imgur.com/7vDjxjs.png)
## Goal
Create SVG of FH5 map and convert it to a valid geoJson or similar format to use as a basmap in QGIS or similar.


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

Tools Used:

Adobe Illustator 23.1

QGis 3.22.1-Białowieża

JOSM 18303

Inkscape 1.1.1

https://github.com/mapbox/svg-to-geojson

https://www.npmjs.com/package/svg2geojson