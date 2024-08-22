<script setup>
const props = defineProps({
  title:{
    type: String,
    default: "페이지 제목입니다."
  }
})
</script>

<template>
<h2>{{title}}</h2>
</template>

<style scoped>

</style>