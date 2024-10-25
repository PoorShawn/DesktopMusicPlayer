<template>
  <div class="container">
    <div class="search-icon"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  margin: 10px;
  width: 12px;
  height: 12px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.search-icon {
  width: 8px;
  height: 8px;
  border: 2px solid #7f7c7c;
  /* 圆形边框 */
  border-radius: 50%;
  /* 创建圆形 */
  position: relative;
}

.search-icon::before {
  content: '';
  width: 75%;
  height: 2px;
  /* border: 1px solid #000; */
  background-color: #7f7c7c;

  position: absolute;
  top: 90%;
  left: 90%;
  transform: rotate(45deg);
  transform-origin: 10%;
}
</style>
