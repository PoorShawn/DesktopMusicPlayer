<template>
  <div class="item" @click="handleClick">
    <div class="icon" :class="{ active: props.isActive }">
      <component :is="props.icon" :style="itemStyle"></component>
    </div>
    <div class="text" :class="{ active: props.isActive }">{{ props.text }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ icon: string; text: string; isActive: boolean }>()
const emit = defineEmits(['click'])

const itemStyle = 'width: 20px; height: 20px; margin-right: 8px'

const handleClick = () => {
  emit('click', props.text)
}
</script>

<style scoped lang="scss">
//.active {
//  background-color: #2861c2;
//  color: white;
//}

.item {
  /* test */
  /* border: 1px solid green; */

  border: 24px solid transparent;
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

.item:hover {
  background-color: #d1cdcd;
}

.item.active {
  background-color: #2861c2;
}

.icon {
  color: #524e4e;
  position: absolute;
  left: 8px;
}

.icon.active {
  color: #f6f4f4;
}

.text {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 48px;
  width: 150px;
  font-weight: 600;
  font-size: 16px;
  color: #524e4e;

  position: absolute;
  left: 50px;
}

.text.active {
  color: #f6f4f4;
}
</style>
