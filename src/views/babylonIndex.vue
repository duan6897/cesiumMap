<script lang="ts" setup>
import {  initScene} from "@/utils/commonModel"
import {onMounted,ref  } from 'vue'
const bjsCanvas = ref();
const createScene = ()=>{
  initScene(bjsCanvas.value)
};
onMounted(()=>{
  createScene()
})
</script>
<template>
  <div class="package-content">
  <canvas class="canvas-content" ref="bjsCanvas"></canvas>
  </div>
</template>
<style lang="scss" scoped>
.package-content{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .canvas-content{
    width: 100%;
    height: 100%;
  }
}
</style>