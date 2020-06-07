<template>
    <div>
        <b-form-input type="search" v-model="suche" @change="getAddresses" placeholder="Adresse ...">
        </b-form-input>
        <div v-if="adressen !== ''">
            <br><h6>Gefundene Adressen:</h6>
            <div v-for="adresse in adressen" :key="adresse.box2d">
                <small> {{ adresse.strassenname }} {{ adresse.hausnummer }}, <b>{{ adresse.plz }} {{ adresse.ortschaftsname }}</b></small>
            </div>
        </div>    
    </div>
</template>

<script>
const axios = require('axios');

export default {
    name: 'AddrSearch',
    data() {
        return {
            adressen: '',
            suche: '',
        }
    },

    methods: {
        getAddresses() {
            axios
                .get('https://maps.zh.ch/search/adresszh.json?adr=' + this.suche + '%3A*&kt=ZH&srid=2056&limit=25')
                .then((response) => {
                    this.adressen = response.data.features
                })
                .catch((error) => {
                    console.log(`ERROR: ${error}`);
                });
        },
    }
}
</script>
