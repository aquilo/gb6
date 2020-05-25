<template>
  <div>
    <div v-if="!infos">Click on the map to get infos!</div>
    <div v-else>
      <small><span v-html="infos"></span></small>
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
    name: 'infosList',
    data() {
        return {
            infos: '',
           // latLng: {lat: 1258708.2159642, lng: 2694038.7798523},

        }
    },

    props: {
        latLng: Object
    }, 

    watch: {
        latLng: function() {
            console.log(this.latLng.lat + " watch");
            this.getInfos();
        }
    },

    beforeMount() {
 //       this.getInfos();
    },

    methods: {
        getInfos() {
          console.log(this.latLng.lat + " getInfos");
             
            const config = {
                params: {
                   infoQuery: '{"queryTopics":[{"level":"main","topic":"StatBevZH","divCls":"legmain","layers":"umkreis-statistik,bev,lk25,grenzen,gemeindegrenzen,seen","customQueries":{"umkreis-statistik":"special_query"},"customParams":{"radius":-500,"variante":0,"poly":""}}]}',
                    scale: "16000",
                    srid: 4326,
                    bbox: 
                        this.latLng.lng + "," + this.latLng.lat + "," + 
                        this.latLng.lng + "," + this.latLng.lat,
                },
            };
            axios
                .get(`https://maps.zh.ch/topics/query`, config)
                .then((response) => {
                    this.infos = response.data
                })
                .catch((error) => {
                    console.log(`ERROR: ${error}`);
                });
        },
    }
}
</script>