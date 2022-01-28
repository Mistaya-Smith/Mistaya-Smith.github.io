var wms_layers = [];


        var lyr_OutdoorMap_0 = new ol.layer.Tile({
            'title': 'OutdoorMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
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
var format_SuggestedBikePath_3 = new ol.format.GeoJSON();
var features_SuggestedBikePath_3 = format_SuggestedBikePath_3.readFeatures(json_SuggestedBikePath_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuggestedBikePath_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuggestedBikePath_3.addFeatures(features_SuggestedBikePath_3);
var lyr_SuggestedBikePath_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuggestedBikePath_3, 
                style: style_SuggestedBikePath_3,
                interactive: true,
                title: '<img src="styles/legend/SuggestedBikePath_3.png" /> Suggested Bike Path'
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
var format_OutdoorRecreationAreas_5 = new ol.format.GeoJSON();
var features_OutdoorRecreationAreas_5 = format_OutdoorRecreationAreas_5.readFeatures(json_OutdoorRecreationAreas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutdoorRecreationAreas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutdoorRecreationAreas_5.addFeatures(features_OutdoorRecreationAreas_5);
var lyr_OutdoorRecreationAreas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OutdoorRecreationAreas_5, 
                style: style_OutdoorRecreationAreas_5,
                interactive: true,
                title: '<img src="styles/legend/OutdoorRecreationAreas_5.png" /> Outdoor Recreation Areas'
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
var format_HighRiskTAMIntersections_7 = new ol.format.GeoJSON();
var features_HighRiskTAMIntersections_7 = format_HighRiskTAMIntersections_7.readFeatures(json_HighRiskTAMIntersections_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighRiskTAMIntersections_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighRiskTAMIntersections_7.addFeatures(features_HighRiskTAMIntersections_7);
var lyr_HighRiskTAMIntersections_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HighRiskTAMIntersections_7, 
                style: style_HighRiskTAMIntersections_7,
                interactive: true,
                title: '<img src="styles/legend/HighRiskTAMIntersections_7.png" /> High Risk TAM Intersections'
            });
var format_MediumRiskTAMIntersections_8 = new ol.format.GeoJSON();
var features_MediumRiskTAMIntersections_8 = format_MediumRiskTAMIntersections_8.readFeatures(json_MediumRiskTAMIntersections_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MediumRiskTAMIntersections_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediumRiskTAMIntersections_8.addFeatures(features_MediumRiskTAMIntersections_8);
var lyr_MediumRiskTAMIntersections_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MediumRiskTAMIntersections_8, 
                style: style_MediumRiskTAMIntersections_8,
                interactive: true,
                title: '<img src="styles/legend/MediumRiskTAMIntersections_8.png" /> Medium Risk TAM Intersections'
            });
var format_LowRiskTAMIntersections_9 = new ol.format.GeoJSON();
var features_LowRiskTAMIntersections_9 = format_LowRiskTAMIntersections_9.readFeatures(json_LowRiskTAMIntersections_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LowRiskTAMIntersections_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LowRiskTAMIntersections_9.addFeatures(features_LowRiskTAMIntersections_9);
var lyr_LowRiskTAMIntersections_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LowRiskTAMIntersections_9, 
                style: style_LowRiskTAMIntersections_9,
                interactive: true,
                title: '<img src="styles/legend/LowRiskTAMIntersections_9.png" /> Low Risk TAM Intersections'
            });

lyr_OutdoorMap_0.setVisible(true);lyr_PotentialforSenseofPlaceDevelopmentonTAM_1.setVisible(true);lyr_PotentialforSenseofPlaceDevelopmentonRoads_2.setVisible(true);lyr_SuggestedBikePath_3.setVisible(true);lyr_SuggestedLandscaping_4.setVisible(true);lyr_OutdoorRecreationAreas_5.setVisible(true);lyr_HighRiskAbbeyPondIntersection_6.setVisible(true);lyr_HighRiskTAMIntersections_7.setVisible(true);lyr_MediumRiskTAMIntersections_8.setVisible(true);lyr_LowRiskTAMIntersections_9.setVisible(true);
var layersList = [lyr_OutdoorMap_0,lyr_PotentialforSenseofPlaceDevelopmentonTAM_1,lyr_PotentialforSenseofPlaceDevelopmentonRoads_2,lyr_SuggestedBikePath_3,lyr_SuggestedLandscaping_4,lyr_OutdoorRecreationAreas_5,lyr_HighRiskAbbeyPondIntersection_6,lyr_HighRiskTAMIntersections_7,lyr_MediumRiskTAMIntersections_8,lyr_LowRiskTAMIntersections_9];
lyr_PotentialforSenseofPlaceDevelopmentonTAM_1.set('fieldAliases', {'Name': 'Name', 'Safety': 'Safety', 'Social': 'Social', 'Land': 'Land', 'Routines': 'Routines', 'Access': 'Access', 'Potential': 'Potential', });
lyr_PotentialforSenseofPlaceDevelopmentonRoads_2.set('fieldAliases', {'Road Name': 'Road Name', 'Safety': 'Safety', 'Social': 'Social', 'Land': 'Land', 'Routines': 'Routines', 'Access': 'Access', 'Potential': 'Potential', });
lyr_SuggestedBikePath_3.set('fieldAliases', {'Suggestion': 'Suggestion', });
lyr_SuggestedLandscaping_4.set('fieldAliases', {'Name': 'Name', 'Suggestion': 'Suggestion', });
lyr_OutdoorRecreationAreas_5.set('fieldAliases', {'Park Name': 'Park Name', });
lyr_HighRiskAbbeyPondIntersection_6.set('fieldAliases', {'Name': 'Name', 'Traffic': 'Traffic', 'Speed MPH': 'Speed MPH', 'Sidewalk?': 'Sidewalk?', });
lyr_HighRiskTAMIntersections_7.set('fieldAliases', {'Name': 'Name', 'Traffic': 'Traffic', 'Speed MPH': 'Speed MPH', 'Sidewalk?': 'Sidewalk?', });
lyr_MediumRiskTAMIntersections_8.set('fieldAliases', {'Name': 'Name', 'Traffic': 'Traffic', 'Speed MPH': 'Speed MPH', 'Sidewalk?': 'Sidewalk?', });
lyr_LowRiskTAMIntersections_9.set('fieldAliases', {'Name': 'Name', 'Traffic': 'Traffic', 'Speed MPH': 'Speed MPH', 'Sidewalk?': 'Sidewalk?', });
lyr_PotentialforSenseofPlaceDevelopmentonTAM_1.set('fieldImages', {'Name': 'TextEdit', 'Safety': 'TextEdit', 'Social': 'TextEdit', 'Land': 'TextEdit', 'Routines': 'TextEdit', 'Access': 'TextEdit', 'Potential': 'TextEdit', });
lyr_PotentialforSenseofPlaceDevelopmentonRoads_2.set('fieldImages', {'Road Name': 'TextEdit', 'Safety': 'TextEdit', 'Social': 'TextEdit', 'Land': 'TextEdit', 'Routines': 'TextEdit', 'Access': 'TextEdit', 'Potential': 'TextEdit', });
lyr_SuggestedBikePath_3.set('fieldImages', {'Suggestion': 'TextEdit', });
lyr_SuggestedLandscaping_4.set('fieldImages', {'Name': '', 'Suggestion': '', });
lyr_OutdoorRecreationAreas_5.set('fieldImages', {'Park Name': 'TextEdit', });
lyr_HighRiskAbbeyPondIntersection_6.set('fieldImages', {'Name': 'TextEdit', 'Traffic': 'TextEdit', 'Speed MPH': 'Range', 'Sidewalk?': 'TextEdit', });
lyr_HighRiskTAMIntersections_7.set('fieldImages', {'Name': 'TextEdit', 'Traffic': 'TextEdit', 'Speed MPH': 'Range', 'Sidewalk?': 'TextEdit', });
lyr_MediumRiskTAMIntersections_8.set('fieldImages', {'Name': 'TextEdit', 'Traffic': 'TextEdit', 'Speed MPH': 'Range', 'Sidewalk?': 'TextEdit', });
lyr_LowRiskTAMIntersections_9.set('fieldImages', {'Name': 'TextEdit', 'Traffic': 'TextEdit', 'Speed MPH': 'Range', 'Sidewalk?': 'TextEdit', });
lyr_PotentialforSenseofPlaceDevelopmentonTAM_1.set('fieldLabels', {'Name': 'header label', 'Safety': 'inline label', 'Social': 'inline label', 'Land': 'inline label', 'Routines': 'inline label', 'Access': 'inline label', 'Potential': 'inline label', });
lyr_PotentialforSenseofPlaceDevelopmentonRoads_2.set('fieldLabels', {'Road Name': 'header label', 'Safety': 'inline label', 'Social': 'inline label', 'Land': 'inline label', 'Routines': 'inline label', 'Access': 'inline label', 'Potential': 'inline label', });
lyr_SuggestedBikePath_3.set('fieldLabels', {'Suggestion': 'header label', });
lyr_SuggestedLandscaping_4.set('fieldLabels', {'Name': 'header label', 'Suggestion': 'inline label', });
lyr_OutdoorRecreationAreas_5.set('fieldLabels', {'Park Name': 'header label', });
lyr_HighRiskAbbeyPondIntersection_6.set('fieldLabels', {'Name': 'header label', 'Traffic': 'inline label', 'Speed MPH': 'inline label', 'Sidewalk?': 'inline label', });
lyr_HighRiskTAMIntersections_7.set('fieldLabels', {'Name': 'header label', 'Traffic': 'inline label', 'Speed MPH': 'inline label', 'Sidewalk?': 'inline label', });
lyr_MediumRiskTAMIntersections_8.set('fieldLabels', {'Name': 'header label', 'Traffic': 'inline label', 'Speed MPH': 'inline label', 'Sidewalk?': 'inline label', });
lyr_LowRiskTAMIntersections_9.set('fieldLabels', {'Name': 'header label', 'Traffic': 'inline label', 'Speed MPH': 'inline label', 'Sidewalk?': 'inline label', });
lyr_LowRiskTAMIntersections_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});