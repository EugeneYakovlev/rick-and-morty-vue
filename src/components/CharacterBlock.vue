<template>
    <div class="characterBlock" @click="detailedInfo()">
        <div class="characterBlockImage">
            <img :src="character.image" :alt="character.name">
        </div>
        <div class="characterBlockInfo">
            <span class="characterName">
            {{ character.name }}
            </span>
            <span>
                {{ character.status }} - {{character.species}}
            </span>
            <span>
                Last known location: {{ character.location.name }}
            </span>
        </div>
    </div>
</template>


<script>
    export default {
        name: "CharacterBlock",
        props: {
            character: {
                type: Object,
                required: true
            }
        },
        methods: {
            detailedInfo() {
                this.$router.push({name: 'CharacterDetails', params: {id: this.character.id} })
            }
        }
    }
</script>

<style scoped>

</style>