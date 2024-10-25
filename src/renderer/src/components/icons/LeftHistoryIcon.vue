<template>
  <div class="container">
    <div class="history-left"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  margin: 10px;
  width: 10px;
  height: 10px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
}

.history-left {
  width: 100%;
  height: 2px;
  position: relative;
  background-color: #7f7c7c;
}

.history-left::after {
  content: '';
  width: 70%;
  height: 2px;
  background-color: #7f7c7c;

  position: absolute;
  transform: translate(-50%, -50%) rotate(-45deg);
  transform-origin: 40% 0%;
}

.history-left::before {
  content: '';
  width: 70%;
  height: 2px;
  background-color: #7f7c7c;

  position: absolute;
  transform: translate(-50%, 50%) rotate(45deg);
  transform-origin: 40% 100%;
}
</style>
