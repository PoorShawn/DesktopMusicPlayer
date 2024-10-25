<template>
  <div class="container">
    <div class="refresh-icon"></div>
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

.refresh-icon {
  width: 8px;
  height: 8px;
  border: 2px solid #7f7c7c;
  border-right-color: transparent;
  border-radius: 50%;
  position: relative;
}

.refresh-icon::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 100%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #7f7c7c;
}

/* @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  } */
</style>
