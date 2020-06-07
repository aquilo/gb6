import Vuex from 'vuex'
import Vue from 'vue'
//const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentTopic: 'BASISKARTEZH'
    },

    getters: {
    },

    mutations: {//
        SET_CURRENT_TOPIC(state, topic) {
            state.currentTopic = topic;
        },
    },

    actions: {
    }
});