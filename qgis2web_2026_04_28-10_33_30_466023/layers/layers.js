var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Monitoreo_AndresBuitrago_1 = new ol.format.GeoJSON();
var features_Monitoreo_AndresBuitrago_1 = format_Monitoreo_AndresBuitrago_1.readFeatures(json_Monitoreo_AndresBuitrago_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monitoreo_AndresBuitrago_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monitoreo_AndresBuitrago_1.addFeatures(features_Monitoreo_AndresBuitrago_1);
var lyr_Monitoreo_AndresBuitrago_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monitoreo_AndresBuitrago_1, 
                style: style_Monitoreo_AndresBuitrago_1,
                popuplayertitle: 'Monitoreo_Andres Buitrago.',
                interactive: true,
                title: '<img src="styles/legend/Monitoreo_AndresBuitrago_1.png" /> Monitoreo_Andres Buitrago.'
            });
var format_mascaratrabajo_2 = new ol.format.GeoJSON();
var features_mascaratrabajo_2 = format_mascaratrabajo_2.readFeatures(json_mascaratrabajo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mascaratrabajo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mascaratrabajo_2.addFeatures(features_mascaratrabajo_2);
var lyr_mascaratrabajo_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mascaratrabajo_2, 
                style: style_mascaratrabajo_2,
                popuplayertitle: 'mascara trabajo ',
                interactive: true,
                title: '<img src="styles/legend/mascaratrabajo_2.png" /> mascara trabajo '
            });
var format_curvasdenivel_3 = new ol.format.GeoJSON();
var features_curvasdenivel_3 = format_curvasdenivel_3.readFeatures(json_curvasdenivel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_curvasdenivel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_curvasdenivel_3.addFeatures(features_curvasdenivel_3);
var lyr_curvasdenivel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_curvasdenivel_3, 
                style: style_curvasdenivel_3,
                popuplayertitle: 'curvas de nivel',
                interactive: true,
                title: '<img src="styles/legend/curvasdenivel_3.png" /> curvas de nivel'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Monitoreo_AndresBuitrago_1.setVisible(true);lyr_mascaratrabajo_2.setVisible(true);lyr_curvasdenivel_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Monitoreo_AndresBuitrago_1,lyr_mascaratrabajo_2,lyr_curvasdenivel_3];
lyr_Monitoreo_AndresBuitrago_1.set('fieldAliases', {'1.': '1.', '2. Este (m': '2. Este (m', '3. Norte (': '3. Norte (', '3. PM10': '3. PM10', '4. PM2.5': '4. PM2.5', '5. Temp': '5. Temp', '6. Cont A': '6. Cont A', '7. Cont B': '7. Cont B', });
lyr_mascaratrabajo_2.set('fieldAliases', {'id': 'id', });
lyr_curvasdenivel_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', '6. Cont A': '6. Cont A', });
lyr_Monitoreo_AndresBuitrago_1.set('fieldImages', {'1.': '', '2. Este (m': '', '3. Norte (': '', '3. PM10': '', '4. PM2.5': '', '5. Temp': '', '6. Cont A': '', '7. Cont B': '', });
lyr_mascaratrabajo_2.set('fieldImages', {'id': '', });
lyr_curvasdenivel_3.set('fieldImages', {'fid': '', 'ID': '', '6. Cont A': '', });
lyr_Monitoreo_AndresBuitrago_1.set('fieldLabels', {'1.': 'no label', '2. Este (m': 'no label', '3. Norte (': 'no label', '3. PM10': 'no label', '4. PM2.5': 'no label', '5. Temp': 'no label', '6. Cont A': 'no label', '7. Cont B': 'no label', });
lyr_mascaratrabajo_2.set('fieldLabels', {'id': 'no label', });
lyr_curvasdenivel_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', '6. Cont A': 'no label', });
lyr_curvasdenivel_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});