<template>
    <div style="height: 500px; width: 100%;">
        <l-map v-if="showMap" :zoom="zoom" :center="center" :options="mapOptions" style="height: 100%;" @update:center="centerUpdate" @update:zoom="zoomUpdate" :crs="crs" @click="handleMapClick">
            <l-wms-tile-layer v-for="layer in layers" :key="layer.name" :base-url="baseUrl" :layers="layer.layers" :visible="layer.visible" :name="layer.name" layer-type="base">
            </l-wms-tile-layer>
        </l-map>
        <div style="height: 50px overflow: auto;">
            <p>Center is at {{ currentCenter }} and the zoom is: {{ currentZoom }}</p>
        </div>
    </div>
</template>

<script>
import L from 'leaflet';
import {
    latLng
} from "leaflet";
import {
    LMap,
    LWMSTileLayer,
} from "vue2-leaflet";

import 'leaflet/dist/leaflet.css';
import "proj4leaflet";
// eslint-disable-next-line no-unused-vars
import proj4 from "proj4";

const swissCrs = new L.Proj.CRS(
    'EPSG:2056',
    '+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs', {
        resolutions: [
            100, 50, 20, 10, 5, 2.5, 2, 1.5, 1, 0.5, 0.25, 0.1, 0.05, 0.025, 0.0125, 0.00625, 0.003125
        ],
        origin: [2420000, 1350000]
    })

export default {
    name: "GbMap",
    components: {
        LMap,
        'l-wms-tile-layer': LWMSTileLayer,
    },
    data() {
        return {
            zoom: 3,
            crs: swissCrs,
            center: latLng(47.3780489, 8.5438509),

            // baseUrl: 'https://wms.zh.ch/upwms',
            baseUrl: 'https://wms.zh.ch/StaGeorefZHWMS',
            layers: [{
                // name: 'Uebersichtsplan Kanton ZH',
                name: 'Georeferenzierung',
                visible: true,
                format: 'image/png',
                layers: 'lk500,lk200,lk100,lk50,lk25,up8,up24,wild,LCSF,Bodenbedeckung,Einzelobjekte,Gebaeudeadressen,RESF,Liegenschaften',
                // layers: 'upwms',
                transparent: true,
                attribution: "Kanton Zürich"
            }],
            attribution: '',
            currentZoom: 3.5,
            currentCenter: latLng(47.3780489, 8.5438509),
            mapOptions: {
                zoomSnap: 0.5
            },
            showMap: true
        };
    },
    methods: {
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
        showLongText() {
            this.showParagraph = !this.showParagraph;
        },
        handleMapClick(event) {
            this.$emit('mapclick', event.latlng);

        }
    }
};
</script>
