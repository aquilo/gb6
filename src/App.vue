<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="jumbotron">
            <GbMap v-on:mapclick="doMapClick" />
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template v-slot:button-content>
                &#x2261;<span class="sr-only">/Search</span>
              </template>
              <b-dropdown-item>/Print</b-dropdown-item>
              <b-dropdown-item>/Teilen</b-dropdown-item>
              <b-dropdown-item>/Download</b-dropdown-item>
              <b-dropdown-item>/Messen</b-dropdown-item>
              <b-dropdown-item>/Zeichnen</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item active>/About</b-dropdown-item>
              <b-dropdown-item disabled
                >(Bsp. nicht aktives Item)</b-dropdown-item
              >
            </b-dropdown>
          </div>
          <div class="col-md-6">
            <input
              type="text"
              id="myAllSearch"
              class="form-control"
              placeholder="/Suche nach Adressen, Themen etc. ..."
            />
          </div>
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="Karten" active>
                <TopicsList /></b-tab>
              <b-tab title="Infos">
                <InfoTab v-bind:latLng="latLng">></InfoTab></b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import GbMap from './components/GbMap.vue';
import TopicsList from './components/TopicsList.vue';
import InfoTab from './components/InfoTab.vue';

export default {
    name: 'App',
    components: {
        GbMap,
        TopicsList,
        InfoTab,
    },
    data () {
      return {
          latLng: {
            lat: 47.37,
            lng: 8.53
          }
      }
    },
    methods: {
      doMapClick(wo) {
        console.log(wo);
        this.latLng = wo;
      }
    }
 }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
