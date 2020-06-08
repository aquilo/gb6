<template>
  <div>
<span v-html="legendText"></span>
  
  </div>
</template>

<script>
const axios = require('axios');
import { mapState } from 'vuex'

export default {
    name: 'GbLegend',
    data() {
        return {
            legendText: 'Select a map to show its legend!',
        }
    },
    computed: mapState([
        'currentTopic'
    ]),

    watch: {
        currentTopic: function() {
           this.getLegend();
        }
    },

    mounted() {
        this.getLegend();
    },

    methods: {
        getLegend() {            
            axios
                .get(`https://maps.zh.ch/topics/`+ this.currentTopic + `/legend`)
                .then((response) => {
                    let r = response.data
                    r = r.replace(/ src='\/im/g, " src='https://maps.zh.ch/im");
                   r = r.replace(/ src="\/im/g, ' src="https://maps.zh.ch/im');
                    this.legendText = r;
                })
                .catch((error) => {
                    console.log(`ERROR: ${error}`);
                });
        },
    }
}



</script>
<style scoped>
.legtabtext {
   color:red
}
</style>
