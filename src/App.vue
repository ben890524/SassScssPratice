<template>
  <choice-bar-vue />
  <router-view />
</template>
<script setup lang="ts">
import ChoiceBarVue from '@/components/ChoiceBar.vue';
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  padding: 0;
  margin: 0;
}

body {
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #dadada;
  width: 100%;
  height: 100vh;
  padding: 10px;
}
</style>
