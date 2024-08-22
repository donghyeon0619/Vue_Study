<script setup>
import PageTtitle from "@/components/PageTtitle.vue";
import {ref} from "vue";

const title = ref('동적 페이지 타이틀')
</script>
<!-- 이것들 말고도 숫자형, 논리 자료형, 배열등이 문자열로 전달되지 않으려면 v-bind의 약어인 :문자를 사용해야 함 -->
<template>
<div>
  <PageTtitle :title="title"></PageTtitle>
</div>
</template>

<style scoped>

</style>