<template>
    <div> 
        <div v-if="!infos">Loading Please wait...</div>
        <div v-else>
            <span v-html="infos"></span>
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
    }},

   beforeMount () {
     this.getInfos();
   }, 
    methods: {
    getInfos() {
        console.log("infos");
      const config = {
        params: {
            infoQuery: '{"queryTopics":[{"level":"main","topic":"AwelLHKlimaanalyseZH","divCls":"legmain","layers":"nacht-waermeinseleffekt,lk200,grenzen,gemeindegrenzen"}]}',
           scale: "159999.99999995314",
          srid: 2056,
          bbox: "2694038.7798523,1258708.2159643,2694038.7798523,1258708.2159643"
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
//           

</script>