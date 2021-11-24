<img align="left" src="https://user-images.githubusercontent.com/1221769/142766338-a170a3a3-d685-4668-b518-d25c31055990.png">

# FH5-Cartography
![Adobe Illustrator](https://img.shields.io/badge/Illustrator%2023.1-%23FF9A00.svg?style=flat-square&logo=adobeillustrator&logoColor=white)

Create FH5 map into a real map. Also known as a "fantasy map".

<p align="center">
  <img width="100%" src="https://user-images.githubusercontent.com/1221769/143173486-fc2f2cd2-d9cc-416f-8066-8dc707ada3b8.png">
</p>


Use this as a sample project if you wanna create your won fantasy map, most important thing for converting a SVG to geoJSON is to have a clean SVG no points that start and end at the same point. (Clean up... in Illustrator fixes this), no curves make sure you add anchors and then simplify again.

### To do


WIP, please consider contributing.


#### Layer Trace lvl

Tracing quality of layers. Most important to have perfect is the road tracing, least important are Polygons for Geography

**Perfectly** (Game verified as good as possible)
 - Nothing
  
**Good** (Best we can do from satellite image)
- Nothing

**Quick** (So we have data to work with quick but usable)
- Roads (WIP. 99% roads traced, intersections WIP, Bridges WIP)
- Geography (WIP, Water done, Greens WIP, Others still need to be done)
- Buildings (very simple for now)
- Bridges (50% done)


## Goal
Create SVG of FH5 map and convert it to a valid geoJSON or similar format to use as a basmap in QGIS or similar.


### SVG TO GEOJSON


Illustrator - Object - Path - Clean up

Add Lines below directly in SVG tag root

````
<MetaInfo xmlns="http://www.prognoz.ru">
	<Geo>
		<GeoItem X="2148" Y="1435" Longitude="0.1" Latitude="-0.1" />
		<GeoItem X="0" Y="0" Longitude="-0.2" Latitude="0.1" />
	</Geo>
</MetaInfo>
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

[svgtogeojson](https://github.com/mapbox/svg-to-geojson)

[svg2geojson](https://www.npmjs.com/package/svg2geojson)

#### Current Progress picture

23/11
![Screen Shot 2021-11-24 at 4 52 56 AM](https://user-images.githubusercontent.com/1221769/143172218-6589e872-dcad-45d2-acd9-b57a6c4e8b2d.png)

21/11
![Screen Shot 2021-11-21 at 5 53 56 PM](https://user-images.githubusercontent.com/1221769/142771444-29a71126-d28c-4a67-8770-5ba05cb1c0d5.png)

![Artboard 1](https://user-images.githubusercontent.com/1221769/142762755-3c3aa68a-9f67-4e6e-b374-201e92351fa4.png)


20/11
![image](https://user-images.githubusercontent.com/1221769/142715173-7ee2f695-2b71-40aa-972b-56766d50ec63.png)

19/11
![](https://i.imgur.com/7vDjxjs.png)


### Notes
Things you cant have in your svg is lines with less than 2 vertices

You can clean up the singlepoints in Illustrator with Clean up...

To add vertices later to lines so you can still draw lines with 2 vertices.
 QGIS -> vector -> geometry tools -> densify 
