<script setup>
import {ref} from "vue";

const htmlString = ref('<p style="color:red;">this is a red string</p>')
</script>

<template>
  <div>{{htmlString}}</div>
  <div v-html="htmlString"></div>
</template>

<style scoped>

</style>