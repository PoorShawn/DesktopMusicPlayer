<template>
  <div class="container">
    <button>
      <slot></slot>
    </button>
    <div class="cross"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  margin: 5px;
  padding: 8px;
  /* border: 2px solid black; */
  background-color: #4048b4;
  border-radius: 28px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.cross {
  position: relative;
  width: 20px;
  height: 20px;
}

.cross::before,
.cross::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 2px;
  background-color: white;
  cursor: pointer;
}

.cross::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.cross::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

button {
  background-color: #4048b4;
  border: none;
  color: aliceblue;
  cursor: pointer;
}
</style>
