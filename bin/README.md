bin as in rubbish bin mate 
# FH5-Cartography
Make FH5 map into a real map. Done manually..., also known as a "fantasy map", google has not really the answers for this one, after a lot of searching i found this method worked for me, writing down stuff so i don't forget, other ways may be possible.

#### Current Progress
20/11
![image](https://user-images.githubusercontent.com/1221769/142715173-7ee2f695-2b71-40aa-972b-56766d50ec63.png)

19/11
![](https://i.imgur.com/7vDjxjs.png)
## Goal
Create SVG of FH5 map and convert it to a valid geoJSON or similar format to use as a basmap in QGIS or similar.

### Export SVG
To export a clean SVG you may need to delete layers you don't need for export.

#### Prep
Create new file copy with only needed layers. Name them ([TODO]this may not do anything).

![](https://via.placeholder.com/15/c5f015/000000?text=+) This is how it should look: (no subfloders)
![](https://i.imgur.com/9m99aXi.png)

![](https://via.placeholder.com/15/f03c15/000000?text=+#f03c15) It should NOT look like this. (no subfolders)
![](https://i.imgur.com/UUcOkts.png)
#### Export as
Save illustator file as svg Save as -> SVG
![](https://i.imgur.com/cy7JrfA.png)

## Clean SVG
I don't really know why this is needed maybe its not :D
Open SVG in Inkscape -> Copy all elements of the svg
Create new file in Inkscape -> Paste and group all in one group  (ctrl+shift+d opens settings to change project size)
![](https://i.imgur.com/Hiai72Z.png)
## Convert svg to geoJSON

This below is from: https://github.com/Phrogz/svg2geojson
#### Geo-Referencing Tags
You must place two `GeoItems` inside a [Prognoz MetaInfo](http://help.prognoz.com/8.0/en/mergedProjects/Specifications/svgmapspecification/structure/svgmap_structure.htm) element as a direct child of the `<svg>` element at the root of your document.

```
<MetaInfo xmlns="http://www.prognoz.ru"><Geo>
  <GeoItem X="-595.30" Y="-142.88" Latitude="37.375593" Longitude="-121.977795"/>
  <GeoItem X="1388.66" Y=" 622.34" Latitude="37.369930" Longitude="-121.959404"/>
</Geo></MetaInfo>
```

These map opposing X/Y corners in your SVG coordinate space to Longitude/Latitude coordinates on the world. _Note that the SVG coordinate space has Y increasing down (toward the south), while Latitude increases upwards (towards the north)._
```
$ npm install -g svg2geojson
$ svg2geojson file.svg          # Writes file.geojson
$ svg2geojson file.svg --layers # Writes file.geojson, file-layer1Name.geojson, …
# See svg2geojson --help for more parameters
```
Free (5mb max)
https://mygeodata.cloud/converter/svg-to-geojson


