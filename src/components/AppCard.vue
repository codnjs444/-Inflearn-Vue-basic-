<template>
  <div class="card">
    <div class="card-body">
      <!-- {{$props}} -->
      <span class="badge text-bg-secondary">{{ typeName }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p :class="$style.red">{{ contents }}</p>
      <a href="#"  class="btn" @click="toggleLike" :class="isLikeClass">좋아요</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue'

const emit = defineEmits(['toggleLike'])
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
    // required: true
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
  // console.log(props)
  return props.isLike ? 'btn-danger' : 'btn-outline-danger'
})

const typeName = computed(() => props.type === 'news' ? '뉴스' : '공지사항',)

const toggleLike = () => {
  console.log('이벤트 발생됨');
  emit('toggleLike');
}
</script>

<style module>
.red {
  color: red !important;
}
</style>
