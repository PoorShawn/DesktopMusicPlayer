<template>
  <div class="icon" @click="handleClick">
    <LeftHistoryIcon v-if="isLeftHistory" />
    <RightHistoryIcon v-if="isRightHistory" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LeftHistoryIcon from '@renderer/components/icons/LeftHistoryIcon.vue'
import RightHistoryIcon from '@renderer/components/icons/RightHistoryIcon.vue'

const emit = defineEmits(['click'])
const props = defineProps<{ direction: string }>()

const isLeftHistory = computed(() => props.direction === 'left')
const isRightHistory = computed(() => props.direction === 'right')

const handleClick = () => {
  emit('click')
}
</script>

<style scoped lang="scss">
.icon {
  cursor: pointer;
}
</style>
