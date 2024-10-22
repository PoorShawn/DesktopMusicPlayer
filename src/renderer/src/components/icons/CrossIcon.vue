<template>
  <div class="cross" @click="handleClick"></div>
</template>

<script setup lang="ts">

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<style scoped lang="scss">
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
  background-color: rgb(125, 125, 129);
  cursor: pointer;
}

.cross::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.cross::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.cross.active::before,
.cross.active::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 2px;
  background-color: white;
  cursor: pointer;
}

//.cross {
//  position: relative;
//  width: 20px;
//  height: 20px;
//}
//
//.cross::before,
//.cross::after {
//  content: '';
//  position: absolute;
//  top: 50%;
//  left: 50%;
//  width: 60%;
//  height: 2px;
//  background-color: white;
//  cursor: pointer;
//}
//
//.cross::before {
//  transform: translate(-50%, -50%) rotate(45deg);
//}
//
//.cross::after {
//  transform: translate(-50%, -50%) rotate(-45deg);
//}
</style>
