var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Fenders_2 = new ol.format.GeoJSON();
var features_Fenders_2 = format_Fenders_2.readFeatures(json_Fenders_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fenders_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fenders_2.addFeatures(features_Fenders_2);
var lyr_Fenders_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fenders_2, 
                style: style_Fenders_2,
                popuplayertitle: 'Fenders',
                interactive: true,
                title: '<img src="styles/legend/Fenders_2.png" /> Fenders'
            });
var format_LaddersL_3 = new ol.format.GeoJSON();
var features_LaddersL_3 = format_LaddersL_3.readFeatures(json_LaddersL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaddersL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LaddersL_3.addFeatures(features_LaddersL_3);
var lyr_LaddersL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LaddersL_3, 
                style: style_LaddersL_3,
                popuplayertitle: 'Ladders — L',
                interactive: true,
                title: '<img src="styles/legend/LaddersL_3.png" /> Ladders — L'
            });
var format_ServiceShrouds_4 = new ol.format.GeoJSON();
var features_ServiceShrouds_4 = format_ServiceShrouds_4.readFeatures(json_ServiceShrouds_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceShrouds_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceShrouds_4.addFeatures(features_ServiceShrouds_4);
var lyr_ServiceShrouds_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceShrouds_4, 
                style: style_ServiceShrouds_4,
                popuplayertitle: 'Service Shrouds',
                interactive: true,
                title: '<img src="styles/legend/ServiceShrouds_4.png" /> Service Shrouds'
            });
var format_Berths_5 = new ol.format.GeoJSON();
var features_Berths_5 = format_Berths_5.readFeatures(json_Berths_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Berths_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Berths_5.addFeatures(features_Berths_5);
var lyr_Berths_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Berths_5, 
                style: style_Berths_5,
                popuplayertitle: 'Berths',
                interactive: true,
                title: '<img src="styles/legend/Berths_5.png" /> Berths'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_Fenders_2.setVisible(true);lyr_LaddersL_3.setVisible(true);lyr_ServiceShrouds_4.setVisible(true);lyr_Berths_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRISatellite_1,lyr_Fenders_2,lyr_LaddersL_3,lyr_ServiceShrouds_4,lyr_Berths_5];
lyr_Fenders_2.set('fieldAliases', {'fid': 'fid', 'Fender ID': 'Fender ID', });
lyr_LaddersL_3.set('fieldAliases', {'fid': 'fid', });
lyr_ServiceShrouds_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Available Power': 'Available Power', 'Metered': 'Metered', 'Notes:': 'Notes:', });
lyr_Berths_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Length': 'Length', 'Depth': 'Depth', });
lyr_Fenders_2.set('fieldImages', {'fid': '', 'Fender ID': '', });
lyr_LaddersL_3.set('fieldImages', {'fid': '', });
lyr_ServiceShrouds_4.set('fieldImages', {'fid': '', 'ID': '', 'Available Power': '', 'Metered': '', 'Notes:': '', });
lyr_Berths_5.set('fieldImages', {'fid': '', 'Name': '', 'Length': '', 'Depth': '', });
lyr_Fenders_2.set('fieldLabels', {'fid': 'no label', 'Fender ID': 'no label', });
lyr_LaddersL_3.set('fieldLabels', {'fid': 'no label', });
lyr_ServiceShrouds_4.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - visible with data', 'Available Power': 'inline label - visible with data', 'Metered': 'hidden field', 'Notes:': 'no label', });
lyr_Berths_5.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'Length': 'inline label - always visible', 'Depth': 'inline label - always visible', });
lyr_Berths_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});