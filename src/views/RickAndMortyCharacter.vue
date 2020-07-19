<template>
    <div class="home">
        <div class="characterDetailedInfo">
            <character-info-block v-if="character" :character="character"/>
            <button class="goBack" @click="goBack()">Go back</button>
        </div>
    </div>
</template>

<script>
    import CharacterInfoBlock from "../components/CharacterInfoBlock";
    import axios from "axios";

    export default {
        name: "RickAndMortyCharacter",
        components: {
            CharacterInfoBlock
        },
        data() {
            return {
                character: null
            }
        },
        created() {
            try {
                const {id} = this.$route.params;
                if (id) {
                    axios
                        .get('https://rickandmortyapi.com/api/character/' + id)
                        .then(({data}) => {
                            this.character = data;
                        })
                        .catch(err => console.log(err));

                }
            } catch (err) {
                console.log(err);
            }
        },
        methods: {
            goBack() {
                this.$router.push({name: 'RickAndMortyList'})
            }
        }
    }
</script>

<style scoped>

</style>