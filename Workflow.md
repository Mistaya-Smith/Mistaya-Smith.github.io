## Outdoor Map Layer
[Source](https://cloud.maptiler.com/maps/outdoor/leaflet-gl)
1. Download the maptiler QGIS plug-in
2. Create an account on [Thunderforest](https://www.thunderforest.com/)
3. On QGIS, scroll down to the bottom of your Browser panel
    1. Right click on XYZ Tiles
    2. Select "New Connection"
4. Log in to the Thunderforest website, navigate to your dashboard, and scroll down to the "Tile Layer URLs" section
    1. Copy the URL, including the API key, for the "Outdoor Map"
5. Navigate back to the QGIS "New Connection" box
    1. Name: Outdoor Map
       URL: *paste URL from Thunderforest*
       Press OK
6. Drag the "Outdoor Map" from under XYZ Tiles onto the QGIS page to add base map layer

## Tam Segments
1. Turn on digitizing and snapping toolbars
2. Create new line Shapefile layer
    1. Save as "TAM.shp" to file
    2. Create new field labeled "Segment Name"
3. Enable snapping on all layers
4. Enable tracing
5. Toggle editing on TAM layer
6. Trace TAM outline from Outdoor Map Layer
    1. For each segment of the TAM (ex: Class of '97 trail'), left click and enter name of segment in "Segment Name" field
    2. Some segments may need to be saved in multiple sections to avoid double tracing an area. This is okay.
7. Once the full TAM has been traced, open the 'Dissolve' tool
    1. Input layer: TAM.shp
       Dissolve fields: Segment Name  
       Save as: TAM_Segments_noRP
8. Open reproject layer to reproject the TAM in line with the base map CRS
    1. Input layer: TAM_Segments_noRP
       Target CRS: ESPG:3857 - WGS 84/Pseudo-Mercator
       Save as: TAM_Segments.shp
9. Open the attribute field
    1. Add five new text fields: Safety, Social, Land, Routines, Access, Road Name. Enter observation scores here as well as observations.
    2. Add one new integer field: Potential. Use field calculator to find composite score of Safety, Social, Land, Routines, and Access fields.
10. Optional additional step: delete all fields in attribute table that you do not wish to appear in the hover-over feature on the leaflet map.

## Midd Roads
[Source](https://geodata.vermont.gov/datasets/vt-data-e911-road-centerlines-1/explore?filters=eyJMVFdOIjpbIk1JRERMRUJVUlkiXX0%3D&location=44.016371%2C-73.167120%2C12.00)
1. Download e911 roads data as Shapefile and drag in QGIS
2. Use 'Select Features by Value' to select all roads where LTWN = MIDDLEBURY
3. Toggle editing on e911 roads and open attribute table
    1. Invert selection
    2. Delete features
4. Open the 'Dissolve' tool
    1. Input layer: e911_roads.shp
       Dissolve fields: PRIMARYNAM
       Save as: Midd_Roads.shp
5. Open the attribute field
    1. Add five new text fields: Safety, Social, Land, Routines, Access, Road Name. Enter observation scores here.
    2. Add one new integer field: Potential. Use field calculator to find composite score of Safety, Social, Land, Routines, and Access fields.
6. In properties, change symbology to graduated.
    1. Set value to 'potential'. You can also use this same method to represent safety, social, land, routines, and access.
    2. Apply the RdYlGrn color ramp so that areas with low potential for creating sense of place are red and areas with higher potential are green. Set yellow to the middle value.
7. Optional additional step: delete all fields in attribute table that you do not wish to appear in the hover-over feature on the leaflet map.

## Suggested Bike Path Layer
1. Turn on digitizing and snapping toolbars
2. Create new line Shapefile layer
    1. Save as "Bike_Path.shp" to file
    2. Create new field labeled 'Suggestion' and write in "Bike Path".
3. Enable snapping on all layers
4. Enable tracing
5. Toggle editing on Bike Path layer
6. Trace Quarry Road and Case Street on Midd Roads layer
7. Optional additional step: delete all fields in attribute table that you do not wish to appear in the hover-over feature on the leaflet map.

## High, Medium, Low Risk TAM Intersections
These layers were created in three separate layers as part of a work around for the SVG symbol color representation on the leaflet webmap. This series of steps should therefore by repeated for each of these three layers.
1. Open the Line Intersections tool.
    1. Input layer: Middlebury roads  
       Intersect layer: TAM Segments  
       Input fields: Road Name  
       Intersect fields: TAM Segment Name  
       Save as: High/Medium/Low_Risk_TAM_Intersection.shp  
2. In attribute table, add three new fields.
    1. Add one text field with length of 10 labeled "Sidewalk?". Write yes or no, indicating there is or is not a sidewalk at this intersection.
    2. Add one text field with length of 10 labeled "Traffic". Write high/medium/low, indicating the traffic level at this intersection.
    3. Add one integer field labeled "Speed MPH" and enter the speed limit on the intersecting street.
3. Delete all features except the following and fill in attribute table as indicated below:
    1. For low traffic areas:  
    Middle Road North: low traffic, N/A speed limit, yes sidewalk  
    Peterson Terrace: low traffic, N/A speed limit, no sidewalk  
    Seymour Street Ext: low traffic, 25 MPH, no sidewalk   
    2. For medium traffic areas:  
    South Street Ext: medium traffic, 35 MPH, no sidewalk  
    Creek Road: medium traffic, N/A speed limit, yes sidewalk  
    High Street: medium traffic, 25 MPH, no sidewalk  
    3. For high traffic areas:  
    Seminary Street Ext: high traffic, 50 MPH, no sidewalk  
    Route 30: high traffic, 50 MPH, no sidewalk  
    Route 7 South: high traffic, 50 MPH, no sidewalk  
    Washington Street Ext: high traffic, 35 MPH, yes sidewalk  
    Court Street: high traffic, 50 MPH, no sidewalk  
4. In symbology, change symbol to a yellow circle of 2mm for low traffic area, a orange circle of 3mm for medium traffic, and a red circle of 4mm for high traffic.
5. Optional additional step: delete all fields in attribute table that you do not wish to appear in the hover-over feature on the leaflet map.

## Abbey Pond Intersection Layer
1. Use the select features by area tool and select both Mead Lane and Court Street.
2. Open the Line Intersections tool.
    1. Input: Middlebury roads (selected features only)  
       Intersecting layer: Middlebury roads (selected features only)  
       Input fields: Road Name
       Intersect fields: Road Name
       Save as: Abbey_Pond_Intersection.shp
3. Delete all features except one intersection of Mead Lane and Court Street.
4. In properties, change symbol type to a red circle with red stroke color. Change size to 4 millimeters.
5. In attribute table, add three new fields.
    1. Add one text field with length of 10 labeled "Sidewalk?". Write no, indicating there is no sidewalk at this intersection.
    2. Add one text field with length of 10 labeled "Traffic". Write high, indicating there is high traffic at this intersection.
    3. Add one integer field labeled "Speed MPH" and enter the speed limit of 50MPH on Case Street.
6. Optional additional step: delete all fields in attribute table that you do not wish to appear in the hover-over feature on the leaflet map.

## Suggested Landscaping Intersection
1. Use the select features by area tool and, by pressing the shift key, select both East Main Street, School House Road, Mary Hogan Drive, and Court Street.
2. Open the Line Intersections tool.
    1. Input layer: Middlebury roads (selected features only)  
       Intersect layer: Middlebury roads (selected features only)  
       Input fields: Road Name
       Intersect fields: Road Name
       Save as: Suggested_Landscaping.shp
3. Delete all features except one intersection of East Main Street and School House Road, and one intersection of Mary Hogan Drive and Court Street.
4. In properties, change symbol type to SVG symbol and select a tree.
5. In attribute table, add field labeled 'Suggestion' and write brief explanation of why landscaping should be added to increase pedestrian comfort in high traffic areas.
6. Optional additional step: delete all fields in attribute table that you do not wish to appear in the hover-over feature on the leaflet map.

## Outdoor recreation layer  
1. Create a new shapefile layer  
    1. Save As: Outdoor_Recreation_Spaces.shp  
       Geometry type: multi-point  
       Name: Park Name  
       ESPG3857 - WGS 84  
2. Toggle on editing on Outdoor Recreation layer
3. Use the add point feature tool to create a point on Battell Woods, Means Woods, Chipman Hill, Abbey Pond, and Wright Park.
4. For each point, enter name into Park Name field.
5. In properties, open the symbology and change symbol from single symbol to SVG symbol. Select symbol of a walking person.  
