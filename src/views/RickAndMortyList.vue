<template>
    <div class="home">
        <div class="h2">Rick and morty characters</div>
        <div class="charactersList">
            <character-block
                    v-for="character in characters"
                    :key="character.id"
                    :character="character"
            ></character-block>
        </div>


        <paginate
                v-model="currentPage"
                :page-count="pages"
                :page-range="3"
                :margin-pages="2"
                :click-handler="clickCallback"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'">
        </paginate>
    </div>
</template>

<script>
    import CharacterBlock from "../components/CharacterBlock";
    import Paginate from 'vuejs-paginate'

    export default {
        name: 'RickAndMortyList',
        components: {
            CharacterBlock,
            Paginate
        },
        data() {
            return {
                currentPage: 1,
            }
        },
        created() {
            this.$store.dispatch('fetchCharacters', this.currentPage);
        },
        computed: {
            characters() {
                return this.$store.getters['getCharacterByPage'](this.currentPage);
            },
            pages() {
                return this.$store.state.pages;
            },
        },
        watch: {
            currentPage: {
                handler(page) {
                    this.$store.dispatch('fetchCharacters', page);
                },
                immediate: true
            }
        },
        methods: {
            clickCallback (pageNum) {
                console.log({pageNum})
            }
        }
    }
</script>
