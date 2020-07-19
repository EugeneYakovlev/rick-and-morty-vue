<template>
    <div class="characterBlock" @click="detailedInfo()">
        <div class="characterBlockImage">
            <img :src="character.image" :alt="character.name">
        </div>
        <div class="characterBlockInfo">
            <div class="characterName">
                {{ character.name }}
            </div>
            <div>
                <div class="label">Gender:</div>
                <span class="characterLocation">{{ character.gender }}</span>
            </div>
            <div>
                <span class="characterStatus"
                      :class="[character.status === 'Alive' ? 'alive' : 'dead', character.status === 'unknown' ? 'unknown' : '']">{{ character.status }}</span>
                <span>- {{character.species}}</span>
            </div>
            <div>
                <div class="label">Type:</div>
                <span class="characterLocation">{{ character.type }}</span>
            </div>
            <div>
                <div class="label">Origin:</div>
                <span class="characterLocation">{{ character.origin.name }}</span>
            </div>
            <div>
                <div class="label">Last known location:</div>
                <span class="characterLocation">{{ character.location.name }}</span>
            </div>
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
                this.$router.push({name: 'CharacterDetails', params: {id: this.character.id}})
            }
        }
    }
</script>

<style scoped>

</style>