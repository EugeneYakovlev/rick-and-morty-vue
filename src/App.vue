<template>
    <div id="app">
        <div class="wrapper">
            <router-view/>
            <div id="space">
                <div class="stars"></div>
                <div class="stars"></div>
                <div class="stars"></div>
                <div class="stars"></div>
                <div class="stars"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
