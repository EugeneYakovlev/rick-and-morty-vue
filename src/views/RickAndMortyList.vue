<template>
    <div class="home">
        <div class="header">
            <img src="../assets/images/header.png">
        </div>
        <div class="charactersList">
            <character-block
                    v-for="character in characters"
                    :key="character.id"
                    :character="character"
            ></character-block>
        </div>
        <paginate
                v-model="currentPage"
                :page-count="pagesCount"
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
    import axios from "axios";

    export default {
        name: 'RickAndMortyList',
        components: {
            CharacterBlock,
            Paginate
        },
        data() {
            return {
                characters: null,
                currentPage: 1,
                pagesCount: 0
            }
        },
        watch: {
            currentPage: {
                handler(page) {
                    axios
                        .get('https://rickandmortyapi.com/api/character/?page=' + page)
                        .then(({data}) => {
                            this.pagesCount = data.info.pages;
                            this.characters = data.results;
                        })
                        .catch(err => console.log(err));
                },
                immediate: true
            }
        },
        methods: {
            clickCallback(pageNum) {
                console.log({pageNum})
            },
        }
    }
</script>
