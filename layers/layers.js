var wms_layers = [];


        var lyr_OutdoorBaseMap_0 = new ol.layer.Tile({
            'title': 'Outdoor Base Map',
            'type': 'base',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=048626d753d84bb495eae62a10e5787d'
            })
        });
var format_PotentialforSenseofPlaceDevelopmentonTAM_1 = new ol.format.GeoJSON();
var features_PotentialforSenseofPlaceDevelopmentonTAM_1 = format_PotentialforSenseofPlaceDevelopmentonTAM_1.readFeatures(json_PotentialforSenseofPlaceDevelopmentonTAM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialforSenseofPlaceDevelopmentonTAM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialforSenseofPlaceDevelopmentonTAM_1.addFeatures(features_PotentialforSenseofPlaceDevelopmentonTAM_1);
var lyr_PotentialforSenseofPlaceDevelopmentonTAM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotentialforSenseofPlaceDevelopmentonTAM_1, 
                style: style_PotentialforSenseofPlaceDevelopmentonTAM_1,
                interactive: true,
    title: 'Potential for Sense of Place Development on TAM<br />\
    <img src="styles/legend/PotentialforSenseofPlaceDevelopmentonTAM_1_0.png" /> Low or no potential<br />\
    <img src="styles/legend/PotentialforSenseofPlaceDevelopmentonTAM_1_1.png" /> Limited potential<br />\
    <img src="styles/legend/PotentialforSenseofPlaceDevelopmentonTAM_1_2.png" /> Good potential<br />\
    <img src="styles/legend/PotentialforSenseofPlaceDevelopmentonTAM_1_3.png" /> Strong potential<br />'
        });
var format_PotentialforSenseofPlaceDevelopmentonRoads_2 = new ol.format.GeoJSON();
var features_PotentialforSenseofPlaceDevelopmentonRoads_2 = format_PotentialforSenseofPlaceDevelopmentonRoads_2.readFeatures(json_PotentialforSenseofPlaceDevelopmentonRoads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotentialforSenseofPlaceDevelopmentonRoads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotentialforSenseofPlaceDevelopmentonRoads_2.addFeatures(features_PotentialforSenseofPlaceDevelopmentonRoads_2);
var lyr_PotentialforSenseofPlaceDevelopmentonRoads_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotentialforSenseofPlaceDevelopmentonRoads_2, 
                style: style_PotentialforSenseofPlaceDevelopmentonRoads_2,
                interactive: true,
    title: 'Potential for Sense of Place Development on Roads<br />\
    <img src="styles/legend/PotentialforSenseofPlaceDevelopmentonRoads_2_0.png" /> Low or no potential<br />\
    <img src="styles/legend/PotentialforSenseofPlaceDevelopmentonRoads_2_1.png" /> Limited potential<br />\
    <img src="styles/legend/PotentialforSenseofPlaceDevelopmentonRoads_2_2.png" /> Good potential<br />\
    <img src="styles/legend/PotentialforSenseofPlaceDevelopmentonRoads_2_3.png" /> Strong potential<br />'
        });
var format_OutdoorRecreationAreas_3 = new ol.format.GeoJSON();
var features_OutdoorRecreationAreas_3 = format_OutdoorRecreationAreas_3.readFeatures(json_OutdoorRecreationAreas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutdoorRecreationAreas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutdoorRecreationAreas_3.addFeatures(features_OutdoorRecreationAreas_3);
var lyr_OutdoorRecreationAreas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OutdoorRecreationAreas_3, 
                style: style_OutdoorRecreationAreas_3,
                interactive: true,
                title: '<img src="styles/legend/OutdoorRecreationAreas_3.png" /> Outdoor Recreation Areas'
            });
