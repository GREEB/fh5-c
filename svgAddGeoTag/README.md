## svg2json

As we know we need this tag added:
´´´´

<MetaInfo xmlns="http://www.prognoz.ru">
	<Geo>
		<GeoItem X="2148" Y="1435" Longitude="0.1" Latitude="-0.1" />
		<GeoItem X="0" Y="0" Longitude="-0.2" Latitude="0.1" />
	</Geo>
</MetaInfo>

´´´´
This little app if ran in the background will add the tag at the right place for you if you save a file in your svg folder.

It will also create a geoJSON and save it in the geoJSON folder.

Pretty handy with illustrator, you can save svgs into the svg folder and it will handle the rest for you. Be aware that this app does not look at file changes it only runs on new file, this can be changed if needed. Add a change watch to chokidar and run the same code. This could overwrite files you dont want to be overwritten.
Add your tag to tag.xml

