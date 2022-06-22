<template>
  <div class="choice">
    <div class="choiceLeftBar"></div>
    <div class="choiceTab" :class="{ active: currentTabName === 'css' }" @click="routeToCss()">
      <span>Css</span>
    </div>
    <div class="choiceTab" :class="{ active: currentTabName === 'scss' }" @click="routeToScss()">
      <span>Scss</span>
    </div>
    <div class="choiceTab" :class="{ active: currentTabName === 'sass' }" @click="routeToSass()">
      <span>Sass</span>
    </div>
    <div class="choiceRightBar"></div>
    <div class="choiceDownBar"></div>
  </div>
  <div class="headerDownBar"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { router } from '../router';

const currentTabName = ref("css");
const routeToCss = () => {
  currentTabName.value = "css";
  router.push("css");
}
const routeToScss = () => {
  currentTabName.value = "scss";
  router.push("scss");
}
const routeToSass = () => {
  currentTabName.value = "sass";
  router.push("sass");
}
</script>

<style lang="scss" scoped>
.choice {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #606060;

  .choiceLeftBar {
    width: 15px;
    z-index: 5;
    border-bottom-right-radius: 4px;
    background-color: #606060;
  }

  .choiceRightBar {
    width: 15px;
    z-index: 5;
    border-bottom-left-radius: 4px;
    background-color: #606060;
  }

  .choiceTab {
    cursor: pointer;
    z-index: 5;
    width: 200px;
    height: 50px;
    background-color: #c1c1c1;
    border-radius: 4px;
    transition: .25s ease-in-out;
    color: #242424;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &:hover {
      background-color: #b9b9b9;
    }

    &.active {
      cursor: unset;
      background-color: #acacac;
    }

    span {
      padding-top: 5px;
      padding-left: 20px;
      font-size: 20px;
      letter-spacing: 0.8px;
      text-align: center;
    }
  }

  .choiceDownBar {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 625px;
    height: 5px;
    background-color: #acacac;
  }
}

.headerDownBar {
  width: 100%;
  height: 5px;
  background-color: #acacac;
  border-left: 2.5px solid #606060;
  border-right: 2.5px solid #606060;
}
</style>