var format_SuggestedLandscaping_4 = new ol.format.GeoJSON();
var features_SuggestedLandscaping_4 = format_SuggestedLandscaping_4.readFeatures(json_SuggestedLandscaping_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuggestedLandscaping_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuggestedLandscaping_4.addFeatures(features_SuggestedLandscaping_4);
var lyr_SuggestedLandscaping_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuggestedLandscaping_4, 
                style: style_SuggestedLandscaping_4,
                interactive: true,
                title: '<img src="styles/legend/SuggestedLandscaping_4.png" /> Suggested Landscaping'
            });
var format_SuggestedBikePath_5 = new ol.format.GeoJSON();
var features_SuggestedBikePath_5 = format_SuggestedBikePath_5.readFeatures(json_SuggestedBikePath_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuggestedBikePath_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuggestedBikePath_5.addFeatures(features_SuggestedBikePath_5);
var lyr_SuggestedBikePath_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuggestedBikePath_5, 
                style: style_SuggestedBikePath_5,
                interactive: true,
                title: '<img src="styles/legend/SuggestedBikePath_5.png" /> Suggested Bike Path'
            });
var format_HighRiskAbbeyPondIntersection_6 = new ol.format.GeoJSON();
var features_HighRiskAbbeyPondIntersection_6 = format_HighRiskAbbeyPondIntersection_6.readFeatures(json_HighRiskAbbeyPondIntersection_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighRiskAbbeyPondIntersection_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighRiskAbbeyPondIntersection_6.addFeatures(features_HighRiskAbbeyPondIntersection_6);
var lyr_HighRiskAbbeyPondIntersection_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HighRiskAbbeyPondIntersection_6, 
                style: style_HighRiskAbbeyPondIntersection_6,
                interactive: true,
                title: '<img src="styles/legend/HighRiskAbbeyPondIntersection_6.png" /> High Risk Abbey Pond Intersection'
            });
var format_TAMIntersections_7 = new ol.format.GeoJSON();
var features_TAMIntersections_7 = format_TAMIntersections_7.readFeatures(json_TAMIntersections_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMIntersections_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMIntersections_7.addFeatures(features_TAMIntersections_7);
var lyr_TAMIntersections_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TAMIntersections_7, 
                style: style_TAMIntersections_7,
                interactive: true,
    title: 'TAM Intersections<br />\
    <img src="styles/legend/TAMIntersections_7_0.png" /> High Risk Intersection<br />\
    <img src="styles/legend/TAMIntersections_7_1.png" /> Medium Risk Intersection<br />\
    <img src="styles/legend/TAMIntersections_7_2.png" /> Low Risk Intersection<br />'
        });

