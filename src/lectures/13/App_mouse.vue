<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 영역
        <p @click="clickP">
          P 영역
          <span @click.stop="clickSpan">
            SPAN 영역
          </span>
              <!-- <a @click.prevent.stop = "clickA" href="https://naver.com">a영역</a> -->
              <a @click.prevent.stop = "clickA" href="https://naver.com">a영역</a>
        </p>
      </div>
    </div>
    <a @click.prevent = "clickA" href="https://naver.com">a영역</a>
  </div>
</template>

<script setup>
const clickDiv = () => {
  console.log('clickDiv')
  location.href = "https://naver.com"
}

const clickP = () => {
  console.log('clickP')
}

const clickSpan = (e) => {
  console.log('clickSpan')
  alert('좋아요')
}

const clickA = () => {
  alert('어떤 기능')
}

</script>

<style lang="scss" scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px
}

#modifiers div {
  background-color: #ccc;
}
#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block
}
</style>