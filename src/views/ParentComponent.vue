<script setup>
import ChildComponent from "@/views/ChildComponent.vue";
import {onMounted, ref} from "vue";

const childComponent = ref(null);

onMounted(() => {
  childComponent.value.childFunc()
})

</script>

<template>
  <ChildComponent ref="childComponent"></ChildComponent>
</template>

<style scoped>

</style>