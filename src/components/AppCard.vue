<template>
  <div class="card">
    <div class="card-body">
      <span class="badge text-bg-secondary">{{ type === 'news' ? '뉴스' : '공지사항' }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p :class="$style.red">{{ contents }}</p>
      <a href="#" :class="isLikeClass">좋아요</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'news',
    validator: value => ['news', 'notice'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  },
  isLike: {
    type: Boolean,
    default: false
  },
  obj: {
    type: Object,
    default: () => ({})
  }
})

const isLikeClass = computed(() => {
  console.log(props)
  return props.isLike ? 'btn-danger mt-12' : 'btn-outline-danger'
})
</script>

<style module>
.red {
  color: red !important;
}
</style>
