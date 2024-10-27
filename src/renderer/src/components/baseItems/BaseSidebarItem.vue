<template>
  <div class="item" :class="{ active: isActive }" @click="handleClick">
    <div class="icon">
      <component :is="props.icon" :style="itemStyle"></component>
    </div>
    <div class="text">{{ props.text }}</div>
  </div>
</template>

<script setup lang="ts">
// import { HomeFilled, Plus } from '@element-plus/icons-vue'

import { ref } from 'vue'

const props = defineProps<{ icon: string; text: string }>()
const emit = defineEmits(['click'])

const itemStyle = 'width: 20px; height: 20px; margin-right: 8px'

const isActive = ref(false)
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

.item.active {
  background-color: #2861c2;
}

.icon {
  color: #524e4e;
  position: absolute;
  left: 8px;
}

.icon.active {
  color: white;
}

.text {
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 16px;
  color: #524e4e;

  position: absolute;
  left: 40px;
}

.text.active {
  color: white;
}
</style>
