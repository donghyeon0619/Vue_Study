<script setup>
import {ref} from "vue";

const counter = ref(0);
const selectedValue = ref('');

function changeSelect() {
  alert(selectedValue.value);
}
function increaseCounter(){
  counter.value += 1;
}
</script>

<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The Counter is: {{counter}}</p>
  </div>

  <select v-model="selectedValue" @change="changeSelect">
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="제주">제주</option>
  </select>
</template>

<style scoped>

</style>