<template>
    <div>
        <div class="col-md-6">
            <b-input type="text" id="topicsSearch" class="form-control" @keyup="cardFilterFunction('theTopics', 'topicsSearch')" placeholder="Filter results ..." />
        </div>
    
        <div v-if="!topics">Loading Please wait...</div>
        <div v-else id="theTopics">
            <div v-for="topic in topics" :key="topic.name">
                <b-card :title="topic.title" :sub-title="topic.categorytitle" :img-src="makeImg(topic.name)" img-alt="Image" img-right img-height=41 img-width=51 tag="article" style="max-width: 20rem;" class="mb-2" body-class="myCard">
                    <b-card-text style="font-style:italic; font-size: 12px">
                        {{topic.organisationtitle}}
                    </b-card-text>
                    <span style="display:none">{{ topic.keywords }}</span>
                    <!-- <b-button href="#" size="sm" variant="primary">i</b-button> -->
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    name: 'TopicsList',
    data() {
        return {
            topics: [],
        }
    },

    beforeMount() {
        this.getTopics();
    },

    methods: {
        getTopics() {
            console.log("ich hole Topics");
            const config = {
                params: {
                    gbapp: 'default'
                },
            };
            axios
                .get(`https://maps.zh.ch/topics.json`, config)
                .then((response) => {
                    this.topics = response.data.gbtopics
                })
                .catch((error) => {
                    console.log(`ERROR: ${error}`);
                });
        },

        makeImg(tname) {
            return "https://maps.zh.ch/images/custom/themekl-" + tname.toLowerCase() + ".gif";
        },

        cardFilterFunction(elem, elemfilter) {
            let i;
            let content;
            const input = document.getElementById(elemfilter);
            const filter = input.value.toUpperCase();
            const cardContainer = document.getElementById(elem);
            const cards = cardContainer.getElementsByClassName('card');
            for (i = 0; i < cards.length; i += 1) {
                content = cards[i].innerText;
                if (content.toUpperCase().indexOf(filter) > -1) {
                    cards[i].style.display = '';
                } else {
                    cards[i].style.display = 'none';
                }
            }
        }
    }
}
</script>

<style scoped>
.card-body {
    padding: 10px 3px 3px 3px;
}

.card-title {
    font-size: 18px;
}

.card-subtitle {
    font-size: 14px;
}
</style>