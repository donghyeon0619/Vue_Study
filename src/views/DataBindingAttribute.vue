<script setup>
import {reactive, ref} from "vue";

const imgSrc = ref("https://kr.vuejs.org/images/logo.png")
const isActive = ref(true);

// const hasError = ref("false"); <-이렇게 하면 true 값으로 인식하게 됨
const hasError = ref(false);
// 객체나 배열등 복합 자료형을 만질 때 사용
const styleObject = reactive({color: 'red', fontSize:'20px'})


</script>

<template>
<!-- img 부분-->
<div>
  <img :src="imgSrc" width="200px" height="200px"/>
</div>
<!-- 클래스 바인딩 부분 -->
<!-- 클래스 바인딩의 경우 오브젝트 형태로 사용하며, 바인딩할 클래스를 key로 잡고 바인딩 여부를 true/false로 지정 -->
  <div class="container" :class="{'active': isActive, 'text-red':hasError}">Class Binding</div>
<!-- 인라인 스타일도 마찬가지로 v-bind 이용-->
  <div :style="styleObject">인라인 스타일 바인딩</div>


</template>

<style scoped>
.container {
  width: 200px;
  height: 50px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red{
  color: red;
}

</style>