<template>
  <div class="item" @click="handleClick" :class="{ active: isSelected }">
    <div class="icon" :class="{ active: isSelected }">
      <component :is="props.icon" :style="itemStyle"></component>
    </div>
    <div class="text" :class="{ active: isSelected }">{{ props.link().name }}</div>
  </div>
</template>

<script setup lang="ts">
import router from '@renderer/router/router'
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
const route = useRoute()
const currentRoutePath = computed(() => route.path)
const isSelected = computed(() => currentRoutePath.value.slice(1) === props.link().path)

const props = defineProps<{
  icon: string
  link: () => { path: string; name: string; params: NonNullable<unknown> }
}>()

const itemStyle = 'width: 20px; height: 20px; margin-right: 8px'

const handleClick = () => {
  if (currentRoutePath.value.slice(1) !== props.link().path) {
    router.push(props.link().path)
  }
}
</script>

<style scoped lang="scss">
//.active {
//  background-color: #2861c2;
//  color: white;
//}

.item {
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
