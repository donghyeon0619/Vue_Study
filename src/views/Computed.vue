<script setup>
import {computed, ref} from "vue";

const firstName = ref('DongHyeon');
const lastName = ref('Yoon');

const fullName = computed(() =>
    firstName.value + ' ' + lastName.value);

</script>
<!--computed와 watch는 데이터의 변화를 감지하는 역할을 하지만 그것들에 차이가 있다는 것을 알고 있어야 함 -->
<template>
<h1>Full name: {{fullName}}</h1>
</template>

<style scoped>

</style>