lyr_OutdoorBaseMap_0.setVisible(true);lyr_PotentialforSenseofPlaceDevelopmentonTAM_1.setVisible(true);lyr_PotentialforSenseofPlaceDevelopmentonRoads_2.setVisible(true);lyr_OutdoorRecreationAreas_3.setVisible(true);lyr_SuggestedLandscaping_4.setVisible(true);lyr_SuggestedBikePath_5.setVisible(true);lyr_HighRiskAbbeyPondIntersection_6.setVisible(true);lyr_TAMIntersections_7.setVisible(true);
var layersList = [lyr_OutdoorBaseMap_0,lyr_PotentialforSenseofPlaceDevelopmentonTAM_1,lyr_PotentialforSenseofPlaceDevelopmentonRoads_2,lyr_OutdoorRecreationAreas_3,lyr_SuggestedLandscaping_4,lyr_SuggestedBikePath_5,lyr_HighRiskAbbeyPondIntersection_6,lyr_TAMIntersections_7];
lyr_PotentialforSenseofPlaceDevelopmentonTAM_1.set('fieldAliases', {'Name': 'Name', 'Safety': 'Safety', 'Social': 'Social', 'Land': 'Land', 'Routines': 'Routines', 'Access': 'Access', 'Potential': 'Potential', });
lyr_PotentialforSenseofPlaceDevelopmentonRoads_2.set('fieldAliases', {'Road Name': 'Road Name', 'Safety': 'Safety', 'Social': 'Social', 'Land': 'Land', 'Routines': 'Routines', 'Access': 'Access', 'Potential': 'Potential', });
lyr_OutdoorRecreationAreas_3.set('fieldAliases', {'Park Name': 'Park Name', });
lyr_SuggestedLandscaping_4.set('fieldAliases', {'Name': 'Name', 'Suggestion': 'Suggestion', });
lyr_SuggestedBikePath_5.set('fieldAliases', {'Suggestion': 'Suggestion', });
lyr_HighRiskAbbeyPondIntersection_6.set('fieldAliases', {'Name': 'Name', 'Traffic': 'Traffic', 'Speed MPH': 'Speed MPH', 'Sidewalk?': 'Sidewalk?', 'Video': 'Video', });
lyr_TAMIntersections_7.set('fieldAliases', {'Name': 'Name', 'Traffic': 'Traffic', 'Speed MPH': 'Speed MPH', 'Sidewalk?': 'Sidewalk?', 'Video': 'Video', });
lyr_PotentialforSenseofPlaceDevelopmentonTAM_1.set('fieldImages', {'Name': 'TextEdit', 'Safety': 'TextEdit', 'Social': 'TextEdit', 'Land': 'TextEdit', 'Routines': 'TextEdit', 'Access': 'TextEdit', 'Potential': 'TextEdit', });
lyr_PotentialforSenseofPlaceDevelopmentonRoads_2.set('fieldImages', {'Road Name': 'TextEdit', 'Safety': 'TextEdit', 'Social': 'TextEdit', 'Land': 'TextEdit', 'Routines': 'TextEdit', 'Access': 'TextEdit', 'Potential': 'TextEdit', });
lyr_OutdoorRecreationAreas_3.set('fieldImages', {'Park Name': 'TextEdit', });
lyr_SuggestedLandscaping_4.set('fieldImages', {'Name': '', 'Suggestion': '', });
lyr_SuggestedBikePath_5.set('fieldImages', {'Suggestion': 'TextEdit', });
lyr_HighRiskAbbeyPondIntersection_6.set('fieldImages', {'Name': 'TextEdit', 'Traffic': 'TextEdit', 'Speed MPH': 'Range', 'Sidewalk?': 'TextEdit', 'Video': 'TextEdit', });
lyr_TAMIntersections_7.set('fieldImages', {'Name': 'TextEdit', 'Traffic': 'TextEdit', 'Speed MPH': 'Range', 'Sidewalk?': 'TextEdit', 'Video': 'TextEdit', });
lyr_PotentialforSenseofPlaceDevelopmentonTAM_1.set('fieldLabels', {'Name': 'header label', 'Safety': 'inline label', 'Social': 'inline label', 'Land': 'inline label', 'Routines': 'inline label', 'Access': 'inline label', 'Potential': 'inline label', });
lyr_PotentialforSenseofPlaceDevelopmentonRoads_2.set('fieldLabels', {'Road Name': 'header label', 'Safety': 'inline label', 'Social': 'inline label', 'Land': 'inline label', 'Routines': 'inline label', 'Access': 'inline label', 'Potential': 'inline label', });
lyr_OutdoorRecreationAreas_3.set('fieldLabels', {'Park Name': 'header label', });
lyr_SuggestedLandscaping_4.set('fieldLabels', {'Name': 'header label', 'Suggestion': 'inline label', });
lyr_SuggestedBikePath_5.set('fieldLabels', {'Suggestion': 'header label', });
lyr_HighRiskAbbeyPondIntersection_6.set('fieldLabels', {'Name': 'header label', 'Traffic': 'inline label', 'Speed MPH': 'inline label', 'Sidewalk?': 'inline label', 'Video': 'inline label', });
lyr_TAMIntersections_7.set('fieldLabels', {'Name': 'header label', 'Traffic': 'inline label', 'Speed MPH': 'inline label', 'Sidewalk?': 'inline label', 'Video': 'inline label', });
lyr_TAMIntersections_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});