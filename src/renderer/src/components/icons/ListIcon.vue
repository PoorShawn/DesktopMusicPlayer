<template>
  <div class="container">
    <div class="list-item"></div>
    <div class="list-item"></div>
    <div class="list-item"></div>
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.list-item {
  width: 8px;
  height: 2px;
  background-color: #7f7c7c;
  position: relative;
}

.list-item::before {
  content: '';
  position: absolute;
  left: -50%;
  top: 50%;
  transform: translate(0, -50%);
  width: 2px;
  height: 2px;
  background-color: #7f7c7c;
  border-radius: 50%;
}
</style>
