<script setup>
import {ref} from 'vue';

const title = ref('world');
const valueModel = ref('SouthKorea');
const numberModel = ref('2');
const message = ref("여러 줄을 입력할 수 있는 textarea 입니다.")
const city = ref("02");
const checked = ref('true');
const checked2 = ref([]);
const radioValue1 = ref('서울');
const radioValue2 = ref('부산');
const radioValue3 = ref('제주');
const picked = ref('');


</script>

<template>
<h1>Hello, {{title}}</h1>
  <div>
    <input type ="text" v-model="valueModel"/>
  </div>
  <div>
    <input type ="text" v-model.number="numberModel"/>
  </div>
  <div>
    <textarea v-model="message"></textarea>
  </div>
  <!-- select 객체에서 v-model은 내부적으로 select의 value 속성을 사용해서 양방향 데이터 바인딩을 함 -->
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
  <!-- 체크박스의 경우는 v-model은 내부적으로 checked 속성을 사용함 -->
  <!-- 그래서 value 속성에 접근하고 싶으면 v-bind:value를 이용해야 함-->
  <div>
    <label><input type ="checkbox" v-model="checked">{{checked}}</label>
  </div>
  <!-- 여러 개의 체크박스를 사용 시 -->
  <div>
    <label><input type="checkbox" value="서울" v-model="checked2">서울 </label>
    <label><input type="checkbox" value="부산" v-model="checked2">부산 </label>
    <label><input type="checkbox" value="제주" v-model="checked2">제주 </label>
    <br>
    <span>체크한 지역: {{checked2}}</span>
  </div>
  <!-- radio스의 경우는 v-model은 내부적으로 checked 속성을 사용함 -->
  <!-- 그래서 value 속성에 접근하고 싶으면 v-bind:value를 이용해야 함-->
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked">부산</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked">제주</label>
  </div>

</template>

<style scoped>

</style>