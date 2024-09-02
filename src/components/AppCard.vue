<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title ">Card title</h5>
      <p :class="$style.red">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script setup>
console.log('Card.setup;')
</script>

<style module>
  .red {
    color: red !important
  }
</style>

<!--
<style scoped>
.red {
  color: red !important
}
</style>
-->