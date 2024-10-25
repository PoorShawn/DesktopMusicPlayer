<template>
  <LeftHistoryIcon v-if="isLeftHistory" />
  <RightHistoryIcon v-if="isRightHistory" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LeftHistoryIcon from '@renderer/components/icons/LeftHistoryIcon.vue'
import RightHistoryIcon from '@renderer/components/icons/RightHistoryIcon.vue'

const props = defineProps<{ direction: string }>()

const isLeftHistory = computed(() => props.direction === 'left')
const isRightHistory = computed(() => props.direction === 'right')
</script>

<style scoped lang="scss">

</style>
