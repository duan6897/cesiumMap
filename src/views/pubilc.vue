<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as Cesium from 'cesium';
const viewer = ref();
const scene = ref();
const initView = ()=>{
   viewer.value = new Cesium.Viewer('cesiumContainer',{
      infoBox: false, // 禁用沙箱，解决控制台报错
      terrainProvider: Cesium.createWorldTerrain(),
  });
  viewer.value.scene.globe.depthTestAgainstTerrain = true;
  viewer.value.extend(Cesium.viewerCesium3DTilesInspectorMixin);
  scene.value = viewer.value.scene;
  const tileset = new Cesium.Cesium3DTileset({
  url: Cesium.IonResource.fromAssetId(75343),
  enableDebugWireframe: true,
});
viewer.value.scene.primitives.add(tileset);

tileset.readyPromise.then(function () {
  viewer.value.zoomTo(
    tileset,
    new Cesium.HeadingPitchRange(
      0.0,
      -0.5,
      tileset.boundingSphere.radius / 4.0
    )
  );
});
  console.log('viewer',viewer)
  console.log('scene',scene)
}
onMounted(()=>{
  initView();
})
</script>
<template>
     <div id="cesiumContainer"></div>

</template>
<style scoped>
#cesiumContainer{
  width:100vw;
  height: 100vh;
}
</style>